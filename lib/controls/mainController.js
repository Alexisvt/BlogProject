module.exports = {
  registerRoutes : function(server){

    server.get("/", this.home);
  },

  home : function (req,res){
    res.render("index");
  },
};
