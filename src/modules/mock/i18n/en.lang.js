module.exports = {
    moduleName : 'Mock',
    name : 'Name',
    nameDefault : 'Unnamed Mock',
    type : 'Type',
    operations : 'Operations',
    setting : 'Setting',
    stopConfirm : 'Mock is running, are you sure to stop it ?',
    start : 'Start',
    stop : 'Stop',
    mockDeleteConfirm : 'Are you sure to delete this mock ?',
    mockerSetting : 'Mocker Setting',
    mockers : {
        serialport : require('../mockers/serialport/i18n/zh.lang.js'),
    },
    response : {
        match : {
            columnStatus : 'Status',
            columnName : 'Name',
            columnMatch : 'Match',
            columnResponse : 'Response',
            regexEnable : 'Regex Pattern',
            matcherAll : 'All',
            matcherText : 'Text',
            matcherHex : 'Hex',
            matcherScript : 'Script',
            matcherJson : 'JSON',
        },
        manual : {
            title : 'Manual',
            history : 'History',
            contentCanNotBeEmpty : 'Content can not be empty',
        },
        snippet : {
            title : 'Snippets',
            attrName : 'Name',
            attrContent : 'Content',
            loopSend : 'Loop',
        },
        inlineEditorText : {
            editorName : 'Text',
            fullTitle : 'Text Edit',
            placeholder : 'Text Content',
        },
        inlineEditorHex : {
            editorName : 'Hex',
            fullTitle : 'HEX Edit',
            placeholder : 'Hex Content',
        },
        inlineEditorForm : {
            editorName : 'Form',
            fullTitle : 'Form Edit',
            endianessBig : 'BE',
            endianessLittle : 'LE',
            empty : 'Empty',
            columnName : 'Name',
            columnType : 'Type',
            columnValue : 'Value',
            columnDesc : 'Desc',
        },
        inlineEditorScript : {
            editorName : 'Script',
        },
        inlineEditorRandom : {
            editorName : 'Random',
        },
    },
};