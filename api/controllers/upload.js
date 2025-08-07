export const uploadFile = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    console.log("Uploaded file:", req.file);
    res.status(200).json({ url: "/upload/" + req.file.filename });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
