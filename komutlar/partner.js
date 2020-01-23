let rolid = "669933748955119635"; // BURAYA KULLANICININ TÜM ROLLERİ ALINDIKTAN SONRA VERİLECEK ROLÜN İDSİNİ YAZIN YAZMAZSANIZ TÜM ROLLERİ ALIR SADECE. 

exports.run = (client, message, args) => {
let user = message.mentions.users.first();
user.addRole(rolid);    
message.channel.send(`sa`);
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["hapset"],
    permLevel: 0
};

exports.help = {
    name: "partner-ver",
    description: 'Birini jaillersiniz.',
    usage: 'jail <kullanıcı>'
};
 