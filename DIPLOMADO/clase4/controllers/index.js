const { response } = require('express')
const dirnamePage = require('../public/index.js')

const principalGet = async (req, res = response) => {
  try {
    //console.log(process);
    res.sendFile(`${dirnamePage}/index.html`, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send({
          error: err.message,
          success: false,
        });
      }
    });
    return;
  } catch (error) {
    res.status(500).send({
      error,
      message: "Ha ocurrido un error en el servidor",
      success: false,
    });
  }
};

module.exports = {
  principalGet
}