module.exports = {
    moduleName : '指令',
    requestParam : {
        messages : {
            formatError : '请求参数格式“{0}”不支持，目前仅支持hex，string，form三种',
        },
        type : {
            hex : 'Hex',
            string : '字符串',
            form : '表单',
        },
        hex : {
            contentEmpty : '请求参数内容不可为空',
            illegalHexChar : '请求参数存在非十六进制字符', 
        }
    },
    main : {
        button : {
            closeThis : '关闭当前',
            closeOthers : '关闭其他',
            closeAll : '关闭所有',
            copyName : '复制名称',
            copyPathName : '复制路径名称',
            duplicateThis : '复制指令',
            createNew : '创建指令',
        },
        changedDirectiveCloseConfirm : '该指令已经发生改变，是否保存 ？',
        directiveNameCopySuccessed : '指令名称已复制到剪切板',
        directivePathNameCopySuccessed : '指令路径名称已复制到剪切板',
        directivePathNameCopyFailedUnsaved : '指令路径名称复制失败 : 指令未保存',
    },

    name : '名称',
    nameDefault : '未命名',
    descriotion : '描述',
    atributesLabel : '属性',
    atributeName : '名称',
    atributeValue : '取值',
    endiannessLabel : '字节序',
    endiannessBigEndian : '大端模式',
    endiannessLittleEndian : '小端模式',
    charset : '字符集',
    requestCharset : '请求字符集',
    responseCharset : '响应字符集',
    nlstyleLabel : '换行风格',
    nlstyleDefaultName : '默认',
    configTitle : '指令配置',
    communicator : require('@/modules/directive/communicators/I18nRegistry.js').zh,
    quickCallCrc16modbus : '<DEC> crc16modbus ($item, ...) Modbus CRC校验',
    quickCallRandom : '<DEC> random(min,max) 生成随机数',
    quickCallLrc : '<DEC> lrc(items, ...) LRC校验',
    quickCallChecksum8 : '<DEC> checksum8(items, ...) CheckSum校验',
    quickCallBcc : '<DEC> bcc(items, ...) 异或校验',
    quickCallFill : '<TEXT> fill(content,count) 填充',
    quickCallCrc1 : '<DEC> crc1($item, ...) CRC1 校验',
    quickCallCrc8 : '<DEC> crc8($item, ...) CRC8 校验',
    quickCallCrc81wire : '<DEC> crc81wire($item, ...) CRC81WIRE 校验',
    quickCallCrc16 : '<DEC> crc16($item, ...) CRC16 校验',
    quickCallCrc16ccitt : '<DEC> crc16ccitt($item, ...) CRC16CCITT 校验',
    quickCallCrc16xmodem : '<DEC> crc16xmodem($item, ...) CRC16XMODEM 校验',
    quickCallCrc16kermit : '<DEC> crc16kermit($item, ...) CRC16KERMIT 校验',
    quickCallCrc24 : '<DEC> crc24($item, ...) CRC24 校验',
    quickCallCrc32 : '<DEC> crc32($item, ...) CRC32 校验',
    quickCallCrcjam : '<DEC> crcjam($item, ...) CRCJAM 校验',
    quickCallCrc32mpeg2 : '<DEC> crc32mpeg2($item, ...) CRC MPEG 2 校验',
    quickCallDate : '<TEXT> date(format) 日期格式化',
    quickCallLengthsum : '<DEC> lengthsum($item, ...) 计算长度',
    statusPopoverTitle : '指令状态',
    statusClear : '清空',
    statusViewerButton : '状态',
    parameter : { 
        statusNameNotExists : '指令状态 "{0}" 不存在',
        parameterIndexNotExists : '"{0}" 中的快速调用 "{1}" 参数索引编号 "${2}" 不存在',
        parameterIndexNotAvailable : '"{0}" 中的快速调用 "{1}" 参数索引编号 "{2}" 无效，目前仅支持数字索引',
        parseStringFailed : '解析字符串 "{0}" 失败 : {1}',
        executeScriptFailed : '执行脚本失败 : {0}',
        projectScriptObjectGenerateFailed : '项目脚本执行失败 : {0}',
        quickFunctionNameInvalid : '无效的快捷函数名 : {0}',
        buildHandlerNotAvailable : '无效的参数构建器 : {0}',
        notRequired : '无需配置请求参数',
        editorNotAvailable : '参数编辑器不可用',
        none : {
            name : '无',
            notRequired : '无需配置请求参数',
        },
        form : {
            name : '表单',
            fieldName : '名称',
            filedType : '类型',
            filedValue : '取值',
            filedDesc : '描述',
            filedOperations : '操作',
            propValueMustBeAnInstanceOfMdbDirective : '属性 v-model 的值必须是一个 MdbDirective 实例',
            preserveFieldFilter : '属性过滤',
            dataTypeLabel : '数据类型',
            dataTypeBitsLength : '位数',
            dataTypeBitsOverLenght : '位组(bits)取值 [{0}] 超出指定长度 [{1}]',
            dataTypeBitsNotMatchToByte : '位组(bits)数据拼装长度必须为8的整数倍',
            fieldNotConfigured : '表单未配置',
            fieldSetting : '属性配置',
            fieldSettingFailed : '属性配置失败',
            fieldValueSelectOptions : '取值选项',
            fieldValueSelectOptionName : '选项名称',
            fieldValueSelectOptionValue : '选项取值',
            fieldValueSelectOptionValueDuplicate : '选项取值重复：{0}',
            fieldEndiannessDefault : '默认',
            dataType : {
                byte : '字节 (uint8)',
                char_int : '单字节整型 (int8)',
                char : '字符 (int8)',
                unsigned_char : '无符号字符 (uint8)',
                short : '短整型 (int16)',
                unsigned_short : '无符号短整型 (uint16)',
                int : '整型 (int32)',
                unsigned_int : '无符号整型 (uint32)',
                long : '长整型 (int32)',
                unsigned_long : '无符号长整形 (int32)',
                long_long : '长长整型 (int64)',
                unsigned_long_long : '无符号长长整型 (uint64)',
                float : '单精度浮点型',
                double : '双精度浮点型',
                string : '字符串',
                bytes : '字节组',
                file : '文件',
                bits : '位组(bits)'
            },
        },
        hex : {
            name : 'HEX',
            editorPlaceholder : '例如 : AA FF 67 CC 23',
            illegalHexChar : '请求参数存在非十六进制字符', 
        },
        text : {
            name : '文本',
            editorPlaceholder : '例如 : how are you ?',
            modeText : '纯文本模式',
            modeJson : 'JSON 模式',
            modeXml : 'XML 模式',
        },
        file : {
            name : '文件',
            selectTip : '请选择或将文件拖放到此处',
            fileNotSupported : '暂时无法处理文件夹或文件类型不支持',
            fileError : '文件处理失败： {0}',
            filepathCannotBeEmpty : '请选择需要传输的文件',
            filepathUnableToRead : '无法读取文件 {0}',
            readFailed : '文件 "{0}" 读取失败：{1}',
            select : '选择文件',
            filepath : '文件路径',
            filesize : '文件大小',
            sendMode : '发送模式',
            sendModeAll : '全文',
            sendModeLine : '逐行',
            sendModeLineNewLineStyle : '换行符',
            sendModelLineOutOfContent : '文件内容已全部发送完毕',
            sendModeBytes : '固定字节',
            sendModeBytesByteCount : '字节数',
            viewerMode : '预览模式',
            afterSendAll : '内容结束后',
            afterSendAllBackToHead : '回到文件开始位置',
            afterSendAllNoticeEnd : '显示结束提示',
            fileIsParsing : '文件解析中...',
            unableToLoadBigFile : '暂时无法支持超过 {0} 的文件',
        },
    },
    response : {
        preserveResponseData : '保留响应',
        saveAsFileDataEmpty : '响应数据为空，无法保存为文件',
        saveAsExcelDataEmpty : '响应数据为空，无法保存为Excel文件',
        saveAsExcelViewerNotSupport : '当前响应模式不支持导出Excel文件',
        saveAsTestcaseViewerNotSupport : '当前响应模式不支持保存为测试用例',
        stream : {
            name : '数据流',
            filterAll : '所有消息',
            filterSend : '发送',
            filterReceive : '接收',
        },
        hex : {
            name : 'HEX',
            lineLimit : '行数',
            lineSize : '列数',
            clear : '清空显示区域',
            autoScrollToButton : '自动滚动到底部',
            locate : '定位',
            bytes : '字节数',
            offsetNotAvailable : '请输入有效的偏移量',
            formParserTitle : '格式化解析',
            formParserNoRules : '未配置解析规则',
        },
        text : {
            name : '文本',
        },
        form : {
            name : '格式化',
            fieldName : '名称',
            fieldType : '类型',
            fieldValue : '取值',
            fieldDesc : '描述',
            fieldOperations : '操作',
            dataLengthPlaceholder : '字节数',
            preserveExportRowRowId : '编号',
            preserveExportRowTime : '时间',
            parseToLast : '解析到末尾',
            saveAsExcelFieldListEmpty : '格式化配置为空，无法导出Excel',
            expression : '表达式',
            startOffset : '起始地址',
        },
        plotter : {
            name : '绘图',
            parseScriptModalTitle : '解析脚本',
            xsize : 'X轴大小',
            dataPoint : '数据点',
            parseTypeCustom : '自定义解析',
            btnEditParseScript : '编辑解析脚本',
            failedToExecuteParseScript : '执行解析脚本失败：{0}',
            customScriptSnippetChannelCreate : '创建频道',
            customScriptSnippetChannelPushData:'向频道追加数据',
            customScriptSnippetGetDataLength:'获取数据字节数',
            customScriptSnippetGetCursor:'获取游标位置',
            customScriptSnippetMoveCursor:'移动游标位置',
            customScriptSnippetSetCursor:'设置游标位置',
            customScriptSnippetReadInt8 : '读取8位整型数值',
            customScriptSnippetReadUint8 : '读取8位无符号整型数值',
            customScriptSnippetReadInt16BE : '读取16位整型数值(大端)',
            customScriptSnippetReadUint16BE : '读取16位无符号整型数值(大端)',
            customScriptSnippetReadInt16LE : '读取16位整型数值(小端)',
            customScriptSnippetReadUint16LE : '读取16位无符号整型数值(小端)',
            customScriptSnippetReadInt32BE : '读取32位整型数值(大端)',
            customScriptSnippetReadUint32BE : '读取32位无符号整型数值(大端)',
            customScriptSnippetReadInt32LE : '读取32位整型数值(小端)',
            customScriptSnippetReadUint32LE : '读取32位无符号整型数值(小端)',
            customScriptSnippetReadInt64BE : '读取64位整型数值(大端)',
            customScriptSnippetReadUint64BE : '读取64位无符号整型数值(大端)',
            customScriptSnippetReadInt64LE : '读取64位整型数值(小端)',
            customScriptSnippetReadUint64LE : '读取64位无符号整型数值(小端)',
            customScriptSnippetReadFloat32BE : '读取32位浮点型数值(大端)',
            customScriptSnippetReadFloat64BE : '读取64位浮点型数值(大端)',
            customScriptSnippetReadFloat32LE : '读取32位浮点型数值(小端)',
            customScriptSnippetReadFloat64LE : '读取64位浮点型数值(小端)',
            customScriptHelpDoc : '帮助文档',
            channelTooMany : '频道数量超出限制，无法进行处理，最高支持的频道数量为 {0}',
            parserDataFrame : '数据帧',
            parserDataFrameSettingTitle : '数据帧解析配置',
            parserDataFrameHeader : '帧头',
            parserDataFrameDataLength : '数据长度',
            parserDataFrameDataType : '数据类型',
            parserDataFrameChannelCount : '频道数量',
            parserDataFrameTail : '帧尾',
            parserDataFrameDynamicLength : '动态长度',
            parserDataFrameFixedLength : '固定长度',
            parserDataMatrix : '矩阵',
            parserDataMartixSettingTitle : '矩阵配置',
            parserForm : '格式化数据',
            parserFormSettingTitle : '格式化数据配置',
            parserFormFields : '绘制属性',
            parserFormFieldEnable : '启用',
            parserFormFieldName : '属性',
            parserFormFieldExpression : '表达式',
            parserFormFieldExpressionFailed : '属性 {0} 表达式 [{1}] 执行失败 : {2}',
            parserRegex : '正则表达式',
            parserRegexPattern : '匹配模式',
            parserRegexExampleData : '测试内容',
            parserRegexExampleMatch : '匹配数据',
            parserRegexRegexIsNotAvailable : '无法解析正则表达式',
        },
    },
    entry : {
        formFieldName : '名称',
        refreshSuccess : '刷新成功',
        folderDeleteConfirm : '是否确定删除 {0} ?',
        directiveDeleteConfirm : '是否确定删除 {0} ?',
        directiveCopyName : '{0} 副本',
        editTitle : '文件夹编辑',
        folderSelectTitle : '选择文件夹',
        folderSelectRootName : '根目录',
        folderSelectIsRequired : '请选择文件夹',
        directiveSelectTip : '请选择指令',
    },
    script : {
        configTitle : '脚本配置',
        requestScript : '请求脚本',
        snippetVariableSet : '设置变量',
        snippetParametersGet : '获取参数',
        snippetParamFormItemValueGetByName : '通过名称获取表单项目值',
        snippetParamFormItemGetByName : '通过名称获取表单项目',
        snippetParamFormItemValueGetByIndex : '通过索引获取表单项目值',
        snippetParamFormItemGetByIndex : '通过索引获取表单项目',
        snippetTimestamp : '获取当前时间戳',
        snippetRandom : '生成随机数',
        snippetBytesSum : '字节累加和',
        snippetCRC : '计算CRC校验',
        snippetStatusSet : '设置状态值',
        snippetsStatusGet : '获取状态值',
        helpLink : '使用帮助',
        parameterFormItemsGetByRowNumsNumNotExists : '无法通过行号获取参数 : {0}',
        parameterFormItemsGetByRowNumsFromNotSet : '行号范围未指定起始行号',
        parameterFormItemsGetByRowNumsToNotSet : '行号范围未指定结束行号',
    },
    target : {
        send : '发送',
        autoSend : '自动发送',
        autoSendBtnStart : '启动',
        autoSendBtnStop : '停止',
        autoSendIntervalTime : '间隔时间',
        autoSendIntervalTimeFixed : '固定',
        autoSendIntervalMin : '最小间隔时间',
        autoSendIntervalMax : '最大间隔时间',
        autoSendExecuteCount : '执行次数',
        autoSendExecuteCountAlways : '一直执行',
    },
    execute : {
        btnConfig : '配置',
        btnScript : '脚本',
        labelNoResponse : '无响应',
        labelResponseDataLength : '数据量',
        labelResponseSaveAsFile : '保存为文件',
        labelResponseSaveAsExcelFile : '保存为 Excel 文件',
        labelResponseSaveAsExcelFileNotSupport : '当前响应查看方式不支持保存为Excel文件',
        labelResponseSaveAsTestcase : '保存为测试用例',
        responseNotExists : '响应数据为空，无法保存为测试用例。',
        resposneSaveAsTestcaseSuccess : '测试用例已保存',
        resposneSaveAsTestcaseNotAvailableOnPreserveMode : '响应保留模式下无法保存为测试用例。',
    },
    share : {
        button : '分享',
        modalTitle : '分享指令',
        withResponse : '包含响应内容',
        generateLink : '生成链接',
        link : '分享链接',
        expiredAt : '有效期至',
        linkCopied : '链接已复制',
    },
};