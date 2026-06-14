require("dotenv").config();
const Application = require("./Models/Application");
const resend = require ("./Models/Resend");
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const { Readable } = require("stream");

const app = express();

app.use(cors());

app.use(express.json());

/* ---------------------------------------
        Multer Configuration
--------------------------------------- */

const storage = multer.memoryStorage();

const upload = multer({

    storage,

    limits: {

        fileSize: 5 * 1024 * 1024

    }

});

/* ---------------------------------------
        MongoDB Connection
--------------------------------------- */

let bucket = null;

mongoose.connect(process.env.MONGO_URI)

.then(() => {

    console.log("✅ MongoDB Connected");

})

.catch((err) => {

    console.log(err);

});

/* ---------------------------------------
        GridFS Initialization
--------------------------------------- */

mongoose.connection.once("open", () => {

    bucket = new mongoose.mongo.GridFSBucket(

        mongoose.connection.db,

        {

            bucketName: "resumes"

        }

    );

    console.log("✅ GridFS Ready");

    console.log("Connected Database:");

    console.log(mongoose.connection.name);

});

/* ---------------------------------------
        Health Route
--------------------------------------- */

app.get("/", (req, res) => {

    res.json({

        success: true,

        message: "Backend Running Successfully"

    });

});

/* ---------------------------------------
        Server
--------------------------------------- */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`🚀 Server Running On Port ${PORT}`);

});

app.post(
    "/api/apply",
    upload.single("resume"),
    async (req, res) => {

        try {

            if (!bucket) {

                return res.status(500).json({
                    success: false,
                    message: "GridFS not initialized."
                });

            }

            if (!req.file) {

                return res.status(400).json({
                    success: false,
                    message: "Resume not found."
                });

            }

            console.log("Uploading:", req.file.originalname);

            const readable = Readable.from(req.file.buffer);

            const uploadStream = bucket.openUploadStream(
                req.file.originalname,
                {
                    contentType: req.file.mimetype
                }
            );

            readable.pipe(uploadStream);

            uploadStream.on("error", (err) => {

                console.error(err);

                return res.status(500).json({
                    success: false,
                    message: "Resume upload failed."
                });

            });

            uploadStream.on("finish", async () => {

                try {

                    console.log("Upload Complete");
                    console.log("File ID:", uploadStream.id);

                    const application = new Application({

                        name: req.body.name.trim(),

                        phone: req.body.phone.trim(),

                        email: req.body.email.trim().toLowerCase(),

                        college: req.body.college.trim(),

                        course: req.body.course.trim(),

                        internship: req.body.internship.trim(),

                        github: req.body.github
                            ? req.body.github.trim()
                            : "",

                        message: req.body.message.trim(),

                        resume: {

                            fileId: uploadStream.id,

                            originalName: req.file.originalname,

                            contentType: req.file.mimetype

                        },

                        status: "Pending"

                    });

                    await application.save();

                    console.log("Application Saved Successfully");
                    try {

    // Email to Applicant

    await resend.emails.send({

        from: "Horyzen <onboarding@resend.dev>",

        to: req.body.email,

        subject: "Application Received | Horyzen Technologies",

        html: `
            <h2>Hello ${req.body.name},</h2>

            <p>
                Thank you for applying for the
                <strong>${req.body.internship}</strong>
                Internship.
            </p>

            <p>
                We have successfully received your application.
            </p>

            <br>

            <p>
                Regards,<br>
                <strong>HORYZEN TECHNOLOGIES</strong>
            </p>
        `
    });

    // Email to Company

  const  adminemail= await resend.emails.send({

        from: "Horyzen <onboarding@resend.dev>",

        to: "horyzentechnologies@gmail.com",

        subject: "New Internship Application",

        html: `

            <h2>New Application Received</h2>

            <table>

                <tr>
                    <td><strong>Name</strong></td>
                    <td>${req.body.name}</td>
                </tr>

                <tr>
                    <td><strong>Email</strong></td>
                    <td>${req.body.email}</td>
                </tr>

                <tr>
                    <td><strong>Phone</strong></td>
                    <td>${req.body.phone}</td>
                </tr>

                <tr>
                    <td><strong>College</strong></td>
                    <td>${req.body.college}</td>
                </tr>

                <tr>
                    <td><strong>Internship</strong></td>
                    <td>${req.body.internship}</td>
                </tr>

            </table>

                `
            });
            console.log("Error:",adminemail);

        }
        catch(err){

            console.log("Email Error");

            console.log(err);

        }

                    return res.status(201).json({

                        success: true,

                        message: "Application Submitted Successfully",

                        applicationId: application._id,

                        fileId: uploadStream.id

                    });

                }

                catch (error) {

                    console.error(error);

                    return res.status(500).json({

                        success: false,

                        message: "Application could not be saved."

                    });

                }

            });

        }

        catch (err) {

            console.error(err);

            return res.status(500).json({

                success: false,

                message: "Internal Server Error"

            });

        }

    }
);
