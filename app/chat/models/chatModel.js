// connection apache casendra
const cassandra   	= require('cassandra-driver');
/** connect DB ****/ 


var chat={
	returnDialogObj:function(params, callback){
		// var dialogJid = QB.chat.helpers.getRoomJidFromDialogId(params.dialogId);
		// var jid = QB.chat.helpers.getRoomJidFromRoomFullJid(params.dialogId)
		// console.log('dialogJid',dialogJid);
		// console.log('jid',jid); 
		callback('succ');
	},
}



module.exports=chat