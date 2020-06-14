const Habit = require('../models/habit');

// Home screen module 
module.exports.home= function(req,res){
    Habit.find({},function(err,habits){
        if(err){
            console.log('Error in fetching contacts from db');
            return;

        }
        return res.render('home', 
        {
            habitList: habits
        });
    });
   
}
 
// Add habit Module

module.exports.addHabit = function(req,res){  
    
    Habit.create({
            name: req.body.name,
            days: ['None','None','None','None','None','None','None'],
            completed: 0,
            streak: 0
        }, function(err,newTask){
            if(err){
                console.log('error in creating a contact');
                return;
            }

       return res.redirect('back');
    });
    
}


module.exports.deleteHabit = function(req,res){  
    
    Habit.findByIdAndDelete(req.params.id,function(err,contacts){
        if(err){
            console.log('Error in deleting object from  db');
             return;

        }
    });
    res.redirect('/');
}







