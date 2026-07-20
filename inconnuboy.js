var commands = [];

function cmd(info, func) {
    var data = info;
    data.function = func;
    
    // Auto set pattern from cmdname if missing
    if (!data.pattern && data.cmdname) data.pattern = data.cmdname;
    
    // Defaults
    if (!data.alias) data.alias = [];
    if (!data.dontAddCommandList) data.dontAddCommandList = false;
    if (!data.desc) data.desc = '';
    if (!data.fromMe) data.fromMe = false;
    if (!data.category) data.category = 'misc';
    if (!data.react) data.react = ''; // FIX 1: add react support
    if (!data.on) data.on = 'body'; // FIX 2: for body/text/image/sticker events
    
    commands.push(data);
    return data;
}

module.exports = {
    cmd,
    AddCommand: cmd,
    Function: cmd,
    commands,
};
