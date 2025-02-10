
exports.createNav = async (req, res) => {
    let data = await req.body; 
    res.status(200).json(data);
  };
  
