const Notification = require('../models/notification');

async function addNotification(req, res){
    try{

        let {to, from, payload} = req.body;

        let emailResponse = true;
        if(emailResponse){
            const notification = new Notification({
                to,
                from,
                payload,
                status: 'sent'
            })
            await notification.save();
            return res.status(200).json({'message': 'email sent'})

        } else {
            const notification = new Notification({
                to,
                from,
                payload,
                status: 'failed'
            })
            await notification.save();
            return res.status(400).json({'message': 'email failed'})
        }
    } catch(error){
        return res.status(500).json({error: "internal server error"});
    }
}

async function getNotficationById(req,res){
    try {
        const notification = await Notification.find({_id:req.params.id});
        if(!notification){
            return res.status(400).json({'message': 'record not found', data: {}})
        }
        return res.status(400).json({'message': 'success', data: notification})
        
    } catch (error) {
        return res.status(500).json({error: "internal server error"});
    }
}

async function updateNotficationById(req,res){
    try {
        const payload = req.body;
        const notification = await Notification.find({_id:req.params.id});
        if(!notification){
            return res.status(400).json({'message': 'record not found', data: {}})
        }
        const doc = await Notification.findOneAndUpdate({_id:req.params.id}, payload, {new:true})
        return res.status(400).json({'message': 'success', data: doc})
    } catch (error) {
        return res.status(500).json({error: "internal server error"});
    }
}

module.exports ={
    addNotification,
    getNotficationById,
    updateNotficationById,
}