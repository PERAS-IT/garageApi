const cloudinary = require("../config/cloudinary");

exports.upload = async (path) => {
  const { secure_url } = await cloudinary.uploader.upload(path, {
    use_filename: true,
  });
  return secure_url;
};

// exports.destroy = async (path) => {
//   const result = await cloudinary.uploader.destroy(path);
//   return result;
// };
