// SciTool
// MIT License
// Copyright (c) 2021 Gabriel Lucero
// Email: pensadornatural@gmail.com
var sci;
(function (sci) {
    sci.Const = {
        Text: 'Text',
        TaxIdCl: 'TaxIdCl',
        WordEs: 'WordEs',
        WordsEs: 'WordsEs',
        WordEn: 'WordEn',
        WordsEn: 'WordsEn',
        Email: 'Email',
        NaturalNumber: 'NaturalNumber',
        IntegerNumber: 'IntegerNumber',
        RealNumber: 'RealNumber',
        DDMMYYYY: 'DDMMYYYY',
        Time: 'Time',
        YesNo: 'YesNo',
        Boolean: 'Boolean',
        WordNaturalEs: 'WordNaturalEs',
        WordsNaturalEs: 'WordsNaturalEs',
        WordNaturalEn: 'WordNaturalEn',
        WordsNaturalEn: 'WordsNaturalEn',
        ColorHex: 'ColorHex',
        RegularExpression: 'RegularExpression',
        Success: 'Success',
        Unsuccess: 'Unsuccess',
        Notice: 'Notice',
        Warning: 'Warning',
        Default: 'Default',
        Horizontal: 'Horizontal',
        Vertical: 'Vertical',
        BelowMost: 'BelowMost',
        TopMost: 'TopMost',
        Normal: 'Normal',
        NormalBring: 'NormalBring',
        BringToCenter: 'BringToCenter',
        BringToHCenter: 'BringToHCenter',
        BringToVCenter: 'BringToVCenter',
        BringToLeftBorderScreen: 'BringToLeftBorderScreen',
        BringToRightBorderScreen: 'BringToRightBorderScreen',
        BringToMouseToMiddle: 'BringToMouseToMiddle',
        BringToMouse: 'BringToMouse',
        OrganizeAllDocuments: 'OrganizeAllDocuments',
        OrganizeVisibleDocuments: 'OrganizeVisibleDocuments',
        Get: 'GET',
        Post: 'POST',
        Put: 'PUT',
        Delete: 'DELETE',
        MenuBar: 'MenuBar',
        PulldownMenu: 'PulldownMenu',
        Overlapping: 'Overlapping',
        AutomaticWidth: '-1',
        FixedWidth: '-2',
        SuccessColor: 'rgb(149,193,31)',
        UnsuccessColor: 'rgb(230,66,90)',
        DangerColor: 'rgb(230,66,90)',
        NoticeColor: 'rgb(58,138,211)',
        WarningColor: 'rgb(221,150,10)',
        ZIndexOnTop: '4000200',
        White: 'rgb(255,255,255)',
        Blue: 'rgb(66,139,202)',
        LightBlue: 'rgb(49,176,213)',
        DarkBlue: 'rgb(46,70,120)',
        FacebookBlue: 'rgb(66,103,178)',
        Green: 'rgb(28,175,154)',
        Yellow: 'rgb(240,173,78)',
        Red: 'rgb(217,83,79)',
        DarkRed: 'rgb(153,0,0)',
        Orange: 'rgb(243,129,8)',
        Black: 'rgb(0,0,0)',
        LightGray: 'rgb(228,231,234)',
        Gray: 'rgb(161,169,179)',
        DarkGray: 'rgb(74,81,91)',
        Brown: 'rgb(81,57,33)',
        Pink: 'rgb(245,121,232)',
        ExtraLargeButtonSize: 'ExtraLargeButtonSize',
        ExtraLargeButtonWidth: 182,
        ExtraLargeButtonHeight: 54,
        LargeButtonSize: 'LargeButtonSize',
        LargeButtonWidth: 148,
        LargeButtonHeight: 48,
        DefaultButtonSize: 'DefaultButtonSize',
        DefaultButtonWidth: 125,
        DefaultButtonHeight: 42,
        SmallButtonSize: 'SmallButtonSize',
        SmallButtonWidth: 90,
        SmallButtonHeight: 33,
        ExtraSmallButtonSize: 'ExtraSmallButtonSize',
        ExtraSmallButtonWidth: 120,
        ExtraSmallButtonHeight: 27
    };
    //Estructura de ZIndex.
    var ZIndexDocumentSeparation = 2000; //Cada documento puede tener como máximo 1999 objetos, pues cada dos mil números de ZIndex comienza un nuevo documento.
    var MinZIndexBelowMostDocument = 1000000; //Si ZIndexDocumentSeparation = 2000, se permiten 500 documentos BelowMost.
    var MinZIndexNormalDocument = 2000000; //Si ZIndexDocumentSeparation = 2000, se permiten 500 documentos Normal.
    var MinZIndexTopMostDocument = 3000000; //Si ZIndexDocumentSeparation = 2000, se permiten 500 documentos TopMost (después vienen los menús y la StatusBar).
    var ZIndexIconosEscritorio = 4000000;
    var ZIndexStatusBar = "4000101"; //Hay 99 números para contenidos de la StatusBar, hasta el 4000199. Luego viene el ZIndexOnTop, para que el programador posicione hasta 299 objetos sobre los documentos (hasta antes del ZIndexSciToolPulldownMenu).
    var ZIndexSciToolPulldownMenu = 4000500; //Los menús pulldown del escritorio tienen el mayor ZIndex entre los objetos.
    var ZIndexPulldownMenuMarginFromTheTopOfTheDocumentBack = 200; //Los menús pulldown tienen un ZIndex igual al tope del documento al que pertenezcan, menos la cantidad de este parámetro y de allí hacia arriba nuevamente.
    sci.Limbo = -100000;
    var LimboEscritorio = -100001;
    // Variables que contienen las coordenadas del mouse, disponibles para toda la librería.
    var xMouse;
    var yMouse;
    //Detectar evento Resize del navegador y llamar a un evento.
    window.onresize = function () {
        try {
            window["scitool_OnResize"].apply();
        }
        catch (e) { }
        Table.Talk("scitool_OnResize");
    };
    // Variable que indica si hay documentos recogidos.
    var docRecogidos = false;
    var ObjectType = {
        scitool: 'scitool',
        MetaObject: 'MetaObject',
        StatusBar: 'StatusBar',
        Document: 'Document',
        Label: 'Label',
        TextBox: 'TextBox',
        Button: 'Button',
        Image: 'Image',
        Video: 'Video',
        CheckBox: 'CheckBox',
        ComboBox: 'ComboBox',
        RadioButtonGroup: 'RadioButtonGroup',
        RadioButton: 'RadioButton',
        File: 'File',
        Canvas: 'Canvas',
        Box: 'Box',
        Ellipse: 'Ellipse',
        Requester: 'Requester',
        Chronometer: 'Chronometer',
        Timer: 'Timer',
        AssociatedControl: 'AssociatedControl',
        DocumentAssociatedControl: 'DocumentAssociatedControl',
        Div: 'Div',
        MenuBar: 'MenuBar',
        PulldownMenu: 'PulldownMenu',
        MenuBarOption: 'MenuBarOption',
        PulldownMenuOption: 'PulldownMenuOption'
    };
    var StandardSkin = {
        SciToolTexture: true,
        SciToolBackColor: 'rgb(190,190,190)',
        SciToolBackgroundImage: '',
        SciToolBackgroundPositionX: 'left',
        SciToolBackgroundPositionY: 'top',
        SciToolBackgroundAttachment: 'scroll',
        SciToolBackgroundRepeat: 'no-repeat',
        ToolBoxShow: true,
        ToolBoxHideAutomatically: false,
        ToolBoxWindowPickupDropIcons: true,
        ToolBoxWindowOrganizationIcons: true,
        ToolBoxTableIcons: true,
        ToolBoxColor: 'rgba(51,51,51,0.9)',
        ToolBoxIconColor: 'rgb(190,190,190)',
        ToolBoxIconDisabledColor: 'rgb(90,90,90)',
        ToolBoxTop: 80,
        StatusBarHeight: 22,
        StatusBarColor: 'rgb(44,44,44)',
        StatusBarBackColor: 'rgb(236,236,236)',
        StatusBarSuccessColor: 'rgb(229,255,181)',
        StatusBarSuccessBackColor: 'rgb(149,193,31)',
        StatusBarUnsuccessColor: 'rgb(246,187,191)',
        StatusBarUnsuccessBackColor: 'rgb(230,66,90)',
        StatusBarNoticeColor: 'rgb(206,224,244)',
        StatusBarNoticeBackColor: 'rgb(58,138,211)',
        StatusBarWarningColor: 'rgb(251,236,196)',
        StatusBarWarningBackColor: 'rgb(221,150,10)',
        StatusBarFontSize: 15,
        StatusBarFontFamily: "'Lucida Grande', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        StatusBarTimeToResetColor: 4,
        DocumentColor: 'rgb(255,255,255)',
        DocumentBorderColor: 'rgb(217,217,217)',
        DocumentTitleBarFontColor: 'rgb(226,76,50)',
        DocumentTitleBarColor: 'rgb(255,255,255)',
        DocumentBorderWidth: 1,
        DocumentBorderRadius: 12,
        DocumentDisabledTitleBarFontColor: 'rgb(170,170,170)',
        DocumentDisabledTitleBarColor: 'rgb(244,244,244)',
        DocumentTitleFontSize: 15,
        DocumentTitleFontFamily: "'Lucida Grande', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        DocumentTitleBarHeight: 26,
        DocumentTitleBarButtonColor: 'rgb(40,40,40)',
        DocumentTitleBarButtonColorOnMouseOver: 'rgb(226,76,50)',
        DocumentTitleBarDisabledButtonColor: 'rgb(130,130,130)',
        LabelColor: sci.Const.Black,
        LabelBackColor: 'transparent',
        LabelTypeWidth: sci.Const.AutomaticWidth,
        LabelWidth: 9000,
        LabelHeight: 19,
        LabelFontSize: 15,
        LabelFontFamily: "'Lucida Grande', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        LabelLinkColor: 'rgb(64,100,172)',
        LabelDisabledColor: 'rgb(120,120,120)',
        BoxBorderColor: 'black',
        BoxFillColor: 'transparent',
        BoxBorderWidth: 1,
        EllipseBorderColor: 'black',
        EllipseFillColor: 'transparent',
        EllipseBorderWidth: 1,
        CheckBoxWidth: 200,
        CheckBoxHeight: 20,
        CheckBoxFontSize: 14,
        CheckBoxFontFamily: "'Lucida Grande', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        CheckBoxColor: 'rgb(30, 30, 30)',
        CheckBoxBackColor: 'transparent',
        CheckBoxDisabledColor: '#bbb',
        RadioButtonWidth: 140,
        RadioButtonHeight: 21,
        RadioButtonFontSize: 14,
        RadioButtonFontFamily: "'Lucida Grande', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        RadioButtonColor: 'rgb(30, 30, 30)',
        RadioButtonBackColor: 'transparent',
        RadioButtonDisabledColor: '#bbb',
        ComboBoxWidth: 180,
        ComboBoxHeight: 42,
        ComboBoxLineHeight: 32,
        ComboBoxFontSize: 14,
        ComboBoxFontFamily: "'Lucida Grande', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        ComboBoxColor: 'rgb(44, 44, 44)',
        ComboBoxFromBackColor: 'white',
        ComboBoxToBackColor: 'white',
        ComboBoxListBoxColor: 'rgb(44, 44, 44)',
        ComboBoxListBoxBackColor: 'white',
        ComboBoxDisabledColor: '#ddd',
        ComboBoxDisabledFromBackColor: 'white',
        ComboBoxDisabledToBackColor: 'white',
        ComboBoxDisabledListBoxFromBackColor: 'white',
        ComboBoxDisabledListBoxToBackColor: 'white',
        TextBoxWidth: 170,
        TextBoxHeight: 38,
        TextBoxFontSize: 14,
        TextBoxFontFamily: "'Lucida Grande', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        TextBoxColor: 'rgb(44,44,44)',
        TextBoxBackColor: 'rgb(255,255,255)',
        TextBoxDisabledColor: '#bbb',
        TextBoxDisabledFlagColor: '#eee',
        TextBoxBorderColor: 'rgb(217,217,217)',
        TextBoxReadyColor: 'rgb(198,220,139)',
        TextBoxNotReadyColor: 'rgb(230,66,90)',
        ButtonWidth: sci.Const.DefaultButtonWidth,
        ButtonHeight: sci.Const.DefaultButtonHeight,
        ButtonFontSize: 15,
        ButtonFontFamily: "'Lucida Grande', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        ButtonColor: sci.Const.DarkGray,
        ButtonFromBackColor: sci.Const.LightGray,
        ButtonToBackColor: sci.Const.LightGray,
        ButtonColorOnMouseOver: sci.Const.White,
        ButtonFromBackColorOnMouseOver: sci.Const.DarkBlue,
        ButtonToBackColorOnMouseOver: sci.Const.DarkBlue,
        ButtonBorderTopColor: sci.Const.Gray,
        ButtonBorderRightColor: sci.Const.Gray,
        ButtonBorderBottomColor: sci.Const.Gray,
        ButtonBorderLeftColor: sci.Const.Gray,
        ButtonTopLeftRadius: 3,
        ButtonTopRightRadius: 3,
        ButtonBottomLeftRadius: 3,
        ButtonBottomRightRadius: 3,
        ButtonTopBorderWidth: 1,
        ButtonRightBorderWidth: 1,
        ButtonBottomBorderWidth: 1,
        ButtonLeftBorderWidth: 1,
        ButtonDisabledColor: '#eee',
        ButtonDisabledFromBackColor: '#ccc',
        ButtonDisabledToBackColor: '#ccc',
        FileWidth: 300,
        FileHeight: 20,
        FileFontSize: 12,
        FileFontFamily: "'Lucida Grande', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        FileColor: 'rgb(30,30,30)',
        FileBackColor: 'transparent',
        FileDisabledColor: '#aaa',
        FileDisabledBackColor: 'transparent',
        ImageColor: 'black',
        ImageBackColor: 'transparent',
        DivBorderColor: 'transparent',
        DivFillColor: 'transparent',
        DivBorderWidth: 0,
        MenuHeight: 21,
        MenuFontSize: 14,
        MenuFontFamily: "'Lucida Grande', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        MenuColor: 'black',
        MenuBackColor: '#fff',
        MenuDisabledColor: '#eee',
        MenuDisabledBackColor: '#bbb',
        MenuColorOnMouseOver: '#fff',
        MenuBackColorOnMouseOver: 'rgb(58,138,211)',
        PulldownMenuBorderColor: '#ddd'
    };
    var Skin = /** @class */ (function () {
        function Skin() {
        }
        Skin.SetSciToolTexture = function (value) {
            Skin.SciToolTexture = value;
            document.body.style.backgroundColor = Skin.GetSciToolBackColor();
            if (value) {
                //Líneas y puntos.
                // document.body.style.backgroundImage = "linear-gradient(rgba(220,220,220,0) 2px, transparent 1px),linear-gradient(90deg, rgba(220,220,220,0) 1px, transparent 1px),linear-gradient(rgba(220,220,220,0.4) 1px, transparent 1px),linear-gradient(90deg, rgba(220,220,220,0) 1px, transparent 1px), radial-gradient(circle 1px, rgba(160,160,160,1), rgba(160,160,160,1)," + Skin.GetSciToolBackColor() + ")";
                // document.body.style.backgroundSize = "400px 400px, 400px 400px, 4px 4px, 4px 4px, 90px 90px";
                // document.body.style.backgroundPosition = "-2px -2px, -2px -2px, -1px -1px, -1px -1px";
                //Puntos.
                document.body.style.background = "radial-gradient(circle 1px, rgba(120,120,120,1), rgba(120,120,120,1)," + Skin.GetSciToolBackColor() + ")";
                document.body.style.backgroundSize = "30px 30px";
            }
            else {
                document.body.style.backgroundImage = "";
                document.body.style.backgroundSize = "";
                document.body.style.backgroundPosition = "";
            }
        };
        Skin.GetSciToolTexture = function () {
            return Skin.SciToolTexture;
        };
        Skin.SetSciToolBackColor = function (value) {
            Skin.SciToolBackColor = value;
            document.body.style.backgroundColor = value;
        };
        Skin.GetSciToolBackColor = function () {
            return Skin.SciToolBackColor;
        };
        Skin.SetSciToolBackgroundImage = function (value, positionX, positionY, attachment, repeat) {
            if (positionX === void 0) { positionX = Skin.SciToolBackgroundPositionX; }
            if (positionY === void 0) { positionY = Skin.SciToolBackgroundPositionY; }
            if (attachment === void 0) { attachment = Skin.SciToolBackgroundAttachment; }
            if (repeat === void 0) { repeat = Skin.SciToolBackgroundRepeat; }
            Skin.SciToolBackgroundImage = value;
            Skin.SciToolBackgroundPositionX = positionX;
            Skin.SciToolBackgroundPositionY = positionY;
            document.body.style.backgroundImage = "url(" + value + ")";
            document.body.style.backgroundPosition = positionX + " " + positionY;
            document.body.style.backgroundAttachment = attachment;
            document.body.style.backgroundRepeat = repeat;
        };
        Skin.GetSciToolBackgroundImage = function () {
            return Skin.SciToolBackgroundImage;
        };
        Skin.GetSciToolBackgroundPositionX = function () {
            return Skin.SciToolBackgroundPositionX;
        };
        Skin.GetSciToolBackgroundPositionY = function () {
            return Skin.SciToolBackgroundPositionY;
        };
        Skin.GetSciToolBackgroundAttachment = function () {
            return Skin.SciToolBackgroundAttachment;
        };
        Skin.GetSciToolBackgroundRepeat = function () {
            return Skin.SciToolBackgroundRepeat;
        };
        Skin.SetToolBoxHideAutomatically = function (value) {
            Skin.ToolBoxHideAutomatically = value;
            if (!value) {
                if (Skin.ToolBoxShow) {
                    Skin.SetToolBoxWindowPickupDropIcons(Skin.ToolBoxWindowPickupDropIcons);
                    Skin.SetToolBoxWindowOrganizationIcons(Skin.ToolBoxWindowOrganizationIcons);
                    Skin.SetToolBoxTableIcons(Skin.ToolBoxTableIcons);
                }
            }
        };
        Skin.GetToolBoxHideAutomatically = function () {
            return Skin.ToolBoxHideAutomatically;
        };
        Skin.SetToolBoxShow = function (value) {
            Skin.ToolBoxShow = value;
            if (value) {
                Skin.SetToolBoxWindowPickupDropIcons(Skin.ToolBoxWindowPickupDropIcons);
                Skin.SetToolBoxWindowOrganizationIcons(Skin.ToolBoxWindowOrganizationIcons);
                Skin.SetToolBoxTableIcons(Skin.ToolBoxTableIcons);
            }
            else {
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosRecoger").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosSoltar").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosSolapado").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosHorizontal").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosVertical").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioZTitulo").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioZ").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioZInicio").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioZAdelante").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioZAtras").style.visibility = 'hidden';
                document.getElementById("divSciToolFondoToolBox").style.visibility = 'hidden';
            }
        };
        Skin.GetToolBoxShow = function () {
            return Skin.ToolBoxShow;
        };
        Skin.SetToolBoxWindowPickupDropIcons = function (value) {
            Skin.ToolBoxWindowPickupDropIcons = value;
            if (value && Skin.ToolBoxShow) {
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosRecoger").style.visibility = 'visible';
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosSoltar").style.visibility = 'visible';
            }
            else {
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosRecoger").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosSoltar").style.visibility = 'hidden';
            }
            if (!Skin.ToolBoxWindowPickupDropIcons && !Skin.ToolBoxWindowOrganizationIcons && !Skin.ToolBoxTableIcons) {
                document.getElementById("divSciToolFondoToolBox").style.visibility = 'hidden';
            }
            else {
                if (Skin.ToolBoxShow) {
                    document.getElementById("divSciToolFondoToolBox").style.visibility = 'visible';
                }
            }
        };
        Skin.GetToolBoxWindowPickupDropIcons = function () {
            return Skin.SetToolBoxWindowPickupDropIcons;
        };
        Skin.SetToolBoxWindowOrganizationIcons = function (value) {
            Skin.ToolBoxWindowOrganizationIcons = value;
            if (value && Skin.ToolBoxShow) {
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosSolapado").style.visibility = 'visible';
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosHorizontal").style.visibility = 'visible';
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosVertical").style.visibility = 'visible';
            }
            else {
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosSolapado").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosHorizontal").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosVertical").style.visibility = 'hidden';
            }
            if (!Skin.ToolBoxWindowPickupDropIcons && !Skin.ToolBoxWindowOrganizationIcons && !Skin.ToolBoxTableIcons) {
                document.getElementById("divSciToolFondoToolBox").style.visibility = 'hidden';
            }
            else {
                if (Skin.ToolBoxShow) {
                    document.getElementById("divSciToolFondoToolBox").style.visibility = 'visible';
                }
            }
        };
        Skin.GetToolBoxWindowOrganizationIcons = function () {
            return Skin.ToolBoxWindowOrganizationIcons;
        };
        Skin.SetToolBoxTableIcons = function (value) {
            Skin.ToolBoxTableIcons = value;
            if (value && Skin.ToolBoxShow) {
                document.getElementById("lblSciToolEscritorioZTitulo").style.visibility = 'visible';
                document.getElementById("lblSciToolEscritorioZ").style.visibility = 'visible';
                document.getElementById("lblSciToolEscritorioZInicio").style.visibility = 'visible';
                document.getElementById("lblSciToolEscritorioZAdelante").style.visibility = 'visible';
                document.getElementById("lblSciToolEscritorioZAtras").style.visibility = 'visible';
            }
            else {
                document.getElementById("lblSciToolEscritorioZTitulo").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioZ").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioZInicio").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioZAdelante").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioZAtras").style.visibility = 'hidden';
            }
            if (!Skin.ToolBoxWindowPickupDropIcons && !Skin.ToolBoxWindowOrganizationIcons && !Skin.ToolBoxTableIcons) {
                document.getElementById("divSciToolFondoToolBox").style.visibility = 'hidden';
            }
            else {
                if (Skin.ToolBoxShow) {
                    document.getElementById("divSciToolFondoToolBox").style.visibility = 'visible';
                }
            }
        };
        Skin.GetToolBoxTableIcons = function () {
            return Skin.ToolBoxTableIcons;
        };
        Skin.SetToolBoxColor = function (value) {
            Skin.ToolBoxColor = value;
            document.getElementById('divSciToolFondoToolBox').style.backgroundColor = value;
        };
        Skin.GetToolBoxColor = function () {
            return Skin.ToolBoxColor;
        };
        Skin.SetToolBoxIconColor = function (value) {
            Skin.ToolBoxIconColor = value;
            document.getElementById('lblSciToolEscritorioOrdenarDocumentosRecoger').style.color = value;
            if (docRecogidos) {
                document.getElementById('lblSciToolEscritorioOrdenarDocumentosSoltar').style.color = value;
            }
            document.getElementById('lblSciToolEscritorioZInicio').style.color = value;
            document.getElementById('lblSciToolEscritorioZAdelante').style.color = value;
            document.getElementById('lblSciToolEscritorioZAtras').style.color = value;
            document.getElementById('lblSciToolEscritorioOrdenarDocumentosSolapado').style.color = value;
            document.getElementById('lblSciToolEscritorioOrdenarDocumentosHorizontal').style.color = value;
            document.getElementById('lblSciToolEscritorioOrdenarDocumentosVertical').style.color = value;
        };
        Skin.GetToolBoxIconColor = function () {
            return Skin.ToolBoxIconColor;
        };
        Skin.SetToolBoxIconDisabledColor = function (value) {
            Skin.ToolBoxIconDisabledColor = value;
            if (!docRecogidos) {
                document.getElementById('lblSciToolEscritorioOrdenarDocumentosSoltar').style.color = value;
            }
            document.getElementById('lblSciToolEscritorioZ').style.color = value;
            document.getElementById('lblSciToolEscritorioZTitulo').style.color = value;
        };
        Skin.GetToolBoxIconDisabledColor = function () {
            return Skin.ToolBoxIconDisabledColor;
        };
        Skin.GetToolBoxTop = function () {
            return Skin.ToolBoxTop;
        };
        Skin.GetStatusBarHeight = function () {
            return Skin.StatusBarHeight;
        };
        Skin.SetStatusBarColor = function (value) {
            Skin.StatusBarColor = value;
        };
        Skin.GetStatusBarColor = function () {
            return Skin.StatusBarColor;
        };
        Skin.SetStatusBarBackColor = function (value) {
            Skin.StatusBarBackColor = value;
        };
        Skin.GetStatusBarBackColor = function () {
            return Skin.StatusBarBackColor;
        };
        Skin.SetStatusBarSuccessColor = function (value) {
            Skin.StatusBarSuccessColor = value;
        };
        Skin.GetStatusBarSuccessColor = function () {
            return Skin.StatusBarSuccessColor;
        };
        Skin.SetStatusBarSuccessBackColor = function (value) {
            Skin.StatusBarSuccessBackColor = value;
        };
        Skin.GetStatusBarSuccessBackColor = function () {
            return Skin.StatusBarSuccessBackColor;
        };
        Skin.SetStatusBarUnsuccessColor = function (value) {
            Skin.StatusBarUnsuccessColor = value;
        };
        Skin.GetStatusBarUnsuccessColor = function () {
            return Skin.StatusBarUnsuccessColor;
        };
        Skin.SetStatusBarUnsuccessBackColor = function (value) {
            Skin.StatusBarUnsuccessBackColor = value;
        };
        Skin.GetStatusBarUnsuccessBackColor = function () {
            return Skin.StatusBarUnsuccessBackColor;
        };
        Skin.SetStatusBarNoticeColor = function (value) {
            Skin.StatusBarNoticeColor = value;
        };
        Skin.GetStatusBarNoticeColor = function () {
            return Skin.StatusBarNoticeColor;
        };
        Skin.SetStatusBarNoticeBackColor = function (value) {
            Skin.StatusBarNoticeBackColor = value;
        };
        Skin.GetStatusBarNoticeBackColor = function () {
            return Skin.StatusBarNoticeBackColor;
        };
        Skin.SetStatusBarWarningColor = function (value) {
            Skin.StatusBarWarningColor = value;
        };
        Skin.GetStatusBarWarningColor = function () {
            return Skin.StatusBarWarningColor;
        };
        Skin.SetStatusBarWarningBackColor = function (value) {
            Skin.StatusBarWarningBackColor = value;
        };
        Skin.GetStatusBarWarningBackColor = function () {
            return Skin.StatusBarWarningBackColor;
        };
        Skin.SetStatusBarTimeToResetColor = function (value) {
            Skin.StatusBarTimeToResetColor = value;
        };
        Skin.GetStatusBarTimeToResetColor = function () {
            return Skin.StatusBarTimeToResetColor;
        };
        Skin.GetStatusBarFontSize = function () {
            return Skin.StatusBarFontSize;
        };
        Skin.SetStatusBarFontFamily = function (value) {
            Skin.StatusBarFontFamily = value;
            document.getElementById("StatusBar").style.fontFamily = value;
        };
        Skin.GetStatusBarFontFamily = function () {
            return Skin.StatusBarFontFamily;
        };
        Skin.SetDocumentBorderColor = function (value) {
            Skin.DocumentBorderColor = value;
        };
        Skin.GetDocumentBorderColor = function () {
            return Skin.DocumentBorderColor;
        };
        Skin.SetDocumentTitleBarFontColor = function (value) {
            Skin.DocumentTitleBarFontColor = value;
        };
        Skin.GetDocumentTitleBarFontColor = function () {
            return Skin.DocumentTitleBarFontColor;
        };
        Skin.SetDocumentTitleBarColor = function (value) {
            Skin.DocumentTitleBarColor = value;
        };
        Skin.GetDocumentTitleBarColor = function () {
            return Skin.DocumentTitleBarColor;
        };
        Skin.SetDocumentColor = function (value) {
            Skin.DocumentColor = value;
        };
        Skin.GetDocumentColor = function () {
            return Skin.DocumentColor;
        };
        Skin.SetDocumentBorderWidth = function (value) {
            Skin.DocumentBorderWidth = value;
        };
        Skin.GetDocumentBorderWidth = function () {
            return Skin.DocumentBorderWidth;
        };
        Skin.GetDocumentBorderRadius = function () {
            return Skin.DocumentBorderRadius;
        };
        Skin.SetDocumentDisabledTitleBarFontColor = function (value) {
            Skin.DocumentDisabledTitleBarFontColor = value;
        };
        Skin.GetDocumentDisabledTitleBarFontColor = function () {
            return Skin.DocumentDisabledTitleBarFontColor;
        };
        Skin.SetDocumentDisabledTitleBarColor = function (value) {
            Skin.DocumentDisabledTitleBarColor = value;
        };
        Skin.GetDocumentDisabledTitleBarColor = function () {
            return Skin.DocumentDisabledTitleBarColor;
        };
        Skin.SetDocumentTitleFontSize = function (value) {
            Skin.DocumentTitleFontSize = value;
            Skin.SetDocumentTitleBarHeight(value + 8);
        };
        Skin.GetDocumentTitleFontSize = function () {
            return Skin.DocumentTitleFontSize;
        };
        Skin.SetDocumentTitleFontFamily = function (value) {
            Skin.DocumentTitleFontFamily = value;
        };
        Skin.GetDocumentTitleFontFamily = function () {
            return Skin.DocumentTitleFontFamily;
        };
        Skin.SetDocumentTitleBarHeight = function (value) {
            Skin.DocumentTitleBarHeight = value;
        };
        Skin.GetDocumentTitleBarHeight = function () {
            return Skin.DocumentTitleBarHeight;
        };
        Skin.SetDocumentTitleBarButtonColor = function (value) {
            Skin.DocumentTitleBarButtonColor = value;
        };
        Skin.GetDocumentTitleBarButtonColor = function () {
            return Skin.DocumentTitleBarButtonColor;
        };
        Skin.SetDocumentTitleBarButtonColorOnMouseOver = function (value) {
            Skin.DocumentTitleBarButtonColorOnMouseOver = value;
        };
        Skin.GetDocumentTitleBarButtonColorOnMouseOver = function () {
            return Skin.DocumentTitleBarButtonColorOnMouseOver;
        };
        Skin.SetDocumentTitleBarDisabledButtonColor = function (value) {
            Skin.DocumentTitleBarDisabledButtonColor = value;
        };
        Skin.GetDocumentTitleBarDisabledButtonColor = function () {
            return Skin.DocumentTitleBarDisabledButtonColor;
        };
        Skin.SetLabelColor = function (value) {
            Skin.LabelColor = value;
        };
        Skin.GetLabelColor = function () {
            return Skin.LabelColor;
        };
        Skin.SetLabelBackColor = function (value) {
            Skin.LabelBackColor = value;
        };
        Skin.GetLabelBackColor = function () {
            return Skin.LabelBackColor;
        };
        Skin.SetLabelLinkColor = function (value) {
            Skin.LabelLinkColor = value;
        };
        Skin.GetLabelLinkColor = function () {
            return Skin.LabelLinkColor;
        };
        Skin.SetLabelWidth = function (value) {
            Skin.LabelWidth = value;
        };
        Skin.GetLabelWidth = function () {
            return Skin.LabelWidth;
        };
        Skin.GetLabelTypeWidth = function () {
            return Skin.LabelTypeWidth;
        };
        Skin.SetLabelHeight = function (value) {
            Skin.LabelHeight = value;
        };
        Skin.GetLabelHeight = function () {
            return Skin.LabelHeight;
        };
        Skin.SetLabelFontSize = function (value) {
            Skin.LabelFontSize = value;
        };
        Skin.GetLabelFontSize = function () {
            return Skin.LabelFontSize;
        };
        Skin.SetLabelFontFamily = function (value) {
            Skin.LabelFontFamily = value;
        };
        Skin.GetLabelFontFamily = function () {
            return Skin.LabelFontFamily;
        };
        Skin.SetLabelDisabledColor = function (value) {
            Skin.LabelDisabledColor = value;
        };
        Skin.GetLabelDisabledColor = function () {
            return Skin.LabelDisabledColor;
        };
        Skin.SetBoxBorderColor = function (value) {
            Skin.BoxBorderColor = value;
        };
        Skin.GetBoxBorderColor = function () {
            return Skin.BoxBorderColor;
        };
        Skin.SetBoxFillColor = function (value) {
            Skin.BoxFillColor = value;
        };
        Skin.GetBoxFillColor = function () {
            return Skin.BoxFillColor;
        };
        Skin.SetBoxBorderWidth = function (value) {
            Skin.BoxBorderWidth = value;
        };
        Skin.GetBoxBorderWidth = function () {
            return Skin.BoxBorderWidth;
        };
        Skin.SetEllipseBorderColor = function (value) {
            Skin.EllipseBorderColor = value;
        };
        Skin.GetEllipseBorderColor = function () {
            return Skin.EllipseBorderColor;
        };
        Skin.SetEllipseFillColor = function (value) {
            Skin.EllipseFillColor = value;
        };
        Skin.GetEllipseFillColor = function () {
            return Skin.EllipseFillColor;
        };
        Skin.SetEllipseBorderWidth = function (value) {
            Skin.EllipseBorderWidth = value;
        };
        Skin.GetEllipseBorderWidth = function () {
            return Skin.EllipseBorderWidth;
        };
        Skin.SetCheckBoxWidth = function (value) {
            Skin.CheckBoxWidth = value;
        };
        Skin.GetCheckBoxWidth = function () {
            return Skin.CheckBoxWidth;
        };
        Skin.SetCheckBoxHeight = function (value) {
            Skin.CheckBoxHeight = value;
        };
        Skin.GetCheckBoxHeight = function () {
            return Skin.CheckBoxHeight;
        };
        Skin.GetCheckBoxFontSize = function () {
            return Skin.CheckBoxFontSize;
        };
        Skin.SetCheckBoxFontFamily = function (value) {
            Skin.CheckBoxFontFamily = value;
        };
        Skin.GetCheckBoxFontFamily = function () {
            return Skin.CheckBoxFontFamily;
        };
        Skin.SetCheckBoxColor = function (value) {
            Skin.CheckBoxColor = value;
        };
        Skin.GetCheckBoxColor = function () {
            return Skin.CheckBoxColor;
        };
        Skin.SetCheckBoxBackColor = function (value) {
            Skin.CheckBoxBackColor = value;
        };
        Skin.GetCheckBoxBackColor = function () {
            return Skin.CheckBoxBackColor;
        };
        Skin.SetCheckBoxDisabledColor = function (value) {
            Skin.CheckBoxDisabledColor = value;
        };
        Skin.GetCheckBoxDisabledColor = function () {
            return Skin.CheckBoxDisabledColor;
        };
        Skin.SetRadioButtonWidth = function (value) {
            Skin.RadioButtonWidth = value;
        };
        Skin.GetRadioButtonWidth = function () {
            return Skin.RadioButtonWidth;
        };
        Skin.SetRadioButtonHeight = function (value) {
            Skin.RadioButtonHeight = value;
        };
        Skin.GetRadioButtonHeight = function () {
            return Skin.RadioButtonHeight;
        };
        Skin.GetRadioButtonFontSize = function () {
            return Skin.RadioButtonFontSize;
        };
        Skin.SetRadioButtonFontFamily = function (value) {
            Skin.RadioButtonFontFamily = value;
        };
        Skin.GetRadioButtonFontFamily = function () {
            return Skin.RadioButtonFontFamily;
        };
        Skin.SetRadioButtonColor = function (value) {
            Skin.RadioButtonColor = value;
        };
        Skin.GetRadioButtonColor = function () {
            return Skin.RadioButtonColor;
        };
        Skin.SetRadioButtonBackColor = function (value) {
            Skin.RadioButtonBackColor = value;
        };
        Skin.GetRadioButtonBackColor = function () {
            return Skin.RadioButtonBackColor;
        };
        Skin.SetRadioButtonDisabledColor = function (value) {
            Skin.RadioButtonDisabledColor = value;
        };
        Skin.GetRadioButtonDisabledColor = function () {
            return Skin.RadioButtonDisabledColor;
        };
        Skin.SetComboBoxWidth = function (value) {
            Skin.ComboBoxWidth = value;
        };
        Skin.GetComboBoxWidth = function () {
            return Skin.ComboBoxWidth;
        };
        Skin.SetComboBoxHeight = function (value) {
            Skin.ComboBoxHeight = value;
        };
        Skin.GetComboBoxHeight = function () {
            return Skin.ComboBoxHeight;
        };
        Skin.GetComboBoxLineHeight = function () {
            return Skin.ComboBoxLineHeight;
        };
        Skin.SetComboBoxFontSize = function (value) {
            Skin.ComboBoxFontSize = value;
        };
        Skin.GetComboBoxFontSize = function () {
            return Skin.ComboBoxFontSize;
        };
        Skin.SetComboBoxFontFamily = function (value) {
            Skin.ComboBoxFontFamily = value;
        };
        Skin.GetComboBoxFontFamily = function () {
            return Skin.ComboBoxFontFamily;
        };
        Skin.SetComboBoxColor = function (value) {
            Skin.ComboBoxColor = value;
        };
        Skin.GetComboBoxColor = function () {
            return Skin.ComboBoxColor;
        };
        Skin.SetComboBoxFromBackColor = function (value) {
            Skin.ComboBoxFromBackColor = value;
        };
        Skin.GetComboBoxFromBackColor = function () {
            return Skin.ComboBoxFromBackColor;
        };
        Skin.SetComboBoxToBackColor = function (value) {
            Skin.ComboBoxToBackColor = value;
        };
        Skin.GetComboBoxToBackColor = function () {
            return Skin.ComboBoxToBackColor;
        };
        Skin.SetComboBoxBackColor = function (value) {
            Skin.ComboBoxFromBackColor = value;
            Skin.ComboBoxToBackColor = value;
        };
        Skin.GetComboBoxBackColor = function () {
            return Skin.ComboBoxFromBackColor;
        };
        Skin.SetComboBoxListBoxColor = function (value) {
            Skin.ComboBoxListBoxColor = value;
        };
        Skin.GetComboBoxListBoxColor = function () {
            return Skin.ComboBoxListBoxColor;
        };
        Skin.SetComboBoxListBoxBackColor = function (value) {
            Skin.ComboBoxListBoxBackColor = value;
        };
        Skin.GetComboBoxListBoxBackColor = function () {
            return Skin.ComboBoxListBoxBackColor;
        };
        Skin.SetComboBoxDisabledColor = function (value) {
            Skin.ComboBoxDisabledColor = value;
        };
        Skin.GetComboBoxDisabledColor = function () {
            return Skin.ComboBoxDisabledColor;
        };
        Skin.SetComboBoxDisabledFromBackColor = function (value) {
            Skin.ComboBoxDisabledFromBackColor = value;
        };
        Skin.GetComboBoxDisabledFromBackColor = function () {
            return Skin.ComboBoxDisabledFromBackColor;
        };
        Skin.SetComboBoxDisabledToBackColor = function (value) {
            Skin.ComboBoxDisabledToBackColor = value;
        };
        Skin.GetComboBoxDisabledToBackColor = function () {
            return Skin.ComboBoxDisabledToBackColor;
        };
        Skin.SetComboBoxDisabledListBoxFromBackColor = function (value) {
            Skin.ComboBoxDisabledListBoxFromBackColor = value;
        };
        Skin.GetComboBoxDisabledListBoxFromBackColor = function () {
            return Skin.ComboBoxDisabledListBoxFromBackColor;
        };
        Skin.SetComboBoxDisabledListBoxToBackColor = function (value) {
            Skin.ComboBoxDisabledListBoxToBackColor = value;
        };
        Skin.GetComboBoxDisabledListBoxToBackColor = function () {
            return Skin.ComboBoxDisabledListBoxToBackColor;
        };
        Skin.SetTextBoxWidth = function (value) {
            Skin.TextBoxWidth = value;
        };
        Skin.GetTextBoxWidth = function () {
            return Skin.TextBoxWidth;
        };
        Skin.SetTextBoxHeight = function (value) {
            Skin.TextBoxHeight = value;
        };
        Skin.GetTextBoxHeight = function () {
            return Skin.TextBoxHeight;
        };
        Skin.SetTextBoxFontSize = function (value) {
            Skin.TextBoxFontSize = value;
        };
        Skin.GetTextBoxFontSize = function () {
            return Skin.TextBoxFontSize;
        };
        Skin.SetTextBoxFontFamily = function (value) {
            Skin.TextBoxFontFamily = value;
        };
        Skin.GetTextBoxFontFamily = function () {
            return Skin.TextBoxFontFamily;
        };
        Skin.SetTextBoxColor = function (value) {
            Skin.TextBoxColor = value;
        };
        Skin.GetTextBoxColor = function () {
            return Skin.TextBoxColor;
        };
        Skin.SetTextBoxBackColor = function (value) {
            Skin.TextBoxBackColor = value;
        };
        Skin.GetTextBoxBackColor = function () {
            return Skin.TextBoxBackColor;
        };
        Skin.SetTextBoxDisabledColor = function (value) {
            Skin.TextBoxDisabledColor = value;
        };
        Skin.GetTextBoxDisabledColor = function () {
            return Skin.TextBoxDisabledColor;
        };
        Skin.SetTextBoxDisabledFlagColor = function (value) {
            Skin.TextBoxDisabledFlagColor = value;
        };
        Skin.GetTextBoxDisabledFlagColor = function () {
            return Skin.TextBoxDisabledFlagColor;
        };
        Skin.SetTextBoxBorderColor = function (value) {
            Skin.TextBoxBorderColor = value;
        };
        Skin.GetTextBoxBorderColor = function () {
            return Skin.TextBoxBorderColor;
        };
        Skin.SetTextBoxReadyColor = function (value) {
            Skin.TextBoxReadyColor = value;
        };
        Skin.GetTextBoxReadyColor = function () {
            return Skin.TextBoxReadyColor;
        };
        Skin.SetTextBoxNotReadyColor = function (value) {
            Skin.TextBoxNotReadyColor = value;
        };
        Skin.GetTextBoxNotReadyColor = function () {
            return Skin.TextBoxNotReadyColor;
        };
        Skin.SetButtonWidth = function (value) {
            Skin.ButtonWidth = value;
        };
        Skin.GetButtonWidth = function () {
            return Skin.ButtonWidth;
        };
        Skin.SetButtonHeight = function (value) {
            Skin.ButtonHeight = value;
        };
        Skin.GetButtonHeight = function () {
            return Skin.ButtonHeight;
        };
        Skin.SetButtonFontSize = function (value) {
            Skin.ButtonFontSize = value;
        };
        Skin.GetButtonFontSize = function () {
            return Skin.ButtonFontSize;
        };
        Skin.SetButtonFontFamily = function (value) {
            Skin.ButtonFontFamily = value;
        };
        Skin.GetButtonFontFamily = function () {
            return Skin.ButtonFontFamily;
        };
        Skin.SetButtonColor = function (value) {
            Skin.ButtonColor = value;
        };
        Skin.GetButtonColor = function () {
            return Skin.ButtonColor;
        };
        Skin.SetButtonFromBackColor = function (value) {
            Skin.ButtonFromBackColor = value;
        };
        Skin.GetButtonFromBackColor = function () {
            return Skin.ButtonFromBackColor;
        };
        Skin.SetButtonToBackColor = function (value) {
            Skin.ButtonToBackColor = value;
        };
        Skin.GetButtonToBackColor = function () {
            return Skin.ButtonToBackColor;
        };
        Skin.SetButtonBackColor = function (value) {
            Skin.ButtonFromBackColor = value;
            Skin.ButtonToBackColor = value;
        };
        Skin.GetButtonBackColor = function () {
            return Skin.ButtonFromBackColor;
        };
        Skin.SetButtonColorOnMouseOver = function (value) {
            Skin.ButtonColorOnMouseOver = value;
        };
        Skin.GetButtonColorOnMouseOver = function () {
            return Skin.ButtonColorOnMouseOver;
        };
        Skin.SetButtonFromBackColorOnMouseOver = function (value) {
            Skin.ButtonFromBackColorOnMouseOver = value;
        };
        Skin.GetButtonFromBackColorOnMouseOver = function () {
            return Skin.ButtonFromBackColorOnMouseOver;
        };
        Skin.SetButtonToBackColorOnMouseOver = function (value) {
            Skin.ButtonToBackColorOnMouseOver = value;
        };
        Skin.GetButtonToBackColorOnMouseOver = function () {
            return Skin.ButtonToBackColorOnMouseOver;
        };
        Skin.SetButtonBackColorOnMouseOver = function (value) {
            Skin.ButtonFromBackColorOnMouseOver = value;
            Skin.ButtonToBackColorOnMouseOver = value;
        };
        Skin.GetButtonBackColorOnMouseOver = function () {
            return Skin.ButtonFromBackColorOnMouseOver;
        };
        Skin.SetButtonBorderColor = function (value) {
            Skin.ButtonBorderTopColor = value;
            Skin.ButtonBorderRightColor = value;
            Skin.ButtonBorderBottomColor = value;
            Skin.ButtonBorderLeftColor = value;
        };
        Skin.GetButtonBorderColor = function () {
            if (Skin.ButtonBorderTopColor === Skin.ButtonBorderRightColor && Skin.ButtonBorderTopColor === Skin.ButtonBorderBottomColor && Skin.ButtonBorderTopColor === Skin.ButtonBorderLeftColor) {
                return Skin.ButtonBorderTopColor;
            }
            else {
                false;
            }
        };
        Skin.SetButtonBorderTopColor = function (value) {
            Skin.ButtonBorderTopColor = value;
        };
        Skin.GetButtonBorderTopColor = function () {
            return Skin.ButtonBorderTopColor;
        };
        Skin.SetButtonBorderRightColor = function (value) {
            Skin.ButtonBorderRightColor = value;
        };
        Skin.GetButtonBorderRightColor = function () {
            return Skin.ButtonBorderRightColor;
        };
        Skin.SetButtonBorderBottomColor = function (value) {
            Skin.ButtonBorderBottomColor = value;
        };
        Skin.GetButtonBorderBottomColor = function () {
            return Skin.ButtonBorderBottomColor;
        };
        Skin.SetButtonBorderLeftColor = function (value) {
            Skin.ButtonBorderLeftColor = value;
        };
        Skin.GetButtonBorderLeftColor = function () {
            return Skin.ButtonBorderLeftColor;
        };
        Skin.SetButtonRadius = function (value) {
            Skin.ButtonTopLeftRadius = value;
            Skin.ButtonTopRightRadius = value;
            Skin.ButtonBottomLeftRadius = value;
            Skin.ButtonBottomRightRadius = value;
        };
        Skin.GetButtonRadius = function () {
            if (Skin.ButtonTopLeftRadius === Skin.ButtonTopRightRadius && Skin.ButtonTopLeftRadius === Skin.ButtonBottomLeftRadius && Skin.ButtonTopLeftRadius === Skin.ButtonBottomRightRadius) {
                return Skin.ButtonTopLeftRadius;
            }
            else {
                false;
            }
        };
        Skin.SetButtonTopLeftRadius = function (value) {
            Skin.ButtonTopLeftRadius = value;
        };
        Skin.GetButtonTopLeftRadius = function () {
            return Skin.ButtonTopLeftRadius;
        };
        Skin.SetButtonTopRightRadius = function (value) {
            Skin.ButtonTopRightRadius = value;
        };
        Skin.GetButtonTopRightRadius = function () {
            return Skin.ButtonTopRightRadius;
        };
        Skin.SetButtonBottomLeftRadius = function (value) {
            Skin.ButtonBottomLeftRadius = value;
        };
        Skin.GetButtonBottomLeftRadius = function () {
            return Skin.ButtonBottomLeftRadius;
        };
        Skin.SetButtonBottomRightRadius = function (value) {
            Skin.ButtonBottomRightRadius = value;
        };
        Skin.GetButtonBottomRightRadius = function () {
            return Skin.ButtonBottomRightRadius;
        };
        Skin.SetButtonTopBorderWidth = function (value) {
            Skin.ButtonTopBorderWidth = value;
        };
        Skin.GetButtonTopBorderWidth = function () {
            return Skin.ButtonTopBorderWidth;
        };
        Skin.SetButtonRightBorderWidth = function (value) {
            Skin.ButtonRightBorderWidth = value;
        };
        Skin.GetButtonRightBorderWidth = function () {
            return Skin.ButtonRightBorderWidth;
        };
        Skin.SetButtonBottomBorderWidth = function (value) {
            Skin.ButtonBottomBorderWidth = value;
        };
        Skin.GetButtonBottomBorderWidth = function () {
            return Skin.ButtonBottomBorderWidth;
        };
        Skin.SetButtonLeftBorderWidth = function (value) {
            Skin.ButtonLeftBorderWidth = value;
        };
        Skin.GetButtonLeftBorderWidth = function () {
            return Skin.ButtonLeftBorderWidth;
        };
        Skin.SetButtonBorderWidth = function (value) {
            Skin.ButtonTopBorderWidth = value;
            Skin.ButtonRightBorderWidth = value;
            Skin.ButtonBottomBorderWidth = value;
            Skin.ButtonLeftBorderWidth = value;
        };
        Skin.GetButtonBorderWidth = function () {
            if (Skin.ButtonTopBorderWidth == Skin.ButtonRightBorderWidth && Skin.ButtonTopBorderWidth == Skin.ButtonBottomBorderWidth && Skin.ButtonTopBorderWidth == Skin.ButtonLeftBorderWidth) {
                return Skin.ButtonTopBorderWidth;
            }
            else {
                return false;
            }
        };
        Skin.SetButtonDisabledColor = function (value) {
            Skin.ButtonDisabledColor = value;
        };
        Skin.GetButtonDisabledColor = function () {
            return Skin.ButtonDisabledColor;
        };
        Skin.SetButtonDisabledFromBackColor = function (value) {
            Skin.ButtonDisabledFromBackColor = value;
        };
        Skin.GetButtonDisabledFromBackColor = function () {
            return Skin.ButtonDisabledFromBackColor;
        };
        Skin.SetButtonDisabledToBackColor = function (value) {
            Skin.ButtonDisabledToBackColor = value;
        };
        Skin.GetButtonDisabledToBackColor = function () {
            return Skin.ButtonDisabledToBackColor;
        };
        Skin.SetFileWidth = function (value) {
            Skin.FileWidth = value;
        };
        Skin.GetFileWidth = function () {
            return Skin.FileWidth;
        };
        Skin.SetFileHeight = function (value) {
            Skin.FileHeight = value;
        };
        Skin.GetFileHeight = function () {
            return Skin.FileHeight;
        };
        Skin.SetFileFontSize = function (value) {
            Skin.FileFontSize = value;
        };
        Skin.GetFileFontSize = function () {
            return Skin.FileFontSize;
        };
        Skin.SetFileFontFamily = function (value) {
            Skin.FileFontFamily = value;
        };
        Skin.GetFileFontFamily = function () {
            return Skin.FileFontFamily;
        };
        Skin.SetFileColor = function (value) {
            Skin.FileColor = value;
        };
        Skin.GetFileColor = function () {
            return Skin.FileColor;
        };
        Skin.SetFileBackColor = function (value) {
            Skin.FileBackColor = value;
        };
        Skin.GetFileBackColor = function () {
            return Skin.FileBackColor;
        };
        Skin.SetFileDisabledColor = function (value) {
            Skin.FileDisabledColor = value;
        };
        Skin.GetFileDisabledColor = function () {
            return Skin.FileDisabledColor;
        };
        Skin.SetFileDisabledBackColor = function (value) {
            Skin.FileDisabledBackColor = value;
        };
        Skin.GetFileDisabledBackColor = function () {
            return Skin.FileDisabledBackColor;
        };
        Skin.SetImageColor = function (value) {
            Skin.ImageColor = value;
        };
        Skin.GetImageColor = function () {
            return Skin.ImageColor;
        };
        Skin.SetImageBackColor = function (value) {
            Skin.ImageBackColor = value;
        };
        Skin.GetImageBackColor = function () {
            return Skin.ImageBackColor;
        };
        Skin.SetDivBorderColor = function (value) {
            Skin.DivBorderColor = value;
        };
        Skin.GetDivBorderColor = function () {
            return Skin.DivBorderColor;
        };
        Skin.SetDivFillColor = function (value) {
            Skin.DivFillColor = value;
        };
        Skin.GetDivFillColor = function () {
            return Skin.DivFillColor;
        };
        Skin.SetDivBorderWidth = function (value) {
            Skin.DivBorderWidth = value;
        };
        Skin.GetDivBorderWidth = function () {
            return Skin.DivBorderWidth;
        };
        Skin.SetMenuHeight = function (value) {
            Skin.MenuHeight = value;
        };
        Skin.GetMenuHeight = function () {
            return Skin.MenuHeight;
        };
        Skin.SetMenuFontSize = function (value) {
            Skin.MenuFontSize = value;
        };
        Skin.GetMenuFontSize = function () {
            return Skin.MenuFontSize;
        };
        Skin.SetMenuFontFamily = function (value) {
            Skin.MenuFontFamily = value;
        };
        Skin.GetMenuFontFamily = function () {
            return Skin.MenuFontFamily;
        };
        Skin.SetMenuColor = function (value) {
            Skin.MenuColor = value;
        };
        Skin.GetMenuColor = function () {
            return Skin.MenuColor;
        };
        Skin.SetMenuBackColor = function (value) {
            Skin.MenuBackColor = value;
        };
        Skin.GetMenuBackColor = function () {
            return Skin.MenuBackColor;
        };
        Skin.SetMenuDisabledColor = function (value) {
            Skin.MenuDisabledColor = value;
        };
        Skin.GetMenuDisabledColor = function () {
            return Skin.MenuDisabledColor;
        };
        Skin.SetMenuDisabledBackColor = function (value) {
            Skin.MenuDisabledBackColor = value;
        };
        Skin.GetMenuDisabledBackColor = function () {
            return Skin.MenuDisabledBackColor;
        };
        Skin.SetMenuColorOnMouseOver = function (value) {
            Skin.MenuColorOnMouseOver = value;
        };
        Skin.GetMenuColorOnMouseOver = function () {
            return Skin.MenuColorOnMouseOver;
        };
        Skin.SetMenuBackColorOnMouseOver = function (value) {
            Skin.MenuBackColorOnMouseOver = value;
        };
        Skin.GetMenuBackColorOnMouseOver = function () {
            return Skin.MenuBackColorOnMouseOver;
        };
        Skin.SetPulldownMenuBorderColor = function (value) {
            Skin.PulldownMenuBorderColor = value;
        };
        Skin.GetPulldownMenuBorderColor = function () {
            return Skin.PulldownMenuBorderColor;
        };
        Skin.SciToolBackColor = StandardSkin.SciToolBackColor;
        Skin.SciToolTexture = StandardSkin.SciToolTexture;
        Skin.SciToolBackgroundImage = StandardSkin.SciToolBackgroundImage;
        Skin.SciToolBackgroundPositionX = StandardSkin.SciToolBackgroundPositionX;
        Skin.SciToolBackgroundPositionY = StandardSkin.SciToolBackgroundPositionY;
        Skin.SciToolBackgroundAttachment = StandardSkin.SciToolBackgroundAttachment;
        Skin.SciToolBackgroundRepeat = StandardSkin.SciToolBackgroundRepeat;
        Skin.ToolBoxShow = StandardSkin.ToolBoxShow;
        Skin.ToolBoxHideAutomatically = StandardSkin.ToolBoxHideAutomatically;
        Skin.ToolBoxWindowPickupDropIcons = StandardSkin.ToolBoxWindowPickupDropIcons;
        Skin.ToolBoxWindowOrganizationIcons = StandardSkin.ToolBoxWindowOrganizationIcons;
        Skin.ToolBoxTableIcons = StandardSkin.ToolBoxTableIcons;
        Skin.ToolBoxColor = StandardSkin.ToolBoxColor;
        Skin.ToolBoxIconColor = StandardSkin.ToolBoxIconColor;
        Skin.ToolBoxIconDisabledColor = StandardSkin.ToolBoxIconDisabledColor;
        Skin.ToolBoxTop = StandardSkin.ToolBoxTop;
        Skin.StatusBarHeight = StandardSkin.StatusBarHeight;
        Skin.StatusBarColor = StandardSkin.StatusBarColor;
        Skin.StatusBarBackColor = StandardSkin.StatusBarBackColor;
        Skin.StatusBarFontSize = StandardSkin.StatusBarFontSize;
        Skin.StatusBarFontFamily = StandardSkin.StatusBarFontFamily;
        Skin.StatusBarSuccessColor = StandardSkin.StatusBarSuccessColor;
        Skin.StatusBarSuccessBackColor = StandardSkin.StatusBarSuccessBackColor;
        Skin.StatusBarUnsuccessColor = StandardSkin.StatusBarUnsuccessColor;
        Skin.StatusBarUnsuccessBackColor = StandardSkin.StatusBarUnsuccessBackColor;
        Skin.StatusBarNoticeColor = StandardSkin.StatusBarNoticeColor;
        Skin.StatusBarNoticeBackColor = StandardSkin.StatusBarNoticeBackColor;
        Skin.StatusBarWarningColor = StandardSkin.StatusBarWarningColor;
        Skin.StatusBarWarningBackColor = StandardSkin.StatusBarWarningBackColor;
        Skin.StatusBarTimeToResetColor = StandardSkin.StatusBarTimeToResetColor;
        Skin.DocumentBorderColor = StandardSkin.DocumentBorderColor;
        Skin.DocumentTitleBarFontColor = StandardSkin.DocumentTitleBarFontColor;
        Skin.DocumentTitleBarColor = StandardSkin.DocumentTitleBarColor;
        Skin.DocumentColor = StandardSkin.DocumentColor;
        Skin.DocumentBorderWidth = StandardSkin.DocumentBorderWidth;
        Skin.DocumentBorderRadius = StandardSkin.DocumentBorderRadius;
        Skin.DocumentDisabledTitleBarFontColor = StandardSkin.DocumentDisabledTitleBarFontColor;
        Skin.DocumentDisabledTitleBarColor = StandardSkin.DocumentDisabledTitleBarColor;
        Skin.DocumentTitleFontSize = StandardSkin.DocumentTitleFontSize;
        Skin.DocumentTitleFontFamily = StandardSkin.DocumentTitleFontFamily;
        Skin.DocumentTitleBarHeight = StandardSkin.DocumentTitleBarHeight;
        Skin.DocumentTitleBarButtonColor = StandardSkin.DocumentTitleBarButtonColor;
        Skin.DocumentTitleBarButtonColorOnMouseOver = StandardSkin.DocumentTitleBarButtonColorOnMouseOver;
        Skin.DocumentTitleBarDisabledButtonColor = StandardSkin.DocumentTitleBarDisabledButtonColor;
        Skin.LabelColor = StandardSkin.LabelColor;
        Skin.LabelBackColor = StandardSkin.LabelBackColor;
        Skin.LabelTypeWidth = StandardSkin.LabelTypeWidth;
        Skin.LabelWidth = StandardSkin.LabelWidth;
        Skin.LabelHeight = StandardSkin.LabelHeight;
        Skin.LabelFontSize = StandardSkin.LabelFontSize;
        Skin.LabelFontFamily = StandardSkin.LabelFontFamily;
        Skin.LabelLinkColor = StandardSkin.LabelLinkColor;
        Skin.LabelDisabledColor = StandardSkin.LabelDisabledColor;
        Skin.BoxBorderColor = StandardSkin.BoxBorderColor;
        Skin.BoxFillColor = StandardSkin.BoxFillColor;
        Skin.BoxBorderWidth = StandardSkin.BoxBorderWidth;
        Skin.EllipseBorderColor = StandardSkin.EllipseBorderColor;
        Skin.EllipseFillColor = StandardSkin.EllipseFillColor;
        Skin.EllipseBorderWidth = StandardSkin.EllipseBorderWidth;
        Skin.CheckBoxWidth = StandardSkin.CheckBoxWidth;
        Skin.CheckBoxHeight = StandardSkin.CheckBoxHeight;
        Skin.CheckBoxFontSize = StandardSkin.CheckBoxFontSize;
        Skin.CheckBoxFontFamily = StandardSkin.CheckBoxFontFamily;
        Skin.CheckBoxColor = StandardSkin.CheckBoxColor;
        Skin.CheckBoxBackColor = StandardSkin.CheckBoxBackColor;
        Skin.CheckBoxDisabledColor = StandardSkin.CheckBoxDisabledColor;
        Skin.RadioButtonWidth = StandardSkin.RadioButtonWidth;
        Skin.RadioButtonHeight = StandardSkin.RadioButtonHeight;
        Skin.RadioButtonFontSize = StandardSkin.RadioButtonFontSize;
        Skin.RadioButtonFontFamily = StandardSkin.RadioButtonFontFamily;
        Skin.RadioButtonColor = StandardSkin.RadioButtonColor;
        Skin.RadioButtonBackColor = StandardSkin.RadioButtonBackColor;
        Skin.RadioButtonDisabledColor = StandardSkin.RadioButtonDisabledColor;
        Skin.ComboBoxWidth = StandardSkin.ComboBoxWidth;
        Skin.ComboBoxHeight = StandardSkin.ComboBoxHeight;
        Skin.ComboBoxLineHeight = StandardSkin.ComboBoxLineHeight;
        Skin.ComboBoxFontSize = StandardSkin.ComboBoxFontSize;
        Skin.ComboBoxFontFamily = StandardSkin.ComboBoxFontFamily;
        Skin.ComboBoxColor = StandardSkin.ComboBoxColor;
        Skin.ComboBoxFromBackColor = StandardSkin.ComboBoxFromBackColor;
        Skin.ComboBoxToBackColor = StandardSkin.ComboBoxToBackColor;
        Skin.ComboBoxListBoxColor = StandardSkin.ComboBoxListBoxColor;
        Skin.ComboBoxListBoxBackColor = StandardSkin.ComboBoxListBoxBackColor;
        Skin.ComboBoxDisabledColor = StandardSkin.ComboBoxDisabledColor;
        Skin.ComboBoxDisabledFromBackColor = StandardSkin.ComboBoxDisabledFromBackColor;
        Skin.ComboBoxDisabledToBackColor = StandardSkin.ComboBoxDisabledToBackColor;
        Skin.ComboBoxDisabledListBoxFromBackColor = StandardSkin.ComboBoxDisabledListBoxFromBackColor;
        Skin.ComboBoxDisabledListBoxToBackColor = StandardSkin.ComboBoxDisabledListBoxToBackColor;
        Skin.TextBoxWidth = StandardSkin.TextBoxWidth;
        Skin.TextBoxHeight = StandardSkin.TextBoxHeight;
        Skin.TextBoxFontSize = StandardSkin.TextBoxFontSize;
        Skin.TextBoxFontFamily = StandardSkin.TextBoxFontFamily;
        Skin.TextBoxColor = StandardSkin.TextBoxColor;
        Skin.TextBoxBackColor = StandardSkin.TextBoxBackColor;
        Skin.TextBoxDisabledColor = StandardSkin.TextBoxDisabledColor;
        Skin.TextBoxDisabledFlagColor = StandardSkin.TextBoxDisabledFlagColor;
        Skin.TextBoxBorderColor = StandardSkin.TextBoxBorderColor;
        Skin.TextBoxReadyColor = StandardSkin.TextBoxReadyColor;
        Skin.TextBoxNotReadyColor = StandardSkin.TextBoxNotReadyColor;
        Skin.ButtonWidth = StandardSkin.ButtonWidth;
        Skin.ButtonHeight = StandardSkin.ButtonHeight;
        Skin.ButtonFontSize = StandardSkin.ButtonFontSize;
        Skin.ButtonFontFamily = StandardSkin.ButtonFontFamily;
        Skin.ButtonColor = StandardSkin.ButtonColor;
        Skin.ButtonFromBackColor = StandardSkin.ButtonFromBackColor;
        Skin.ButtonToBackColor = StandardSkin.ButtonToBackColor;
        Skin.ButtonColorOnMouseOver = StandardSkin.ButtonColorOnMouseOver;
        Skin.ButtonFromBackColorOnMouseOver = StandardSkin.ButtonFromBackColorOnMouseOver;
        Skin.ButtonToBackColorOnMouseOver = StandardSkin.ButtonToBackColorOnMouseOver;
        Skin.ButtonBorderTopColor = StandardSkin.ButtonBorderTopColor;
        Skin.ButtonBorderRightColor = StandardSkin.ButtonBorderRightColor;
        Skin.ButtonBorderBottomColor = StandardSkin.ButtonBorderBottomColor;
        Skin.ButtonBorderLeftColor = StandardSkin.ButtonBorderLeftColor;
        Skin.ButtonTopLeftRadius = StandardSkin.ButtonTopLeftRadius;
        Skin.ButtonTopRightRadius = StandardSkin.ButtonTopRightRadius;
        Skin.ButtonBottomLeftRadius = StandardSkin.ButtonBottomLeftRadius;
        Skin.ButtonBottomRightRadius = StandardSkin.ButtonBottomRightRadius;
        Skin.ButtonTopBorderWidth = StandardSkin.ButtonTopBorderWidth;
        Skin.ButtonRightBorderWidth = StandardSkin.ButtonRightBorderWidth;
        Skin.ButtonBottomBorderWidth = StandardSkin.ButtonBottomBorderWidth;
        Skin.ButtonLeftBorderWidth = StandardSkin.ButtonLeftBorderWidth;
        Skin.ButtonDisabledColor = StandardSkin.ButtonDisabledColor;
        Skin.ButtonDisabledFromBackColor = StandardSkin.ButtonDisabledFromBackColor;
        Skin.ButtonDisabledToBackColor = StandardSkin.ButtonDisabledToBackColor;
        Skin.FileWidth = StandardSkin.FileWidth;
        Skin.FileHeight = StandardSkin.FileHeight;
        Skin.FileFontSize = StandardSkin.FileFontSize;
        Skin.FileFontFamily = StandardSkin.FileFontFamily;
        Skin.FileColor = StandardSkin.FileColor;
        Skin.FileBackColor = StandardSkin.FileBackColor;
        Skin.FileDisabledColor = StandardSkin.FileDisabledColor;
        Skin.FileDisabledBackColor = StandardSkin.FileDisabledBackColor;
        Skin.ImageColor = StandardSkin.ImageColor;
        Skin.ImageBackColor = StandardSkin.ImageBackColor;
        Skin.DivBorderColor = StandardSkin.DivBorderColor;
        Skin.DivFillColor = StandardSkin.DivFillColor;
        Skin.DivBorderWidth = StandardSkin.DivBorderWidth;
        Skin.MenuHeight = StandardSkin.MenuHeight;
        Skin.MenuFontSize = StandardSkin.MenuFontSize;
        Skin.MenuFontFamily = StandardSkin.MenuFontFamily;
        Skin.MenuColor = StandardSkin.MenuColor;
        Skin.MenuBackColor = StandardSkin.MenuBackColor;
        Skin.MenuDisabledColor = StandardSkin.MenuDisabledColor;
        Skin.MenuDisabledBackColor = StandardSkin.MenuDisabledBackColor;
        Skin.MenuColorOnMouseOver = StandardSkin.MenuColorOnMouseOver;
        Skin.MenuBackColorOnMouseOver = StandardSkin.MenuBackColorOnMouseOver;
        Skin.PulldownMenuBorderColor = StandardSkin.PulldownMenuBorderColor;
        return Skin;
    }());
    sci.Skin = Skin;
    function application_OnLoaded() {
        Table_private.RedrawViewFinderContent();
        //Llamar a evento que ocurre cuando se carga la página y el DOM está listo, sin esperar la carga de imágenes y otros recursos.
        try {
            window["scitool_OnLoaded"].call();
        }
        catch (e) { }
    }
    function applicationResources_OnLoaded() {
        //Llamar a evento que ocurre cuando imágenes y otros recursos fueron cargados.
        try {
            window["Resources_OnLoaded"].call();
        }
        catch (e) { }
    }
    function Begin() {
        var _this = this;
        //Textura y color de la mesa.
        document.body.style.backgroundColor = Skin.GetSciToolBackColor();
        if (Skin.GetSciToolTexture()) {
            //Líneas y puntos.
            // document.body.style.backgroundImage = "linear-gradient(rgba(220,220,220,0) 2px, transparent 1px),linear-gradient(90deg, rgba(220,220,220,0) 1px, transparent 1px),linear-gradient(rgba(220,220,220,0.4) 1px, transparent 1px),linear-gradient(90deg, rgba(220,220,220,0) 1px, transparent 1px), radial-gradient(circle 1px, rgba(160,160,160,1), rgba(160,160,160,1)," + Skin.GetSciToolBackColor() + ")";
            // document.body.style.backgroundSize = "400px 400px, 400px 400px, 4px 4px, 4px 4px, 90px 90px";
            // document.body.style.backgroundPosition = "-2px -2px, -2px -2px, -1px -1px, -1px -1px";
            //Puntos.
            document.body.style.background = "radial-gradient(circle 1px, rgba(120,120,120,1), rgba(120,120,120,1)," + Skin.GetSciToolBackColor() + ")";
            document.body.style.backgroundSize = "30px 30px";
        }
        else {
            document.body.style.backgroundImage = "";
            document.body.style.backgroundSize = "";
            document.body.style.backgroundPosition = "";
        }
        StatusBar_private.Create();
        window.addEventListener("DOMContentLoaded", application_OnLoaded);
        window.addEventListener("load", applicationResources_OnLoaded);
        window.onmousemove = function () {
            xMouse = window.event.clientX;
            yMouse = window.event.clientY;
            if ((Skin.GetToolBoxHideAutomatically() && xMouse <= 30) || (!Skin.GetToolBoxHideAutomatically())) { //Mostrar toolbox si corresponde.
                if (Skin.GetToolBoxShow()) {
                    Skin.SetToolBoxShow(true);
                }
            }
            else {
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosRecoger").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosSoltar").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosSolapado").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosHorizontal").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosVertical").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioZTitulo").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioZ").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioZInicio").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioZAdelante").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioZAtras").style.visibility = 'hidden';
                document.getElementById("divSciToolFondoToolBox").style.visibility = 'hidden';
            }
        };
        //Crear firma.
        var lblSciToolVersion = new Label("scitool", window.innerWidth - 70, window.innerHeight - 40, 0, "SciTool", "lblSciToolVersion");
        lblSciToolVersion.SetColor('#ddd');
        lblSciToolVersion.SetCrossZ(true);
        lblSciToolVersion.SetFontSize(12);
        lblSciToolVersion.SetWidth(320);
        // Crear funciones de escritorio.
        var SeparacionEntreIconos = 0;
        // Fondo de las herramientas.
        var nodoNuevo = document.createElement("DIV");
        nodoNuevo.setAttribute("id", "divSciToolFondoToolBox");
        nodoNuevo.style.setProperty("position", "fixed");
        nodoNuevo.style.zIndex = String(ZIndexIconosEscritorio);
        nodoNuevo.style.borderRadius = String(Skin.GetDocumentBorderRadius()) + "px";
        nodoNuevo.style.left = "0px";
        nodoNuevo.style.top = "0px";
        nodoNuevo.style.height = "100%";
        nodoNuevo.style.width = "42px";
        nodoNuevo.style.backgroundColor = Skin.GetToolBoxColor();
        nodoNuevo.style.outline = "0";
        // nodoNuevo.style.borderRightColor = "rgb(45,45,45)";
        // nodoNuevo.style.borderRightWidth = "1px";
        // nodoNuevo.style.borderRightStyle = "solid";
        document.body.appendChild(nodoNuevo);
        // Función Recoger documentos de mesa.
        var lblSciToolEscritorioOrdenarDocumentosRecoger = new Label("scitool", 6, Skin.GetToolBoxTop(), 0, "\u2601", "lblSciToolEscritorioOrdenarDocumentosRecoger");
        lblSciToolEscritorioOrdenarDocumentosRecoger.SetCrossZ(true);
        lblSciToolEscritorioOrdenarDocumentosRecoger.SetLink(true);
        lblSciToolEscritorioOrdenarDocumentosRecoger.SetFontSize(30);
        lblSciToolEscritorioOrdenarDocumentosRecoger.SetWidth(30);
        lblSciToolEscritorioOrdenarDocumentosRecoger.SetHeight(40);
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosRecoger").style.cursor = "default";
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosRecoger").style.color = Skin.GetToolBoxIconColor();
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosRecoger").setAttribute('title', '1 click: recoger documentos de mesa actual / pick up documents from current table\n2 clicks: recoger documentos de todas las mesas / pick up documents from all tables');
        lblSciToolEscritorioOrdenarDocumentosRecoger.SetZIndex(String(ZIndexIconosEscritorio));
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosRecoger").style.padding = "0px";
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosRecoger").style.textAlign = "center";
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosRecoger").style.setProperty("position", "fixed");
        // Recoger documentos de la mesa actual.
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosRecoger").onclick = function () {
            var documentos = Document.GetIdsStack();
            var ZActualViewFinder = Table.GetViewFinderZ();
            for (var _i = 0, documentos_1 = documentos; _i < documentos_1.length; _i++) {
                var documento = documentos_1[_i];
                if (window[documento].GetZ() === ZActualViewFinder || window[documento].GetCrossZ() === true) {
                    if (window[documento].GetDraggable()) {
                        if (!window[documento].GetRaised()) {
                            if (!window[documento].GetCancelCollecting()) {
                                try {
                                    window[documento + "_OnBeforeCollecting"].apply(_this);
                                }
                                catch (e) { }
                                window[documento].Talk(documento + "_OnBeforeCollecting");
                                window[documento].SetZ(LimboEscritorio);
                                try {
                                    window[documento + "_OnCollected"].apply(_this);
                                }
                                catch (e) { }
                                window[documento].Talk(documento + "_OnCollected");
                            }
                            // Resetear valor en false.
                            window[documento].SetCancelCollecting(false);
                        }
                    }
                }
            }
            try {
                window["Table_OnCollectedDocuments"].apply(_this);
            }
            catch (e) { }
            Table.Talk("Table_OnCollectedDocuments");
        };
        // Recoger documentos de todas las mesas.
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosRecoger").ondblclick = function () {
            var documentos = Document.GetIdsStack();
            for (var _i = 0, documentos_2 = documentos; _i < documentos_2.length; _i++) {
                var documento = documentos_2[_i];
                if ((window[documento].GetZ() !== sci.Limbo && window[documento].GetZ() !== LimboEscritorio) || window[documento].GetCrossZ() === true) {
                    if (window[documento].GetDraggable()) {
                        if (!window[documento].GetRaised()) {
                            if (!window[documento].GetCancelCollecting()) {
                                try {
                                    window[documento + "_OnBeforeCollecting"].apply(_this);
                                }
                                catch (e) { }
                                window[documento].Talk(documento + "_OnBeforeCollecting");
                                window[documento].SetZ(LimboEscritorio);
                                try {
                                    window[documento + "_OnCollected"].apply(_this);
                                }
                                catch (e) { }
                                window[documento].Talk(documento + "_OnCollected");
                            }
                            // Resetear valor en false.
                            window[documento].SetCancelCollecting(false);
                        }
                    }
                }
            }
            try {
                window["Table_OnCollectedDocuments"].apply(_this);
            }
            catch (e) { }
            Table.Talk("Table_OnCollectedDocuments");
        };
        // Función Soltar documentos recogidos.
        var lblSciToolEscritorioOrdenarDocumentosSoltar = new Label("scitool", 6, lblSciToolEscritorioOrdenarDocumentosRecoger.GetY() + lblSciToolEscritorioOrdenarDocumentosRecoger.GetHeight() + SeparacionEntreIconos - 4, 0, "\u2b0e", "lblSciToolEscritorioOrdenarDocumentosSoltar");
        lblSciToolEscritorioOrdenarDocumentosSoltar.SetCrossZ(true);
        lblSciToolEscritorioOrdenarDocumentosSoltar.SetLink(true);
        lblSciToolEscritorioOrdenarDocumentosSoltar.SetFontSize(36);
        lblSciToolEscritorioOrdenarDocumentosSoltar.SetWidth(30);
        lblSciToolEscritorioOrdenarDocumentosSoltar.SetHeight(40);
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosSoltar").style.cursor = "default";
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosSoltar").style.color = Skin.GetToolBoxIconDisabledColor();
        lblSciToolEscritorioOrdenarDocumentosSoltar.SetZIndex(String(ZIndexIconosEscritorio));
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosSoltar").style.textAlign = "center";
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosSoltar").style.setProperty("position", "fixed");
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosSoltar").setAttribute('title', 'Soltar documentos recogidos sobre la mesa actual / Drop documents collected on the current table');
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosSoltar").onclick = function () {
            var documentos = Document.GetIdsStack();
            for (var _i = 0, documentos_3 = documentos; _i < documentos_3.length; _i++) {
                var documento = documentos_3[_i];
                if (window[documento].GetZ() === LimboEscritorio) {
                    window[documento].SetZ(Table.GetViewFinderZ());
                    try {
                        window[documento + "_OnDrop"].apply(_this);
                    }
                    catch (e) { }
                    window[documento].Talk(documento + "_OnDrop");
                }
            }
            try {
                window["Table_OnDocumentsDrop"].apply(_this);
            }
            catch (e) { }
            Table.Talk("Table_OnDocumentsDrop");
        };
        // Función Despliegue del Z actualmente visible por el ViewFinder.
        var lblSciToolEscritorioZTitulo = new Label("scitool", 6, lblSciToolEscritorioOrdenarDocumentosSoltar.GetY() + lblSciToolEscritorioOrdenarDocumentosSoltar.GetHeight() + SeparacionEntreIconos + 8, 0, String(Table.GetViewFinderZ()), "lblSciToolEscritorioZTitulo");
        lblSciToolEscritorioZTitulo.SetCrossZ(true);
        lblSciToolEscritorioZTitulo.SetLink(true);
        lblSciToolEscritorioZTitulo.SetFontSize(10);
        lblSciToolEscritorioZTitulo.SetEnabled(false);
        lblSciToolEscritorioZTitulo.SetWidth(30);
        lblSciToolEscritorioZTitulo.SetHeight(10);
        lblSciToolEscritorioZTitulo.SetZIndex(String(ZIndexIconosEscritorio));
        document.getElementById("lblSciToolEscritorioZTitulo").style.textAlign = "center";
        document.getElementById("lblSciToolEscritorioZTitulo").style.color = Skin.GetToolBoxIconDisabledColor();
        document.getElementById("lblSciToolEscritorioZTitulo").innerText = "MESA";
        document.getElementById("lblSciToolEscritorioZTitulo").style.setProperty("position", "fixed");
        document.getElementById("lblSciToolEscritorioZTitulo").setAttribute('title', 'Mesa actual / Current table');
        var lblSciToolEscritorioZ = new Label("scitool", 6, lblSciToolEscritorioZTitulo.GetY() + lblSciToolEscritorioZTitulo.GetHeight() + SeparacionEntreIconos, 0, String(Table.GetViewFinderZ()), "lblSciToolEscritorioZ");
        lblSciToolEscritorioZ.SetCrossZ(true);
        lblSciToolEscritorioZ.SetLink(true);
        lblSciToolEscritorioZ.SetFontSize(18);
        lblSciToolEscritorioZ.SetEnabled(false);
        lblSciToolEscritorioZ.SetWidth(30);
        lblSciToolEscritorioZ.SetHeight(30);
        lblSciToolEscritorioZ.SetZIndex(String(ZIndexIconosEscritorio));
        document.getElementById("lblSciToolEscritorioZ").style.textAlign = "center";
        document.getElementById("lblSciToolEscritorioZ").style.color = 'rgb(226,76,50)';
        document.getElementById("lblSciToolEscritorioZ").style.setProperty("position", "fixed");
        document.getElementById("lblSciToolEscritorioZ").setAttribute('title', 'Mesa actual / Current table');
        // lblSciToolEscritorioZ.SetBackColor('rgba(255,255,255,0.8)');
        // Función ir a Z = 0.
        var lblSciToolEscritorioZInicio = new Label("scitool", 6, lblSciToolEscritorioZ.GetY() + lblSciToolEscritorioZ.GetHeight() + SeparacionEntreIconos - 6, 0, "\u2302", "lblSciToolEscritorioZInicio");
        lblSciToolEscritorioZInicio.SetCrossZ(true);
        lblSciToolEscritorioZInicio.SetLink(true);
        lblSciToolEscritorioZInicio.SetFontSize(32);
        lblSciToolEscritorioZInicio.SetWidth(30);
        lblSciToolEscritorioZInicio.SetHeight(40);
        document.getElementById("lblSciToolEscritorioZInicio").style.cursor = "default";
        lblSciToolEscritorioZInicio.SetZIndex(String(ZIndexIconosEscritorio));
        document.getElementById("lblSciToolEscritorioZInicio").style.textAlign = "center";
        document.getElementById("lblSciToolEscritorioZInicio").style.color = Skin.GetToolBoxIconColor();
        document.getElementById("lblSciToolEscritorioZInicio").style.setProperty("position", "fixed");
        document.getElementById("lblSciToolEscritorioZInicio").setAttribute('title', 'Ir a mesa inicial / Go to initial table');
        // lblSciToolEscritorioZInicio.SetBackColor('rgba(255,255,255,0.8)');
        document.getElementById("lblSciToolEscritorioZInicio").onclick = function () {
            if (Table.GetViewFinderZ() !== 0) {
                Table.ViewFinderJumpToZ(0);
                lblSciToolEscritorioZ.SetCaption("0");
            }
        };
        // Función Z adelante.
        var lblSciToolEscritorioZAdelante = new Label("scitool", 6, lblSciToolEscritorioZInicio.GetY() + lblSciToolEscritorioZInicio.GetHeight() + SeparacionEntreIconos, 0, "\u21d7", "lblSciToolEscritorioZAdelante");
        lblSciToolEscritorioZAdelante.SetCrossZ(true);
        lblSciToolEscritorioZAdelante.SetLink(true);
        lblSciToolEscritorioZAdelante.SetFontSize(32);
        lblSciToolEscritorioZAdelante.SetWidth(30);
        lblSciToolEscritorioZAdelante.SetHeight(40);
        document.getElementById("lblSciToolEscritorioZAdelante").style.cursor = "default";
        lblSciToolEscritorioZAdelante.SetZIndex(String(ZIndexIconosEscritorio));
        document.getElementById("lblSciToolEscritorioZAdelante").style.textAlign = "center";
        document.getElementById("lblSciToolEscritorioZAdelante").style.color = Skin.GetToolBoxIconColor();
        document.getElementById("lblSciToolEscritorioZAdelante").style.setProperty("position", "fixed");
        document.getElementById("lblSciToolEscritorioZAdelante").setAttribute('title', 'Ir una mesa adelante / Go a table forward');
        // lblSciToolEscritorioZAdelante.SetBackColor('rgba(255,255,255,0.8)');
        document.getElementById("lblSciToolEscritorioZAdelante").onclick = function () {
            Table.ViewFinderJumpToZ(Table.GetViewFinderZ() + 1);
            lblSciToolEscritorioZ.SetCaption(String(Table.GetViewFinderZ()));
        };
        // Función Z atrás.
        var lblSciToolEscritorioZAtras = new Label("scitool", 6, lblSciToolEscritorioZAdelante.GetY() + lblSciToolEscritorioZAdelante.GetHeight() + SeparacionEntreIconos, 0, "\u21d9", "lblSciToolEscritorioZAtras");
        lblSciToolEscritorioZAtras.SetCrossZ(true);
        lblSciToolEscritorioZAtras.SetLink(true);
        lblSciToolEscritorioZAtras.SetFontSize(32);
        lblSciToolEscritorioZAtras.SetWidth(30);
        lblSciToolEscritorioZAtras.SetHeight(40);
        document.getElementById("lblSciToolEscritorioZAtras").style.cursor = "default";
        lblSciToolEscritorioZAtras.SetZIndex(String(ZIndexIconosEscritorio));
        document.getElementById("lblSciToolEscritorioZAtras").style.textAlign = "center";
        document.getElementById("lblSciToolEscritorioZAtras").style.color = Skin.GetToolBoxIconColor();
        document.getElementById("lblSciToolEscritorioZAtras").style.setProperty("position", "fixed");
        document.getElementById("lblSciToolEscritorioZAtras").setAttribute('title', 'Ir una mesa atrás / Go a table back');
        // lblSciToolEscritorioZAtras.SetBackColor('rgba(255,255,255,0.8)');
        document.getElementById("lblSciToolEscritorioZAtras").onclick = function () {
            Table.ViewFinderJumpToZ(Table.GetViewFinderZ() - 1);
            lblSciToolEscritorioZ.SetCaption(String(Table.GetViewFinderZ()));
        };
        // Función Organizar documentos solapadamente.
        var lblSciToolEscritorioOrdenarDocumentosSolapado = new Label("scitool", 6, lblSciToolEscritorioZAtras.GetY() + lblSciToolEscritorioZAtras.GetHeight() + SeparacionEntreIconos, 0, "\u25f0", "lblSciToolEscritorioOrdenarDocumentosSolapado");
        lblSciToolEscritorioOrdenarDocumentosSolapado.SetCrossZ(true);
        lblSciToolEscritorioOrdenarDocumentosSolapado.SetLink(true);
        lblSciToolEscritorioOrdenarDocumentosSolapado.SetFontSize(32);
        lblSciToolEscritorioOrdenarDocumentosSolapado.SetWidth(30);
        lblSciToolEscritorioOrdenarDocumentosSolapado.SetHeight(40);
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosSolapado").style.cursor = "default";
        lblSciToolEscritorioOrdenarDocumentosSolapado.SetZIndex(String(ZIndexIconosEscritorio));
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosSolapado").style.textAlign = "center";
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosSolapado").style.color = Skin.GetToolBoxIconColor();
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosSolapado").style.setProperty("position", "fixed");
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosSolapado").setAttribute('title', '1 click: organizar documentos visibles / organize visible documents\n2 clicks: organizar todos los documentos de la mesa actual / Organize all the documents in current table');
        // lblSciToolEscritorioOrdenarDocumentosSolapado.SetBackColor('rgba(255,255,255,0.8)');
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosSolapado").onclick = function () {
            Table.OrganizeDocuments(sci.Const.Overlapping, sci.Const.OrganizeVisibleDocuments);
        };
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosSolapado").ondblclick = function () {
            Table.OrganizeDocuments(sci.Const.Overlapping, sci.Const.OrganizeAllDocuments);
        };
        // Función Organizar documentos Horizontalmente.
        var lblSciToolEscritorioOrdenarDocumentosHorizontal = new Label("scitool", 6, lblSciToolEscritorioOrdenarDocumentosSolapado.GetY() + lblSciToolEscritorioOrdenarDocumentosSolapado.GetHeight() + SeparacionEntreIconos, 0, "\u2505", "lblSciToolEscritorioOrdenarDocumentosHorizontal");
        lblSciToolEscritorioOrdenarDocumentosHorizontal.SetCrossZ(true);
        lblSciToolEscritorioOrdenarDocumentosHorizontal.SetLink(true);
        lblSciToolEscritorioOrdenarDocumentosHorizontal.SetFontSize(32);
        lblSciToolEscritorioOrdenarDocumentosHorizontal.SetWidth(30);
        lblSciToolEscritorioOrdenarDocumentosHorizontal.SetHeight(40);
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosHorizontal").style.cursor = "default";
        lblSciToolEscritorioOrdenarDocumentosHorizontal.SetZIndex(String(ZIndexIconosEscritorio));
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosHorizontal").style.textAlign = "center";
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosHorizontal").style.color = Skin.GetToolBoxIconColor();
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosHorizontal").style.setProperty("position", "fixed");
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosHorizontal").setAttribute('title', '1 click: organizar documentos visibles / organize visible documents\n2 clicks: organizar todos los documentos de la mesa actual / Organize all the documents in current table');
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosHorizontal").onclick = function () {
            Table.OrganizeDocuments(sci.Const.Horizontal, sci.Const.OrganizeVisibleDocuments);
        };
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosHorizontal").ondblclick = function () {
            Table.OrganizeDocuments(sci.Const.Horizontal, sci.Const.OrganizeAllDocuments);
        };
        // Función Organizar documentos verticalmente.
        var lblSciToolEscritorioOrdenarDocumentosVertical = new Label("scitool", 6, lblSciToolEscritorioOrdenarDocumentosHorizontal.GetY() + lblSciToolEscritorioOrdenarDocumentosHorizontal.GetHeight() + SeparacionEntreIconos, 0, "\u2507", "lblSciToolEscritorioOrdenarDocumentosVertical");
        lblSciToolEscritorioOrdenarDocumentosVertical.SetCrossZ(true);
        lblSciToolEscritorioOrdenarDocumentosVertical.SetLink(true);
        lblSciToolEscritorioOrdenarDocumentosVertical.SetFontSize(32);
        lblSciToolEscritorioOrdenarDocumentosVertical.SetWidth(30);
        lblSciToolEscritorioOrdenarDocumentosVertical.SetHeight(40);
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosVertical").style.cursor = "default";
        lblSciToolEscritorioOrdenarDocumentosVertical.SetZIndex(String(ZIndexIconosEscritorio));
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosVertical").style.textAlign = "center";
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosVertical").style.color = Skin.GetToolBoxIconColor();
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosVertical").style.setProperty("position", "fixed");
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosVertical").setAttribute('title', '1 click: organizar documentos visibles / organize visible documents\n2 clicks: organizar todos los documentos de la mesa actual / Organize all the documents in current table');
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosVertical").onclick = function () {
            Table.OrganizeDocuments(sci.Const.Vertical, sci.Const.OrganizeVisibleDocuments);
        };
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosVertical").ondblclick = function () {
            Table.OrganizeDocuments(sci.Const.Vertical, sci.Const.OrganizeAllDocuments);
        };
    }
    sci.Begin = Begin;
    var scitool = /** @class */ (function () {
        function scitool() {
        }
        //Este método guarda los datos del objeto a cargar en la pila, y luego llama al método LoadComponentFromStack, que carga asíncronamente en el DOM todos los objetos de la pila.
        //La carga de objetos es asíncrona, pero a diferencia de usar el atributo "async" de las etiquetas "<script>", que hace que se carguen todos los script con ese atributo de manera paralela
        //a costa de perder el control y una carga en desorden, aquí en SciTool se cargan asíncronamente pero de manera secuencial: cada objeto que se añade a la pila es procesado, y solo cuando
        //ya está cargado se continúa con el siguiente. Esto permite la carga en segundo plano, pero sin perder el control, y SciTool ofrece eventos para saber cuándo un objeto está cargado,
        //por ejemplo, o cuándo están todos cargados.
        //No se restringe que se cargue un objeto más de una vez, para permitir la posibilidad de cargar un mismo objeto desde un archivo que haya cambiado su contenido.
        scitool.LoadComponent = function (componentFile) {
            var objectId = "Component" + componentFile.substr(0, componentFile.indexOf("."));
            var objectData = {
                'FileName': componentFile,
                'Id': objectId,
                'LoadedState': undefined
            };
            scitool.StackObjectsToLoad.push(objectData);
            //Llamar al método que carga el objeto solo si la pila estaba vacía antes de agregar este objeto, pues si tiene más, la pila ya está siendo procesada.
            if (scitool.StackObjectsToLoad.length === 1) {
                scitool.LoadComponentFromStack();
            }
        };
        scitool.LoadComponentFromStack = function () {
            var _this = this;
            var xhr = new XMLHttpRequest();
            var componentFile;
            var objectId;
            xhr.responseType = "text";
            //Tomar datos del primer objeto de la pila, que corresponde al más antiguo de todos los que estén en este momento.
            var objectData = scitool.StackObjectsToLoad[0];
            for (var propiedad in objectData) {
                if (objectData.hasOwnProperty(propiedad)) {
                    if (propiedad === "FileName") {
                        componentFile = objectData[propiedad];
                    }
                    if (propiedad === "Id") {
                        objectId = objectData[propiedad];
                    }
                }
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    //Quitar objeto de la pila.
                    scitool.StackObjectsToLoad.splice((0), 1);
                    if (xhr.status == 200) {
                        var nodoBody = document.getElementsByTagName("BODY")[0];
                        var nodoNuevo = document.createElement("SCRIPT");
                        nodoNuevo.setAttribute("id", objectId);
                        nodoBody.appendChild(nodoNuevo);
                        //Insertar el archivo cargado en el DOM.
                        document.getElementById(objectId).innerHTML = xhr.responseText;
                        for (var _i = 0, _a = scitool.StackObjectsToLoad; _i < _a.length; _i++) {
                            var objectData_1 = _a[_i];
                            if (objectData_1["FileName"] === componentFile) {
                                objectData_1["LoadedState"] = "OK";
                                scitool.LoadedObjects.push(objectData_1);
                            }
                        }
                        try {
                            window[objectId + "_OnLoaded"].apply(_this);
                        }
                        catch (e) { }
                        scitool.Talk(objectId + "_OnLoaded", componentFile);
                    }
                    else {
                        for (var _b = 0, _c = scitool.StackObjectsToLoad; _b < _c.length; _b++) {
                            var objectData_2 = _c[_b];
                            if (objectData_2["FileName"] === componentFile) {
                                objectData_2["LoadedState"] = "NOK";
                                scitool.LoadedObjects.push(objectData_2);
                            }
                        }
                        try {
                            window[objectId + "_OnLoadingError"].apply(_this);
                        }
                        catch (e) { }
                        console.log("Error: object " + componentFile + " could not be loaded.");
                        scitool.Talk('scitool' + "_OnLoadingError", componentFile);
                    }
                    //Llamarse así mismo para continuar cargando los objetos de la pila, si es que todavía quedan.
                    if (scitool.StackObjectsToLoad.length >= 1) {
                        scitool.LoadComponentFromStack();
                    }
                    else {
                        Table_private.RedrawViewFinderContent();
                        // Llamar a método que se ejecuta una vez cargados toda la pila de componentes.
                        try {
                            window["Components_OnLoaded"].apply(_this);
                        }
                        catch (e) { }
                        scitool.Talk("Components_OnLoaded");
                    }
                }
            };
            xhr.open('GET', componentFile, true);
            xhr.send(null);
        };
        scitool.GetStackObjectsToLoad = function () {
            if (scitool.StackObjectsToLoad.length === 0) {
                return false;
            }
            else {
                return scitool.StackObjectsToLoad;
            }
        };
        scitool.GetLoadedObjectsData = function () {
            return scitool.LoadedObjects;
        };
        scitool.GetObjectDataById = function (id) {
            for (var _i = 0, _a = scitool.LoadedObjects; _i < _a.length; _i++) {
                var objectData = _a[_i];
                if (objectData["Id"] === id) {
                    return objectData;
                }
            }
            return false;
        };
        scitool.GetObjectDataByFileName = function (fileName) {
            for (var _i = 0, _a = scitool.LoadedObjects; _i < _a.length; _i++) {
                var objectData = _a[_i];
                if (objectData["FileName"] === fileName) {
                    return objectData;
                }
            }
            return false;
        };
        scitool.GetLoadedObjectStateById = function (id) {
            for (var _i = 0, _a = scitool.LoadedObjects; _i < _a.length; _i++) {
                var objectData = _a[_i];
                if (objectData["Id"] === id) {
                    return objectData["LoadedState"];
                }
            }
            return false;
        };
        scitool.GetLoadedObjectStateByFileName = function (fileName) {
            for (var _i = 0, _a = scitool.LoadedObjects; _i < _a.length; _i++) {
                var objectData = _a[_i];
                if (objectData["FileName"] === fileName) {
                    return objectData["LoadedState"];
                }
            }
            return false;
        };
        scitool.LoadingObjects = function () {
            if (scitool.StackObjectsToLoad.length === 0) {
                return false;
            }
            else {
                return true;
            }
        };
        scitool.LoadedObjectById = function (id) {
            for (var _i = 0, _a = scitool.LoadedObjects; _i < _a.length; _i++) {
                var objectData = _a[_i];
                if (objectData["Id"] === id) {
                    return true;
                }
            }
            return false;
        };
        scitool.LoadedObjectByFileName = function (fileName) {
            for (var _i = 0, _a = scitool.LoadedObjects; _i < _a.length; _i++) {
                var objectData = _a[_i];
                if (objectData["FileName"] === fileName) {
                    return true;
                }
            }
            return false;
        };
        scitool.GetObjectsMap = function () {
            return MetaObject_private.GetObjectsMap();
        };
        scitool.GetParentDocumentId = function (idObjeto) {
            return MetaObject_private.GetParentDocumentId(idObjeto);
        };
        scitool.GetParentMetaObjectId = function (idObjeto) {
            return MetaObject_private.GetParentMetaObjectId(idObjeto);
        };
        scitool.GetMetaObjectObjectsNumber = function (idMetaobjeto) {
            return MetaObject_private.GetMetaObjectObjectsNumber(idMetaobjeto); // Retorna el número de objetos que contiene un metaobjeto.
        };
        scitool.ObjectIdExists = function (idObjeto) {
            var objects = MetaObject_private.GetObjectsMap();
            for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
                var objeto = objects_1[_i];
                if (objeto["ObjectId"] === idObjeto) {
                    return true;
                }
            }
            return false;
        };
        scitool.Talk = function (message, metaMessage) {
            if (metaMessage === void 0) { metaMessage = ""; }
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (var i = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, "scitool", message, metaMessage);
                    }
                    catch (e) { }
                }
            }
            for (var _i = 0, _a = MetaObject.GetIdsStack(); _i < _a.length; _i++) {
                var idMetaobjeto = _a[_i];
                try {
                    window[idMetaobjeto + "_Listen"].call(this, "scitool", message, metaMessage);
                }
                catch (e) { }
            }
            try {
                window["scitool_Listen"].call(this, "scitool", message, metaMessage);
            }
            catch (e) { }
            try {
                window["Desk_Listen"].call(this, "scitool", message, metaMessage);
            }
            catch (e) { }
            try {
                window["StatusBar_Listen"].call(this, "scitool", message, metaMessage);
            }
            catch (e) { }
        };
        scitool.StackObjectsToLoad = []; //En esta pila dinámica de tipo FIFO, se almacenan todos los objects y sus datos, que deben cargarse asincrónicamente desde sus archivos.
        scitool.LoadedObjects = [];
        scitool.contador = 0;
        return scitool;
    }());
    sci.scitool = scitool;
    var Table_private = /** @class */ (function () {
        function Table_private() {
        }
        Table_private.RedrawViewFinderContent = function () {
            var metaObjetos = MetaObject.GetIdsStack();
            var documentos = Document.GetIdsStack();
            MetaObject_private.RedrawMetaObject("scitool");
            for (var _i = 0, metaObjetos_1 = metaObjetos; _i < metaObjetos_1.length; _i++) {
                var idMetaobjeto = metaObjetos_1[_i];
                MetaObject_private.RedrawMetaObject(idMetaobjeto);
            }
            for (var _a = 0, documentos_4 = documentos; _a < documentos_4.length; _a++) {
                var idDocumento = documentos_4[_a];
                Document_private.RedrawDocument(idDocumento);
            }
            // Actualizar Z mostrado en el escritorio.
            document.getElementById("lblSciToolEscritorioZ").innerText = String(Table.GetViewFinderZ());
        };
        return Table_private;
    }());
    var Table = /** @class */ (function () {
        function Table() {
        }
        //Comprueba si el objeto está dentro del plano visible actual.
        Table.InViewFinder = function (x, y, z, width, height, crossZ) {
            if (z === Table.GetViewFinderZ() || (crossZ === true && z !== LimboEscritorio)) {
                if (Table.Scrollable) {
                    if ((x + width >= Table.GetViewFinderX()) && (y + height >= Table.GetViewFinderY())) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    if ((x + width >= Table.GetViewFinderX() && x <= (Table.GetViewFinderX() + window.innerWidth)) && (y + height >= Table.GetViewFinderY() && y <= (Table.GetViewFinderY() + window.innerHeight))) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
            else {
                return false;
            }
        };
        Table.SetScrollable = function (scrollable) {
            Table.Scrollable = scrollable;
            Table_private.RedrawViewFinderContent();
        };
        Table.GetScrollable = function () {
            return Table.Scrollable;
        };
        Table.SetWidth = function (width) {
            if (width < window.innerWidth) {
                width = window.innerWidth - 350; //Se descuenta el ancho de la firma.
            }
            Table.Width = width;
            var X = width;
            var Y = Number(document.getElementById('lblSciToolVersion').dataset.scitooly);
            var Z = Number(document.getElementById('lblSciToolVersion').dataset.scitoolz);
            var Width = Number(document.getElementById('lblSciToolVersion').dataset.scitoolwidth);
            var Height = Number(document.getElementById('lblSciToolVersion').dataset.scitoolheight);
            var CrossZ = document.getElementById('lblSciToolVersion').dataset.scitoolcrossz === "true";
            document.getElementById('lblSciToolVersion').dataset.scitoolx = String(width);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                width -= Table.GetViewFinderX();
                document.getElementById('lblSciToolVersion').style.left = String(width) + "px";
            }
        };
        Table.GetWidth = function () {
            return Table.Width;
        };
        Table.SetHeight = function (height) {
            if (height < window.innerHeight) {
                height = window.innerHeight - 40; //Se descuenta el alto de la firma.
            }
            Table.Height = height;
            var Y = height;
            var X = Number(document.getElementById('lblSciToolVersion').dataset.scitoolx);
            var Z = Number(document.getElementById('lblSciToolVersion').dataset.scitoolz);
            var Width = Number(document.getElementById('lblSciToolVersion').dataset.scitoolwidth);
            var Height = Number(document.getElementById('lblSciToolVersion').dataset.scitoolheight);
            var CrossZ = document.getElementById('lblSciToolVersion').dataset.scitoolcrossz === "true";
            document.getElementById('lblSciToolVersion').dataset.scitooly = String(height);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                height -= Table.GetViewFinderY();
                document.getElementById('lblSciToolVersion').style.top = String(height) + "px";
            }
        };
        Table.GetHeight = function () {
            return Table.Height;
        };
        Table.ViewFinderJumpToX = function (x) {
            Table.ViewFinderX = Math.floor(x);
            Table_private.RedrawViewFinderContent();
        };
        Table.ViewFinderMoveToX = function (x) {
            var origenX = Table.ViewFinderX;
            var deltaX;
            if (Table.ViewFinderX <= x) {
                deltaX = Table.deltaLenght;
            }
            else {
                deltaX = -Table.deltaLenght;
            }
            function mover() {
                if (Math.abs(Table.ViewFinderX + deltaX - origenX) <= Math.abs(x - origenX)) {
                    Table.ViewFinderX += Math.floor(deltaX);
                    Table_private.RedrawViewFinderContent();
                }
                else {
                    clearInterval(deltaT);
                    if (Table.ViewFinderX !== x) {
                        Table.ViewFinderX = x;
                        Table_private.RedrawViewFinderContent();
                    }
                }
            }
            var deltaT = setInterval(mover, Table.deltaTime);
        };
        Table.GetViewFinderX = function () {
            return Table.ViewFinderX;
        };
        Table.ViewFinderJumpToY = function (y) {
            Table.ViewFinderY = Math.floor(y);
            Table_private.RedrawViewFinderContent();
        };
        Table.ViewFinderMoveToY = function (y) {
            var origenY = Table.ViewFinderY;
            var deltaY;
            if (Table.ViewFinderY <= y) {
                deltaY = Table.deltaLenght;
            }
            else {
                deltaY = -Table.deltaLenght;
            }
            function mover() {
                if (Math.abs(Table.ViewFinderY + deltaY - origenY) <= Math.abs(y - origenY)) {
                    Table.ViewFinderY += Math.floor(deltaY);
                    Table_private.RedrawViewFinderContent();
                }
                else {
                    clearInterval(deltaT);
                    if (Table.ViewFinderY !== y) {
                        Table.ViewFinderY = y;
                        Table_private.RedrawViewFinderContent();
                    }
                }
            }
            var deltaT = setInterval(mover, Table.deltaTime);
        };
        Table.GetViewFinderY = function () {
            return Table.ViewFinderY;
        };
        Table.ViewFinderJumpToZ = function (z) {
            if (Table.ViewFinderZ !== Math.floor(z)) {
                Table.ViewFinderZ = Math.floor(z);
                Table_private.RedrawViewFinderContent();
                try {
                    window["Table_OnViewFinderMove"].apply(this);
                }
                catch (e) { }
                Table.Talk("Table_OnViewFinderMove");
            }
        };
        Table.ViewFinderMoveToZ = function (z) {
            var origenZ = Table.ViewFinderZ;
            var deltaZ;
            if (Table.ViewFinderZ <= z) {
                deltaZ = 1;
            }
            else {
                deltaZ = -1;
            }
            function mover() {
                if (Math.abs(Table.ViewFinderZ + deltaZ - origenZ) <= Math.abs(z - origenZ)) {
                    Table.ViewFinderZ += Math.floor(deltaZ);
                    Table_private.RedrawViewFinderContent();
                }
                else {
                    clearInterval(deltaT);
                    if (Table.ViewFinderZ !== z) {
                        Table.ViewFinderZ = z;
                        Table_private.RedrawViewFinderContent();
                    }
                }
            }
            var deltaT = setInterval(mover, Table.deltaTime);
        };
        Table.GetViewFinderZ = function () {
            return Table.ViewFinderZ;
        };
        Table.ViewFinderJumpToXYZ = function (x, y, z) {
            Table.ViewFinderX = Math.floor(x);
            Table.ViewFinderY = Math.floor(y);
            Table.ViewFinderZ = Math.floor(z);
            Table_private.RedrawViewFinderContent();
        };
        Table.ViewFinderMoveToXYZ = function (x, y, z) {
            Table.ViewFinderMoveToX(x);
            Table.ViewFinderMoveToY(y);
            Table.ViewFinderMoveToZ(z);
        };
        Table.GetViewFinderXYZ = function () {
            return Table.GetViewFinderX() + ", " + Table.GetViewFinderY() + ", " + Table.GetViewFinderZ();
        };
        Table.OrganizeDocuments = function (OrganizationType, SetOfDocuments) {
            if (SetOfDocuments === void 0) { SetOfDocuments = sci.Const.OrganizeVisibleDocuments; }
            var MargenIzquierdoEscritorioOrganizacionDocumentos = 45;
            var MargenSuperiorEscritorioOrganizacionDocumentos = 80;
            var SeparacionEntreDocumentos = 2;
            var documentos = Document.GetIdsStack();
            var documentosBelowMost = Document.GetBelowMostDocumentIdsStack();
            var documentosNormal = Document.GetNormalDocumentIdsStack();
            var documentosTopMost = Document.GetTopMostDocumentIdsStack();
            var ZActualViewFinder = Table.GetViewFinderZ();
            var xAcumulada = MargenIzquierdoEscritorioOrganizacionDocumentos + window.scrollX;
            var yAcumulada = MargenSuperiorEscritorioOrganizacionDocumentos + window.scrollY;
            switch (OrganizationType) {
                case 'Overlapping':
                    var desplazamientoHorizontalDesdeDocumentoAnterior = 90;
                    for (var _i = 0, documentosBelowMost_1 = documentosBelowMost; _i < documentosBelowMost_1.length; _i++) {
                        var documento = documentosBelowMost_1[_i];
                        if (!window[documento].GetRaised()) {
                            if (window[documento].GetZ() === ZActualViewFinder) {
                                if (window[documento].GetDraggable()) {
                                    if (SetOfDocuments == sci.Const.OrganizeAllDocuments || (SetOfDocuments == sci.Const.OrganizeVisibleDocuments && window[documento].VisibleInScreen())) {
                                        window[documento].SetX(xAcumulada);
                                        window[documento].SetY(yAcumulada);
                                        xAcumulada = xAcumulada + desplazamientoHorizontalDesdeDocumentoAnterior + window[documento].GetBorderWidth() * 2;
                                        yAcumulada = yAcumulada + window[documento].GetTitleBarHeight() + window[documento].GetBorderWidth();
                                    }
                                }
                            }
                        }
                    }
                    for (var _a = 0, documentosNormal_1 = documentosNormal; _a < documentosNormal_1.length; _a++) {
                        var documento = documentosNormal_1[_a];
                        if (!window[documento].GetRaised()) {
                            if (window[documento].GetZ() === ZActualViewFinder) {
                                if (window[documento].GetDraggable()) {
                                    if (SetOfDocuments == sci.Const.OrganizeAllDocuments || (SetOfDocuments == sci.Const.OrganizeVisibleDocuments && window[documento].VisibleInScreen())) {
                                        window[documento].SetX(xAcumulada);
                                        window[documento].SetY(yAcumulada);
                                        xAcumulada = xAcumulada + desplazamientoHorizontalDesdeDocumentoAnterior + window[documento].GetBorderWidth() * 2;
                                        yAcumulada = yAcumulada + window[documento].GetTitleBarHeight() + window[documento].GetBorderWidth();
                                    }
                                }
                            }
                        }
                    }
                    for (var _b = 0, documentosTopMost_1 = documentosTopMost; _b < documentosTopMost_1.length; _b++) {
                        var documento = documentosTopMost_1[_b];
                        if (!window[documento].GetRaised()) {
                            if (window[documento].GetZ() === ZActualViewFinder) {
                                if (window[documento].GetDraggable()) {
                                    if (SetOfDocuments == sci.Const.OrganizeAllDocuments || (SetOfDocuments == sci.Const.OrganizeVisibleDocuments && window[documento].VisibleInScreen())) {
                                        window[documento].SetX(xAcumulada);
                                        window[documento].SetY(yAcumulada);
                                        xAcumulada = xAcumulada + desplazamientoHorizontalDesdeDocumentoAnterior + window[documento].GetBorderWidth() * 2;
                                        yAcumulada = yAcumulada + window[documento].GetTitleBarHeight() + window[documento].GetBorderWidth();
                                    }
                                }
                            }
                        }
                    }
                    try {
                        window["Table_OnDocumentsOrganized"].apply(this);
                    }
                    catch (e) { }
                    Table.Talk("Table_OnDocumentsOrganized");
                    break;
                case 'Horizontal':
                    for (var _c = 0, documentos_5 = documentos; _c < documentos_5.length; _c++) {
                        var documento = documentos_5[_c];
                        if (!window[documento].GetRaised()) {
                            if (window[documento].GetZ() === ZActualViewFinder) {
                                if (window[documento].GetDraggable()) {
                                    if (SetOfDocuments == sci.Const.OrganizeAllDocuments || (SetOfDocuments == sci.Const.OrganizeVisibleDocuments && window[documento].VisibleInScreen())) {
                                        window[documento].SetX(xAcumulada);
                                        window[documento].SetY(MargenSuperiorEscritorioOrganizacionDocumentos + window.scrollY);
                                        xAcumulada = xAcumulada + window[documento].GetWidth() + window[documento].GetBorderWidth() * 2 + SeparacionEntreDocumentos;
                                    }
                                }
                            }
                        }
                    }
                    try {
                        window["Table_OnDocumentsOrganized"].apply(this);
                    }
                    catch (e) { }
                    Table.Talk("Table_OnDocumentsOrganized");
                    break;
                case 'Vertical':
                    for (var _d = 0, documentos_6 = documentos; _d < documentos_6.length; _d++) {
                        var documento = documentos_6[_d];
                        if (!window[documento].GetRaised()) {
                            if (window[documento].GetZ() === ZActualViewFinder) {
                                if (window[documento].GetDraggable()) {
                                    if (SetOfDocuments == sci.Const.OrganizeAllDocuments || (SetOfDocuments == sci.Const.OrganizeVisibleDocuments && window[documento].VisibleInScreen())) {
                                        window[documento].SetY(yAcumulada);
                                        window[documento].SetX(MargenIzquierdoEscritorioOrganizacionDocumentos + window.scrollX);
                                        yAcumulada = yAcumulada + window[documento].GetHeight() + window[documento].GetBorderWidth() * 2 + SeparacionEntreDocumentos;
                                    }
                                }
                            }
                        }
                    }
                    try {
                        window["Table_OnDocumentsOrganized"].apply(this);
                    }
                    catch (e) { }
                    Table.Talk("Table_OnDocumentsOrganized");
                    break;
            }
        };
        Table.Talk = function (message, metaMessage) {
            if (metaMessage === void 0) { metaMessage = ""; }
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (var i = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, "Table", message, metaMessage);
                    }
                    catch (e) { }
                }
            }
            for (var _i = 0, _a = MetaObject.GetIdsStack(); _i < _a.length; _i++) {
                var idMetaobjeto = _a[_i];
                try {
                    window[idMetaobjeto + "_Listen"].call(this, "Table", message, metaMessage);
                }
                catch (e) { }
            }
            try {
                window["scitool_Listen"].call(this, "Table", message, metaMessage);
            }
            catch (e) { }
            try {
                window["Desk_Listen"].call(this, "Table", message, metaMessage);
            }
            catch (e) { }
            try {
                window["StatusBar_Listen"].call(this, "Table", message, metaMessage);
            }
            catch (e) { }
        };
        Table.ViewFinderX = 0;
        Table.ViewFinderY = 0;
        Table.ViewFinderZ = 0;
        Table.Scrollable = false;
        Table.Width = window.innerWidth;
        Table.Height = window.innerHeight;
        Table.deltaTime = 8; //Longitud en centisegundos de cada incremento en el movimiento del ViewFinder por el Table.
        Table.deltaLenght = 70; //Longitud en pixeles de cada incremento en el movimiento del ViewFinder por el Table en ejes X e Y (en Z los incrementos van de 1 en 1).
        return Table;
    }());
    sci.Table = Table;
    var MetaObject_private = /** @class */ (function () {
        function MetaObject_private() {
        }
        MetaObject_private.RedrawMetaObject = function (metaObjectId) {
            var objectData;
            var idObjeto;
            var x, y, z, width, height;
            var crossZ;
            var anchoEnPixeles;
            for (var i = 0; i < MetaObject_private.objects.length; i++) {
                objectData = MetaObject_private.objects[i];
                idObjeto = objectData["ObjectId"];
                // Fijar el width si aún está en "auto", que es el valor inicial asignado por SciTool a los Labels.
                if (objectData["ObjectType"] === ObjectType.Label && document.getElementById(idObjeto).style.width === "auto") {
                    try { // Se excluyen los Labels propios de SciTool, como la versión, por ejemplo.
                        anchoEnPixeles = String(window[idObjeto].GetPixelsLength());
                        document.getElementById(idObjeto).dataset.scitoolwidth = anchoEnPixeles;
                        document.getElementById(idObjeto).style.width = anchoEnPixeles + "px";
                    }
                    catch (e) { }
                }
                if (objectData["ObjectType"] === ObjectType.MenuBar) {
                    try {
                        var opciones = window[idObjeto].GetElements();
                        x = window[idObjeto].GetX();
                        for (var _i = 0, opciones_1 = opciones; _i < opciones_1.length; _i++) {
                            var opcion = opciones_1[_i];
                            anchoEnPixeles = String(window[idObjeto].GetPixelsLength(opcion["Id"]));
                            // Verificar si la etiqueta aún está fijado con width "auto".
                            if (document.getElementById(opcion["Id"]).style.width === "auto") { // Un Label es "auto" cuando se crea, antes de que SciTool le fije el ancho según su contenido cuando ya se agregó al DOM.
                                // Fijar coordenada x de la opción.
                                document.getElementById(opcion["Id"]).dataset.scitoolx = String(x);
                                // Fijar ancho de la opción.
                                document.getElementById(opcion["Id"]).dataset.scitoolwidth = anchoEnPixeles;
                                document.getElementById(opcion["Id"]).style.width = anchoEnPixeles + "px";
                            }
                            x += Number(anchoEnPixeles) + window[idObjeto].GetSeparationBetweenOptions();
                        }
                    }
                    catch (e) { }
                }
                //
                if (objectData["MetaObjectId"] === metaObjectId
                    && objectData["ObjectType"] !== ObjectType.RadioButtonGroup
                    && objectData["ObjectType"] !== ObjectType.PulldownMenu
                    && objectData["ObjectType"] !== ObjectType.PulldownMenuOption) {
                    if (objectData["ObjectType"] !== ObjectType.MenuBar) {
                        x = Number(document.getElementById(idObjeto).dataset.scitoolx);
                        y = Number(document.getElementById(idObjeto).dataset.scitooly);
                        z = Number(document.getElementById(idObjeto).dataset.scitoolz);
                        width = Number(document.getElementById(idObjeto).dataset.scitoolwidth);
                        height = Number(document.getElementById(idObjeto).dataset.scitoolheight);
                        crossZ = document.getElementById(idObjeto).dataset.scitoolcrossz === "true";
                        if (Table.InViewFinder(x, y, z, width, height, crossZ)) {
                            //Calcular coordenadas del objeto según posición del plano.
                            x -= Table.GetViewFinderX();
                            y -= Table.GetViewFinderY();
                            document.getElementById(idObjeto).style.left = String(x) + "px";
                            document.getElementById(idObjeto).style.top = String(y) + "px";
                            document.getElementById(idObjeto).style.removeProperty("display");
                        }
                        else {
                            document.getElementById(idObjeto).style.setProperty("display", "none");
                        }
                    }
                }
            }
        };
        MetaObject_private.AddDataObject = function (metaObjectId, objectId, objectType) {
            var dataObject = {
                'MetaObjectId': metaObjectId,
                'ObjectId': objectId,
                'ObjectType': objectType
            };
            MetaObject_private.objects.push(dataObject);
        };
        MetaObject_private.GetObjectsMap = function () {
            return MetaObject_private.objects;
        };
        MetaObject_private.GetParentDocumentId = function (idObjeto) {
            var objects = MetaObject_private.GetObjectsMap();
            for (var _i = 0, objects_2 = objects; _i < objects_2.length; _i++) {
                var objeto = objects_2[_i];
                if (objeto["ObjectId"] === idObjeto) {
                    if (objeto["ObjectType"] !== ObjectType.scitool //Descartar metaobjetos y StatusBar para revisar solo los objetos que pueden pertener a un documento.
                        && objeto["ObjectType"] !== ObjectType.MetaObject
                        && objeto["ObjectType"] !== ObjectType.StatusBar
                        && objeto["ObjectType"] !== ObjectType.Document) {
                        //Revisar si el metaobjeto al que pertenece es un documento.
                        var metaObjectId = objeto["MetaObjectId"];
                        var metaObjects = MetaObject_private.GetObjectsMap();
                        for (var _a = 0, metaObjects_1 = metaObjects; _a < metaObjects_1.length; _a++) {
                            var metaObjeto = metaObjects_1[_a];
                            if (metaObjeto["ObjectId"] === metaObjectId) {
                                if (metaObjeto["ObjectType"] === ObjectType.Document) {
                                    return metaObjeto["MetaObjectId"];
                                }
                            }
                        }
                    }
                }
            }
            return false;
        };
        MetaObject_private.GetParentMetaObjectId = function (idObjeto) {
            var objects = MetaObject_private.objects;
            for (var _i = 0, objects_3 = objects; _i < objects_3.length; _i++) {
                var objeto = objects_3[_i];
                if (objeto["ObjectId"] === idObjeto) {
                    if (objeto["ObjectType"] !== ObjectType.scitool //Descartar metaobjetos y StatusBar para revisar solo los objetos que pueden pertener a un metaobjeto.
                        && objeto["ObjectType"] !== ObjectType.MetaObject
                        && objeto["ObjectType"] !== ObjectType.StatusBar
                        && objeto["ObjectType"] !== ObjectType.Document) {
                        return objeto["MetaObjectId"];
                    }
                }
            }
        };
        MetaObject_private.GetMetaObjectObjectsNumber = function (idMetaobjeto) {
            var numObjetos = 0;
            var objects = MetaObject_private.objects;
            for (var _i = 0, objects_4 = objects; _i < objects_4.length; _i++) {
                var objeto = objects_4[_i];
                if (objeto["MetaObjectId"] === idMetaobjeto) {
                    if (objeto["ObjectType"] !== ObjectType.scitool //Descartar metaobjetos y StatusBar para revisar solo los objetos que pueden pertener a un metaobjeto.
                        && objeto["ObjectType"] !== ObjectType.MetaObject
                        && objeto["ObjectType"] !== ObjectType.StatusBar
                        && objeto["ObjectType"] !== ObjectType.DocumentAssociatedControl
                        && objeto["ObjectType"] !== ObjectType.Document) {
                        numObjetos++;
                    }
                }
            }
            return numObjetos;
        };
        MetaObject_private.objects = [];
        return MetaObject_private;
    }());
    var MetaObject = /** @class */ (function () {
        function MetaObject(id) {
            this.Id = id;
            MetaObject.idsStack.push(this.Id);
            this.X = 0;
            this.Y = 0;
            this.Z = 0;
        }
        MetaObject.GetIdsStack = function () {
            return MetaObject.idsStack;
        };
        MetaObject.prototype.AddCanvas = function (x, y, z, width, height, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (id === void 0) { id = 'Canvas' + (Canvas.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Canvas(this.Id, this.X + x, this.Y + y, this.Z + z, width, height, id);
                return true;
            }
            else {
                return false;
            }
        };
        MetaObject.prototype.AddBox = function (x, y, z, width, height, borderWidth, borderColor, fillColor, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (borderWidth === void 0) { borderWidth = Skin.GetBoxBorderWidth(); }
            if (borderColor === void 0) { borderColor = Skin.GetBoxBorderColor(); }
            if (fillColor === void 0) { fillColor = Skin.GetBoxFillColor(); }
            if (id === void 0) { id = 'Box' + (Box.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Box(this.Id, this.X + x, this.Y + y, this.Z + z, width, height, borderWidth, borderColor, fillColor, id);
                return true;
            }
            else {
                return false;
            }
        };
        MetaObject.prototype.AddEllipse = function (x, y, z, width, height, borderWidth, borderColor, fillColor, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (borderWidth === void 0) { borderWidth = Skin.GetEllipseBorderWidth(); }
            if (borderColor === void 0) { borderColor = Skin.GetEllipseBorderColor(); }
            if (fillColor === void 0) { fillColor = Skin.GetEllipseFillColor(); }
            if (id === void 0) { id = 'Ellipse' + (Ellipse.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Ellipse(this.Id, this.X + x, this.Y + y, this.Z + z, width, height, borderWidth, borderColor, fillColor, id);
                return true;
            }
            else {
                return false;
            }
        };
        MetaObject.prototype.AddLabel = function (x, y, z, caption, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (caption === void 0) { caption = ""; }
            if (id === void 0) { id = 'Label' + (Label.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Label(this.Id, this.X + x, this.Y + y, this.Z + z, caption, id);
                return true;
            }
            else {
                return false;
            }
        };
        MetaObject.prototype.AddTextBox = function (x, y, z, caption, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (caption === void 0) { caption = ""; }
            if (id === void 0) { id = 'TextBox' + (TextBox.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new TextBox(this.Id, this.X + x, this.Y + y, this.Z + z, caption, id);
                return true;
            }
            else {
                return false;
            }
        };
        MetaObject.prototype.AddButton = function (x, y, z, caption, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (caption === void 0) { caption = ""; }
            if (id === void 0) { id = 'Button' + (Button.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Button(this.Id, this.X + x, this.Y + y, this.Z + z, caption, id);
                return true;
            }
            else {
                return false;
            }
        };
        MetaObject.prototype.AddImage = function (x, y, z, width, height, imageFile, caption, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (imageFile === void 0) { imageFile = ""; }
            if (caption === void 0) { caption = ""; }
            if (id === void 0) { id = 'Image' + (Image.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Image(this.Id, this.X + x, this.Y + y, this.Z + z, width, height, imageFile, caption, id);
                return true;
            }
            else {
                return false;
            }
        };
        MetaObject.prototype.AddVideo = function (x, y, z, width, height, videoFile, autoPlay, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (videoFile === void 0) { videoFile = ""; }
            if (autoPlay === void 0) { autoPlay = false; }
            if (id === void 0) { id = 'Video' + (Video.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Video(this.Id, this.X + x, this.Y + y, this.Z + z, width, height, videoFile, autoPlay, id);
                return true;
            }
            else {
                return false;
            }
        };
        MetaObject.prototype.AddCheckBox = function (x, y, z, caption, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (caption === void 0) { caption = ""; }
            if (id === void 0) { id = 'CheckBox' + (CheckBox.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new CheckBox(this.Id, this.X + x, this.Y + y, this.Z + z, caption, id);
                return true;
            }
            else {
                return false;
            }
        };
        MetaObject.prototype.AddRadioButtonGroup = function (x, y, z, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (id === void 0) { id = 'RadioButtonGroup' + (RadioButtonGroup.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new RadioButtonGroup(this.Id, this.X + x, this.Y + y, this.Z + z, id);
                return true;
            }
            else {
                return false;
            }
        };
        MetaObject.prototype.AddComboBox = function (x, y, z, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (id === void 0) { id = 'ComboBox' + (ComboBox.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new ComboBox(this.Id, this.X + x, this.Y + y, this.Z + z, id);
                return true;
            }
            else {
                return false;
            }
        };
        MetaObject.prototype.AddFile = function (x, y, z, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (id === void 0) { id = 'File' + (File.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new File(this.Id, this.X + x, this.Y + y, this.Z + z, id);
                return true;
            }
            else {
                return false;
            }
        };
        MetaObject.prototype.AddRequester = function (id) {
            if (id === void 0) { id = 'Requester' + (Requester.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Requester(id);
                return true;
            }
            else {
                return false;
            }
        };
        MetaObject.prototype.AddChronometer = function (id) {
            if (id === void 0) { id = 'Chronometer' + (Chronometer.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Chronometer(id);
                return true;
            }
            else {
                return false;
            }
        };
        MetaObject.prototype.AddTimer = function (hours, minutes, seconds, centiseconds, id) {
            if (hours === void 0) { hours = 0; }
            if (minutes === void 0) { minutes = 0; }
            if (seconds === void 0) { seconds = 0; }
            if (centiseconds === void 0) { centiseconds = 0; }
            if (id === void 0) { id = 'Timer' + (Timer.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Timer(hours, minutes, seconds, centiseconds, id);
                return true;
            }
            else {
                return false;
            }
        };
        MetaObject.prototype.AddDiv = function (x, y, z, width, height, borderWidth, borderColor, fillColor, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (borderWidth === void 0) { borderWidth = Skin.GetDivBorderWidth(); }
            if (borderColor === void 0) { borderColor = Skin.GetDivBorderColor(); }
            if (fillColor === void 0) { fillColor = Skin.GetDivFillColor(); }
            if (id === void 0) { id = 'Div' + (Div.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Div(this.Id, this.X + x, this.Y + y, this.Z + z, width, height, borderWidth, borderColor, fillColor, id);
                return true;
            }
            else {
                return false;
            }
        };
        MetaObject.prototype.AddMenuBar = function (x, y, z, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (id === void 0) { id = 'Menu' + (Menu.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Menu(this.Id, this.X + x, this.Y + y, this.Z + z, ObjectType.MenuBar, id);
                return true;
            }
            else {
                return false;
            }
        };
        //Los Menú Pulldown siempre se crean en (0,0,Limbo).
        MetaObject.prototype.AddPulldownMenu = function (id) {
            if (id === void 0) { id = 'Menu' + (Menu.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Menu(this.Id, 0, 0, sci.Limbo, ObjectType.PulldownMenu, id);
                return true;
            }
            else {
                return false;
            }
        };
        MetaObject.prototype.Talk = function (message, metaMessage) {
            if (metaMessage === void 0) { metaMessage = ""; }
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (var i = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    }
                    catch (e) { }
                }
            }
            for (var _i = 0, _a = MetaObject.GetIdsStack(); _i < _a.length; _i++) {
                var idMetaobjeto = _a[_i];
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                }
                catch (e) { }
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
        };
        MetaObject.prototype.GetId = function () {
            return this.Id;
        };
        MetaObject.AddDataObject = function (objectId) {
            MetaObject.objects.push(objectId);
        };
        MetaObject.prototype.MoveOnX = function (xOffset) {
            this.X = this.X + xOffset;
            var objects = MetaObject_private.GetObjectsMap();
            for (var _i = 0, objects_5 = objects; _i < objects_5.length; _i++) {
                var objeto = objects_5[_i];
                if (objeto["MetaObjectId"] === this.Id && objeto["ObjectType"] !== ObjectType.RadioButtonGroup) {
                    switch (objeto["ObjectType"]) {
                        case ObjectType.MenuBar:
                        case ObjectType.PulldownMenu:
                            window[objeto["ObjectId"]].SetX(window[objeto["ObjectId"]].GetX() + xOffset);
                            break;
                        case ObjectType.MenuBarOption:
                        case ObjectType.PulldownMenuOption:
                            break;
                        default:
                            document.getElementById(objeto["ObjectId"]).dataset.scitoolx = String(Number(document.getElementById(objeto["ObjectId"]).dataset.scitoolx) + xOffset);
                            break;
                    }
                }
            }
            MetaObject_private.RedrawMetaObject(this.Id);
        };
        MetaObject.prototype.MoveOnY = function (yOffset) {
            this.Y = this.Y + yOffset;
            var objects = MetaObject_private.GetObjectsMap();
            for (var _i = 0, objects_6 = objects; _i < objects_6.length; _i++) {
                var objeto = objects_6[_i];
                if (objeto["MetaObjectId"] === this.Id && objeto["ObjectType"] !== ObjectType.RadioButtonGroup) {
                    switch (objeto["ObjectType"]) {
                        case ObjectType.MenuBar:
                        case ObjectType.PulldownMenu:
                            window[objeto["ObjectId"]].SetY(window[objeto["ObjectId"]].GetY() + yOffset);
                            break;
                        case ObjectType.MenuBarOption:
                        case ObjectType.PulldownMenuOption:
                            break;
                        default:
                            document.getElementById(objeto["ObjectId"]).dataset.scitooly = String(Number(document.getElementById(objeto["ObjectId"]).dataset.scitooly) + yOffset);
                            break;
                    }
                }
            }
            MetaObject_private.RedrawMetaObject(this.Id);
        };
        MetaObject.prototype.MoveOnZ = function (zOffset) {
            this.Z = this.Z + zOffset;
            var objects = MetaObject_private.GetObjectsMap();
            for (var _i = 0, objects_7 = objects; _i < objects_7.length; _i++) {
                var objeto = objects_7[_i];
                if (objeto["MetaObjectId"] === this.Id && objeto["ObjectType"] !== ObjectType.RadioButtonGroup) {
                    switch (objeto["ObjectType"]) {
                        case ObjectType.MenuBar:
                        case ObjectType.PulldownMenu:
                            window[objeto["ObjectId"]].SetZ(window[objeto["ObjectId"]].GetZ() + zOffset);
                            break;
                        case ObjectType.MenuBarOption:
                        case ObjectType.PulldownMenuOption:
                            break;
                        default:
                            document.getElementById(objeto["ObjectId"]).dataset.scitoolz = String(Number(document.getElementById(objeto["ObjectId"]).dataset.scitoolz) + zOffset);
                            break;
                    }
                }
            }
            MetaObject_private.RedrawMetaObject(this.Id);
        };
        MetaObject.prototype.MoveToZ = function (z) {
            this.Z = z;
            var objects = MetaObject_private.GetObjectsMap();
            for (var _i = 0, objects_8 = objects; _i < objects_8.length; _i++) {
                var objeto = objects_8[_i];
                if (objeto["MetaObjectId"] === this.Id && objeto["ObjectType"] !== ObjectType.RadioButtonGroup) {
                    switch (objeto["ObjectType"]) {
                        case ObjectType.MenuBar:
                        case ObjectType.PulldownMenu:
                            if (window[objeto["ObjectId"]].GetMenuType() === ObjectType.MenuBar) { //Solo traer menús horizontales, pues se supone que éstos llaman a los menús pulldown (verticales).
                                window[objeto["ObjectId"]].SetZ(z);
                            }
                            break;
                        case ObjectType.MenuBarOption:
                        case ObjectType.PulldownMenuOption:
                            break;
                        default:
                            document.getElementById(objeto["ObjectId"]).dataset.scitoolz = String(z);
                            break;
                    }
                }
            }
            MetaObject_private.RedrawMetaObject(this.Id);
        };
        MetaObject.prototype.SetX = function (x) {
            var offset = x - this.X;
            this.MoveOnX(offset);
        };
        MetaObject.prototype.GetX = function () {
            return this.X;
        };
        MetaObject.prototype.SetY = function (y) {
            var offset = y - this.Y;
            this.MoveOnY(offset);
        };
        MetaObject.prototype.GetY = function () {
            return this.Y;
        };
        MetaObject.prototype.SetZ = function (z) {
            var offset = z - this.Z;
            this.MoveOnZ(offset);
        };
        MetaObject.prototype.GetZ = function () {
            return this.Z;
        };
        MetaObject.prototype.Bring = function () {
            this.MoveToZ(Table.GetViewFinderZ());
            try {
                window[this.Id + "_OnBring"].apply(this);
            }
            catch (e) { }
            window[this.Id].Talk(this.Id + "_OnBring");
        };
        MetaObject.prototype.ToLimbo = function () {
            this.MoveToZ(sci.Limbo);
            try {
                window[this.Id + "_OnToLimbo"].apply(this);
            }
            catch (e) { }
            window[this.Id].Talk(this.Id + "_OnToLimbo");
        };
        MetaObject.prototype.SetEnabled = function (enabled) {
            var objetosExcluidos = ['AssociatedControl', 'RadioButton', 'MenuBarOption', 'PulldownMenuOption'];
            var objects = MetaObject_private.GetObjectsMap();
            for (var _i = 0, objects_9 = objects; _i < objects_9.length; _i++) {
                var objeto = objects_9[_i];
                if (objeto["MetaObjectId"] === this.Id) {
                    if (objetosExcluidos.indexOf(objeto["ObjectType"]) === -1) {
                        window[objeto["ObjectId"]].SetEnabled(enabled);
                    }
                }
            }
            MetaObject_private.RedrawMetaObject(this.Id);
        };
        MetaObject.prototype.SetVisible = function (visible) {
            var objetosExcluidos = ['AssociatedControl', 'RadioButton', 'MenuBarOption', 'PulldownMenuOption'];
            var objects = MetaObject_private.GetObjectsMap();
            for (var _i = 0, objects_10 = objects; _i < objects_10.length; _i++) {
                var objeto = objects_10[_i];
                if (objeto["MetaObjectId"] === this.Id) {
                    if (objetosExcluidos.indexOf(objeto["ObjectType"]) === -1) {
                        window[objeto["ObjectId"]].SetVisible(visible);
                    }
                }
            }
            MetaObject_private.RedrawMetaObject(this.Id);
        };
        MetaObject.prototype.SetCrossZ = function (crossZ) {
            var objetosExcluidos = ['AssociatedControl', 'RadioButton', 'MenuBarOption', 'PulldownMenu', 'PulldownMenuOption'];
            var objects = MetaObject_private.GetObjectsMap();
            for (var _i = 0, objects_11 = objects; _i < objects_11.length; _i++) {
                var objeto = objects_11[_i];
                if (objeto["MetaObjectId"] === this.Id) {
                    if (objetosExcluidos.indexOf(objeto["ObjectType"]) === -1) {
                        window[objeto["ObjectId"]].SetCrossZ(crossZ);
                    }
                }
            }
            MetaObject_private.RedrawMetaObject(this.Id);
        };
        MetaObject.prototype.SetZIndex = function (zIndex) {
            var objetosExcluidos = ['AssociatedControl', 'RadioButton', 'MenuBarOption', 'PulldownMenuOption'];
            var objects = MetaObject_private.GetObjectsMap();
            for (var _i = 0, objects_12 = objects; _i < objects_12.length; _i++) {
                var objeto = objects_12[_i];
                if (objeto["MetaObjectId"] === this.Id) {
                    if (objetosExcluidos.indexOf(objeto["ObjectType"]) === -1) {
                        window[objeto["ObjectId"]].SetZIndex(zIndex);
                        if (!isNaN(Number(zIndex))) {
                            zIndex = String(Number(zIndex) + 1);
                        }
                    }
                }
            }
            MetaObject_private.RedrawMetaObject(this.Id);
        };
        MetaObject.prototype.SetFontFamily = function (fontFamily) {
            var objetosExcluidos = ['AssociatedControl', 'RadioButton', 'Image', 'Canvas', 'Box', 'Ellipse', 'MenuBarOption', 'PulldownMenuOption'];
            var objects = MetaObject_private.GetObjectsMap();
            for (var _i = 0, objects_13 = objects; _i < objects_13.length; _i++) {
                var objeto = objects_13[_i];
                if (objeto["MetaObjectId"] === this.Id) {
                    if (objetosExcluidos.indexOf(objeto["ObjectType"]) === -1) {
                        window[objeto["ObjectId"]].SetFontFamily(fontFamily);
                    }
                }
            }
            MetaObject_private.RedrawMetaObject(this.Id);
        };
        MetaObject.prototype.SetFontSize = function (fontSize) {
            var objetosExcluidos = ['AssociatedControl', 'RadioButtonGroup', 'RadioButton', 'Image', 'CheckBox', 'Canvas', 'Box', 'Ellipse', 'MenuBarOption', 'PulldownMenuOption'];
            var objects = MetaObject_private.GetObjectsMap();
            for (var _i = 0, objects_14 = objects; _i < objects_14.length; _i++) {
                var objeto = objects_14[_i];
                if (objeto["MetaObjectId"] === this.Id) {
                    if (objetosExcluidos.indexOf(objeto["ObjectType"]) === -1) {
                        window[objeto["ObjectId"]].SetFontSize(fontSize);
                    }
                }
            }
            MetaObject_private.RedrawMetaObject(this.Id);
        };
        MetaObject.NumberOfUnnamedObjects = 0;
        MetaObject.objects = [];
        MetaObject.idsStack = [];
        return MetaObject;
    }());
    sci.MetaObject = MetaObject;
    var StatusBar_private = /** @class */ (function () {
        function StatusBar_private() {
        }
        StatusBar_private.Create = function () {
            //Crear nodo.
            var nodoNuevo = document.createElement("DIV");
            nodoNuevo.setAttribute("id", StatusBar.GetId());
            nodoNuevo.style.setProperty("position", "fixed");
            nodoNuevo.style.zIndex = ZIndexStatusBar;
            nodoNuevo.style.left = "0px";
            nodoNuevo.style.bottom = "0px";
            nodoNuevo.style.width = "100%";
            nodoNuevo.style.paddingLeft = "8px";
            nodoNuevo.style.paddingTop = "6px";
            nodoNuevo.style.height = String(Skin.GetStatusBarHeight()) + "px";
            // nodoNuevo.style.boxShadow = "inset 0 0 1px rgb(80,80,80)";
            nodoNuevo.style.fontSize = String(Skin.GetStatusBarFontSize()) + "px";
            nodoNuevo.style.fontFamily = Skin.GetStatusBarFontFamily();
            nodoNuevo.style.outline = "0";
            document.body.appendChild(nodoNuevo);
            //Implementar en el DOM las otras propiedades en el nodo.
            document.getElementById(StatusBar.GetId()).tabIndex = 0;
            StatusBar.SetVisible(StatusBar.GetVisible());
            StatusBar.SetColor(StatusBar.GetColor());
            StatusBar.SetBackColor(StatusBar.GetBackColor());
        };
        return StatusBar_private;
    }());
    var StatusBar = /** @class */ (function () {
        function StatusBar() {
        }
        StatusBar.Show = function () {
            if (!StatusBar.GetVisible()) {
                StatusBar.SetVisible(true);
            }
        };
        StatusBar.GetId = function () {
            return StatusBar.Id;
        };
        StatusBar.SetCaption = function (caption, messageType) {
            if (messageType === void 0) { messageType = sci.Const.Default; }
            StatusBar.Caption = caption;
            document.getElementById(StatusBar.Id).innerText = caption;
            clearTimeout(StatusBar.timSciTool); //Limpiar el timer por si estuviera corriendo a causa de un mensaje anterior, para que este nuevo mensaje tenga todo su tiempo.
            var color;
            var backColor;
            if (messageType === sci.Const.Default) {
                color = StatusBar.Color;
                backColor = StatusBar.BackColor;
            }
            if (messageType === sci.Const.Success) {
                color = StatusBar.SuccessColor;
                backColor = StatusBar.SuccessBackColor;
            }
            if (messageType === sci.Const.Unsuccess) {
                color = StatusBar.UnsuccessColor;
                backColor = StatusBar.UnsuccessBackColor;
            }
            if (messageType === sci.Const.Notice) {
                color = StatusBar.NoticeColor;
                backColor = StatusBar.NoticeBackColor;
            }
            if (messageType === sci.Const.Warning) {
                color = StatusBar.WarningColor;
                backColor = StatusBar.WarningBackColor;
            }
            document.getElementById(StatusBar.Id).style.color = color;
            document.getElementById(StatusBar.Id).style.backgroundColor = backColor;
            if (messageType === sci.Const.Success || messageType === sci.Const.Unsuccess || messageType === sci.Const.Notice || messageType === sci.Const.Warning) {
                StatusBar.timSciTool = setTimeout(function () {
                    document.getElementById(StatusBar.Id).style.color = StatusBar.GetColor();
                    document.getElementById(StatusBar.Id).style.backgroundColor = StatusBar.GetBackColor();
                    clearTimeout(StatusBar.timSciTool);
                    try {
                        window[StatusBar.Id + "_OnTimeToResetOver"].apply(StatusBar);
                    }
                    catch (e) { }
                    StatusBar.Talk(StatusBar.Id + "_OnTimeToResetOver");
                }, StatusBar.TimeToResetColor * 1000);
            }
        };
        StatusBar.GetCaption = function () {
            return StatusBar.Caption;
        };
        StatusBar.SetVisible = function (visible) {
            StatusBar.Visible = visible;
            if (visible === true) {
                document.getElementById(StatusBar.Id).style.visibility = 'visible';
            }
            else {
                document.getElementById(StatusBar.Id).style.visibility = 'hidden';
            }
        };
        StatusBar.GetVisible = function () {
            return StatusBar.Visible;
        };
        StatusBar.SetColor = function (color) {
            StatusBar.Color = color;
            document.getElementById(StatusBar.Id).style.color = color;
        };
        StatusBar.GetColor = function () {
            return StatusBar.Color;
        };
        StatusBar.SetBackColor = function (backColor) {
            StatusBar.BackColor = backColor;
            document.getElementById(StatusBar.Id).style.backgroundColor = backColor;
        };
        StatusBar.GetBackColor = function () {
            return StatusBar.BackColor;
        };
        StatusBar.Clear = function () {
            StatusBar.Caption = "";
            document.getElementById(StatusBar.Id).innerText = "";
        };
        StatusBar.Talk = function (message, metaMessage) {
            if (metaMessage === void 0) { metaMessage = ""; }
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (var i = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, "StatusBar", message, metaMessage);
                    }
                    catch (e) { }
                }
            }
            for (var _i = 0, _a = MetaObject.GetIdsStack(); _i < _a.length; _i++) {
                var idMetaobjeto = _a[_i];
                try {
                    window[idMetaobjeto + "_Listen"].call(this, "StatusBar", message, metaMessage);
                }
                catch (e) { }
            }
            try {
                window["scitool_Listen"].call(this, "StatusBar", message, metaMessage);
            }
            catch (e) { }
            try {
                window["Desk_Listen"].call(this, "StatusBar", message, metaMessage);
            }
            catch (e) { }
            try {
                window["StatusBar_Listen"].call(this, "StatusBar", message, metaMessage);
            }
            catch (e) { }
        };
        StatusBar.Id = "StatusBar";
        StatusBar.Caption = "";
        StatusBar.Visible = false;
        StatusBar.Color = Skin.GetStatusBarColor();
        StatusBar.BackColor = Skin.GetStatusBarBackColor();
        StatusBar.SuccessColor = Skin.GetStatusBarSuccessColor();
        StatusBar.SuccessBackColor = Skin.GetStatusBarSuccessBackColor();
        StatusBar.UnsuccessColor = Skin.GetStatusBarUnsuccessColor();
        StatusBar.UnsuccessBackColor = Skin.GetStatusBarUnsuccessBackColor();
        StatusBar.NoticeColor = Skin.GetStatusBarNoticeColor();
        StatusBar.NoticeBackColor = Skin.GetStatusBarNoticeBackColor();
        StatusBar.WarningColor = Skin.GetStatusBarWarningColor();
        StatusBar.WarningBackColor = Skin.GetStatusBarWarningBackColor();
        StatusBar.TimeToResetColor = Skin.GetStatusBarTimeToResetColor();
        return StatusBar;
    }());
    sci.StatusBar = StatusBar;
    var Document_private = /** @class */ (function () {
        function Document_private() {
        }
        Document_private.RedrawDocument = function (documentId) {
            var objectData;
            var idObjeto;
            var x, y, z, width, height;
            var xRelativo, yRelativo;
            var xDocumentOrigin = window[documentId].GetOriginX();
            var yDocumentOrigin = window[documentId].GetOriginY();
            var xDocument = window[documentId].GetX();
            var yDocument = window[documentId].GetY();
            var widthDocument = window[documentId].GetWidth();
            var heightDocument = window[documentId].GetHeight();
            var heightDocumentTitleBar = window[documentId].GetTitleBarHeight();
            var crossZ;
            var anchoEnPixeles;
            for (var i = 0; i < MetaObject_private.objects.length; i++) {
                objectData = MetaObject_private.objects[i];
                if (objectData["MetaObjectId"] === documentId
                    && objectData["ObjectType"] !== ObjectType.RadioButtonGroup
                    && objectData["ObjectType"] !== ObjectType.PulldownMenu
                    && objectData["ObjectType"] !== ObjectType.PulldownMenuOption) {
                    idObjeto = objectData["ObjectId"];
                    // Fijar el width si aún está en "auto", que es el valor inicial asignado por SciTool a los Labels.
                    if (objectData["ObjectType"] === ObjectType.Label && document.getElementById(idObjeto).dataset.scitoolwidth === "auto") {
                        try { // Se excluyen los Labels propios de SciTool, como la versión, por ejemplo.
                            anchoEnPixeles = String(window[idObjeto].GetPixelsLength());
                            document.getElementById(idObjeto).dataset.scitoolwidth = anchoEnPixeles;
                            document.getElementById(idObjeto).style.width = anchoEnPixeles + "px";
                        }
                        catch (e) { }
                    }
                    if (objectData["ObjectType"] === ObjectType.MenuBar) {
                        try {
                            var opciones = window[idObjeto].GetElements();
                            var x_1 = window[idObjeto].GetX();
                            for (var _i = 0, opciones_2 = opciones; _i < opciones_2.length; _i++) {
                                var opcion = opciones_2[_i];
                                // Verificar si la etiqueta aún está fijado con width "auto".
                                if (document.getElementById(opcion["Id"]).style.width === "auto") { // Un Label es "auto" cuando se crea, antes de que SciTool le fije el ancho según su contenido cuando ya se agregó al DOM.
                                    anchoEnPixeles = String(window[idObjeto].GetPixelsLength(opcion["Id"]));
                                    // Fijar coordenada x de la opción.
                                    document.getElementById(opcion["Id"]).dataset.scitoolx = String(x_1);
                                    // Fijar ancho de la opción.
                                    document.getElementById(opcion["Id"]).dataset.scitoolwidth = anchoEnPixeles;
                                    document.getElementById(opcion["Id"]).style.width = anchoEnPixeles + "px";
                                }
                                x_1 += Number(anchoEnPixeles) + window[idObjeto].GetSeparationBetweenOptions();
                            }
                        }
                        catch (e) { }
                    }
                    //
                    if (objectData["ObjectType"] !== ObjectType.MenuBar) {
                        x = Number(document.getElementById(idObjeto).dataset.scitoolx);
                        y = Number(document.getElementById(idObjeto).dataset.scitooly);
                        z = Number(document.getElementById(idObjeto).dataset.scitoolz);
                        width = Number(document.getElementById(idObjeto).dataset.scitoolwidth);
                        height = Number(document.getElementById(idObjeto).dataset.scitoolheight);
                        crossZ = document.getElementById(idObjeto).dataset.scitoolcrossz === "true";
                        if (Table.InViewFinder(x, y, z, width, height, crossZ)) {
                            //Calcular coordenadas del objeto a mostrar según posición del ViewFinder.
                            xRelativo = x - Table.GetViewFinderX();
                            yRelativo = y - Table.GetViewFinderY();
                            //Calcular coordenadas del objeto a mostrar según origen del documento.
                            if (objectData["ObjectType"] !== ObjectType.Document && objectData["ObjectType"] !== ObjectType.DocumentAssociatedControl) { //Elementos del contenido del documento.
                                xRelativo -= xDocumentOrigin;
                                yRelativo -= yDocumentOrigin;
                            }
                            document.getElementById(idObjeto).style.left = String(xRelativo) + "px";
                            document.getElementById(idObjeto).style.top = String(yRelativo) + "px";
                            //Recortar los objetos para mostrar solo las porciones visibles dentro del documento.
                            if (objectData["ObjectType"] === ObjectType.Document || objectData["ObjectType"] === ObjectType.DocumentAssociatedControl) { //Elementos del propio documento.
                                document.getElementById(idObjeto).style.removeProperty("display");
                            }
                            else { //Elementos del contenido del documento.
                                document.getElementById(idObjeto).style.clip = "rect(" + String(yDocument + heightDocumentTitleBar - y + yDocumentOrigin) + "px," + String(xDocument + widthDocument - x + xDocumentOrigin) + "px," + String(yDocument + heightDocument - y + yDocumentOrigin) + "px," + String(xDocument - x + xDocumentOrigin) + "px)";
                                document.getElementById(idObjeto).style.removeProperty("display");
                            }
                        }
                        else {
                            document.getElementById(idObjeto).style.setProperty("display", "none");
                        }
                    }
                }
                // if (objectData["ObjectType"] === ObjectType.PulldownMenuOption) {
                //     // window[objectData["ObjectId"]].RedrawMenu();
                //     document.getElementById(objectData["ObjectId"]).style.setProperty("display", "none");
                //     Menu.openMenus = false;
                // }
            }
        };
        return Document_private;
    }());
    var Document = /** @class */ (function () {
        function Document(x, y, z, width, height, caption, id) {
            var _this = this;
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (caption === void 0) { caption = ""; }
            this.Id = id;
            Document.idsStack.push(this.Id);
            Document.titleBarIdsStack.push(this.Id + "TitleBar");
            Document.labelTitleIdsStack.push("lblTitle" + this.Id);
            Document.labelDocumentRaiseButtonIdsStack.push("lblDocumentRaiseButton" + this.Id);
            Document.labelDocumentCloseButtonIdsStack.push("lblDocumentCloseButton" + this.Id);
            Document.labelDocumentCollectButtonIdsStack.push("lblDocumentCollectButton" + this.Id);
            Document.normalDocumentStack.push(this.Id);
            this.CrossZ = false;
            this.Caption = caption;
            this.Visible = true;
            this.ZIndex = String(MinZIndexNormalDocument + Document.normalDocumentStack.length * ZIndexDocumentSeparation);
            this.Enabled = true;
            this.BorderWidth = Skin.GetDocumentBorderWidth();
            this.BorderColor = Skin.GetDocumentBorderColor();
            this.TitleBarFontColor = Skin.GetDocumentTitleBarFontColor();
            this.TitleBarColor = Skin.GetDocumentTitleBarColor();
            this.Color = Skin.GetDocumentColor();
            this.DisabledTitleBarFontColor = Skin.GetDocumentDisabledTitleBarFontColor();
            this.DisabledTitleBarColor = Skin.GetDocumentDisabledTitleBarColor();
            this.TitleFontSize = Skin.GetDocumentTitleFontSize();
            this.TitleFontFamily = Skin.GetDocumentTitleFontFamily();
            this.TitleBarHeight = Skin.GetDocumentTitleBarHeight();
            this.DisplayStyle = sci.Const.Normal;
            this.OriginX = 0;
            this.OriginY = 0;
            this.Draggable = true;
            this.Raisable = true;
            this.Raised = false;
            this.Closable = true;
            this.CancelRaise = false;
            this.CancelClose = false;
            this.CancelCollect = false;
            //Crear nodo DIV para el documento.
            var nodoNuevo = document.createElement("DIV");
            nodoNuevo.setAttribute("id", this.Id);
            nodoNuevo.dataset.scitoolx = String(x);
            nodoNuevo.dataset.scitooly = String(y);
            nodoNuevo.dataset.scitoolz = String(z);
            nodoNuevo.dataset.scitoolwidth = String(width);
            nodoNuevo.dataset.scitoolheight = String(height);
            nodoNuevo.style.setProperty("position", "absolute");
            nodoNuevo.style.setProperty("display", "none");
            nodoNuevo.style.backgroundColor = Skin.GetDocumentColor();
            nodoNuevo.style.width = String(width) + "px";
            nodoNuevo.style.height = String(height) + "px";
            nodoNuevo.style.borderWidth = String(Skin.GetDocumentBorderWidth()) + "px";
            nodoNuevo.style.borderColor = Skin.GetDocumentBorderColor();
            nodoNuevo.style.borderStyle = "solid";
            nodoNuevo.style.borderRadius = String(Skin.GetDocumentBorderRadius()) + "px";
            nodoNuevo.style.boxShadow = "0px 3px 6px 0px rgba(0,0,0,0.4)";
            nodoNuevo.style.zIndex = String(MinZIndexNormalDocument + Document.normalDocumentStack.length * ZIndexDocumentSeparation);
            document.body.appendChild(nodoNuevo);
            //Crear nodo DIV para la barra de título.
            var nodoBarraTitulo = document.createElement("DIV");
            nodoBarraTitulo.setAttribute("id", this.Id + "TitleBar");
            nodoBarraTitulo.dataset.scitoolx = String(x + Skin.GetDocumentBorderWidth());
            nodoBarraTitulo.dataset.scitooly = String(y + Skin.GetDocumentBorderWidth());
            nodoBarraTitulo.dataset.scitoolz = String(z);
            nodoBarraTitulo.dataset.scitoolwidth = String(width);
            nodoBarraTitulo.dataset.scitoolheight = String(Skin.GetDocumentTitleBarHeight());
            //Efecto de líneas de fondo.
            // nodoBarraTitulo.style.backgroundImage = "linear-gradient(rgba(9,54,133,0) 2px, transparent 1px),linear-gradient(90deg, rgba(9,54,133,0) 1px, transparent 1px),linear-gradient(rgba(9,54,133,0.1) 1px, transparent 1px),linear-gradient(90deg, rgba(9,54,133,0) 1px, transparent 1px)";
            // nodoBarraTitulo.style.backgroundSize = "400px 400px, 400px 400px, 4px 4px, 4px 4px";
            // nodoBarraTitulo.style.backgroundPosition = "-2px -2px, -2px -2px, -1px -1px, -1px -1px";
            nodoBarraTitulo.style.backgroundColor = Skin.GetDocumentTitleBarColor();
            nodoBarraTitulo.style.width = String(width) + "px";
            nodoBarraTitulo.style.height = String(Skin.GetDocumentTitleBarHeight()) + "px";
            nodoBarraTitulo.style.padding = "0";
            nodoBarraTitulo.style.margin = "0";
            nodoBarraTitulo.style.borderTopLeftRadius = String(Skin.GetDocumentBorderRadius()) + "px";
            nodoBarraTitulo.style.borderTopRightRadius = String(Skin.GetDocumentBorderRadius()) + "px";
            nodoBarraTitulo.style.setProperty("position", "absolute");
            nodoBarraTitulo.style.setProperty("display", "none");
            nodoBarraTitulo.style.zIndex = String(MinZIndexNormalDocument + Document.normalDocumentStack.length * ZIndexDocumentSeparation);
            document.body.appendChild(nodoBarraTitulo);
            //Crear nodo label asociado.
            var nodoTitulo = document.createElement("LABEL");
            nodoTitulo.setAttribute("id", "lblTitle" + this.Id);
            nodoTitulo.dataset.scitoolx = String(x + Skin.GetDocumentBorderWidth());
            nodoTitulo.dataset.scitooly = String(y + Skin.GetDocumentBorderWidth());
            nodoTitulo.dataset.scitoolz = String(z);
            nodoTitulo.dataset.scitoolwidth = String(width - Number(Skin.GetDocumentBorderWidth()) * 2);
            nodoTitulo.dataset.scitoolheight = String(Skin.GetDocumentTitleBarHeight());
            nodoTitulo.style.width = String(width - Number(Skin.GetDocumentBorderWidth()) * 2) + "px";
            nodoTitulo.style.height = String(Skin.GetDocumentTitleBarHeight()) + "px";
            nodoTitulo.style.color = Skin.GetDocumentTitleBarFontColor();
            nodoTitulo.style.textAlign = "center";
            nodoTitulo.style.fontWeight = "bold";
            nodoTitulo.style.padding = "5";
            nodoTitulo.style.margin = "0";
            nodoTitulo.style.borderTopLeftRadius = String(Skin.GetDocumentBorderRadius()) + "px";
            nodoTitulo.style.borderTopRightRadius = String(Skin.GetDocumentBorderRadius()) + "px";
            nodoTitulo.style.fontSize = String(Skin.GetDocumentTitleFontSize()) + "px";
            nodoTitulo.style.fontFamily = Skin.GetDocumentTitleFontFamily();
            nodoTitulo.style.setProperty("position", "absolute");
            nodoTitulo.style.setProperty("display", "none");
            nodoTitulo.innerText = this.Caption;
            nodoTitulo.style.zIndex = String(MinZIndexNormalDocument + Document.normalDocumentStack.length * ZIndexDocumentSeparation);
            document.body.appendChild(nodoTitulo);
            //Crear nodo label Cerrar documento.
            var nodoDocumentCloseButton = document.createElement("LABEL");
            nodoDocumentCloseButton.setAttribute("id", "lblDocumentCloseButton" + this.Id);
            nodoDocumentCloseButton.dataset.scitoolx = String(x + Skin.GetDocumentBorderWidth() + Document.titleLeftMargin);
            nodoDocumentCloseButton.dataset.scitooly = String(y + Skin.GetDocumentBorderWidth() + Document.documentButtonTop);
            nodoDocumentCloseButton.dataset.scitoolz = String(z);
            nodoDocumentCloseButton.dataset.scitoolwidth = String(Document.documentButtonWidth);
            nodoDocumentCloseButton.dataset.scitoolheight = String(Skin.GetDocumentTitleBarHeight());
            nodoDocumentCloseButton.style.width = String(Document.documentButtonWidth) + "px";
            nodoDocumentCloseButton.style.height = String(Skin.GetDocumentTitleBarHeight()) + "px";
            nodoDocumentCloseButton.style.color = Skin.GetDocumentTitleBarButtonColor();
            nodoDocumentCloseButton.style.padding = "0";
            nodoDocumentCloseButton.style.margin = "0";
            nodoDocumentCloseButton.style.fontSize = "27px";
            nodoDocumentCloseButton.style.textAlign = "center";
            nodoDocumentCloseButton.style.fontFamily = Skin.GetDocumentTitleFontFamily();
            nodoDocumentCloseButton.style.setProperty("position", "absolute");
            nodoDocumentCloseButton.style.setProperty("display", "none");
            nodoDocumentCloseButton.innerText = "\u25cf";
            nodoDocumentCloseButton.style.zIndex = String(MinZIndexNormalDocument + Document.normalDocumentStack.length * ZIndexDocumentSeparation);
            document.body.appendChild(nodoDocumentCloseButton);
            //Crear nodo label Recoger.
            var nodoDocumentCollectButton = document.createElement("LABEL");
            nodoDocumentCollectButton.setAttribute("id", "lblDocumentCollectButton" + this.Id);
            nodoDocumentCollectButton.dataset.scitoolx = String(x + Skin.GetDocumentBorderWidth() + Document.titleLeftMargin + Document.documentButtonWidth);
            nodoDocumentCollectButton.dataset.scitooly = String(y + Skin.GetDocumentBorderWidth() + Document.documentButtonTop);
            nodoDocumentCollectButton.dataset.scitoolz = String(z);
            nodoDocumentCollectButton.dataset.scitoolwidth = String(Document.documentButtonWidth);
            nodoDocumentCollectButton.dataset.scitoolheight = String(Skin.GetDocumentTitleBarHeight());
            nodoDocumentCollectButton.style.width = String(Document.documentButtonWidth) + "px";
            nodoDocumentCollectButton.style.height = String(Skin.GetDocumentTitleBarHeight()) + "px";
            nodoDocumentCollectButton.style.color = Skin.GetDocumentTitleBarButtonColor();
            nodoDocumentCollectButton.style.padding = "0";
            nodoDocumentCollectButton.style.margin = "0";
            nodoDocumentCollectButton.style.fontSize = "27px";
            nodoDocumentCollectButton.style.textAlign = "center";
            nodoDocumentCollectButton.style.fontFamily = Skin.GetDocumentTitleFontFamily();
            nodoDocumentCollectButton.style.setProperty("position", "absolute");
            nodoDocumentCollectButton.style.setProperty("display", "none");
            nodoDocumentCollectButton.innerText = "\u25cf";
            nodoDocumentCollectButton.style.zIndex = String(MinZIndexNormalDocument + Document.normalDocumentStack.length * ZIndexDocumentSeparation);
            document.body.appendChild(nodoDocumentCollectButton);
            //Crear nodo label Elevar documento.
            var nodoDocumentRaiseButton = document.createElement("LABEL");
            nodoDocumentRaiseButton.setAttribute("id", "lblDocumentRaiseButton" + this.Id);
            nodoDocumentRaiseButton.dataset.scitoolx = String(x + Skin.GetDocumentBorderWidth() + Document.titleLeftMargin + 2 * Document.documentButtonWidth);
            nodoDocumentRaiseButton.dataset.scitooly = String(y + Skin.GetDocumentBorderWidth() + Document.documentButtonTop);
            nodoDocumentRaiseButton.dataset.scitoolz = String(z);
            nodoDocumentRaiseButton.dataset.scitoolwidth = String(Document.documentButtonWidth);
            nodoDocumentRaiseButton.dataset.scitoolheight = String(Skin.GetDocumentTitleBarHeight());
            nodoDocumentRaiseButton.style.width = String(Document.documentButtonWidth) + "px";
            nodoDocumentRaiseButton.style.height = String(Skin.GetDocumentTitleBarHeight()) + "px";
            nodoDocumentRaiseButton.style.color = Skin.GetDocumentTitleBarButtonColor();
            nodoDocumentRaiseButton.style.padding = "0";
            nodoDocumentRaiseButton.style.margin = "0";
            nodoDocumentRaiseButton.style.fontSize = "27px";
            nodoDocumentRaiseButton.style.textAlign = "center";
            nodoDocumentRaiseButton.style.fontFamily = Skin.GetDocumentTitleFontFamily();
            nodoDocumentRaiseButton.style.setProperty("position", "absolute");
            nodoDocumentRaiseButton.style.setProperty("display", "none");
            nodoDocumentRaiseButton.innerText = "\u25cf";
            nodoDocumentRaiseButton.style.zIndex = String(MinZIndexNormalDocument + Document.normalDocumentStack.length * ZIndexDocumentSeparation);
            document.body.appendChild(nodoDocumentRaiseButton);
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                //Posicionar el documento relativamente al plano.
                var X = x;
                var Y = y;
                X -= Table.GetViewFinderX();
                Y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(X) + "px";
                document.getElementById(this.Id).style.top = String(Y) + "px";
                //Posicionar la barra de título relativamente al plano.
                X = x + Skin.GetDocumentBorderWidth();
                Y = y + Skin.GetDocumentBorderWidth();
                X -= Table.GetViewFinderX();
                Y -= Table.GetViewFinderY();
                document.getElementById(this.Id + "TitleBar").style.left = String(X) + "px";
                document.getElementById(this.Id + "TitleBar").style.top = String(Y) + "px";
                //Posicionar título del documento relativamente al plano.
                X = x + Skin.GetDocumentBorderWidth();
                Y = y + Skin.GetDocumentBorderWidth();
                X -= Table.GetViewFinderX();
                Y -= Table.GetViewFinderY();
                document.getElementById("lblTitle" + this.Id).style.left = String(X) + "px";
                document.getElementById("lblTitle" + this.Id).style.top = String(Y) + "px";
                //Posicionar label Cerrar del documento relativamente al plano.
                X = x + Skin.GetDocumentBorderWidth() + Document.titleLeftMargin;
                Y = y + Skin.GetDocumentBorderWidth();
                X -= Table.GetViewFinderX();
                Y -= Table.GetViewFinderY();
                document.getElementById("lblDocumentCloseButton" + this.Id).style.left = String(X) + "px";
                document.getElementById("lblDocumentCloseButton" + this.Id).style.top = String(Y + Document.documentButtonTop) + "px";
                //Posicionar label Recoger del documento relativamente al plano.
                X = x + Skin.GetDocumentBorderWidth() + Document.titleLeftMargin + Document.documentButtonWidth;
                Y = y + Skin.GetDocumentBorderWidth();
                X -= Table.GetViewFinderX();
                Y -= Table.GetViewFinderY();
                document.getElementById("lblDocumentCollectButton" + this.Id).style.left = String(X) + "px";
                document.getElementById("lblDocumentCollectButton" + this.Id).style.top = String(Y + Document.documentButtonTop) + "px";
                //Posicionar label Raise del documento relativamente al plano.
                X = x + Skin.GetDocumentBorderWidth() + Document.titleLeftMargin + 2 * Document.documentButtonWidth;
                Y = y + Skin.GetDocumentBorderWidth();
                X -= Table.GetViewFinderX();
                Y -= Table.GetViewFinderY();
                document.getElementById("lblDocumentRaiseButton" + this.Id).style.left = String(X) + "px";
                document.getElementById("lblDocumentRaiseButton" + this.Id).style.top = String(Y + Document.documentButtonTop) + "px";
                document.getElementById(this.Id).style.removeProperty("display");
                document.getElementById(this.Id + "TitleBar").style.removeProperty("display");
                document.getElementById("lblTitle" + this.Id).style.removeProperty("display");
                document.getElementById("lblDocumentRaiseButton" + this.Id).style.removeProperty("display");
                document.getElementById("lblDocumentCloseButton" + this.Id).style.removeProperty("display");
                document.getElementById("lblDocumentCollectButton" + this.Id).style.removeProperty("display");
            }
            MetaObject_private.AddDataObject(this.Id, this.Id, ObjectType.Document);
            MetaObject_private.AddDataObject(this.Id, this.Id + "TitleBar", ObjectType.DocumentAssociatedControl);
            MetaObject_private.AddDataObject(this.Id, "lblTitle" + this.Id, ObjectType.DocumentAssociatedControl);
            MetaObject_private.AddDataObject(this.Id, "lblDocumentRaiseButton" + this.Id, ObjectType.DocumentAssociatedControl);
            MetaObject_private.AddDataObject(this.Id, "lblDocumentCloseButton" + this.Id, ObjectType.DocumentAssociatedControl);
            MetaObject_private.AddDataObject(this.Id, "lblDocumentCollectButton" + this.Id, ObjectType.DocumentAssociatedControl);
            document.getElementById(this.Id).onclick = function () {
                if (_this.Enabled) {
                    window[_this.Id].Bring();
                    try {
                        window[_this.Id + "_OnClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnClick");
                }
            };
            document.getElementById(this.Id + "TitleBar").onclick = function () {
                if (_this.Enabled) {
                    window[_this.Id].Bring();
                    try {
                        window[_this.Id + "_OnClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnClick");
                }
            };
            document.getElementById(this.Id + "TitleBar").ondblclick = function () {
                if (_this.Enabled) {
                    window[_this.Id].Bring();
                    //Enviar documento al borde de la pantalla.
                    if (_this.GetRaised()) { // Primero se fuerza a que el documento vuelva a pegarse a la mesa.
                        window[_this.Id].Unraise();
                    }
                    if (StatusBar.GetVisible()) {
                        _this.SetY(window.scrollY + window.innerHeight - Skin.GetStatusBarHeight() - _this.GetBorderWidth() - _this.GetTitleBarHeight() - 30);
                    }
                    else {
                        _this.SetY(window.scrollY + window.innerHeight - _this.GetBorderWidth() - _this.GetTitleBarHeight() - 30);
                    }
                    try {
                        window[_this.Id + "_OnDblClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnDblClick");
                }
            };
            document.getElementById("lblTitle" + this.Id).onclick = function () {
                if (_this.Enabled) {
                    window[_this.Id].Bring();
                    try {
                        window[_this.Id + "_OnClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnClick");
                }
            };
            document.getElementById("lblTitle" + this.Id).ondblclick = function () {
                if (_this.Enabled) {
                    window[_this.Id].Bring();
                    //Enviar documento al borde de la pantalla.
                    if (_this.GetRaised()) { // Primero se fuerza a que el documento vuelva a pegarse a la mesa.
                        window[_this.Id].Unraise();
                    }
                    if (StatusBar.GetVisible()) {
                        _this.SetY(window.scrollY + window.innerHeight - Skin.GetStatusBarHeight() - _this.GetBorderWidth() - _this.GetTitleBarHeight() - 30);
                    }
                    else {
                        _this.SetY(window.scrollY + window.innerHeight - _this.GetBorderWidth() - _this.GetTitleBarHeight() - 30);
                    }
                    try {
                        window[_this.Id + "_OnDblClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnDblClick");
                }
            };
            document.getElementById("lblDocumentRaiseButton" + this.Id).onclick = function () {
                if (_this.Enabled) {
                    if (_this.Raisable) {
                        try {
                            window[_this.Id + "_OnBeforeRaising"].apply(_this);
                        }
                        catch (e) { }
                        window[_this.Id].Talk(_this.Id + "_OnBeforeRaising");
                        if (!_this.CancelRaise) {
                            if (window[_this.Id].GetRaised()) {
                                window[_this.Id].Unraise();
                            }
                            else {
                                window[_this.Id].Raise();
                            }
                            try {
                                window[_this.Id + "_OnClick"].apply(_this);
                            }
                            catch (e) { }
                            window[_this.Id].Talk(_this.Id + "_OnClick");
                            try {
                                window[_this.Id + "_OnRaise"].apply(_this);
                            }
                            catch (e) { }
                            window[_this.Id].Talk(_this.Id + "_OnRaise");
                        }
                        // Resetear valor en false.
                        _this.CancelRaise = false;
                    }
                }
            };
            document.getElementById("lblDocumentRaiseButton" + this.Id).onmouseover = function () {
                if (_this.Enabled) {
                    if (_this.Raisable) {
                        document.getElementById("lblDocumentRaiseButton" + _this.Id).style.color = Skin.GetDocumentTitleBarButtonColorOnMouseOver();
                    }
                }
            };
            document.getElementById("lblDocumentRaiseButton" + this.Id).onmouseout = function () {
                if (_this.Enabled) {
                    if (_this.Raisable) {
                        document.getElementById("lblDocumentRaiseButton" + _this.Id).style.color = Skin.GetDocumentTitleBarButtonColor();
                    }
                }
            };
            document.getElementById("lblDocumentCloseButton" + this.Id).onclick = function () {
                if (_this.Enabled) {
                    if (_this.Closable) {
                        try {
                            window[_this.Id + "_OnBeforeClosing"].apply(_this);
                        }
                        catch (e) { }
                        window[_this.Id].Talk(_this.Id + "_OnBeforeClosing");
                        if (!_this.CancelClose) {
                            window[_this.Id].ToLimbo();
                            try {
                                window[_this.Id + "_OnClick"].apply(_this);
                            }
                            catch (e) { }
                            window[_this.Id].Talk(_this.Id + "_OnClick");
                            try {
                                window[_this.Id + "_OnClose"].apply(_this);
                            }
                            catch (e) { }
                            window[_this.Id].Talk(_this.Id + "_OnClose");
                        }
                        // Resetear valor en false.
                        _this.CancelClose = false;
                    }
                }
            };
            document.getElementById("lblDocumentCloseButton" + this.Id).onmouseover = function () {
                if (_this.Enabled) {
                    if (_this.Closable) {
                        document.getElementById("lblDocumentCloseButton" + _this.Id).style.color = Skin.GetDocumentTitleBarButtonColorOnMouseOver();
                    }
                }
            };
            document.getElementById("lblDocumentCloseButton" + this.Id).onmouseout = function () {
                if (_this.Enabled) {
                    if (_this.Closable) {
                        document.getElementById("lblDocumentCloseButton" + _this.Id).style.color = Skin.GetDocumentTitleBarButtonColor();
                    }
                }
            };
            document.getElementById("lblDocumentCollectButton" + this.Id).onclick = function () {
                if (_this.Enabled) {
                    if (_this.Draggable) {
                        try {
                            window[_this.Id + "_OnBeforeCollecting"].apply(_this);
                        }
                        catch (e) { }
                        window[_this.Id].Talk(_this.Id + "_OnBeforeCollecting");
                        if (!_this.CancelCollect) {
                            window[_this.Id].SetZ(LimboEscritorio);
                            try {
                                window[_this.Id + "_OnClick"].apply(_this);
                            }
                            catch (e) { }
                            window[_this.Id].Talk(_this.Id + "_OnClick");
                            try {
                                window[_this.Id + "_OnCollect"].apply(_this);
                            }
                            catch (e) { }
                            window[_this.Id].Talk(_this.Id + "_OnCollect");
                        }
                        // Resetear valor en false.
                        _this.CancelCollect = false;
                    }
                }
            };
            document.getElementById("lblDocumentCollectButton" + this.Id).onmouseover = function () {
                if (_this.Enabled) {
                    if (_this.Draggable) {
                        document.getElementById("lblDocumentCollectButton" + _this.Id).style.color = Skin.GetDocumentTitleBarButtonColorOnMouseOver();
                    }
                }
            };
            document.getElementById("lblDocumentCollectButton" + this.Id).onmouseout = function () {
                if (_this.Enabled) {
                    if (_this.Draggable) {
                        document.getElementById("lblDocumentCollectButton" + _this.Id).style.color = Skin.GetDocumentTitleBarButtonColor();
                    }
                }
            };
            //Hacer arrastrable al documento.
            documentoArrastrable(this);
            function documentoArrastrable(documento) {
                var elementoArrastrador1 = document.getElementById("lblTitle" + documento.Id); //Título de la barra.
                var elementoArrastrador2 = document.getElementById(documento.Id); //Documento mismo, es decir, el DIV de fondo.
                var desfaceX = 0;
                var desfaceY = 0;
                var anchoNavegador = 0;
                var altoNavegador = 0;
                var altoBarraEstado = 0;
                var clientX = 0;
                var clientY = 0;
                var anchoDocumento = 0;
                var altoDocumento = 0;
                var anchoBordeDocumento = 0;
                var margenDeSeguridad = 0;
                document.getElementById(elementoArrastrador1.id).onmousedown = ComenzarArrastre;
                document.getElementById(elementoArrastrador2.id).onmousedown = ComenzarArrastre;
                function ComenzarArrastre(e) {
                    if (documento.Draggable) {
                        e = e || window.event;
                        e.preventDefault();
                        if (documento.Enabled) {
                            documento.Bring(sci.Const.NormalBring, true);
                        }
                        // Desface inicial entre el mouse y la posición del documento.
                        desfaceX = e.clientX - documento.GetX();
                        desfaceY = e.clientY - documento.GetY();
                        // Calcular tamaño del navegador.
                        anchoNavegador = 0;
                        altoNavegador = 0;
                        if (typeof window.innerWidth != 'undefined') {
                            anchoNavegador = window.innerWidth;
                            altoNavegador = window.innerHeight;
                        }
                        else if (typeof document.documentElement != 'undefined'
                            && typeof document.documentElement.clientWidth !=
                                'undefined' && document.documentElement.clientWidth != 0) {
                            anchoNavegador = document.documentElement.clientWidth;
                            altoNavegador = document.documentElement.clientHeight;
                        }
                        else {
                            anchoNavegador = document.getElementsByTagName('body')[0].clientWidth;
                            altoNavegador = document.getElementsByTagName('body')[0].clientHeight;
                        }
                        // Calcular alto de la barra de estado.
                        altoBarraEstado = 0;
                        if (StatusBar.GetVisible()) {
                            altoBarraEstado = Skin.GetStatusBarHeight();
                        }
                        // Calcular dimensiones del documento.
                        anchoDocumento = documento.GetWidth();
                        altoDocumento = documento.GetHeight();
                        anchoBordeDocumento = documento.GetBorderWidth();
                        margenDeSeguridad = documento.GetBorderWidth() + 5;
                        document.onmouseup = TerminarArrastre;
                        document.onmousemove = Arrastrando;
                    }
                }
                function Arrastrando(e) {
                    e = e || window.event;
                    e.preventDefault();
                    clientX = e.clientX;
                    clientY = e.clientY;
                    // Fijar documento en nueva posición.
                    if (Table.GetScrollable()) {
                        if (clientX > margenDeSeguridad) {
                            documento.SetX(clientX - desfaceX);
                        }
                        if (clientY - desfaceY >= 0) {
                            documento.SetY(clientY - desfaceY);
                        }
                    }
                    else {
                        if ((clientX > 5 + anchoBordeDocumento) && (clientX - desfaceX + anchoDocumento + anchoBordeDocumento * 2 <= anchoNavegador)) {
                            documento.SetX(clientX - desfaceX);
                        }
                        if ((clientY - desfaceY >= 0) && (clientY - desfaceY + altoDocumento + anchoBordeDocumento * 2 <= altoNavegador - altoBarraEstado)) {
                            documento.SetY(clientY - desfaceY);
                        }
                    }
                }
                function TerminarArrastre() {
                    document.onmouseup = null;
                    document.onmousemove = null;
                }
            }
        }
        Document.prototype.InDocument = function (x, y, z, width, height, crossZ) {
            if ((x >= this.GetX() && x + width <= this.GetX() + this.GetWidth()) && (y >= this.GetY() && y + height <= this.GetY() + this.GetHeight()) && (z === this.GetZ() || crossZ === true)) {
                return true;
            }
            else {
                return false;
            }
        };
        Document.GetIdsStack = function () {
            return Document.idsStack;
        };
        Document.GetTitleBarIdsStack = function () {
            return Document.titleBarIdsStack;
        };
        Document.GetLabelTitleIdsStack = function () {
            return Document.labelTitleIdsStack;
        };
        Document.GetLabelDocumentRaiseButtonIdsStack = function () {
            return Document.labelDocumentRaiseButtonIdsStack;
        };
        Document.GetLabelDocumentCloseButtonIdsStack = function () {
            return Document.labelDocumentCloseButtonIdsStack;
        };
        Document.GetLabelDocumentCollectButtonIdsStack = function () {
            return Document.labelDocumentCollectButtonIdsStack;
        };
        Document.prototype.AddCanvas = function (x, y, width, height, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (id === void 0) { id = 'Canvas' + (Canvas.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Canvas(this.Id, this.GetX() + this.GetBorderWidth() + x, this.GetY() + this.GetBorderWidth() + this.GetTitleBarHeight() + y, this.GetZ(), width, height, id);
                return true;
            }
            else {
                return false;
            }
        };
        Document.prototype.AddBox = function (x, y, width, height, borderWidth, borderColor, fillColor, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (borderWidth === void 0) { borderWidth = Skin.GetBoxBorderWidth(); }
            if (borderColor === void 0) { borderColor = Skin.GetBoxBorderColor(); }
            if (fillColor === void 0) { fillColor = Skin.GetBoxFillColor(); }
            if (id === void 0) { id = 'Box' + (Box.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Box(this.Id, this.GetX() + this.GetBorderWidth() + x, this.GetY() + this.GetBorderWidth() + this.GetTitleBarHeight() + y, this.GetZ(), width, height, borderWidth, borderColor, fillColor, id);
                return true;
            }
            else {
                return false;
            }
        };
        Document.prototype.AddEllipse = function (x, y, width, height, borderWidth, borderColor, fillColor, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (borderWidth === void 0) { borderWidth = Skin.GetEllipseBorderWidth(); }
            if (borderColor === void 0) { borderColor = Skin.GetEllipseBorderColor(); }
            if (fillColor === void 0) { fillColor = Skin.GetEllipseFillColor(); }
            if (id === void 0) { id = 'Ellipse' + (Ellipse.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Ellipse(this.Id, this.GetX() + this.GetBorderWidth() + x, this.GetY() + this.GetBorderWidth() + this.GetTitleBarHeight() + y, this.GetZ(), width, height, borderWidth, borderColor, fillColor, id);
                return true;
            }
            else {
                return false;
            }
        };
        Document.prototype.AddLabel = function (x, y, caption, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (caption === void 0) { caption = ""; }
            if (id === void 0) { id = 'Label' + (Label.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Label(this.Id, this.GetX() + this.GetBorderWidth() + x, this.GetY() + this.GetBorderWidth() + this.GetTitleBarHeight() + y, this.GetZ(), caption, id);
                return true;
            }
            else {
                return false;
            }
        };
        Document.prototype.AddTextBox = function (x, y, caption, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (caption === void 0) { caption = ""; }
            if (id === void 0) { id = 'TextBox' + (TextBox.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new TextBox(this.Id, this.GetX() + this.GetBorderWidth() + x, this.GetY() + this.GetBorderWidth() + this.GetTitleBarHeight() + y, this.GetZ(), caption, id);
                return true;
            }
            else {
                return false;
            }
        };
        Document.prototype.AddButton = function (x, y, caption, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (caption === void 0) { caption = ""; }
            if (id === void 0) { id = 'Button' + (Button.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Button(this.Id, this.GetX() + this.GetBorderWidth() + x, this.GetY() + this.GetBorderWidth() + this.GetTitleBarHeight() + y, this.GetZ(), caption, id);
                return true;
            }
            else {
                return false;
            }
        };
        Document.prototype.AddImage = function (x, y, width, height, imageFile, caption, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (imageFile === void 0) { imageFile = ""; }
            if (caption === void 0) { caption = ""; }
            if (id === void 0) { id = 'Image' + (Image.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Image(this.Id, this.GetX() + this.GetBorderWidth() + x, this.GetY() + this.GetBorderWidth() + this.GetTitleBarHeight() + y, this.GetZ(), width, height, imageFile, caption, id);
                return true;
            }
            else {
                return false;
            }
        };
        Document.prototype.AddVideo = function (x, y, width, height, videoFile, autoPlay, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (videoFile === void 0) { videoFile = ""; }
            if (autoPlay === void 0) { autoPlay = false; }
            if (id === void 0) { id = 'Video' + (Video.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Video(this.Id, this.GetX() + this.GetBorderWidth() + x, this.GetY() + this.GetBorderWidth() + this.GetTitleBarHeight() + y, this.GetZ(), width, height, videoFile, autoPlay, id);
                return true;
            }
            else {
                return false;
            }
        };
        Document.prototype.AddCheckBox = function (x, y, caption, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (caption === void 0) { caption = ""; }
            if (id === void 0) { id = 'CheckBox' + (CheckBox.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new CheckBox(this.Id, this.GetX() + this.GetBorderWidth() + x, this.GetY() + this.GetBorderWidth() + this.GetTitleBarHeight() + y, this.GetZ(), caption, id);
                return true;
            }
            else {
                return false;
            }
        };
        Document.prototype.AddRadioButtonGroup = function (x, y, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (id === void 0) { id = 'RadioButtonGroup' + (RadioButtonGroup.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new RadioButtonGroup(this.Id, this.GetX() + this.GetBorderWidth() + x, this.GetY() + this.GetBorderWidth() + this.GetTitleBarHeight() + y, this.GetZ(), id);
                return true;
            }
            else {
                return false;
            }
        };
        Document.prototype.AddComboBox = function (x, y, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (id === void 0) { id = 'ComboBox' + (ComboBox.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new ComboBox(this.Id, this.GetX() + this.GetBorderWidth() + x, this.GetY() + this.GetBorderWidth() + this.GetTitleBarHeight() + y, this.GetZ(), id);
                return true;
            }
            else {
                return false;
            }
        };
        Document.prototype.AddFile = function (x, y, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (id === void 0) { id = 'File' + (File.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new File(this.Id, this.GetX() + this.GetBorderWidth() + x, this.GetY() + this.GetBorderWidth() + this.GetTitleBarHeight() + y, this.GetZ(), id);
                return true;
            }
            else {
                return false;
            }
        };
        Document.prototype.AddRequester = function (id) {
            if (id === void 0) { id = 'Requester' + (Requester.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Requester(id);
                return true;
            }
            else {
                return false;
            }
        };
        Document.prototype.AddChronometer = function (id) {
            if (id === void 0) { id = 'Chronometer' + (Chronometer.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Chronometer(id);
                return true;
            }
            else {
                return false;
            }
        };
        Document.prototype.AddTimer = function (hours, minutes, seconds, centiseconds, id) {
            if (hours === void 0) { hours = 0; }
            if (minutes === void 0) { minutes = 0; }
            if (seconds === void 0) { seconds = 0; }
            if (centiseconds === void 0) { centiseconds = 0; }
            if (id === void 0) { id = 'Timer' + (Timer.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Timer(hours, minutes, seconds, centiseconds, id);
                return true;
            }
            else {
                return false;
            }
        };
        Document.prototype.AddDiv = function (x, y, width, height, borderWidth, borderColor, fillColor, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (borderWidth === void 0) { borderWidth = Skin.GetDivBorderWidth(); }
            if (borderColor === void 0) { borderColor = Skin.GetDivBorderColor(); }
            if (fillColor === void 0) { fillColor = Skin.GetDivFillColor(); }
            if (id === void 0) { id = 'Div' + (Div.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Div(this.Id, this.GetX() + this.GetBorderWidth() + x, this.GetY() + this.GetBorderWidth() + this.GetTitleBarHeight() + y, this.GetZ(), width, height, borderWidth, borderColor, fillColor, id);
                return true;
            }
            else {
                return false;
            }
        };
        Document.prototype.AddMenuBar = function (x, y, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (id === void 0) { id = 'Menu' + (Menu.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Menu(this.Id, this.GetX() + this.GetBorderWidth() + x, this.GetY() + this.GetBorderWidth() + this.GetTitleBarHeight() + y, this.GetZ(), ObjectType.MenuBar, id);
                return true;
            }
            else {
                return false;
            }
        };
        //Los Menú Pulldown siempre se crean en (0,0,Limbo).
        Document.prototype.AddPulldownMenu = function (id) {
            if (id === void 0) { id = 'Menu' + (Menu.NumberOfUnnamedObjects++); }
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Menu(this.Id, 0, 0, sci.Limbo, ObjectType.PulldownMenu, id);
                return true;
            }
            else {
                return false;
            }
        };
        Document.prototype.Talk = function (message, metaMessage) {
            if (metaMessage === void 0) { metaMessage = ""; }
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (var i = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    }
                    catch (e) { }
                }
            }
            for (var _i = 0, _a = MetaObject.GetIdsStack(); _i < _a.length; _i++) {
                var idMetaobjeto = _a[_i];
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                }
                catch (e) { }
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
        };
        Document.prototype.CancelRaising = function () {
            this.CancelRaise = true;
        };
        Document.prototype.CancelClosing = function () {
            this.CancelClose = true;
        };
        Document.prototype.CancelCollecting = function () {
            this.CancelCollect = true;
        };
        Document.prototype.SetCancelCollecting = function (cancelCollecting) {
            this.CancelCollect = cancelCollecting;
        };
        Document.prototype.GetCancelCollecting = function () {
            return this.CancelCollect;
        };
        Document.prototype.GetId = function () {
            return this.Id;
        };
        Document.prototype.VisibleInScreen = function () {
            if ((this.GetX() + this.GetWidth() >= Number(window.scrollX)) && (this.GetX() <= Number(window.scrollX) + Number(window.innerWidth)) && (this.GetY() + this.GetHeight() >= Number(window.scrollY)) && (this.GetY() <= Number(window.scrollY) + Number(window.innerHeight))) {
                return true;
            }
            else {
                return false;
            }
        };
        Document.prototype.SetOriginX = function (originX) {
            this.OriginX = originX;
            Document_private.RedrawDocument(this.Id);
        };
        Document.prototype.GetOriginX = function () {
            return this.OriginX;
        };
        Document.prototype.SetOriginY = function (originY) {
            this.OriginY = originY;
            Document_private.RedrawDocument(this.Id);
        };
        Document.prototype.GetOriginY = function () {
            return this.OriginY;
        };
        Document.prototype.SetX = function (x) {
            var documentX = Number(document.getElementById(this.Id).dataset.scitoolx);
            var objectX;
            var X = x;
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            var objects = MetaObject_private.GetObjectsMap();
            for (var _i = 0, objects_15 = objects; _i < objects_15.length; _i++) {
                var objeto = objects_15[_i];
                if (objeto["MetaObjectId"] === this.Id && objeto["ObjectType"] !== ObjectType.RadioButtonGroup && objeto["ObjectType"] !== ObjectType.MenuBarOption && objeto["ObjectType"] !== ObjectType.PulldownMenuOption) {
                    switch (objeto["ObjectId"]) {
                        case this.Id:
                            document.getElementById(objeto["ObjectId"]).dataset.scitoolx = String(x);
                            break;
                        case this.Id + "TitleBar":
                            document.getElementById(objeto["ObjectId"]).dataset.scitoolx = String(x + this.GetBorderWidth());
                            break;
                        case "lblTitle" + this.Id:
                            document.getElementById(objeto["ObjectId"]).dataset.scitoolx = String(x + this.GetBorderWidth());
                            break;
                        case "lblDocumentCloseButton" + this.Id:
                            document.getElementById(objeto["ObjectId"]).dataset.scitoolx = String(x + this.GetBorderWidth() + Document.titleLeftMargin);
                            break;
                        case "lblDocumentCollectButton" + this.Id:
                            document.getElementById(objeto["ObjectId"]).dataset.scitoolx = String(x + this.GetBorderWidth() + Document.titleLeftMargin + Document.documentButtonWidth);
                            break;
                        case "lblDocumentRaiseButton" + this.Id:
                            document.getElementById(objeto["ObjectId"]).dataset.scitoolx = String(x + this.GetBorderWidth() + Document.titleLeftMargin + 2 * Document.documentButtonWidth);
                            break;
                        default:
                            if (objeto["ObjectType"] !== ObjectType.MenuBar && objeto["ObjectType"] !== ObjectType.PulldownMenu) {
                                //Calcular coordenada X del objeto relativa al documento antes del cambio de X del documento.
                                objectX = Number(document.getElementById(objeto["ObjectId"]).dataset.scitoolx) - documentX - this.GetBorderWidth();
                                //Asignar nueva coordenada X al objeto.
                                document.getElementById(objeto["ObjectId"]).dataset.scitoolx = String(X + this.GetBorderWidth() + objectX);
                            }
                            else {
                                //Calcular coordenada X del objeto relativa al documento antes del cambio de X del documento.
                                objectX = window[objeto["ObjectId"]].GetX() - documentX - this.GetBorderWidth();
                                //Asignar nueva coordenada X al objeto.
                                window[objeto["ObjectId"]].SetX(X + this.GetBorderWidth() + objectX);
                            }
                            break;
                    }
                }
            }
            Document_private.RedrawDocument(this.Id);
        };
        Document.prototype.GetX = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        };
        Document.prototype.SetY = function (y) {
            var documentY = Number(document.getElementById(this.Id).dataset.scitooly);
            var objectY;
            var Y = y;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            var objects = MetaObject_private.GetObjectsMap();
            for (var _i = 0, objects_16 = objects; _i < objects_16.length; _i++) {
                var objeto = objects_16[_i];
                if (objeto["MetaObjectId"] === this.Id && objeto["ObjectType"] !== ObjectType.RadioButtonGroup && objeto["ObjectType"] !== ObjectType.MenuBarOption && objeto["ObjectType"] !== ObjectType.PulldownMenuOption) {
                    switch (objeto["ObjectId"]) {
                        case this.Id:
                            document.getElementById(objeto["ObjectId"]).dataset.scitooly = String(y);
                            break;
                        case this.Id + "TitleBar":
                            document.getElementById(objeto["ObjectId"]).dataset.scitooly = String(y + this.GetBorderWidth());
                            break;
                        case "lblTitle" + this.Id:
                            document.getElementById(objeto["ObjectId"]).dataset.scitooly = String(y + this.GetBorderWidth());
                            break;
                        case "lblDocumentRaiseButton" + this.Id:
                            document.getElementById(objeto["ObjectId"]).dataset.scitooly = String(y + this.GetBorderWidth() + Document.documentButtonTop);
                            break;
                        case "lblDocumentCloseButton" + this.Id:
                            document.getElementById(objeto["ObjectId"]).dataset.scitooly = String(y + this.GetBorderWidth() + Document.documentButtonTop);
                            break;
                        case "lblDocumentCollectButton" + this.Id:
                            document.getElementById(objeto["ObjectId"]).dataset.scitooly = String(y + this.GetBorderWidth() + Document.documentButtonTop);
                            break;
                        default:
                            if (objeto["ObjectType"] !== ObjectType.MenuBar && objeto["ObjectType"] !== ObjectType.PulldownMenu) {
                                //Calcular coordenada Y del objeto relativa al documento antes del cambio de Y del documento.
                                objectY = Number(document.getElementById(objeto["ObjectId"]).dataset.scitooly) - documentY - this.GetBorderWidth();
                                //Asignar nueva coordenada Y al objeto.
                                document.getElementById(objeto["ObjectId"]).dataset.scitooly = String(Y + this.GetBorderWidth() + objectY);
                            }
                            else {
                                //Calcular coordenada Y del objeto relativa al documento antes del cambio de Y del documento.
                                objectY = window[objeto["ObjectId"]].GetY() - documentY - this.GetBorderWidth();
                                //Asignar nueva coordenada Y al objeto.
                                window[objeto["ObjectId"]].SetY(Y + this.GetBorderWidth() + objectY);
                            }
                            break;
                    }
                }
            }
            Document_private.RedrawDocument(this.Id);
        };
        Document.prototype.GetY = function () {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        };
        Document.prototype.SetZ = function (z) {
            var Z = z;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            document.getElementById(this.Id + "TitleBar").dataset.scitoolz = String(z);
            document.getElementById("lblTitle" + this.Id).dataset.scitoolz = String(z);
            document.getElementById("lblDocumentRaiseButton" + this.Id).dataset.scitoolz = String(z);
            document.getElementById("lblDocumentCloseButton" + this.Id).dataset.scitoolz = String(z);
            document.getElementById("lblDocumentCollectButton" + this.Id).dataset.scitoolz = String(z);
            var objects = MetaObject_private.GetObjectsMap();
            for (var _i = 0, objects_17 = objects; _i < objects_17.length; _i++) {
                var objeto = objects_17[_i];
                if (objeto["MetaObjectId"] === this.Id) {
                    if (objeto["ObjectType"] !== ObjectType.PulldownMenuOption) {
                        if (objeto["ObjectType"] !== ObjectType.RadioButtonGroup && objeto["ObjectType"] !== ObjectType.MenuBar && objeto["ObjectType"] !== ObjectType.PulldownMenu) {
                            document.getElementById(objeto["ObjectId"]).dataset.scitoolz = String(z);
                        }
                        else {
                            if (objeto["ObjectType"] === ObjectType.MenuBar) {
                                window[objeto["ObjectId"]].SetZ(z);
                            }
                        }
                    }
                }
            }
            Document_private.RedrawDocument(this.Id);
            // Actualizar color del icono Soltar del escritorio.
            var documentos = Document.GetIdsStack();
            document.getElementById("lblSciToolEscritorioOrdenarDocumentosSoltar").style.color = Skin.GetToolBoxIconDisabledColor();
            for (var _a = 0, documentos_7 = documentos; _a < documentos_7.length; _a++) {
                var documento = documentos_7[_a];
                if (window[documento].GetZ() === LimboEscritorio) {
                    document.getElementById("lblSciToolEscritorioOrdenarDocumentosSoltar").style.color = Skin.GetToolBoxIconColor();
                    break;
                }
            }
        };
        Document.prototype.GetZ = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        };
        Document.prototype.SetDisplayStyle = function (displayStyle) {
            var displayStyleActual = this.DisplayStyle;
            var numDocumento = 0;
            var documentos = [];
            this.DisplayStyle = displayStyle;
            //Eliminar Id del documento de la pila de documentos actual (normales, belowMost o topMost).
            if (displayStyleActual === sci.Const.BelowMost) {
                Document.EraseFromBelowMostDocumentIdsStack(this.Id);
            }
            if (displayStyleActual === sci.Const.Normal) {
                Document.EraseFromNormalDocumentIdsStack(this.Id);
            }
            if (displayStyleActual === sci.Const.TopMost) {
                Document.EraseFromTopMostDocumentIdsStack(this.Id);
            }
            switch (displayStyle) {
                case sci.Const.BelowMost:
                    //Añadir Id del documento a la pila de documentos BelowMost.
                    Document.AddToBelowMostDocumentIdsStack(this.Id);
                    //Fijar ZIndex de todos los documentos BelowMost en orden de abajo hacia arriba.
                    documentos = Document.GetBelowMostDocumentIdsStack();
                    for (var _i = 0, documentos_8 = documentos; _i < documentos_8.length; _i++) {
                        var documento = documentos_8[_i];
                        window[documento].SetZIndex(MinZIndexBelowMostDocument + numDocumento * ZIndexDocumentSeparation);
                        numDocumento++;
                    }
                    break;
                case sci.Const.Normal:
                    //Añadir Id del documento a la pila de documentos Normal.
                    Document.AddToNormalDocumentIdsStack(this.Id);
                    //Fijar ZIndex de todos los documentos Normal en orden de abajo hacia arriba.
                    documentos = Document.GetNormalDocumentIdsStack();
                    for (var _a = 0, documentos_9 = documentos; _a < documentos_9.length; _a++) {
                        var documento = documentos_9[_a];
                        window[documento].SetZIndex(MinZIndexNormalDocument + numDocumento * ZIndexDocumentSeparation);
                        numDocumento++;
                    }
                    break;
                case sci.Const.TopMost:
                    //Añadir Id del documento a la pila de documentos TopMost.
                    Document.AddToTopMostDocumentIdsStack(this.Id);
                    //Fijar ZIndex de todos los documentos TopMost en orden de abajo hacia arriba.
                    documentos = Document.GetTopMostDocumentIdsStack();
                    for (var _b = 0, documentos_10 = documentos; _b < documentos_10.length; _b++) {
                        var documento = documentos_10[_b];
                        window[documento].SetZIndex(MinZIndexTopMostDocument + numDocumento * ZIndexDocumentSeparation);
                        numDocumento++;
                    }
                    break;
            }
        };
        Document.prototype.GetDisplayStyle = function () {
            return this.DisplayStyle;
        };
        Document.GetBelowMostDocumentIdsStack = function () {
            return Document.belowMostDocumentStack;
        };
        Document.GetNormalDocumentIdsStack = function () {
            return Document.normalDocumentStack;
        };
        Document.GetTopMostDocumentIdsStack = function () {
            return Document.topMostDocumentStack;
        };
        Document.EraseFromBelowMostDocumentIdsStack = function (documentId) {
            if (Document.GetBelowMostDocumentIdsStack().indexOf(documentId) !== -1) {
                Document.belowMostDocumentStack.splice(Document.belowMostDocumentStack.indexOf(documentId), 1);
            }
        };
        Document.EraseFromNormalDocumentIdsStack = function (documentId) {
            if (Document.GetNormalDocumentIdsStack().indexOf(documentId) !== -1) {
                Document.normalDocumentStack.splice(Document.normalDocumentStack.indexOf(documentId), 1);
            }
        };
        Document.EraseFromTopMostDocumentIdsStack = function (documentId) {
            if (Document.GetTopMostDocumentIdsStack().indexOf(documentId) !== -1) {
                Document.topMostDocumentStack.splice(Document.topMostDocumentStack.indexOf(documentId), 1);
            }
        };
        Document.AddToBelowMostDocumentIdsStack = function (documentId) {
            Document.belowMostDocumentStack.push(documentId);
        };
        Document.AddToNormalDocumentIdsStack = function (documentId) {
            Document.normalDocumentStack.push(documentId);
        };
        Document.AddToTopMostDocumentIdsStack = function (documentId) {
            Document.topMostDocumentStack.push(documentId);
        };
        Document.prototype.Bring = function (TipoDeBring, accionArrastre) {
            if (TipoDeBring === void 0) { TipoDeBring = sci.Const.NormalBring; }
            if (accionArrastre === void 0) { accionArrastre = false; }
            var documentos;
            var posicion;
            var numDocumento = 0;
            var ZActual = this.GetZ();
            var xDocumento = 0;
            var yDocumento = 0;
            var MargenIzquierdoEscritorioOrganizacionDocumentos = 45;
            var MargenSuperiorEscritorioOrganizacionDocumentos = 80;
            var MargenSuperiorDesdeMouse = 20;
            this.SetZ(Table.GetViewFinderZ());
            // Añadir incrementos para traer el documento a la zona visible actualmente de la mesa.
            if (TipoDeBring == sci.Const.BringToLeftBorderScreen) {
                this.SetX(MargenIzquierdoEscritorioOrganizacionDocumentos + window.scrollX);
                this.SetY(MargenSuperiorEscritorioOrganizacionDocumentos + window.scrollY);
            }
            if (TipoDeBring == sci.Const.BringToRightBorderScreen) {
                this.SetX(window.scrollX + window.innerWidth - this.GetWidth() - MargenIzquierdoEscritorioOrganizacionDocumentos);
                this.SetY(MargenSuperiorEscritorioOrganizacionDocumentos + window.scrollY);
            }
            if (TipoDeBring == sci.Const.BringToCenter) {
                this.SetX(window.scrollX + window.innerWidth / 2 - this.GetWidth() / 2);
                this.SetY(window.scrollY + window.innerHeight / 2 + -this.GetHeight() / 2);
            }
            if (TipoDeBring == sci.Const.BringToHCenter) {
                this.SetX(window.scrollX + window.innerWidth / 2 - this.GetWidth() / 2);
            }
            if (TipoDeBring == sci.Const.BringToVCenter) {
                this.SetY(window.scrollY + window.innerHeight / 2 + -this.GetHeight() / 2);
            }
            if (TipoDeBring == sci.Const.BringToMouseToMiddle) {
                this.SetX(window.scrollX + xMouse - this.GetWidth() / 2);
                this.SetY(window.scrollY + yMouse + MargenSuperiorDesdeMouse);
            }
            if (TipoDeBring == sci.Const.BringToMouse) {
                this.SetX(window.scrollX + xMouse);
                this.SetY(window.scrollY + yMouse + MargenSuperiorDesdeMouse);
            }
            switch (this.DisplayStyle) {
                case sci.Const.BelowMost:
                    //Mover el Id del documento de la pila de documentos BelowMost desde su posición actual a la cima.
                    documentos = Document.GetBelowMostDocumentIdsStack();
                    posicion = documentos.indexOf(this.Id);
                    Document.belowMostDocumentStack.splice(posicion, 1);
                    Document.belowMostDocumentStack.push(this.Id);
                    //Fijar ZIndex de todos los documentos BelowMost en orden de abajo hacia arriba.
                    documentos = Document.GetBelowMostDocumentIdsStack();
                    for (var _i = 0, documentos_11 = documentos; _i < documentos_11.length; _i++) {
                        var documento = documentos_11[_i];
                        window[documento].SetZIndex(MinZIndexBelowMostDocument + numDocumento * ZIndexDocumentSeparation);
                        numDocumento++;
                    }
                    break;
                case sci.Const.Normal:
                    //Mover el Id del documento de la pila de documentos normales desde su posición actual a la cima.
                    documentos = Document.GetNormalDocumentIdsStack();
                    posicion = documentos.indexOf(this.Id);
                    Document.normalDocumentStack.splice(posicion, 1);
                    Document.normalDocumentStack.push(this.Id);
                    //Fijar ZIndex de todos los documentos normales en orden de abajo hacia arriba.
                    documentos = Document.GetNormalDocumentIdsStack();
                    for (var _a = 0, documentos_12 = documentos; _a < documentos_12.length; _a++) {
                        var documento = documentos_12[_a];
                        window[documento].SetZIndex(MinZIndexNormalDocument + numDocumento * ZIndexDocumentSeparation);
                        numDocumento++;
                    }
                    break;
                case sci.Const.TopMost:
                    //Mover el Id del documento de la pila de documentos TopMost desde su posición actual a la cima.
                    documentos = Document.GetTopMostDocumentIdsStack();
                    posicion = documentos.indexOf(this.Id);
                    Document.topMostDocumentStack.splice(posicion, 1);
                    Document.topMostDocumentStack.push(this.Id);
                    //Fijar ZIndex de todos los documentos TopMost en orden de abajo hacia arriba.
                    documentos = Document.GetTopMostDocumentIdsStack();
                    for (var _b = 0, documentos_13 = documentos; _b < documentos_13.length; _b++) {
                        var documento = documentos_13[_b];
                        window[documento].SetZIndex(MinZIndexTopMostDocument + numDocumento * ZIndexDocumentSeparation);
                        numDocumento++;
                    }
                    break;
            }
            if (ZActual === sci.Limbo && Table.GetViewFinderZ() !== sci.Limbo) { // Solo si el documento va desde el Limbo al Z actual del ViewFinder se ejecuta este método.
                try {
                    window[this.Id + "_OnOpen"].apply(this);
                }
                catch (e) { }
                window[this.Id].Talk(this.Id + "_OnOpen");
            }
            if (!accionArrastre) {
                try {
                    window[this.Id + "_OnBring"].apply(this);
                }
                catch (e) { }
                window[this.Id].Talk(this.Id + "_OnBring");
            }
        };
        Document.prototype.ToLimbo = function () {
            this.SetZ(sci.Limbo);
            try {
                window[this.Id + "_OnToLimbo"].apply(this);
            }
            catch (e) { }
            window[this.Id].Talk(this.Id + "_OnToLimbo");
        };
        Document.prototype.Opened = function () {
            if (Number(this.GetZ()) === Number(Table.GetViewFinderZ()) || this.CrossZ) {
                return true;
            }
            else {
                return false;
            }
        };
        Document.prototype.SetEnabled = function (enabled) {
            var objetosExcluidos = ['AssociatedControl', 'RadioButton', 'MenuBarOption', 'PulldownMenuOption'];
            var objects = MetaObject_private.GetObjectsMap();
            for (var _i = 0, objects_18 = objects; _i < objects_18.length; _i++) {
                var objeto = objects_18[_i];
                if (objeto["MetaObjectId"] === this.Id && objetosExcluidos.indexOf(objeto["ObjectType"]) === -1) {
                    switch (objeto["ObjectId"]) {
                        case this.Id:
                            this.Enabled = enabled;
                            break;
                        case this.Id + "TitleBar":
                            if (enabled) {
                                document.getElementById(this.Id + "TitleBar").style.backgroundColor = this.GetTitleBarColor();
                            }
                            else {
                                document.getElementById(this.Id + "TitleBar").style.backgroundColor = this.GetDisabledTitleBarColor();
                            }
                            break;
                        case "lblTitle" + this.Id:
                            if (enabled) {
                                document.getElementById("lblTitle" + this.Id).style.color = this.GetTitleBarFontColor();
                            }
                            else {
                                document.getElementById("lblTitle" + this.Id).style.color = this.GetDisabledTitleBarFontColor();
                            }
                            break;
                        case "lblDocumentRaiseButton" + this.Id:
                            if (enabled) {
                                if (this.Raisable) {
                                    document.getElementById("lblDocumentRaiseButton" + this.Id).style.color = Skin.GetDocumentTitleBarButtonColor();
                                }
                            }
                            else {
                                document.getElementById("lblDocumentRaiseButton" + this.Id).style.color = Skin.GetDocumentTitleBarDisabledButtonColor();
                            }
                            break;
                        case "lblDocumentCloseButton" + this.Id:
                            if (enabled) {
                                if (this.Closable) {
                                    document.getElementById("lblDocumentCloseButton" + this.Id).style.color = Skin.GetDocumentTitleBarButtonColor();
                                }
                            }
                            else {
                                document.getElementById("lblDocumentCloseButton" + this.Id).style.color = Skin.GetDocumentTitleBarDisabledButtonColor();
                            }
                            break;
                        case "lblDocumentCollectButton" + this.Id:
                            if (enabled) {
                                if (this.Draggable) {
                                    document.getElementById("lblDocumentCollectButton" + this.Id).style.color = Skin.GetDocumentTitleBarButtonColor();
                                }
                            }
                            else {
                                document.getElementById("lblDocumentCollectButton" + this.Id).style.color = Skin.GetDocumentTitleBarDisabledButtonColor();
                            }
                            break;
                        default:
                            window[objeto["ObjectId"]].SetEnabled(enabled);
                            break;
                    }
                }
            }
            Document_private.RedrawDocument(this.Id);
        };
        Document.prototype.Raise = function () {
            var objetosExcluidos = ['AssociatedControl', 'RadioButton', 'MenuBarOption', 'PulldownMenuOption'];
            var objects = MetaObject_private.GetObjectsMap();
            if (this.Raisable && !this.Raised) {
                this.auxDisplayStyle = this.GetDisplayStyle();
                if (this.auxDisplayStyle != sci.Const.TopMost)
                    this.SetDisplayStyle(sci.Const.TopMost); //Forzar a ser TopMost mientras el documento esté Raised.
                for (var _i = 0, objects_19 = objects; _i < objects_19.length; _i++) {
                    var objeto = objects_19[_i];
                    if (objeto["MetaObjectId"] === this.Id && objetosExcluidos.indexOf(objeto["ObjectType"]) === -1) {
                        switch (objeto["ObjectType"]) {
                            case 'RadioButtonGroup':
                                var elementos = window[objeto['ObjectId']].GetElements();
                                for (var _a = 0, elementos_1 = elementos; _a < elementos_1.length; _a++) {
                                    var elemento = elementos_1[_a];
                                    document.getElementById(elemento["Id"]).style.setProperty("position", "fixed");
                                    document.getElementById(elemento["LabelId"]).style.setProperty("position", "fixed");
                                }
                                break;
                            case 'CheckBox':
                                document.getElementById(objeto["ObjectId"]).style.setProperty("position", "fixed");
                                document.getElementById("lblChk" + objeto["ObjectId"]).style.setProperty("position", "fixed");
                                break;
                            default:
                                document.getElementById(objeto["ObjectId"]).style.setProperty("position", "fixed");
                                break;
                        }
                    }
                }
                //Efecto de alejamiento del documento de la mesa.
                document.getElementById(this.Id).style.boxShadow = "-4px 20px 25px 15px rgba(0,0,0,0.35)"; // Alejar sombra.
                this.SetX(this.GetX() - window.scrollX);
                this.SetY(this.GetY() - window.scrollY);
                document.getElementById("lblDocumentRaiseButton" + this.Id).innerText = "\u25cf";
                this.Raised = true;
                try {
                    window[this.Id + "_OnRaise"].apply(this);
                }
                catch (e) { }
                window[this.Id].Talk(this.Id + "_OnRaise");
            }
        };
        Document.prototype.Unraise = function () {
            var objetosExcluidos = ['AssociatedControl', 'RadioButton', 'MenuBarOption', 'PulldownMenuOption'];
            var objects = MetaObject_private.GetObjectsMap();
            if (this.Raisable && this.Raised) {
                for (var _i = 0, objects_20 = objects; _i < objects_20.length; _i++) {
                    var objeto = objects_20[_i];
                    if (objeto["MetaObjectId"] === this.Id && objetosExcluidos.indexOf(objeto["ObjectType"]) === -1) {
                        switch (objeto["ObjectType"]) {
                            case 'RadioButtonGroup':
                                var elementos = window[objeto['ObjectId']].GetElements();
                                for (var _a = 0, elementos_2 = elementos; _a < elementos_2.length; _a++) {
                                    var elemento = elementos_2[_a];
                                    document.getElementById(elemento["Id"]).style.setProperty("position", "absolute");
                                    document.getElementById(elemento["LabelId"]).style.setProperty("position", "absolute");
                                }
                                break;
                            case 'CheckBox':
                                document.getElementById(objeto["ObjectId"]).style.setProperty("position", "absolute");
                                document.getElementById("lblChk" + objeto["ObjectId"]).style.setProperty("position", "absolute");
                                break;
                            default:
                                document.getElementById(objeto["ObjectId"]).style.setProperty("position", "absolute");
                                break;
                        }
                    }
                }
                //Efecto de acercamiento del documento de la mesa.
                document.getElementById(this.Id).style.boxShadow = "0px 3px 6px 0px rgba(0,0,0,0.4)"; // Acercar sombra.
                this.SetX(this.GetX() + window.scrollX);
                this.SetY(this.GetY() + window.scrollY);
                document.getElementById("lblDocumentRaiseButton" + this.Id).innerText = "\u25cf";
                if (this.auxDisplayStyle != sci.Const.TopMost)
                    this.SetDisplayStyle(this.auxDisplayStyle); //Forzar a ser TopMost mientras el documento esté Raised.
                this.Raised = false;
                try {
                    window[this.Id + "_OnUnraise"].apply(this);
                }
                catch (e) { }
                window[this.Id].Talk(this.Id + "_OnUnraise");
            }
        };
        Document.prototype.GetRaised = function () {
            return this.Raised;
        };
        Document.prototype.SetVisible = function (visible) {
            var objetosExcluidos = ['AssociatedControl', 'RadioButton', 'MenuBarOption', 'PulldownMenuOption'];
            var objects = MetaObject_private.GetObjectsMap();
            for (var _i = 0, objects_21 = objects; _i < objects_21.length; _i++) {
                var objeto = objects_21[_i];
                if (objeto["MetaObjectId"] === this.Id && objetosExcluidos.indexOf(objeto["ObjectType"]) === -1) {
                    switch (objeto["ObjectId"]) {
                        case this.Id:
                            this.Visible = visible;
                            if (visible === true) {
                                document.getElementById(this.Id).style.visibility = 'visible';
                            }
                            else {
                                document.getElementById(this.Id).style.visibility = 'hidden';
                            }
                            break;
                        case this.Id + "TitleBar":
                            if (visible === true) {
                                document.getElementById(this.Id + "TitleBar").style.visibility = 'visible';
                            }
                            else {
                                document.getElementById(this.Id + "TitleBar").style.visibility = 'hidden';
                            }
                            break;
                        case "lblTitle" + this.Id:
                            if (visible === true) {
                                document.getElementById("lblTitle" + this.Id).style.visibility = 'visible';
                            }
                            else {
                                document.getElementById("lblTitle" + this.Id).style.visibility = 'hidden';
                            }
                            break;
                        case "lblDocumentRaiseButton" + this.Id:
                            if (visible === true) {
                                document.getElementById("lblDocumentRaiseButton" + this.Id).style.visibility = 'visible';
                            }
                            else {
                                document.getElementById("lblDocumentRaiseButton" + this.Id).style.visibility = 'hidden';
                            }
                            break;
                        case "lblDocumentCloseButton" + this.Id:
                            if (visible === true) {
                                document.getElementById("lblDocumentCloseButton" + this.Id).style.visibility = 'visible';
                            }
                            else {
                                document.getElementById("lblDocumentCloseButton" + this.Id).style.visibility = 'hidden';
                            }
                            break;
                        case "lblDocumentCollectButton" + this.Id:
                            if (visible === true) {
                                document.getElementById("lblDocumentCollectButton" + this.Id).style.visibility = 'visible';
                            }
                            else {
                                document.getElementById("lblDocumentCollectButton" + this.Id).style.visibility = 'hidden';
                            }
                            break;
                        default:
                            window[objeto["ObjectId"]].SetVisible(visible);
                            break;
                    }
                }
            }
            Document_private.RedrawDocument(this.Id);
        };
        Document.prototype.GetVisible = function () {
            return this.Visible;
        };
        Document.prototype.SetCrossZ = function (crossZ) {
            var objetosExcluidos = ['AssociatedControl', 'RadioButton', 'MenuBarOption', 'PulldownMenuOption'];
            //Objetos del documento.
            var objects = MetaObject_private.GetObjectsMap();
            for (var _i = 0, objects_22 = objects; _i < objects_22.length; _i++) {
                var objeto = objects_22[_i];
                if (objeto["MetaObjectId"] === this.Id && objetosExcluidos.indexOf(objeto["ObjectType"]) === -1) {
                    switch (objeto["ObjectId"]) {
                        case this.Id:
                            this.CrossZ = crossZ;
                            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);
                            break;
                        case this.Id + "TitleBar":
                            document.getElementById(this.Id + "TitleBar").dataset.scitoolcrossz = String(crossZ);
                            break;
                        case "lblTitle" + this.Id:
                            document.getElementById("lblTitle" + this.Id).dataset.scitoolcrossz = String(crossZ);
                            break;
                        case "lblDocumentRaiseButton" + this.Id:
                            document.getElementById("lblDocumentRaiseButton" + this.Id).dataset.scitoolcrossz = String(crossZ);
                            break;
                        case "lblDocumentCloseButton" + this.Id:
                            document.getElementById("lblDocumentCloseButton" + this.Id).dataset.scitoolcrossz = String(crossZ);
                            break;
                        case "lblDocumentCollectButton" + this.Id:
                            document.getElementById("lblDocumentCollectButton" + this.Id).dataset.scitoolcrossz = String(crossZ);
                            break;
                        default:
                            window[objeto["ObjectId"]].SetCrossZ(crossZ);
                            break;
                    }
                }
            }
            Document_private.RedrawDocument(this.Id);
        };
        Document.prototype.GetCrossZ = function () {
            return this.CrossZ;
        };
        Document.prototype.SetZIndex = function (zIndex) {
            var objetosExcluidos = ['AssociatedControl', 'RadioButton', 'MenuBarOption', 'PulldownMenuOption'];
            //Objetos del documento.
            var objects = MetaObject_private.GetObjectsMap();
            for (var _i = 0, objects_23 = objects; _i < objects_23.length; _i++) {
                var objeto = objects_23[_i];
                if (objeto["MetaObjectId"] === this.Id && objetosExcluidos.indexOf(objeto["ObjectType"]) === -1) {
                    switch (objeto["ObjectId"]) {
                        case this.Id:
                            this.ZIndex = zIndex;
                            document.getElementById(this.Id).style.zIndex = zIndex;
                            break;
                        case this.Id + "TitleBar":
                            document.getElementById(this.Id + "TitleBar").style.zIndex = zIndex;
                            break;
                        case "lblTitle" + this.Id:
                            document.getElementById("lblTitle" + this.Id).style.zIndex = zIndex;
                            break;
                        case "lblDocumentRaiseButton" + this.Id:
                            document.getElementById("lblDocumentRaiseButton" + this.Id).style.zIndex = zIndex;
                            break;
                        case "lblDocumentCloseButton" + this.Id:
                            document.getElementById("lblDocumentCloseButton" + this.Id).style.zIndex = zIndex;
                            break;
                        case "lblDocumentCollectButton" + this.Id:
                            document.getElementById("lblDocumentCollectButton" + this.Id).style.zIndex = zIndex;
                            break;
                        default:
                            window[objeto["ObjectId"]].SetZIndex(zIndex);
                            break;
                    }
                    if (!isNaN(Number(zIndex))) {
                        if (objeto["ObjectType"] === ObjectType.MenuBar || objeto["ObjectType"] === ObjectType.PulldownMenu) { //Objeto es un MenuBar o PulldownMenu.
                            zIndex = String(Number(zIndex) + window[objeto["ObjectId"]].GetLength());
                        }
                        else {
                            zIndex = String(Number(zIndex) + 1);
                        }
                    }
                }
            }
            Document_private.RedrawDocument(this.Id);
        };
        Document.prototype.GetZIndex = function () {
            return this.ZIndex;
        };
        Document.prototype.SetFontFamily = function (fontFamily) {
            var objetosExcluidos = ['AssociatedControl', 'RadioButton', 'Image', 'Canvas', 'Box', 'Ellipse', 'MenuBarOption', 'PulldownMenuOption'];
            //Objetos del documento.
            var objects = MetaObject_private.GetObjectsMap();
            for (var _i = 0, objects_24 = objects; _i < objects_24.length; _i++) {
                var objeto = objects_24[_i];
                if (objeto["MetaObjectId"] === this.Id && objetosExcluidos.indexOf(objeto["ObjectType"]) === -1) {
                    switch (objeto["ObjectId"]) {
                        case this.Id:
                            this.TitleFontFamily = fontFamily;
                            break;
                        case this.Id + "TitleBar":
                            break;
                        case "lblTitle" + this.Id:
                            document.getElementById("lblTitle" + this.Id).style.fontFamily = fontFamily;
                            break;
                        default:
                            window[objeto["ObjectId"]].SetFontFamily(fontFamily);
                            break;
                    }
                }
            }
            Document_private.RedrawDocument(this.Id);
        };
        Document.prototype.SetFontSize = function (fontSize) {
            var objetosExcluidos = ['AssociatedControl', 'RadioButtonGroup', 'RadioButton', 'Image', 'CheckBox', 'Canvas', 'Box', 'Ellipse', 'MenuBarOption', 'PulldownMenuOption'];
            //Objetos del documento.
            var objects = MetaObject_private.GetObjectsMap();
            for (var _i = 0, objects_25 = objects; _i < objects_25.length; _i++) {
                var objeto = objects_25[_i];
                if (objeto["MetaObjectId"] === this.Id && objetosExcluidos.indexOf(objeto["ObjectType"]) === -1) {
                    switch (objeto["ObjectId"]) {
                        case this.Id:
                            this.TitleFontSize = fontSize;
                            break;
                        case this.Id + "TitleBar":
                            break;
                        case "lblTitle" + this.Id:
                            this.SetTitleFontSize(fontSize);
                            break;
                        default:
                            window[objeto["ObjectId"]].SetFontSize(fontSize);
                            break;
                    }
                }
            }
            Document_private.RedrawDocument(this.Id);
        };
        Document.prototype.SetTitleFontSize = function (fontSize) {
            this.TitleFontSize = fontSize;
            document.getElementById("lblTitle" + this.Id).style.fontSize = String(fontSize) + "px";
            this.SetTitleBarHeight(fontSize + 8);
        };
        Document.prototype.GetTitleFontSize = function () {
            return this.TitleFontSize;
        };
        Document.prototype.SetTitleFontFamily = function (fontFamily) {
            this.TitleFontFamily = fontFamily;
            document.getElementById("lblTitle" + this.Id).style.fontFamily = String(fontFamily);
        };
        Document.prototype.GetTitleFontFamily = function () {
            return this.TitleFontFamily;
        };
        Document.prototype.SetTitleBarHeight = function (height) {
            this.TitleBarHeight = height;
            document.getElementById(this.Id + "TitleBar").style.height = String(height) + "px";
            document.getElementById("lblTitle" + this.Id).style.height = String(height) + "px";
        };
        Document.prototype.GetTitleBarHeight = function () {
            return this.TitleBarHeight;
        };
        Document.prototype.SetWidth = function (width) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id + "TitleBar").dataset.scitoolwidth = String(width);
            document.getElementById("lblTitle" + this.Id).dataset.scitoolwidth = String(width);
            document.getElementById("lblDocumentRaiseButton" + this.Id).dataset.scitoolx = String(this.GetX() + this.GetBorderWidth() + Document.titleLeftMargin);
            document.getElementById("lblDocumentCloseButton" + this.Id).dataset.scitoolx = String(this.GetX() + this.GetBorderWidth() + this.GetWidth() - Document.titleRightMargin);
            document.getElementById("lblDocumentCollectButton" + this.Id).dataset.scitoolx = String(this.GetX() + this.GetBorderWidth() + this.GetWidth() - Document.titleRightMargin - Document.documentButtonWidth);
            document.getElementById(this.Id).style.width = String(width) + "px";
            document.getElementById(this.Id + "TitleBar").style.width = String(width) + "px";
            document.getElementById("lblTitle" + this.Id).style.width = String(width) + "px";
            Document_private.RedrawDocument(this.Id);
        };
        Document.prototype.GetWidth = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolwidth);
        };
        Document.prototype.SetHeight = function (height) {
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
            Document_private.RedrawDocument(this.Id);
        };
        Document.prototype.GetHeight = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolheight);
        };
        Document.prototype.GetInViewFinder = function () {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        };
        Document.prototype.SetCaption = function (caption) {
            this.Caption = caption;
            document.getElementById("lblTitle" + this.Id).innerText = caption;
        };
        Document.prototype.GetCaption = function () {
            return this.Caption;
        };
        Document.prototype.SetColor = function (color) {
            this.Color = color;
            document.getElementById(this.Id).style.backgroundColor = color;
        };
        Document.prototype.GetColor = function () {
            return this.Color;
        };
        Document.prototype.GetBorderColor = function () {
            return this.BorderColor;
        };
        Document.prototype.GetBorderWidth = function () {
            return this.BorderWidth;
        };
        Document.prototype.SetTitleBarFontColor = function (color) {
            this.TitleBarFontColor = color;
            document.getElementById("lblTitle" + this.Id).style.color = color;
        };
        Document.prototype.GetTitleBarFontColor = function () {
            return this.TitleBarFontColor;
        };
        Document.prototype.SetTitleBarColor = function (color) {
            this.TitleBarColor = color;
            document.getElementById(this.Id + "TitleBar").style.backgroundColor = color;
        };
        Document.prototype.GetTitleBarColor = function () {
            return this.TitleBarColor;
        };
        Document.prototype.SetDisabledTitleBarFontColor = function (color) {
            this.DisabledTitleBarFontColor = color;
            if (!this.Enabled) {
                document.getElementById("lblTitle" + this.Id).style.color = color;
            }
        };
        Document.prototype.GetDisabledTitleBarFontColor = function () {
            return this.DisabledTitleBarFontColor;
        };
        Document.prototype.SetDisabledTitleBarColor = function (color) {
            this.DisabledTitleBarColor = color;
            if (!this.Enabled) {
                document.getElementById(this.Id + "TitleBar").style.backgroundColor = color;
            }
        };
        Document.prototype.GetDisabledTitleBarColor = function () {
            return this.DisabledTitleBarColor;
        };
        Document.prototype.SetDraggable = function (draggable) {
            this.Draggable = draggable;
            if (draggable) {
                document.getElementById("lblDocumentCollectButton" + this.Id).style.color = Skin.GetDocumentTitleBarButtonColor();
            }
            else {
                document.getElementById("lblDocumentCollectButton" + this.Id).style.color = Skin.GetDocumentTitleBarDisabledButtonColor();
            }
        };
        Document.prototype.GetDraggable = function () {
            return this.Draggable;
        };
        Document.prototype.SetRaisable = function (raisable) {
            this.Raisable = raisable;
            if (raisable) {
                document.getElementById("lblDocumentRaiseButton" + this.Id).style.color = Skin.GetDocumentTitleBarButtonColor();
            }
            else {
                document.getElementById("lblDocumentRaiseButton" + this.Id).style.color = Skin.GetDocumentTitleBarDisabledButtonColor();
            }
        };
        Document.prototype.GetRaisable = function () {
            return this.Raisable;
        };
        Document.prototype.SetClosable = function (closable) {
            this.Closable = closable;
            if (closable) {
                document.getElementById("lblDocumentCloseButton" + this.Id).style.color = Skin.GetDocumentTitleBarButtonColor();
            }
            else {
                document.getElementById("lblDocumentCloseButton" + this.Id).style.color = Skin.GetDocumentTitleBarDisabledButtonColor();
            }
        };
        Document.prototype.GetClosable = function () {
            return this.Closable;
        };
        Document.NumberOfUnnamedObjects = 0;
        Document.idsStack = [];
        Document.titleBarIdsStack = [];
        Document.labelTitleIdsStack = [];
        Document.labelDocumentRaiseButtonIdsStack = [];
        Document.labelDocumentCloseButtonIdsStack = [];
        Document.labelDocumentCollectButtonIdsStack = [];
        Document.belowMostDocumentStack = []; //Pila que contiene el orden en que se despliegan los documentos BelowMost.
        Document.normalDocumentStack = []; //Pila que contiene el orden en que se despliegan los documentos normales.
        Document.topMostDocumentStack = []; //Pila que contiene el orden en que se despliegan los documentos TopMost.
        Document.titleLeftMargin = 5; // Margen izquierdo del título de la barra de título.
        Document.titleRightMargin = 20; // Margen derecho para los botones de la barra de título.
        Document.documentButtonWidth = 22; // Ancho de botones de documento.
        Document.documentButtonTop = -4;
        return Document;
    }());
    sci.Document = Document;
    var Label = /** @class */ (function () {
        function Label(metaObject, x, y, z, caption, id) {
            var _this = this;
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (caption === void 0) { caption = ""; }
            this.Id = id;
            Label.idsStack.push(this.Id);
            this.MetaObject = metaObject;
            MetaObject_private.AddDataObject(this.MetaObject, this.Id, ObjectType.Label);
            this.CrossZ = false;
            if (caption.replace(/ /g, "") == "") {
                this.Caption = this.Id;
            }
            else {
                this.Caption = caption;
            }
            this.Visible = true;
            this.Color = Skin.GetLabelColor();
            this.DisabledColor = Skin.GetLabelDisabledColor();
            this.BackColor = Skin.GetLabelBackColor();
            this.LinkColor = Skin.GetLabelLinkColor();
            this.TabIndex = -1;
            this.For = null;
            this.AccessKey = null;
            this.Link = false;
            this.LinkTo = null;
            if (scitool.GetParentDocumentId(this.Id) !== false) {
                this.ZIndex = String(Number(window[scitool.GetParentDocumentId(this.Id)].GetZIndex()) + scitool.GetMetaObjectObjectsNumber(scitool.GetParentDocumentId(this.Id)));
            }
            else {
                this.ZIndex = "auto";
            }
            this.Enabled = true;
            this.TypeWidth = Skin.GetLabelTypeWidth();
            this.Raised = false;
            //Crear nodo.
            var nodoNuevo = document.createElement("LABEL");
            nodoNuevo.setAttribute("id", this.Id);
            nodoNuevo.dataset.scitoolx = String(x);
            nodoNuevo.dataset.scitooly = String(y);
            nodoNuevo.dataset.scitoolz = String(z);
            nodoNuevo.dataset.scitoolwidth = String(Skin.GetLabelWidth());
            nodoNuevo.dataset.scitoolheight = String(Skin.GetLabelHeight());
            nodoNuevo.style.width = "auto"; // Un Label es "auto" cuando se crea, antes de que SciTool le fije el ancho según su contenido cuando ya se agregó al DOM.
            nodoNuevo.style.height = String(Skin.GetLabelHeight()) + "px";
            nodoNuevo.style.padding = "0";
            nodoNuevo.style.margin = "0";
            nodoNuevo.style.outline = "0";
            nodoNuevo.style.setProperty("position", "absolute");
            nodoNuevo.style.setProperty("display", "none");
            nodoNuevo.innerText = this.Caption;
            document.body.appendChild(nodoNuevo);
            //Implementar en el DOM las otras propiedades en el nodo.
            this.SetX(this.GetX());
            this.SetY(this.GetY());
            this.SetZ(this.GetZ());
            this.SetVisible(this.GetVisible());
            this.SetColor(this.GetColor());
            this.SetBackColor(this.GetBackColor());
            this.SetTabIndex(this.GetTabIndex());
            this.SetZIndex(this.GetZIndex());
            this.SetFontSize(Skin.GetLabelFontSize());
            this.SetFontFamily(Skin.GetLabelFontFamily());
            this.SetCrossZ(this.GetCrossZ());
            document.getElementById(this.Id).onclick = function () {
                if (_this.Enabled) {
                    ////////Activar eventual documento padre de este objeto.
                    //Buscar metaobjeto de este objeto.
                    var datosObjeto_1 = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                        if (objeto["ObjectId"] === _this.Id) {
                            return objeto;
                        }
                    });
                    //Verificar si el metaobjeto es un documento.
                    var datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                        if (objeto["ObjectId"] === datosObjeto_1[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                            return objeto;
                        }
                    });
                    if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();
                        try {
                            window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(_this);
                        }
                        catch (e) { }
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                    }
                    ////////
                    try {
                        window[_this.Id + "_OnClick"].apply(_this);
                    }
                    catch (e) { }
                    try { // Capturar error si se trata de uno de los Label de las funciones de escritorio que incorpora esta librería, pues no puede llamarse a sus métodos.
                        window[_this.Id].Talk(_this.Id + "_OnClick");
                    }
                    catch (e) { }
                    if (_this.LinkTo !== null) {
                        location.href = _this.LinkTo;
                    }
                }
            };
            document.getElementById(this.Id).ondblclick = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnDblClick"].apply(_this);
                    }
                    catch (e) { }
                    try { // Capturar error si se trata de uno de los Label de las funciones de escritorio que incorpora esta librería, pues no puede llamarse a sus métodos.
                        window[_this.Id].Talk(_this.Id + "_OnDblClick");
                    }
                    catch (e) { }
                }
            };
            document.getElementById(this.Id).onfocus = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnFocus"].apply(_this);
                    }
                    catch (e) { }
                    try { // Capturar error si se trata de uno de los Label de las funciones de escritorio que incorpora esta librería, pues no puede llamarse a sus métodos.
                        window[_this.Id].Talk(_this.Id + "_OnFocus");
                    }
                    catch (e) { }
                }
            };
            document.getElementById(this.Id).onmouseover = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseOver"].apply(_this);
                    }
                    catch (e) { }
                    try { // Capturar error si se trata de uno de los Label de las funciones de escritorio que incorpora esta librería, pues no puede llamarse a sus métodos.
                        window[_this.Id].Talk(_this.Id + "_OnMouseOver");
                    }
                    catch (e) { }
                }
            };
            document.getElementById(this.Id).onmousemove = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseMove"].apply(_this);
                    }
                    catch (e) { }
                    try { // Capturar error si se trata de uno de los Label de las funciones de escritorio que incorpora esta librería, pues no puede llamarse a sus métodos.
                        window[_this.Id].Talk(_this.Id + "_OnMouseMove");
                    }
                    catch (e) { }
                }
            };
            document.getElementById(this.Id).onmousedown = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseDown"].apply(_this);
                    }
                    catch (e) { }
                    try { // Capturar error si se trata de uno de los Label de las funciones de escritorio que incorpora esta librería, pues no puede llamarse a sus métodos.
                        window[_this.Id].Talk(_this.Id + "_OnMouseDown");
                    }
                    catch (e) { }
                }
            };
            document.getElementById(this.Id).onmouseup = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseUp"].apply(_this);
                    }
                    catch (e) { }
                    try { // Capturar error si se trata de uno de los Label de las funciones de escritorio que incorpora esta librería, pues no puede llamarse a sus métodos.
                        window[_this.Id].Talk(_this.Id + "_OnMouseUp");
                    }
                    catch (e) { }
                }
            };
            document.getElementById(this.Id).onmouseout = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseOut"].apply(_this);
                    }
                    catch (e) { }
                    try { // Capturar error si se trata de uno de los Label de las funciones de escritorio que incorpora esta librería, pues no puede llamarse a sus métodos.
                        window[_this.Id].Talk(_this.Id + "_OnMouseOut");
                    }
                    catch (e) { }
                }
            };
            document.getElementById(this.Id).onkeydown = function (evt) {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnKeyDown"].call(_this, evt);
                    }
                    catch (e) { }
                    try { // Capturar error si se trata de uno de los Label de las funciones de escritorio que incorpora esta librería, pues no puede llamarse a sus métodos.
                        window[_this.Id].Talk(_this.Id + "_OnKeyDown");
                    }
                    catch (e) { }
                }
            };
            document.getElementById(this.Id).onkeypress = function (evt) {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnKeyPress"].call(_this, evt);
                    }
                    catch (e) { }
                    try { // Capturar error si se trata de uno de los Label de las funciones de escritorio que incorpora esta librería, pues no puede llamarse a sus métodos.
                        window[_this.Id].Talk(_this.Id + "_OnKeyPress");
                    }
                    catch (e) { }
                }
            };
            document.getElementById(this.Id).onkeyup = function (evt) {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnKeyUp"].call(_this, evt);
                    }
                    catch (e) { }
                    try { // Capturar error si se trata de uno de los Label de las funciones de escritorio que incorpora esta librería, pues no puede llamarse a sus métodos.
                        window[_this.Id].Talk(_this.Id + "_OnKeyUp");
                    }
                    catch (e) { }
                }
            };
            document.getElementById(this.Id).onblur = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnBlur"].apply(_this);
                    }
                    catch (e) { }
                    try { // Capturar error si se trata de uno de los Label de las funciones de escritorio que incorpora esta librería, pues no puede llamarse a sus métodos.
                        window[_this.Id].Talk(_this.Id + "_OnBlur");
                    }
                    catch (e) { }
                }
            };
        }
        Label.prototype.Display = function () {
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                document.getElementById(this.Id).style.removeProperty("display");
            }
            else {
                document.getElementById(this.Id).style.setProperty("display", "none");
            }
        };
        Label.GetIdsStack = function () {
            return Label.idsStack;
        };
        Label.prototype.GetId = function () {
            return this.Id;
        };
        Label.prototype.GetMetaObject = function () {
            return this.MetaObject;
        };
        Label.prototype.RedrawObject = function () {
            if (this.Link) {
                if (this.Enabled) {
                    this.SetLinkColor(this.GetLinkColor());
                    this.SetBackColor(this.GetBackColor());
                    document.getElementById(this.Id).style.cursor = "pointer";
                }
                else {
                    this.SetDisabledColor(this.GetDisabledColor());
                    this.SetBackColor(this.GetBackColor());
                    document.getElementById(this.Id).style.cursor = "default";
                }
            }
            else {
                this.SetColor(this.GetColor());
                this.SetBackColor(this.GetBackColor());
            }
        };
        Label.prototype.SetCrossZ = function (crossZ) {
            this.CrossZ = crossZ;
            var x = this.GetX();
            var y = this.GetY();
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, crossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        Label.prototype.GetCrossZ = function () {
            return this.CrossZ;
        };
        Label.prototype.Raise = function () {
            this.Raised = true;
            document.getElementById(this.Id).style.setProperty("position", "fixed");
        };
        Label.prototype.Unraise = function () {
            this.Raised = false;
            document.getElementById(this.Id).style.setProperty("position", "absolute");
        };
        Label.prototype.GetRaised = function () {
            return this.Raised;
        };
        Label.prototype.SetX = function (x) {
            var X = x;
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolx = String(x);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                x -= Table.GetViewFinderX();
                document.getElementById(this.Id).style.left = String(x) + "px";
            }
            this.Display();
        };
        Label.prototype.GetX = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        };
        Label.prototype.SetY = function (y) {
            var Y = y;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitooly = String(y);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        Label.prototype.GetY = function () {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        };
        Label.prototype.SetZ = function (z) {
            var Z = z;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            this.Display();
        };
        Label.prototype.GetZ = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        };
        Label.prototype.SetXYZ = function (x, y, z) {
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(x, y, z, Width, Height, CrossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        Label.prototype.SetWidth = function (width) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
            this.TypeWidth = sci.Const.FixedWidth;
        };
        Label.prototype.GetWidth = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolwidth);
        };
        Label.prototype.GetPixelsLength = function () {
            var visible;
            var width;
            var styleWidth;
            // Hacer visible temporalmente al nodo a copiar si es que está oculto.
            if (document.getElementById(this.Id).style.display === "none") {
                visible = false;
                document.getElementById(this.Id).style.removeProperty("display");
            }
            else {
                visible = true;
            }
            width = document.getElementById(this.Id).dataset.scitoolwidth;
            styleWidth = document.getElementById(this.Id).style.width;
            document.getElementById(this.Id).style.width = "auto";
            var anchoEnPixeles = Math.ceil(document.getElementById(this.Id).offsetWidth) + 1;
            // Restaurar visibilidad y ancho del nodo copiado.
            if (!visible) {
                document.getElementById(this.Id).style.setProperty("display", "none");
            }
            if (styleWidth !== "auto") {
                document.getElementById(this.Id).dataset.scitoolwidth = width;
                document.getElementById(this.Id).style.width = width + "px";
            }
            else {
                document.getElementById(this.Id).dataset.scitoolwidth = width;
                document.getElementById(this.Id).style.width = "auto";
            }
            return anchoEnPixeles;
        };
        Label.prototype.SetTypeWidth = function (typeWidth) {
            this.TypeWidth = typeWidth;
            if (typeWidth === sci.Const.AutomaticWidth) {
                document.getElementById(this.Id).dataset.scitoolwidth = document.getElementById(this.Id).GetPixelsLength();
                document.getElementById(this.Id).style.width = String(document.getElementById(this.Id).GetPixelsLength()) + "px";
            }
        };
        Label.prototype.GetTypeWidth = function () {
            return this.TypeWidth;
        };
        Label.prototype.SetHeight = function (height) {
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        };
        Label.prototype.GetHeight = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolheight);
        };
        Label.prototype.SetDimensions = function (width, height) {
            this.SetWidth(width);
            this.SetHeight(height);
        };
        Label.prototype.SetSize = function (size) {
            switch (size) {
                case sci.Const.ExtraLargeButtonSize:
                    this.SetDimensions(sci.Const.ExtraLargeButtonWidth, sci.Const.ExtraLargeButtonHeight);
                    break;
                case sci.Const.LargeButtonSize:
                    this.SetDimensions(sci.Const.LargeButtonWidth, sci.Const.LargeButtonHeight);
                    break;
                case sci.Const.DefaultButtonSize:
                    this.SetDimensions(sci.Const.DefaultButtonWidth, sci.Const.DefaultButtonHeight);
                    break;
                case sci.Const.SmallButtonSize:
                    this.SetDimensions(sci.Const.SmallButtonWidth, sci.Const.SmallButtonHeight);
                    break;
                case sci.Const.ExtraSmallButtonSize:
                    this.SetDimensions(sci.Const.ExtraSmallButtonWidth, sci.Const.ExtraSmallButtonHeight);
                    break;
            }
        };
        Label.prototype.GetInViewFinder = function () {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        };
        Label.prototype.SetCaption = function (caption) {
            this.Caption = caption;
            document.getElementById(this.Id).innerText = caption;
            if (this.TypeWidth === sci.Const.AutomaticWidth) {
                document.getElementById(this.Id).style.width = "auto";
                var anchoEnPixeles = window[this.Id].GetPixelsLength();
                document.getElementById(this.Id).dataset.scitoolwidth = anchoEnPixeles;
                document.getElementById(this.Id).style.width = anchoEnPixeles + "px";
            }
        };
        Label.prototype.GetCaption = function () {
            return this.Caption;
        };
        Label.prototype.SetVisible = function (visible) {
            this.Visible = visible;
            if (visible === true) {
                document.getElementById(this.Id).style.visibility = 'visible';
            }
            else {
                document.getElementById(this.Id).style.visibility = 'hidden';
            }
        };
        Label.prototype.GetVisible = function () {
            return this.Visible;
        };
        Label.prototype.SetLink = function (valor) {
            this.Link = valor;
            if (!valor) {
                this.LinkTo = null;
            }
            this.RedrawObject();
        };
        Label.prototype.GetLink = function () {
            return this.Link;
        };
        Label.prototype.SetLinkTo = function (destination) {
            this.LinkTo = destination;
            this.Link = true;
            this.RedrawObject();
        };
        Label.prototype.GetLinkTo = function () {
            return this.LinkTo;
        };
        Label.prototype.RestoreLinkTo = function () {
            this.LinkTo = null;
            this.RedrawObject();
        };
        Label.prototype.SetColor = function (color) {
            this.Color = color;
            if (!this.Link) {
                document.getElementById(this.Id).style.color = color;
            }
        };
        Label.prototype.GetColor = function () {
            return this.Color;
        };
        Label.prototype.SetBackColor = function (backColor) {
            this.BackColor = backColor;
            document.getElementById(this.Id).style.backgroundColor = backColor;
        };
        Label.prototype.GetBackColor = function () {
            return this.BackColor;
        };
        Label.prototype.SetLinkColor = function (linkColor) {
            this.LinkColor = linkColor;
            if (this.Link && this.Enabled) {
                document.getElementById(this.Id).style.color = linkColor;
            }
        };
        Label.prototype.GetLinkColor = function () {
            return this.LinkColor;
        };
        Label.prototype.SetDisabledColor = function (color) {
            this.DisabledColor = color;
            if (this.Link && !this.Enabled) {
                document.getElementById(this.Id).style.color = color;
            }
        };
        Label.prototype.GetDisabledColor = function () {
            return this.DisabledColor;
        };
        Label.prototype.SetTabIndex = function (tabIndex) {
            this.TabIndex = tabIndex;
            document.getElementById(this.Id).tabIndex = tabIndex;
        };
        Label.prototype.GetTabIndex = function () {
            return this.TabIndex;
        };
        Label.prototype.RestoreTabIndex = function () {
            this.SetTabIndex(-1);
        };
        Label.prototype.SetZIndex = function (zIndex) {
            this.ZIndex = zIndex;
            document.getElementById(this.Id).style.zIndex = zIndex;
        };
        Label.prototype.GetZIndex = function () {
            return this.ZIndex;
        };
        Label.prototype.RestoreZIndex = function () {
            this.SetZIndex("auto");
        };
        Label.prototype.SetFor = function (forElement) {
            this.For = forElement;
            document.getElementById(this.Id).setAttribute("for", forElement);
        };
        Label.prototype.GetFor = function () {
            return this.For;
        };
        Label.prototype.RestoreFor = function () {
            this.For = null;
            document.getElementById(this.Id).removeAttribute("for");
        };
        Label.prototype.SetAccessKey = function (accesskey) {
            var expresionRegular = new RegExp("^([a-zA-Z]){1}$");
            var caracter = "";
            if (expresionRegular.test(accesskey)) {
                this.AccessKey = accesskey;
                document.getElementById(this.Id).accessKey = accesskey;
                if (this.Caption.indexOf(accesskey.toUpperCase()) >= 0 && this.Caption.indexOf(accesskey.toLowerCase()) >= 0) {
                    if (this.Caption.indexOf(accesskey.toUpperCase()) < this.Caption.indexOf(accesskey.toLowerCase())) {
                        caracter = accesskey.toUpperCase();
                    }
                    else {
                        caracter = accesskey.toLowerCase();
                    }
                }
                else {
                    if (this.Caption.indexOf(accesskey.toUpperCase()) >= 0) {
                        caracter = accesskey.toUpperCase();
                    }
                    if (this.Caption.indexOf(accesskey.toLowerCase()) >= 0) {
                        caracter = accesskey.toLowerCase();
                    }
                }
                if (caracter != "") {
                    document.getElementById(this.Id).innerHTML = this.GetCaption().replace(caracter, "<span style='text-decoration: underline;'>" + caracter + "</span>");
                }
            }
        };
        Label.prototype.GetAccessKey = function () {
            return this.AccessKey;
        };
        Label.prototype.RestoreAccessKey = function () {
            this.AccessKey = null;
            document.getElementById(this.Id).removeAttribute("accessKey");
            this.SetCaption(this.GetCaption()); //Quitar caracter accessKey subrayado del Caption del label (SetCaption fija el caption con innerText en lugar de innerHTML del método SetAccessKey, donde se subraya el caracter accessKey).
        };
        Label.prototype.SetFontSize = function (fontSize) {
            this.FontSize = fontSize;
            document.getElementById(this.Id).style.fontSize = String(fontSize) + "px";
            this.SetHeight(fontSize + Label.topBottomMargin);
            if (this.TypeWidth === sci.Const.AutomaticWidth && document.getElementById(this.Id).style.width !== "auto") { // Un Label es "auto" cuando se crea, antes de que SciTool le fije el ancho según su contenido cuando ya se agregó al DOM.
                this.SetWidth(this.GetPixelsLength());
            }
        };
        Label.prototype.GetFontSize = function () {
            return this.FontSize;
        };
        Label.prototype.SetFontFamily = function (fontFamily) {
            this.FontFamily = fontFamily;
            document.getElementById(this.Id).style.fontFamily = fontFamily;
            if (this.TypeWidth === sci.Const.AutomaticWidth && document.getElementById(this.Id).style.width !== "auto") { // Un Label es "auto" cuando se crea, antes de que SciTool le fije el ancho según su contenido cuando ya se agregó al DOM.
                this.SetWidth(this.GetPixelsLength());
            }
        };
        Label.prototype.GetFontFamily = function () {
            return this.FontFamily;
        };
        Label.prototype.SetEnabled = function (enabled) {
            this.Enabled = enabled;
            if (this.Link) {
                if (enabled) {
                    document.getElementById(this.Id).removeAttribute("disabled");
                }
                else {
                    document.getElementById(this.Id).setAttribute("disabled", "disabled");
                }
            }
            this.RedrawObject();
        };
        Label.prototype.GetEnabled = function () {
            return this.Enabled;
        };
        Label.prototype.SetFocus = function () {
            document.getElementById(this.Id).focus();
        };
        Label.prototype.Talk = function (message, metaMessage) {
            if (metaMessage === void 0) { metaMessage = ""; }
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (var i = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    }
                    catch (e) { }
                }
            }
            for (var _i = 0, _a = MetaObject.GetIdsStack(); _i < _a.length; _i++) {
                var idMetaobjeto = _a[_i];
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                }
                catch (e) { }
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
        };
        Label.NumberOfUnnamedObjects = 0;
        Label.idsStack = [];
        Label.topBottomMargin = 4;
        return Label;
    }());
    sci.Label = Label;
    var TextBox = /** @class */ (function () {
        function TextBox(metaObject, x, y, z, caption, id) {
            var _this = this;
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (caption === void 0) { caption = ""; }
            this.Id = id;
            TextBox.idsStack.push(this.Id);
            this.MetaObject = metaObject;
            MetaObject_private.AddDataObject(this.MetaObject, this.Id, ObjectType.TextBox);
            this.CrossZ = false;
            this.Caption = caption;
            this.Visible = true;
            this.Color = Skin.GetTextBoxColor();
            this.BackColor = Skin.GetTextBoxBackColor();
            this.DisabledColor = Skin.GetTextBoxDisabledColor();
            this.TabIndex = 0;
            if (scitool.GetParentDocumentId(this.Id) !== false) {
                this.ZIndex = String(Number(window[scitool.GetParentDocumentId(this.Id)].GetZIndex()) + scitool.GetMetaObjectObjectsNumber(scitool.GetParentDocumentId(this.Id)));
            }
            else {
                this.ZIndex = "auto";
            }
            this.Name = this.Id;
            this.Password = false;
            this.ReadOnly = false;
            this.Enabled = true;
            this.InputType = null;
            this.Lines = 1;
            this.Cols = null;
            this.RegularExpression = null;
            this.RegularExpressionModifiers = null;
            this.Needed = false;
            this.MinLength = null;
            this.MinNumber = null;
            this.MinTime = null;
            this.MinDate = null;
            this.MaxLength = null;
            this.MaxNumber = null;
            this.MaxDate = null;
            this.MaxTime = null;
            //Crear nodo.
            var nodoNuevo = document.createElement("INPUT");
            nodoNuevo.setAttribute("id", this.Id);
            nodoNuevo.setAttribute("name", this.Name);
            nodoNuevo.setAttribute("type", "text");
            nodoNuevo.dataset.scitoolx = String(x);
            nodoNuevo.dataset.scitooly = String(y);
            nodoNuevo.dataset.scitoolz = String(z);
            nodoNuevo.dataset.scitoolwidth = String(Skin.GetTextBoxWidth());
            nodoNuevo.dataset.scitoolheight = String(Skin.GetTextBoxHeight());
            nodoNuevo.style.width = String(Skin.GetTextBoxWidth()) + "px";
            nodoNuevo.style.height = String(Skin.GetTextBoxHeight()) + "px";
            nodoNuevo.style.setProperty("position", "absolute");
            nodoNuevo.style.setProperty("display", "none");
            nodoNuevo.style.borderWidth = "1px";
            nodoNuevo.style.borderStyle = "solid";
            nodoNuevo.style.outline = "0px";
            // nodoNuevo.style.borderLeftWidth = "3px";
            nodoNuevo.style.borderRadius = "3px";
            nodoNuevo.style.borderColor = Skin.GetTextBoxBorderColor();
            nodoNuevo.setAttribute("placeholder", this.Caption);
            document.body.appendChild(nodoNuevo);
            //Implementar en el DOM las otras propiedades.
            this.SetX(this.GetX());
            this.SetY(this.GetY());
            this.SetZ(this.GetZ());
            this.SetVisible(this.GetVisible());
            this.SetColor(this.GetColor());
            this.SetBackColor(this.GetBackColor());
            this.SetDisabledColor(this.GetDisabledColor());
            this.SetTabIndex(this.GetTabIndex());
            this.SetZIndex(this.GetZIndex());
            this.SetValue(this.GetValue());
            this.SetPassword(this.GetPassword());
            this.SetMaxLength(this.GetMaxLength());
            this.SetReadOnly(this.GetReadOnly());
            this.SetEnabled(this.GetEnabled());
            this.SetCols(this.GetCols());
            this.SetReady(true);
            this.SetFontSize(Skin.GetTextBoxFontSize());
            this.SetFontFamily(Skin.GetTextBoxFontFamily());
            this.SetCrossZ(this.GetCrossZ());
            document.getElementById(this.Id).onclick = function () {
                ////////Activar eventual documento padre de este objeto.
                //Buscar metaobjeto de este objeto.
                var datosObjeto = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                    if (objeto["ObjectId"] === _this.Id) {
                        return objeto;
                    }
                });
                //Verificar si el metaobjeto es un documento.
                var datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                    if (objeto["ObjectId"] === datosObjeto[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                        return objeto;
                    }
                });
                if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();
                    try {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(_this);
                    }
                    catch (e) { }
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                }
                ////////
                try {
                    window[_this.Id + "_OnClick"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnClick");
            };
            document.getElementById(this.Id).ondblclick = function () {
                try {
                    window[_this.Id + "_OnDblClick"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnDblClick");
            };
            document.getElementById(this.Id).onfocus = function () {
                try {
                    window[_this.Id + "_OnFocus"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnFocus");
            };
            document.getElementById(this.Id).onchange = function () {
                try {
                    window[_this.Id + "_OnChange"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnChange");
            };
            document.getElementById(this.Id).onmouseover = function () {
                try {
                    window[_this.Id + "_OnMouseOver"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseOver");
            };
            document.getElementById(this.Id).onmousemove = function () {
                try {
                    window[_this.Id + "_OnMouseMove"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseMove");
            };
            document.getElementById(this.Id).onmousedown = function () {
                try {
                    window[_this.Id + "_OnMouseDown"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseDown");
            };
            document.getElementById(this.Id).onmouseup = function () {
                try {
                    window[_this.Id + "_OnMouseUp"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseUp");
            };
            document.getElementById(this.Id).onmouseout = function () {
                try {
                    window[_this.Id + "_OnMouseOut"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseOut");
            };
            document.getElementById(this.Id).onkeydown = function (evt) {
                try {
                    window[_this.Id + "_OnKeyDown"].call(_this, evt);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnKeyDown");
            };
            document.getElementById(this.Id).onkeypress = function (evt) {
                try {
                    window[_this.Id + "_OnKeyPress"].call(_this, evt);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnKeyPress");
            };
            document.getElementById(this.Id).onkeyup = function (evt) {
                try {
                    window[_this.Id + "_OnKeyUp"].call(_this, evt);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnKeyUp");
            };
            document.getElementById(this.Id).onselect = function () {
                try {
                    window[_this.Id + "_OnSelect"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnSelect");
            };
            document.getElementById(this.Id).onblur = function () {
                _this.ValidarTextBox();
                try {
                    window[_this.Id + "_OnBlur"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnBlur");
            };
        }
        TextBox.prototype.Display = function () {
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                document.getElementById(this.Id).style.removeProperty("display");
            }
            else {
                document.getElementById(this.Id).style.setProperty("display", "none");
            }
        };
        TextBox.GetIdsStack = function () {
            return TextBox.idsStack;
        };
        TextBox.prototype.GetId = function () {
            return this.Id;
        };
        TextBox.prototype.GetMetaObject = function () {
            return this.MetaObject;
        };
        TextBox.prototype.RedrawObject = function () {
            if (this.Enabled) {
                this.SetColor(this.GetColor());
                this.SetBackColor(this.GetBackColor());
                this.SetReady(this.GetReady());
            }
            else {
                this.SetDisabledColor(this.GetDisabledColor());
                this.SetBackColor(this.GetBackColor());
                this.SetReady(this.GetReady());
            }
        };
        TextBox.prototype.SetCrossZ = function (crossZ) {
            this.CrossZ = crossZ;
            var x = this.GetX();
            var y = this.GetY();
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, crossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        TextBox.prototype.GetCrossZ = function () {
            return this.CrossZ;
        };
        TextBox.prototype.SetX = function (x) {
            var X = x;
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolx = String(x);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                x -= Table.GetViewFinderX();
                document.getElementById(this.Id).style.left = String(x) + "px";
            }
            this.Display();
        };
        TextBox.prototype.GetX = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        };
        TextBox.prototype.SetY = function (y) {
            var Y = y;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitooly = String(y);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        TextBox.prototype.GetY = function () {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        };
        TextBox.prototype.SetZ = function (z) {
            var Z = z;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            this.Display();
        };
        TextBox.prototype.GetZ = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        };
        TextBox.prototype.SetXYZ = function (x, y, z) {
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(x, y, z, Width, Height, CrossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        TextBox.prototype.SetWidth = function (width) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
        };
        TextBox.prototype.GetWidth = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolwidth);
        };
        TextBox.prototype.SetHeight = function (height) {
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        };
        TextBox.prototype.GetHeight = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolheight);
        };
        TextBox.prototype.SetDimensions = function (width, height) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        };
        TextBox.prototype.GetInViewFinder = function () {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        };
        TextBox.prototype.SetCaption = function (caption) {
            this.Caption = caption;
            document.getElementById(this.Id).setAttribute("placeholder", caption);
        };
        TextBox.prototype.GetCaption = function () {
            return this.Caption;
        };
        TextBox.prototype.SetFontSize = function (fontSize) {
            this.FontSize = fontSize;
            document.getElementById(this.Id).style.fontSize = String(fontSize) + "px";
        };
        TextBox.prototype.GetFontSize = function () {
            return this.FontSize;
        };
        TextBox.prototype.SetFontFamily = function (fontFamily) {
            this.FontFamily = fontFamily;
            document.getElementById(this.Id).style.fontFamily = fontFamily;
        };
        TextBox.prototype.GetFontFamily = function () {
            return this.FontFamily;
        };
        TextBox.prototype.SetVisible = function (visible) {
            this.Visible = visible;
            if (visible === true) {
                document.getElementById(this.Id).style.visibility = 'visible';
            }
            else {
                document.getElementById(this.Id).style.visibility = 'hidden';
            }
        };
        TextBox.prototype.GetVisible = function () {
            return this.Visible;
        };
        TextBox.prototype.SetColor = function (color) {
            this.Color = color;
            if (this.Enabled) {
                document.getElementById(this.Id).style.color = color;
            }
        };
        TextBox.prototype.GetColor = function () {
            return this.Color;
        };
        TextBox.prototype.SetBackColor = function (backColor) {
            this.BackColor = backColor;
            if (this.Enabled) {
                document.getElementById(this.Id).style.backgroundColor = backColor;
            }
        };
        TextBox.prototype.GetBackColor = function () {
            return this.BackColor;
        };
        TextBox.prototype.SetDisabledColor = function (color) {
            this.DisabledColor = color;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.color = color;
            }
        };
        TextBox.prototype.GetDisabledColor = function () {
            return this.DisabledColor;
        };
        TextBox.prototype.SetTabIndex = function (tabIndex) {
            this.TabIndex = tabIndex;
            document.getElementById(this.Id).tabIndex = tabIndex;
        };
        TextBox.prototype.GetTabIndex = function () {
            return this.TabIndex;
        };
        TextBox.prototype.RestoreTabIndex = function () {
            this.SetTabIndex(0);
        };
        TextBox.prototype.SetZIndex = function (zIndex) {
            this.ZIndex = zIndex;
            document.getElementById(this.Id).style.zIndex = zIndex;
        };
        TextBox.prototype.GetZIndex = function () {
            return this.ZIndex;
        };
        TextBox.prototype.RestoreZIndex = function () {
            this.SetZIndex("auto");
        };
        TextBox.prototype.SetValue = function (value) {
            document.getElementById(this.Id).value = value;
            this.ValidarTextBox();
        };
        TextBox.prototype.GetValue = function () {
            return document.getElementById(this.Id).value;
        };
        TextBox.prototype.SetName = function (name) {
            this.Name = name;
            document.getElementById(this.Id).setAttribute("name", name);
        };
        TextBox.prototype.GetName = function () {
            return this.Name;
        };
        TextBox.prototype.SetPassword = function (password) {
            this.Password = password;
            if (this.Lines == 1) { //Atributo "type" siguiente tiene efecto solo si el TextBox es equivalente a un Input HTML.
                if (password === true) {
                    document.getElementById(this.Id).setAttribute("type", "password");
                }
                else {
                    document.getElementById(this.Id).setAttribute("type", "text");
                }
            }
        };
        TextBox.prototype.GetPassword = function () {
            return this.Password;
        };
        TextBox.prototype.SetMaxLength = function (maxLength) {
            this.MaxLength = maxLength;
            document.getElementById(this.Id).setAttribute("maxlength", String(maxLength));
            this.ValidarTextBox();
        };
        TextBox.prototype.GetMaxLength = function () {
            return this.MaxLength;
        };
        TextBox.prototype.RestoreMaxLength = function () {
            this.MaxLength = null;
            document.getElementById(this.Id).removeAttribute("maxlength");
            this.ValidarTextBox();
        };
        TextBox.prototype.SetReadOnly = function (readOnly) {
            this.ReadOnly = readOnly;
            if (readOnly === true) {
                document.getElementById(this.Id).setAttribute("readOnly", "readonly");
            }
            else {
                document.getElementById(this.Id).removeAttribute("readOnly");
            }
        };
        TextBox.prototype.GetReadOnly = function () {
            return this.ReadOnly;
        };
        TextBox.prototype.SetEnabled = function (enabled) {
            this.Enabled = enabled;
            if (enabled) {
                document.getElementById(this.Id).removeAttribute("disabled");
            }
            else {
                document.getElementById(this.Id).setAttribute("disabled", "disabled");
            }
            this.RedrawObject();
        };
        TextBox.prototype.GetEnabled = function () {
            return this.Enabled;
        };
        TextBox.prototype.SetInputType = function (inputType) {
            //Este método define una expresión regular de caracteres y formato aceptado por el TextBox,
            //especificada por el valor del parámetro, que solo puede ser uno de los de la constante
            //InputType.
            //Las expresiones regulares se definen con límites de ocurrencias según el valor de
            // la propiedad MaxLenght, si es que estuviera definida.
            var listaInputType = [
                'Text',
                'TaxIdCl',
                'WordEs',
                'WordsEs',
                'WordEn',
                'WordsEn',
                'Email',
                'NaturalNumber',
                'IntegerNumber',
                'RealNumber',
                'DDMMYYYY',
                'Time',
                'YesNo',
                'Boolean',
                'WordNaturalEs',
                'WordsNaturalEs',
                'WordNaturalEn',
                'WordsNaturalEn',
                'ColorHex',
                'RegularExpression'
            ];
            if (listaInputType.indexOf(inputType) >= 0) {
                this.InputType = inputType;
                this.ValidarTextBox();
            }
        };
        TextBox.prototype.GetInputType = function () {
            return this.InputType;
        };
        TextBox.prototype.RestoreInputType = function () {
            this.InputType = null;
            this.RegularExpression = null;
            this.RegularExpressionModifiers = null;
            this.ValidarTextBox();
        };
        TextBox.prototype.SetLines = function (lines) {
            var _this = this;
            //Guardar algunos valores del Textbox antes que se elimine el nodo.
            var tempValue = this.GetValue();
            var tempX = this.GetX();
            var tempY = this.GetY();
            var tempZ = this.GetZ();
            var tempWidth = this.GetWidth();
            //Eliminar el nodo actual y crear nuevamente un nodo de tipo Input o TextArea, según si lines=1 o lines>1.
            var nodoActual = document.getElementById(this.Id);
            var nodoPadre = nodoActual.parentNode;
            nodoPadre.removeChild(nodoActual);
            //Crear nodo correspondiente.
            if (lines === 1) {
                var nodoNuevo = document.createElement("INPUT");
                nodoNuevo.setAttribute("type", "text");
            }
            if (lines > 1) {
                var nodoNuevo = document.createElement("TEXTAREA");
            }
            nodoNuevo.setAttribute("id", this.Id);
            nodoNuevo.setAttribute("name", this.Name);
            nodoNuevo.dataset.scitoolx = String(tempX);
            nodoNuevo.dataset.scitooly = String(tempY);
            nodoNuevo.dataset.scitoolz = String(tempZ);
            nodoNuevo.dataset.scitoolwidth = String(tempWidth);
            nodoNuevo.dataset.scitoolheight = String(Skin.GetTextBoxHeight() * lines);
            nodoNuevo.style.width = String(tempWidth) + "px";
            nodoNuevo.style.height = String(Skin.GetTextBoxHeight() * lines) + "px";
            nodoNuevo.style.setProperty("position", "absolute");
            nodoNuevo.style.setProperty("display", "none");
            nodoNuevo.style.borderWidth = "1px";
            nodoNuevo.style.borderStyle = "solid";
            nodoNuevo.style.outline = "0px";
            // nodoNuevo.style.borderLeftWidth = "3px";
            nodoNuevo.style.borderRadius = "3px";
            nodoNuevo.style.borderColor = Skin.GetTextBoxBorderColor();
            nodoNuevo.setAttribute("placeholder", this.Caption);
            nodoPadre.appendChild(nodoNuevo);
            this.Lines = lines;
            if (lines > 1) { //Estas propiedades solo tienen efecto si el TextBox es equivalente a un Textarea HTML.
                nodoNuevo.setAttribute("rows", String(lines));
                nodoNuevo.style.resize = "none";
            }
            //Implementar en el DOM las propiedades del nodo anterior en el nuevo.
            this.SetX(this.GetX());
            this.SetY(this.GetY());
            this.SetZ(this.GetZ());
            this.SetVisible(this.GetVisible());
            this.SetColor(this.GetColor());
            this.SetBackColor(this.GetBackColor());
            this.SetDisabledColor(this.GetDisabledColor());
            this.SetTabIndex(this.GetTabIndex());
            this.SetZIndex(this.GetZIndex());
            this.SetValue(tempValue);
            this.SetPassword(this.GetPassword());
            this.SetMaxLength(this.GetMaxLength());
            this.SetReadOnly(this.GetReadOnly());
            this.SetEnabled(this.GetEnabled());
            this.SetCols(this.GetCols());
            this.SetReady(this.GetReady());
            this.SetFontSize(this.GetFontSize());
            this.SetFontFamily(this.GetFontFamily());
            this.SetCrossZ(this.GetCrossZ());
            document.getElementById(this.Id).onclick = function () {
                try {
                    window[_this.Id + "_OnClick"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnClick");
            };
            document.getElementById(this.Id).ondblclick = function () {
                try {
                    window[_this.Id + "_OnDblClick"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnDblClick");
            };
            document.getElementById(this.Id).onfocus = function () {
                try {
                    window[_this.Id + "_OnFocus"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnFocus");
            };
            document.getElementById(this.Id).onchange = function () {
                try {
                    window[_this.Id + "_OnChange"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnChange");
            };
            document.getElementById(this.Id).onmouseover = function () {
                try {
                    window[_this.Id + "_OnMouseOver"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseOver");
            };
            document.getElementById(this.Id).onmousemove = function () {
                try {
                    window[_this.Id + "_OnMouseMove"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseMove");
            };
            document.getElementById(this.Id).onmousedown = function () {
                try {
                    window[_this.Id + "_OnMouseDown"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseDown");
            };
            document.getElementById(this.Id).onmouseup = function () {
                try {
                    window[_this.Id + "_OnMouseUp"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseUp");
            };
            document.getElementById(this.Id).onmouseout = function () {
                try {
                    window[_this.Id + "_OnMouseOut"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseOut");
            };
            document.getElementById(this.Id).onkeydown = function (evt) {
                try {
                    window[_this.Id + "_OnKeyDown"].call(_this, evt);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnKeyDown");
            };
            document.getElementById(this.Id).onkeypress = function (evt) {
                try {
                    window[_this.Id + "_OnKeyPress"].call(_this, evt);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnKeyPress");
            };
            document.getElementById(this.Id).onkeyup = function (evt) {
                try {
                    window[_this.Id + "_OnKeyUp"].call(_this, evt);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnKeyUp");
            };
            document.getElementById(this.Id).onselect = function () {
                try {
                    window[_this.Id + "_OnSelect"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnSelect");
            };
            document.getElementById(this.Id).onblur = function () {
                _this.ValidarTextBox();
                try {
                    window[_this.Id + "_OnBlur"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnBlur");
            };
        };
        TextBox.prototype.GetLines = function () {
            return this.Lines;
        };
        TextBox.prototype.SetCols = function (cols) {
            this.Cols = cols;
            if (this.Lines > 1) { //Propiedad "cols" tiene efecto solo si el TextBox es equivalente a un Textarea HTML.
                document.getElementById(this.Id).setAttribute("cols", String(cols));
            }
        };
        TextBox.prototype.GetCols = function () {
            return this.Cols;
        };
        TextBox.prototype.SetRegularExpression = function (regularExpression, modifiers) {
            if (modifiers === void 0) { modifiers = "g"; }
            this.RegularExpression = regularExpression;
            this.RegularExpressionModifiers = modifiers;
        };
        TextBox.prototype.GetRegularExpression = function () {
            return this.RegularExpression;
        };
        TextBox.prototype.GetRegularExpressionModifiers = function () {
            return this.RegularExpressionModifiers;
        };
        TextBox.prototype.SetNeeded = function (needed) {
            this.Needed = needed;
            this.ValidarTextBox();
        };
        TextBox.prototype.GetNeeded = function () {
            return this.Needed;
        };
        TextBox.prototype.SetReady = function (ready) {
            this.Ready = ready;
            if (this.Enabled) {
                if (this.Ready) {
                    document.getElementById(this.Id).style.borderColor = Skin.GetTextBoxReadyColor();
                }
                else {
                    document.getElementById(this.Id).style.borderColor = Skin.GetTextBoxNotReadyColor();
                }
            }
            else {
                document.getElementById(this.Id).style.borderColor = Skin.GetTextBoxDisabledFlagColor();
            }
        };
        TextBox.prototype.GetReady = function () {
            return this.Ready;
        };
        TextBox.prototype.SetMinLength = function (minLength) {
            this.MinLength = minLength;
            this.ValidarTextBox();
        };
        TextBox.prototype.GetMinLenght = function () {
            return this.MinLength;
        };
        TextBox.prototype.RestoreMinLength = function () {
            this.MinLength = null;
            this.ValidarTextBox();
        };
        TextBox.prototype.SetMinNumber = function (minNumber) {
            this.MinNumber = minNumber;
            this.ValidarTextBox();
        };
        TextBox.prototype.GetMinNumber = function () {
            return this.MinNumber;
        };
        TextBox.prototype.RestoreMinNumber = function () {
            this.MinNumber = null;
            this.ValidarTextBox();
        };
        TextBox.prototype.SetMinTime = function (minTime) {
            this.MinTime = minTime;
            this.ValidarTextBox();
        };
        TextBox.prototype.GetMinTime = function () {
            return this.MinTime;
        };
        TextBox.prototype.RestoreMinTime = function () {
            this.MinTime = null;
            this.ValidarTextBox();
        };
        TextBox.prototype.SetMinDate = function (minDate) {
            this.MinDate = minDate;
            if (minDate = "") {
                this.MinDate = null;
            }
            this.ValidarTextBox();
        };
        TextBox.prototype.GetMinDate = function () {
            return this.MinDate;
        };
        TextBox.prototype.RestoreMinDate = function () {
            this.MinDate = null;
            this.ValidarTextBox();
        };
        TextBox.prototype.SetMaxNumber = function (maxNumber) {
            this.MaxNumber = maxNumber;
            this.ValidarTextBox();
        };
        TextBox.prototype.GetMaxNumber = function () {
            return this.MaxNumber;
        };
        TextBox.prototype.RestoreMaxNumber = function () {
            this.MaxNumber = null;
            this.ValidarTextBox();
        };
        TextBox.prototype.SetMaxDate = function (maxDate) {
            this.MaxDate = maxDate;
            this.ValidarTextBox();
        };
        TextBox.prototype.GetMaxDate = function () {
            return this.MaxDate;
        };
        TextBox.prototype.RestoreMaxDate = function () {
            this.MaxDate = null;
            this.ValidarTextBox();
        };
        TextBox.prototype.SetMaxTime = function (maxTime) {
            this.MaxTime = maxTime;
            this.ValidarTextBox();
        };
        TextBox.prototype.GetMaxTime = function () {
            return this.MaxTime;
        };
        TextBox.prototype.RestoreMaxTime = function () {
            this.MaxTime = null;
            this.ValidarTextBox();
        };
        TextBox.prototype.SetFocus = function () {
            document.getElementById(this.Id).focus();
        };
        TextBox.prototype.ValidarTextBox = function () {
            if (this.GetValue().replace(/ /g, "") == "") {
                document.getElementById(this.Id).value = this.GetValue().replace(/ /g, ""); //Entradas que son solo espacios se inicializan a una cadena vacía.
                if (this.Needed) {
                    this.SetReady(false);
                }
                else {
                    this.SetReady(true);
                }
            }
            else {
                if ((this.MinLength != null && this.GetValue().length < this.MinLength) || (this.MaxLength != null && this.GetValue().length > this.MaxLength)) {
                    this.SetReady(false);
                }
                else {
                    if (this.InputType != null) {
                        var expresionRegular = void 0;
                        var limiteInferior = "1";
                        var limiteSuperior = "";
                        if (this.MinLength != null) {
                            limiteInferior = String(this.MinLength);
                        }
                        if (this.MaxLength != null) {
                            limiteSuperior = String(this.MaxLength);
                        }
                        switch (this.InputType) {
                            case sci.Const.TaxIdCl:
                                expresionRegular = new RegExp("^([0-9]{1,2})[\.]{0,1}[0-9]{3}[\.]{0,1}[0-9]{3}[\-]{0,1}[0-9kK]{1}$");
                                break;
                            case sci.Const.WordEs:
                                expresionRegular = new RegExp("^([a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]){" + limiteInferior + "," + limiteSuperior + "}$");
                                break;
                            case sci.Const.WordsEs:
                                expresionRegular = new RegExp("^([a-zA-ZáéíóúüñÁÉÍÓÚÜÑ ]){" + limiteInferior + "," + limiteSuperior + "}$");
                                break;
                            case sci.Const.WordEn:
                                expresionRegular = new RegExp("^([a-zA-Z]){" + limiteInferior + "," + limiteSuperior + "}$");
                                break;
                            case sci.Const.WordsEn:
                                expresionRegular = new RegExp("^([a-zA-Z ]){" + limiteInferior + "," + limiteSuperior + "}$");
                                break;
                            case sci.Const.Text:
                                expresionRegular = new RegExp('^([a-zA-ZáéíóúñÁÉÍÓÚÑ 0-9äëïöüÄËÏÖÜàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛ\\.\\s,:;@¿?¡!=ªº\\|"#·$%&/€^`+-¨´(){}çÇ_–\'\\*∞¬÷“”≠œæ®†¥øπå∫∂ƒ™¶≤Ω∑©√µß„…]){' + limiteInferior + ',' + limiteSuperior + '}$');
                                break;
                            case sci.Const.Email:
                                expresionRegular = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
                                break;
                            case sci.Const.DDMMYYYY:
                                expresionRegular = new RegExp("^((0[1-9])|(1[0-9])|(2[0-9])|(3[0-1]))[\\/\\-\\. ]((0[1-9])|(1[0-2]))[\\/\\-\\. ]([0-9]{4})$");
                                break;
                            case sci.Const.Time:
                                expresionRegular = new RegExp("^([01]?[0-9]|2[0-3])[\\.:][0-5][0-9]$");
                                break;
                            case sci.Const.YesNo:
                                expresionRegular = new RegExp("^(Yes|No|YES|NO|yes|no|y|n|Y|N)$");
                                break;
                            case sci.Const.Boolean:
                                expresionRegular = new RegExp("^(True|False|TRUE|FALSE|true|false|t|f|T|F)$");
                                break;
                            case sci.Const.WordNaturalEs:
                                expresionRegular = new RegExp("^([a-zA-ZáéíóúüñÁÉÍÓÚÜÑ0-9]){" + limiteInferior + "," + limiteSuperior + "}$");
                                break;
                            case sci.Const.WordsNaturalEs:
                                expresionRegular = new RegExp("^([a-zA-ZáéíóúüñÁÉÍÓÚÜÑ0-9 ]){" + limiteInferior + "," + limiteSuperior + "}$");
                                break;
                            case sci.Const.WordNaturalEn:
                                expresionRegular = new RegExp("^([a-zA-Z0-9]){" + limiteInferior + "," + limiteSuperior + "}$");
                                break;
                            case sci.Const.WordsNaturalEn:
                                expresionRegular = new RegExp("^([a-zA-Z0-9 ]){" + limiteInferior + "," + limiteSuperior + "}$");
                                break;
                            case sci.Const.ColorHex:
                                expresionRegular = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
                                break;
                            case sci.Const.RegularExpression:
                                if (this.RegularExpression != null && this.RegularExpressionModifiers != null) {
                                    expresionRegular = new RegExp(this.RegularExpression, this.RegularExpressionModifiers);
                                }
                                break;
                        }
                        if (this.InputType == sci.Const.Text
                            || this.InputType == sci.Const.WordEs
                            || this.InputType == sci.Const.WordsEs
                            || this.InputType == sci.Const.WordEn
                            || this.InputType == sci.Const.WordsEn
                            || this.InputType == sci.Const.Email
                            || this.InputType == sci.Const.YesNo
                            || this.InputType == sci.Const.Boolean
                            || this.InputType == sci.Const.WordNaturalEs
                            || this.InputType == sci.Const.WordsNaturalEs
                            || this.InputType == sci.Const.WordNaturalEn
                            || this.InputType == sci.Const.WordsNaturalEn
                            || this.InputType == sci.Const.ColorHex
                            || (this.InputType == sci.Const.RegularExpression && this.RegularExpression != null && this.RegularExpressionModifiers != null)) {
                            this.SetReady(expresionRegular.test(this.GetValue()));
                        }
                        else {
                            if (this.InputType == sci.Const.TaxIdCl) {
                                if (expresionRegular.test(this.GetValue())) {
                                    var taxIdCl = this.GetValue();
                                    taxIdCl = taxIdCl.replace(/\./g, "");
                                    taxIdCl = taxIdCl.replace(/-/g, "");
                                    taxIdCl = taxIdCl.replace(/k/g, "K");
                                    var numero = Number(taxIdCl.substr(0, taxIdCl.length - 1));
                                    var digitoVerificador = taxIdCl.substr(taxIdCl.length - 1, taxIdCl.length);
                                    //Calcular dígito verificador.
                                    var M = 0, S = 1;
                                    var digitoVerificadorCalculado = void 0;
                                    for (; numero; numero = Math.floor(numero / 10))
                                        S = (S + numero % 10 * (9 - M++ % 6)) % 11;
                                    digitoVerificadorCalculado = S ? S - 1 : 'K';
                                    if (digitoVerificador == digitoVerificadorCalculado) {
                                        this.SetReady(true);
                                    }
                                    else {
                                        this.SetReady(false);
                                    }
                                }
                                else {
                                    this.SetReady(false);
                                }
                            }
                            if (this.InputType == sci.Const.NaturalNumber) {
                                if (isNaN(Number(this.GetValue()))) {
                                    this.SetReady(false);
                                }
                                else {
                                    if (Number(this.GetValue()) >= 0) {
                                        if (Number(this.GetValue()) % 1 == 0) {
                                            if (this.MinNumber == null && this.MaxNumber == null) {
                                                this.SetReady(true);
                                            }
                                            else {
                                                if (this.MinNumber != null && this.MaxNumber != null) {
                                                    if (Number(this.GetValue()) >= this.MinNumber
                                                        && Number(this.GetValue()) <= this.MaxNumber) {
                                                        this.SetReady(true);
                                                    }
                                                    else {
                                                        this.SetReady(false);
                                                    }
                                                }
                                                else {
                                                    if (this.MinNumber != null) {
                                                        if (Number(this.GetValue()) >= this.MinNumber) {
                                                            this.SetReady(true);
                                                        }
                                                        else {
                                                            this.SetReady(false);
                                                        }
                                                    }
                                                    if (this.MaxNumber != null) {
                                                        if (Number(this.GetValue()) <= this.MaxNumber) {
                                                            this.SetReady(true);
                                                        }
                                                        else {
                                                            this.SetReady(false);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        else {
                                            this.SetReady(false);
                                        }
                                    }
                                    else {
                                        this.SetReady(false);
                                    }
                                }
                            }
                            if (this.InputType == sci.Const.IntegerNumber) {
                                if (isNaN(Number(this.GetValue()))) {
                                    this.SetReady(false);
                                }
                                else {
                                    if (Number(this.GetValue()) % 1 == 0) {
                                        if (this.MinNumber == null && this.MaxNumber == null) {
                                            this.SetReady(true);
                                        }
                                        else {
                                            if (this.MinNumber != null && this.MaxNumber != null) {
                                                if (Number(this.GetValue()) >= this.MinNumber
                                                    && Number(this.GetValue()) <= this.MaxNumber) {
                                                    this.SetReady(true);
                                                }
                                                else {
                                                    this.SetReady(false);
                                                }
                                            }
                                            else {
                                                if (this.MinNumber != null) {
                                                    if (Number(this.GetValue()) >= this.MinNumber) {
                                                        this.SetReady(true);
                                                    }
                                                    else {
                                                        this.SetReady(false);
                                                    }
                                                }
                                                if (this.MaxNumber != null) {
                                                    if (Number(this.GetValue()) <= this.MaxNumber) {
                                                        this.SetReady(true);
                                                    }
                                                    else {
                                                        this.SetReady(false);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    else {
                                        this.SetReady(false);
                                    }
                                }
                            }
                            if (this.InputType == sci.Const.RealNumber) {
                                if (isNaN(Number(this.GetValue()))) {
                                    this.SetReady(false);
                                }
                                else {
                                    if (this.MinNumber == null && this.MaxNumber == null) {
                                        this.SetReady(true);
                                    }
                                    else {
                                        if (this.MinNumber != null && this.MaxNumber != null) {
                                            if (Number(this.GetValue()) >= this.MinNumber
                                                && Number(this.GetValue()) <= this.MaxNumber) {
                                                this.SetReady(true);
                                            }
                                            else {
                                                this.SetReady(false);
                                            }
                                        }
                                        else {
                                            if (this.MinNumber != null) {
                                                if (Number(this.GetValue()) >= this.MinNumber) {
                                                    this.SetReady(true);
                                                }
                                                else {
                                                    this.SetReady(false);
                                                }
                                            }
                                            if (this.MaxNumber != null) {
                                                if (Number(this.GetValue()) <= this.MaxNumber) {
                                                    this.SetReady(true);
                                                }
                                                else {
                                                    this.SetReady(false);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (this.InputType == sci.Const.DDMMYYYY) {
                                if (expresionRegular.test(this.GetValue())) {
                                    var dia = Number(this.GetValue().substr(0, 2));
                                    var mes = Number(this.GetValue().substr(3, 2)) - 1;
                                    var ano = Number(this.GetValue().substr(6, 4));
                                    var fecha = void 0;
                                    var fechaMinDate = void 0;
                                    var fechaMaxDate = void 0;
                                    fecha = new Date(ano, mes, dia);
                                    if (this.MinDate != null) {
                                        var diaMinDate = Number(this.GetMinDate().substr(0, 2));
                                        var mesMinDate = Number(this.GetMinDate().substr(3, 2)) - 1;
                                        var anoMinDate = Number(this.GetMinDate().substr(6, 4));
                                        fechaMinDate = new Date(anoMinDate, mesMinDate, diaMinDate);
                                    }
                                    if (this.MaxDate != null) {
                                        var diaMaxDate = Number(this.GetMaxDate().substr(0, 2));
                                        var mesMaxDate = Number(this.GetMaxDate().substr(3, 2)) - 1;
                                        var anoMaxDate = Number(this.GetMaxDate().substr(6, 4));
                                        fechaMaxDate = new Date(anoMaxDate, mesMaxDate, diaMaxDate);
                                    }
                                    if (dia == fecha.getDate() && mes == fecha.getMonth() && ano == fecha.getFullYear()) {
                                        if (this.MinDate == null && this.MaxDate == null) {
                                            this.SetReady(true);
                                        }
                                        else {
                                            if (this.MinDate != null && this.MaxDate != null) {
                                                if (fecha.getTime() >= fechaMinDate.getTime()
                                                    && fecha.getTime() <= fechaMaxDate.getTime()) {
                                                    this.SetReady(true);
                                                }
                                                else {
                                                    this.SetReady(false);
                                                }
                                            }
                                            else {
                                                if (this.MinDate != null) {
                                                    if (fecha.getTime() >= fechaMinDate.getTime()) {
                                                        this.SetReady(true);
                                                    }
                                                    else {
                                                        this.SetReady(false);
                                                    }
                                                }
                                                if (this.MaxDate != null) {
                                                    if (fecha.getTime() <= fechaMaxDate.getTime()) {
                                                        this.SetReady(true);
                                                    }
                                                    else {
                                                        this.SetReady(false);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    else {
                                        this.SetReady(false);
                                    }
                                }
                                else {
                                    this.SetReady(false);
                                }
                            }
                            if (this.InputType == sci.Const.Time) {
                                if (expresionRegular.test(this.GetValue())) {
                                    if (this.MinTime == null && this.MaxTime == null) {
                                        this.SetReady(true);
                                    }
                                    else {
                                        var minutos = void 0;
                                        var minutosMinTime = void 0;
                                        var minutosMaxTime = void 0;
                                        if (this.GetValue().indexOf(":") >= 0) {
                                            minutos = Number(this.GetValue().substr(0, this.GetValue().indexOf(":"))) * 60;
                                            minutos += Number(this.GetValue().substr(this.GetValue().indexOf(":") + 1, 2));
                                        }
                                        else {
                                            minutos = Number(this.GetValue().substr(0, this.GetValue().indexOf("."))) * 60;
                                            minutos += Number(this.GetValue().substr(this.GetValue().indexOf(".") + 1, 2));
                                        }
                                        if (this.MinTime != null) {
                                            minutosMinTime = Number(this.GetMinTime().substr(0, this.GetMinTime().indexOf(":"))) * 60;
                                            minutosMinTime += Number(this.GetMinTime().substr(this.GetMinTime().indexOf(":") + 1, 2));
                                        }
                                        if (this.MaxTime != null) {
                                            minutosMaxTime = Number(this.GetMaxTime().substr(0, this.GetMaxTime().indexOf(":"))) * 60;
                                            minutosMaxTime += Number(this.GetMaxTime().substr(this.GetMaxTime().indexOf(":") + 1, 2));
                                        }
                                        if (this.MinTime != null && this.MaxTime != null) {
                                            if (minutos >= minutosMinTime
                                                && minutos <= minutosMaxTime) {
                                                this.SetReady(true);
                                            }
                                            else {
                                                this.SetReady(false);
                                            }
                                        }
                                        else {
                                            if (this.MinTime != null) {
                                                if (minutos >= minutosMinTime) {
                                                    this.SetReady(true);
                                                }
                                                else {
                                                    this.SetReady(false);
                                                }
                                            }
                                            if (this.MaxTime != null) {
                                                if (minutos <= minutosMaxTime) {
                                                    this.SetReady(true);
                                                }
                                                else {
                                                    this.SetReady(false);
                                                }
                                            }
                                        }
                                    }
                                }
                                else {
                                    this.SetReady(false);
                                }
                            }
                        }
                    }
                    else {
                        this.SetReady(true);
                    }
                }
            }
            //Formatear entradas.
            if (this.InputType == sci.Const.TaxIdCl && this.Ready && this.GetValue().replace(/ /g, "").length > 0) {
                var taxIdCl = this.GetValue();
                taxIdCl = taxIdCl.replace(/\./g, "");
                taxIdCl = taxIdCl.replace(/-/g, "");
                taxIdCl = taxIdCl.replace(/k/g, "K");
                var taxIdClFormateado = taxIdCl.substr(0, taxIdCl.length - 1);
                taxIdClFormateado = taxIdClFormateado.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                taxIdClFormateado = taxIdClFormateado.split('').reverse().join('').replace(/^[\.]/, '');
                document.getElementById(this.Id).value = taxIdClFormateado + "-" + taxIdCl.substr(taxIdCl.length - 1, taxIdCl.length);
            }
            if (this.InputType == sci.Const.DDMMYYYY && this.Ready && this.GetValue().replace(/ /g, "").length > 0) {
                var fecha = this.GetValue();
                fecha = fecha.replace(/ /g, "-");
                fecha = fecha.replace(/\./g, "-");
                fecha = fecha.replace(/\//g, "-");
                document.getElementById(this.Id).value = fecha;
            }
            if (this.InputType == sci.Const.Time && this.Ready && this.GetValue().replace(/ /g, "").length > 0) {
                var time = this.GetValue().replace(/\./g, ":");
                if (time.indexOf(":") == 1) {
                    time = "0" + time;
                }
                document.getElementById(this.Id).value = time;
            }
            if (this.InputType == sci.Const.NaturalNumber && this.Ready && this.GetValue().replace(/ /g, "").length > 0) {
                document.getElementById(this.Id).value = this.GetValue().replace(/ /g, "");
                if (this.GetValue().indexOf(",") >= 0) {
                    document.getElementById(this.Id).value = this.GetValue().substring(0, this.GetValue().indexOf(","));
                }
                if (this.GetValue().indexOf(".") >= 0) {
                    document.getElementById(this.Id).value = this.GetValue().substring(0, this.GetValue().indexOf("."));
                }
            }
            if (this.InputType == sci.Const.IntegerNumber && this.Ready && this.GetValue().replace(/ /g, "").length > 0) {
                document.getElementById(this.Id).value = this.GetValue().replace(/ /g, "");
                if (this.GetValue().indexOf(",") >= 0) {
                    document.getElementById(this.Id).value = this.GetValue().substring(0, this.GetValue().indexOf(","));
                }
                if (this.GetValue().indexOf(".") >= 0) {
                    document.getElementById(this.Id).value = this.GetValue().substring(0, this.GetValue().indexOf("."));
                }
            }
            if (this.InputType == sci.Const.RealNumber && this.Ready && this.GetValue().replace(/ /g, "").length > 0) {
                document.getElementById(this.Id).value = this.GetValue().replace(/ /g, "");
            }
            if (this.InputType == sci.Const.YesNo && this.Ready && this.GetValue().replace(/ /g, "").length > 0) {
                if (this.GetValue().toLowerCase().indexOf("y") >= 0) {
                    document.getElementById(this.Id).value = "y";
                }
                else {
                    document.getElementById(this.Id).value = "n";
                }
            }
            if (this.InputType == sci.Const.Boolean && this.Ready && this.GetValue().replace(/ /g, "").length > 0) {
                if (this.GetValue().toLowerCase().indexOf("t") >= 0) {
                    document.getElementById(this.Id).value = "t";
                }
                else {
                    document.getElementById(this.Id).value = "f";
                }
            }
        };
        TextBox.prototype.Talk = function (message, metaMessage) {
            if (metaMessage === void 0) { metaMessage = ""; }
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (var i = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    }
                    catch (e) { }
                }
            }
            for (var _i = 0, _a = MetaObject.GetIdsStack(); _i < _a.length; _i++) {
                var idMetaobjeto = _a[_i];
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                }
                catch (e) { }
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
        };
        TextBox.NumberOfUnnamedObjects = 0;
        TextBox.idsStack = [];
        return TextBox;
    }());
    sci.TextBox = TextBox;
    var Button = /** @class */ (function () {
        function Button(metaObject, x, y, z, caption, id) {
            var _this = this;
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (caption === void 0) { caption = ""; }
            this.Id = id;
            Button.idsStack.push(this.Id);
            this.MetaObject = metaObject;
            MetaObject_private.AddDataObject(this.MetaObject, this.Id, ObjectType.Button);
            this.CrossZ = false;
            if (caption.replace(/ /g, "") == "") {
                this.Caption = this.Id;
            }
            else {
                this.Caption = caption;
            }
            this.Visible = true;
            this.Color = Skin.GetButtonColor();
            this.FromBackColor = Skin.GetButtonFromBackColor();
            this.ToBackColor = Skin.GetButtonToBackColor();
            this.ColorOnMouseOver = Skin.GetButtonColorOnMouseOver();
            this.FromBackColorOnMouseOver = Skin.GetButtonFromBackColorOnMouseOver();
            this.ToBackColorOnMouseOver = Skin.GetButtonToBackColorOnMouseOver();
            this.BorderTopColor = Skin.GetButtonBorderTopColor();
            this.BorderRightColor = Skin.GetButtonBorderRightColor();
            this.BorderBottomColor = Skin.GetButtonBorderBottomColor();
            this.BorderLeftColor = Skin.GetButtonBorderLeftColor();
            this.TopLeftRadius = Skin.GetButtonTopLeftRadius();
            this.TopRightRadius = Skin.GetButtonTopRightRadius();
            this.BottomLeftRadius = Skin.GetButtonBottomLeftRadius();
            this.BottomRightRadius = Skin.GetButtonBottomRightRadius();
            this.TopBorderWidth = Skin.GetButtonTopBorderWidth();
            this.RightBorderWidth = Skin.GetButtonRightBorderWidth();
            this.BottomBorderWidth = Skin.GetButtonBottomBorderWidth();
            this.LeftBorderWidth = Skin.GetButtonLeftBorderWidth();
            this.DisabledColor = Skin.GetButtonDisabledColor();
            this.DisabledFromBackColor = Skin.GetButtonDisabledFromBackColor();
            this.DisabledToBackColor = Skin.GetButtonDisabledToBackColor();
            this.TabIndex = 0;
            if (scitool.GetParentDocumentId(this.Id) !== false) {
                this.ZIndex = String(Number(window[scitool.GetParentDocumentId(this.Id)].GetZIndex()) + scitool.GetMetaObjectObjectsNumber(scitool.GetParentDocumentId(this.Id)));
            }
            else {
                this.ZIndex = "auto";
            }
            this.Name = this.Id;
            this.Enabled = true;
            this.AccessKey = null;
            this.Raised = false;
            this.Toggle = false;
            this.Toggled = false;
            //Almacenar colores originales del botón para restaurarlos si eventualmente se define luego como botón de tipo Toggle.
            this.TempBorderTopColor = this.BorderTopColor;
            this.TempBorderRightColor = this.BorderRightColor;
            this.TempBorderBottomColor = this.BorderBottomColor;
            this.TempBorderLeftColor = this.BorderLeftColor;
            this.TempBackColor = this.FromBackColor;
            this.TempColor = this.Color;
            this.TempDisabledBackColor = this.DisabledFromBackColor;
            //Crear nodo.
            var nodoNuevo = document.createElement("BUTTON");
            nodoNuevo.setAttribute("id", this.Id);
            nodoNuevo.setAttribute("name", this.Name);
            nodoNuevo.setAttribute("style", "background-image: -moz-linear-gradient(top, " + this.GetFromBackColor() + " ," + this.GetToBackColor() + "); background-image: -webkit-gradient(linear, left top,left bottom, from(" + this.GetFromBackColor() + "), to(" + this.GetToBackColor() + ")); background-image: linear-gradient(top, " + this.GetFromBackColor() + ", " + this.GetToBackColor() + ");");
            nodoNuevo.dataset.scitoolx = String(x);
            nodoNuevo.dataset.scitooly = String(y);
            nodoNuevo.dataset.scitoolz = String(z);
            nodoNuevo.dataset.scitoolwidth = String(Skin.GetButtonWidth());
            nodoNuevo.dataset.scitoolheight = String(Skin.GetButtonHeight());
            nodoNuevo.style.width = String(Skin.GetButtonWidth()) + "px";
            nodoNuevo.style.height = String(Skin.GetButtonHeight()) + "px";
            nodoNuevo.style.setProperty("position", "absolute");
            nodoNuevo.style.setProperty("display", "none");
            nodoNuevo.style.borderTop = "1px solid " + this.GetBorderTopColor();
            nodoNuevo.style.borderRight = "1px solid " + this.GetBorderRightColor();
            nodoNuevo.style.borderBottom = "1px solid " + this.GetBorderBottomColor();
            nodoNuevo.style.borderLeft = "1px solid " + this.GetBorderLeftColor();
            nodoNuevo.style.borderTopLeftRadius = String(this.GetTopLeftRadius()) + "px";
            nodoNuevo.style.borderTopRightRadius = String(this.GetTopRightRadius()) + "px";
            nodoNuevo.style.borderBottomLeftRadius = String(this.GetBottomLeftRadius()) + "px";
            nodoNuevo.style.borderBottomRightRadius = String(this.GetBottomRightRadius()) + "px";
            nodoNuevo.style.borderTopWidth = String(this.GetTopBorderWidth()) + "px";
            nodoNuevo.style.borderRightWidth = String(this.GetRightBorderWidth()) + "px";
            nodoNuevo.style.borderBottomWidth = String(this.GetBottomBorderWidth()) + "px";
            nodoNuevo.style.borderLeftWidth = String(this.GetLeftBorderWidth()) + "px";
            nodoNuevo.innerText = this.Caption;
            document.body.appendChild(nodoNuevo);
            //Implementar en el DOM las otras propiedades.
            this.SetX(this.GetX());
            this.SetY(this.GetY());
            this.SetZ(this.GetZ());
            this.SetVisible(this.GetVisible());
            this.SetColor(this.GetColor());
            this.SetFromBackColor(this.GetFromBackColor());
            this.SetToBackColor(this.GetToBackColor());
            this.SetTabIndex(this.GetTabIndex());
            this.SetZIndex(this.GetZIndex());
            this.SetFontSize(Skin.GetButtonFontSize());
            this.SetFontFamily(Skin.GetButtonFontFamily());
            this.SetCrossZ(this.GetCrossZ());
            document.getElementById(this.Id).onclick = function () {
                ////////Activar eventual documento padre de este objeto.
                //Buscar metaobjeto de este objeto.
                var datosObjeto = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                    if (objeto["ObjectId"] === _this.Id) {
                        return objeto;
                    }
                });
                //Verificar si el metaobjeto es un documento.
                var datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                    if (objeto["ObjectId"] === datosObjeto[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                        return objeto;
                    }
                });
                if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();
                    try {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(_this);
                    }
                    catch (e) { }
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                }
                ////////
                //Verificar si el botón es de tipo Toggle.
                if (_this.Toggle) {
                    _this.Toggled = !_this.Toggled;
                    if (_this.Toggled) {
                        _this.TempBorderTopColor = _this.BorderTopColor;
                        _this.TempBorderRightColor = _this.BorderRightColor;
                        _this.TempBorderBottomColor = _this.BorderBottomColor;
                        _this.TempBorderLeftColor = _this.BorderLeftColor;
                        _this.TempBackColor = _this.FromBackColor;
                        _this.TempColor = _this.Color;
                        _this.TempDisabledBackColor = _this.DisabledFromBackColor;
                        _this.SetBorderTopColor('black');
                        _this.SetBorderLeftColor('black');
                        _this.SetBorderRightColor('rgb(235,235,235)');
                        _this.SetBorderBottomColor('rgb(235,235,235)');
                        _this.SetBackColor(_this.FromBackColorOnMouseOver);
                        _this.SetColor(_this.ColorOnMouseOver);
                        _this.SetDisabledBackColor(_this.FromBackColorOnMouseOver);
                    }
                    else {
                        _this.SetBorderTopColor(_this.TempBorderTopColor);
                        _this.SetBorderLeftColor(_this.TempBorderLeftColor);
                        _this.SetBorderRightColor(_this.TempBorderRightColor);
                        _this.SetBorderBottomColor(_this.TempBorderBottomColor);
                        _this.SetBackColor(_this.TempBackColor);
                        _this.SetColor(_this.TempColor);
                        _this.SetDisabledBackColor(_this.TempDisabledBackColor);
                    }
                }
                try {
                    window[_this.Id + "_OnClick"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnClick");
            };
            document.getElementById(this.Id).ondblclick = function () {
                try {
                    window[_this.Id + "_OnDblClick"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnDblClick");
            };
            document.getElementById(this.Id).onfocus = function () {
                try {
                    window[_this.Id + "_OnFocus"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnFocus");
            };
            document.getElementById(this.Id).onmouseover = function () {
                if (_this.Enabled) {
                    document.getElementById(_this.Id).style.color = _this.GetColorOnMouseOver();
                    document.getElementById(_this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + _this.GetFromBackColorOnMouseOver() + "), to(" + _this.GetToBackColorOnMouseOver() + "))";
                }
                try {
                    window[_this.Id + "_OnMouseOver"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseOver");
            };
            document.getElementById(this.Id).onmousemove = function () {
                try {
                    window[_this.Id + "_OnMouseMove"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseMove");
            };
            document.getElementById(this.Id).onmousedown = function () {
                try {
                    window[_this.Id + "_OnMouseDown"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseDown");
            };
            document.getElementById(this.Id).onmouseup = function () {
                try {
                    window[_this.Id + "_OnMouseUp"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseUp");
            };
            document.getElementById(this.Id).onmouseout = function () {
                if (_this.Enabled) {
                    document.getElementById(_this.Id).style.color = _this.GetColor();
                    document.getElementById(_this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + _this.GetFromBackColor() + "), to(" + _this.GetToBackColor() + "))";
                }
                try {
                    window[_this.Id + "_OnMouseOut"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseOut");
            };
            document.getElementById(this.Id).onkeydown = function (evt) {
                try {
                    window[_this.Id + "_OnKeyDown"].call(_this, evt);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnKeyDown");
            };
            document.getElementById(this.Id).onkeypress = function (evt) {
                try {
                    window[_this.Id + "_OnKeyPress"].call(_this, evt);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnKeyPress");
            };
            document.getElementById(this.Id).onkeyup = function (evt) {
                try {
                    window[_this.Id + "_OnKeyUp"].call(_this, evt);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnKeyUp");
            };
            document.getElementById(this.Id).onblur = function () {
                try {
                    window[_this.Id + "_OnBlur"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnBlur");
            };
        }
        Button.prototype.Display = function () {
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                document.getElementById(this.Id).style.removeProperty("display");
            }
            else {
                document.getElementById(this.Id).style.setProperty("display", "none");
            }
        };
        Button.GetIdsStack = function () {
            return Button.idsStack;
        };
        Button.prototype.GetId = function () {
            return this.Id;
        };
        Button.prototype.GetMetaObject = function () {
            return this.MetaObject;
        };
        Button.prototype.RedrawObject = function () {
            if (this.Enabled) {
                this.SetColor(this.GetColor());
                this.SetFromBackColor(this.GetFromBackColor());
                this.SetToBackColor(this.GetToBackColor());
            }
            else {
                this.SetDisabledColor(this.GetDisabledColor());
                this.SetDisabledFromBackColor(this.GetDisabledFromBackColor());
                this.SetDisabledToBackColor(this.GetDisabledToBackColor());
            }
        };
        Button.prototype.SetCrossZ = function (crossZ) {
            this.CrossZ = crossZ;
            var x = this.GetX();
            var y = this.GetY();
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, crossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        Button.prototype.GetCrossZ = function () {
            return this.CrossZ;
        };
        Button.prototype.Raise = function () {
            this.Raised = true;
            document.getElementById(this.Id).style.setProperty("position", "fixed");
        };
        Button.prototype.Unraise = function () {
            this.Raised = false;
            document.getElementById(this.Id).style.setProperty("position", "absolute");
        };
        Button.prototype.GetRaised = function () {
            return this.Raised;
        };
        Button.prototype.SetToggle = function (value) {
            this.Toggle = value;
            this.Toggled = false;
            this.SetBorderTopColor(this.TempBorderTopColor);
            this.SetBorderLeftColor(this.TempBorderLeftColor);
            this.SetBorderRightColor(this.TempBorderRightColor);
            this.SetBorderBottomColor(this.TempBorderBottomColor);
            this.SetBackColor(this.TempBackColor);
            this.SetColor(this.TempColor);
            this.SetDisabledBackColor(this.TempDisabledBackColor);
        };
        Button.prototype.GetToggle = function () {
            return this.Toggle;
        };
        Button.prototype.SetToggled = function (value) {
            if (this.Toggle) {
                if (!this.Toggled) {
                    this.TempBorderTopColor = this.BorderTopColor;
                    this.TempBorderRightColor = this.BorderRightColor;
                    this.TempBorderBottomColor = this.BorderBottomColor;
                    this.TempBorderLeftColor = this.BorderLeftColor;
                    this.TempBackColor = this.FromBackColor;
                    this.TempColor = this.Color;
                    this.TempDisabledBackColor = this.DisabledFromBackColor;
                }
                this.Toggled = value;
                if (this.Toggled) {
                    this.SetBorderTopColor('black');
                    this.SetBorderLeftColor('black');
                    this.SetBorderRightColor('rgb(235,235,235)');
                    this.SetBorderBottomColor('rgb(235,235,235)');
                    this.SetBackColor(this.FromBackColorOnMouseOver);
                    this.SetColor(this.ColorOnMouseOver);
                    this.SetDisabledBackColor(this.FromBackColorOnMouseOver);
                }
                else {
                    this.SetBorderTopColor(this.TempBorderTopColor);
                    this.SetBorderLeftColor(this.TempBorderLeftColor);
                    this.SetBorderRightColor(this.TempBorderRightColor);
                    this.SetBorderBottomColor(this.TempBorderBottomColor);
                    this.SetBackColor(this.TempBackColor);
                    this.SetColor(this.TempColor);
                    this.SetDisabledBackColor(this.TempDisabledBackColor);
                }
            }
        };
        Button.prototype.GetToggled = function () {
            return this.Toggled;
        };
        Button.prototype.SetX = function (x) {
            var X = x;
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolx = String(x);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                x -= Table.GetViewFinderX();
                document.getElementById(this.Id).style.left = String(x) + "px";
            }
            this.Display();
        };
        Button.prototype.GetX = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        };
        Button.prototype.SetY = function (y) {
            var Y = y;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitooly = String(y);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        Button.prototype.GetY = function () {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        };
        Button.prototype.SetZ = function (z) {
            var Z = z;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            this.Display();
        };
        Button.prototype.GetZ = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        };
        Button.prototype.SetXYZ = function (x, y, z) {
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(x, y, z, Width, Height, CrossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        Button.prototype.SetWidth = function (width) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
        };
        Button.prototype.GetWidth = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolwidth);
        };
        Button.prototype.SetHeight = function (height) {
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        };
        Button.prototype.GetHeight = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolheight);
        };
        Button.prototype.SetDimensions = function (width, height) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        };
        Button.prototype.GetInViewFinder = function () {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        };
        Button.prototype.SetCaption = function (caption) {
            this.Caption = caption;
            document.getElementById(this.Id).innerText = caption;
        };
        Button.prototype.GetCaption = function () {
            return this.Caption;
        };
        Button.prototype.SetVisible = function (visible) {
            this.Visible = visible;
            if (visible === true) {
                document.getElementById(this.Id).style.visibility = 'visible';
            }
            else {
                document.getElementById(this.Id).style.visibility = 'hidden';
            }
        };
        Button.prototype.GetVisible = function () {
            return this.Visible;
        };
        Button.prototype.SetColor = function (color) {
            this.Color = color;
            if (this.Enabled) {
                document.getElementById(this.Id).style.color = color;
            }
        };
        Button.prototype.GetColor = function () {
            return this.Color;
        };
        Button.prototype.SetFromBackColor = function (backColor) {
            this.FromBackColor = backColor;
            if (this.Enabled) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.FromBackColor + "), to(" + this.ToBackColor + "))";
            }
        };
        Button.prototype.GetFromBackColor = function () {
            return this.FromBackColor;
        };
        Button.prototype.SetToBackColor = function (backColor) {
            this.ToBackColor = backColor;
            if (this.Enabled) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.FromBackColor + "), to(" + this.ToBackColor + "))";
            }
        };
        Button.prototype.GetToBackColor = function () {
            return this.ToBackColor;
        };
        Button.prototype.SetBackColor = function (value) {
            this.FromBackColor = value;
            this.ToBackColor = value;
            if (this.Enabled) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.FromBackColor + "), to(" + this.ToBackColor + "))";
            }
        };
        Button.prototype.GetBackColor = function () {
            return this.FromBackColor;
        };
        Button.prototype.SetDisabledColor = function (color) {
            this.DisabledColor = color;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.color = color;
            }
        };
        Button.prototype.GetDisabledColor = function () {
            return this.DisabledColor;
        };
        Button.prototype.SetDisabledFromBackColor = function (fromBackColor) {
            this.DisabledFromBackColor = fromBackColor;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.DisabledFromBackColor + "), to(" + this.DisabledToBackColor + "))";
            }
        };
        Button.prototype.GetDisabledFromBackColor = function () {
            return this.DisabledFromBackColor;
        };
        Button.prototype.SetDisabledToBackColor = function (toBackColor) {
            this.DisabledToBackColor = toBackColor;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.DisabledFromBackColor + "), to(" + this.DisabledToBackColor + "))";
            }
        };
        Button.prototype.GetDisabledToBackColor = function () {
            return this.DisabledToBackColor;
        };
        Button.prototype.SetDisabledBackColor = function (value) {
            this.DisabledFromBackColor = value;
            this.DisabledToBackColor = value;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.DisabledFromBackColor + "), to(" + this.DisabledToBackColor + "))";
            }
        };
        Button.prototype.GetDisabledBackColor = function () {
            return this.DisabledFromBackColor;
        };
        Button.prototype.SetColorOnMouseOver = function (color) {
            this.ColorOnMouseOver = color;
        };
        Button.prototype.GetColorOnMouseOver = function () {
            return this.ColorOnMouseOver;
        };
        Button.prototype.SetFromBackColorOnMouseOver = function (color) {
            this.FromBackColorOnMouseOver = color;
        };
        Button.prototype.GetFromBackColorOnMouseOver = function () {
            return this.FromBackColorOnMouseOver;
        };
        Button.prototype.SetToBackColorOnMouseOver = function (color) {
            this.ToBackColorOnMouseOver = color;
        };
        Button.prototype.GetToBackColorOnMouseOver = function () {
            return this.ToBackColorOnMouseOver;
        };
        Button.prototype.SetBackColorOnMouseOver = function (value) {
            this.FromBackColorOnMouseOver = value;
            this.ToBackColorOnMouseOver = value;
        };
        Button.prototype.GetBackColorOnMouseOver = function () {
            return this.FromBackColorOnMouseOver;
        };
        Button.prototype.SetBorderTopColor = function (color) {
            this.BorderTopColor = color;
            document.getElementById(this.Id).style.borderTopColor = this.BorderTopColor;
        };
        Button.prototype.GetBorderTopColor = function () {
            return this.BorderTopColor;
        };
        Button.prototype.SetBorderRightColor = function (color) {
            this.BorderRightColor = color;
            document.getElementById(this.Id).style.borderRightColor = this.BorderRightColor;
        };
        Button.prototype.GetBorderRightColor = function () {
            return this.BorderRightColor;
        };
        Button.prototype.SetBorderBottomColor = function (color) {
            this.BorderBottomColor = color;
            document.getElementById(this.Id).style.borderBottomColor = this.BorderBottomColor;
        };
        Button.prototype.GetBorderBottomColor = function () {
            return this.BorderBottomColor;
        };
        Button.prototype.SetBorderLeftColor = function (color) {
            this.BorderLeftColor = color;
            document.getElementById(this.Id).style.borderLeftColor = this.BorderLeftColor;
        };
        Button.prototype.GetBorderLeftColor = function () {
            return this.BorderLeftColor;
        };
        Button.prototype.SetBorderColor = function (color) {
            this.SetBorderTopColor(color);
            this.SetBorderRightColor(color);
            this.SetBorderBottomColor(color);
            this.SetBorderLeftColor(color);
        };
        Button.prototype.SetTopLeftRadius = function (radius) {
            this.TopLeftRadius = radius;
            document.getElementById(this.Id).style.borderTopLeftRadius = this.TopLeftRadius + "px";
        };
        Button.prototype.GetTopLeftRadius = function () {
            return this.TopLeftRadius;
        };
        Button.prototype.SetTopRightRadius = function (radius) {
            this.TopRightRadius = radius;
            document.getElementById(this.Id).style.borderTopRightRadius = this.TopRightRadius + "px";
        };
        Button.prototype.GetTopRightRadius = function () {
            return this.TopRightRadius;
        };
        Button.prototype.SetBottomLeftRadius = function (radius) {
            this.BottomLeftRadius = radius;
            document.getElementById(this.Id).style.borderBottomLeftRadius = this.BottomLeftRadius + "px";
        };
        Button.prototype.GetBottomLeftRadius = function () {
            return this.BottomLeftRadius;
        };
        Button.prototype.SetBottomRightRadius = function (radius) {
            this.BottomRightRadius = radius;
            document.getElementById(this.Id).style.borderBottomRightRadius = this.BottomRightRadius + "px";
        };
        Button.prototype.GetBottomRightRadius = function () {
            return this.BottomRightRadius;
        };
        Button.prototype.SetRadius = function (radius) {
            this.SetTopLeftRadius(radius);
            this.SetTopRightRadius(radius);
            this.SetBottomLeftRadius(radius);
            this.SetBottomRightRadius(radius);
        };
        Button.prototype.SetTopBorderWidth = function (width) {
            this.TopBorderWidth = width;
            document.getElementById(this.Id).style.borderTopWidth = width + "px";
        };
        Button.prototype.GetTopBorderWidth = function () {
            return this.TopBorderWidth;
        };
        Button.prototype.SetRightBorderWidth = function (width) {
            this.RightBorderWidth = width;
            document.getElementById(this.Id).style.borderRightWidth = width + "px";
        };
        Button.prototype.GetRightBorderWidth = function () {
            return this.RightBorderWidth;
        };
        Button.prototype.SetBottomBorderWidth = function (width) {
            this.BottomBorderWidth = width;
            document.getElementById(this.Id).style.borderBottomWidth = width + "px";
        };
        Button.prototype.GetBottomBorderWidth = function () {
            return this.BottomBorderWidth;
        };
        Button.prototype.SetLeftBorderWidth = function (width) {
            this.LeftBorderWidth = width;
            document.getElementById(this.Id).style.borderLeftWidth = width + "px";
        };
        Button.prototype.GetLeftBorderWidth = function () {
            return this.LeftBorderWidth;
        };
        Button.prototype.SetBorderWidth = function (width) {
            this.SetTopBorderWidth(width);
            this.SetRightBorderWidth(width);
            this.SetBottomBorderWidth(width);
            this.SetLeftBorderWidth(width);
        };
        Button.prototype.GetBorderWidth = function () {
            if (this.GetTopBorderWidth() == this.GetRightBorderWidth() && this.GetTopBorderWidth() == this.GetBottomBorderWidth() && this.GetTopBorderWidth() == this.GetLeftBorderWidth()) {
                return this.TopBorderWidth;
            }
            else {
                return false;
            }
        };
        Button.prototype.SetTabIndex = function (tabIndex) {
            this.TabIndex = tabIndex;
            document.getElementById(this.Id).tabIndex = tabIndex;
        };
        Button.prototype.GetTabIndex = function () {
            return this.TabIndex;
        };
        Button.prototype.RestoreTabIndex = function () {
            this.SetTabIndex(0);
        };
        Button.prototype.SetZIndex = function (zIndex) {
            this.ZIndex = zIndex;
            document.getElementById(this.Id).style.zIndex = zIndex;
        };
        Button.prototype.GetZIndex = function () {
            return this.ZIndex;
        };
        Button.prototype.RestoreZIndex = function () {
            this.SetZIndex("auto");
        };
        Button.prototype.SetName = function (name) {
            this.Name = name;
            document.getElementById(this.Id).setAttribute("name", name);
        };
        Button.prototype.GetName = function () {
            return this.Name;
        };
        Button.prototype.SetEnabled = function (enabled) {
            this.Enabled = enabled;
            if (enabled) {
                document.getElementById(this.Id).removeAttribute("disabled");
            }
            else {
                document.getElementById(this.Id).setAttribute("disabled", "disabled");
            }
            this.RedrawObject();
        };
        Button.prototype.GetEnabled = function () {
            return this.Enabled;
        };
        Button.prototype.SetAccessKey = function (accesskey) {
            var expresionRegular = new RegExp("^([a-zA-Z]){1}$");
            var caracter = "";
            if (expresionRegular.test(accesskey)) {
                this.AccessKey = accesskey;
                document.getElementById(this.Id).accessKey = accesskey;
                if (this.Caption.indexOf(accesskey.toUpperCase()) >= 0 && this.Caption.indexOf(accesskey.toLowerCase()) >= 0) {
                    if (this.Caption.indexOf(accesskey.toUpperCase()) < this.Caption.indexOf(accesskey.toLowerCase())) {
                        caracter = accesskey.toUpperCase();
                    }
                    else {
                        caracter = accesskey.toLowerCase();
                    }
                }
                else {
                    if (this.Caption.indexOf(accesskey.toUpperCase()) >= 0) {
                        caracter = accesskey.toUpperCase();
                    }
                    if (this.Caption.indexOf(accesskey.toLowerCase()) >= 0) {
                        caracter = accesskey.toLowerCase();
                    }
                }
                if (caracter != "") {
                    document.getElementById(this.Id).innerHTML = this.GetCaption().replace(caracter, "<span style='text-decoration: underline;'>" + caracter + "</span>");
                }
            }
        };
        Button.prototype.GetAccessKey = function () {
            return this.AccessKey;
        };
        Button.prototype.RestoreAccessKey = function () {
            this.AccessKey = null;
            document.getElementById(this.Id).removeAttribute("accessKey");
            this.SetCaption(this.GetCaption()); //Quitar caracter accessKey subrayado del Caption del botón (SetCaption fija el caption con innerText en lugar de innerHTML del método SetAccessKey, donde se subraya el caracter accessKey).
        };
        Button.prototype.SetFontSize = function (fontSize) {
            this.FontSize = fontSize;
            document.getElementById(this.Id).style.fontSize = String(fontSize) + "px";
        };
        Button.prototype.GetFontSize = function () {
            return this.FontSize;
        };
        Button.prototype.SetFontFamily = function (fontFamily) {
            this.FontFamily = fontFamily;
            document.getElementById(this.Id).style.fontFamily = fontFamily;
        };
        Button.prototype.GetFontFamily = function () {
            return this.FontFamily;
        };
        Button.prototype.SetFocus = function () {
            document.getElementById(this.Id).focus();
        };
        Button.prototype.Talk = function (message, metaMessage) {
            if (metaMessage === void 0) { metaMessage = ""; }
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (var i = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    }
                    catch (e) { }
                }
            }
            for (var _i = 0, _a = MetaObject.GetIdsStack(); _i < _a.length; _i++) {
                var idMetaobjeto = _a[_i];
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                }
                catch (e) { }
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
        };
        Button.NumberOfUnnamedObjects = 0;
        Button.idsStack = [];
        return Button;
    }());
    sci.Button = Button;
    var Image = /** @class */ (function () {
        function Image(metaObject, x, y, z, width, height, imageFile, caption, id) {
            var _this = this;
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (imageFile === void 0) { imageFile = ""; }
            if (caption === void 0) { caption = ""; }
            this.Id = id;
            Image.idsStack.push(this.Id);
            this.MetaObject = metaObject;
            MetaObject_private.AddDataObject(this.MetaObject, this.Id, ObjectType.Image);
            this.CrossZ = false;
            this.ImageFile = imageFile;
            this.Caption = caption;
            this.Visible = true;
            this.Color = Skin.GetImageColor();
            this.BackColor = Skin.GetImageBackColor();
            this.TabIndex = 0;
            if (scitool.GetParentDocumentId(this.Id) !== false) {
                this.ZIndex = String(Number(window[scitool.GetParentDocumentId(this.Id)].GetZIndex()) + scitool.GetMetaObjectObjectsNumber(scitool.GetParentDocumentId(this.Id)));
            }
            else {
                this.ZIndex = "auto";
            }
            this.Enabled = true;
            this.Link = false;
            this.LinkTo = null;
            this.Raised = false;
            //Crear nodo.
            var nodoNuevo = document.createElement("IMG");
            nodoNuevo.setAttribute("id", this.Id);
            nodoNuevo.dataset.scitoolx = String(x);
            nodoNuevo.dataset.scitooly = String(y);
            nodoNuevo.dataset.scitoolz = String(z);
            nodoNuevo.dataset.scitoolwidth = String(width);
            nodoNuevo.dataset.scitoolheight = String(height);
            nodoNuevo.setAttribute("width", String(width) + "px");
            nodoNuevo.setAttribute("height", String(height) + "px");
            nodoNuevo.style.setProperty("position", "absolute");
            nodoNuevo.style.setProperty("display", "none");
            nodoNuevo.setAttribute("alt", this.Caption);
            nodoNuevo.style.outline = "0";
            document.body.appendChild(nodoNuevo);
            //Implementar en el DOM las otras propiedades en el nodo.
            this.SetX(this.GetX());
            this.SetY(this.GetY());
            this.SetZ(this.GetZ());
            this.SetVisible(this.GetVisible());
            this.SetColor(this.GetColor());
            this.SetBackColor(this.GetBackColor());
            this.SetTabIndex(this.GetTabIndex());
            this.SetZIndex(this.GetZIndex());
            this.SetCrossZ(this.GetCrossZ());
            this.SetImageFile(this.GetImageFile());
            document.getElementById(this.Id).onclick = function () {
                if (_this.Enabled) {
                    ////////Activar eventual documento padre de este objeto.
                    //Buscar metaobjeto de este objeto.
                    var datosObjeto_2 = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                        if (objeto["ObjectId"] === _this.Id) {
                            return objeto;
                        }
                    });
                    //Verificar si el metaobjeto es un documento.
                    var datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                        if (objeto["ObjectId"] === datosObjeto_2[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                            return objeto;
                        }
                    });
                    if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();
                        try {
                            window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(_this);
                        }
                        catch (e) { }
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                    }
                    ////////
                    try {
                        window[_this.Id + "_OnClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnClick");
                    if (_this.LinkTo !== null) {
                        location.href = _this.LinkTo;
                    }
                }
            };
            document.getElementById(this.Id).ondblclick = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnDblClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnDblClick");
                }
            };
            document.getElementById(this.Id).onfocus = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnFocus"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnFocus");
                }
            };
            document.getElementById(this.Id).onmouseover = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseOver"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseOver");
                }
            };
            document.getElementById(this.Id).onmousemove = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseMove"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseMove");
                }
            };
            document.getElementById(this.Id).onmousedown = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseDown"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseDown");
                }
            };
            document.getElementById(this.Id).onmouseup = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseUp"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseUp");
                }
            };
            document.getElementById(this.Id).onmouseout = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseOut"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseOut");
                }
            };
            document.getElementById(this.Id).onkeydown = function (evt) {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnKeyDown"].call(_this, evt);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnKeyDown");
                }
            };
            document.getElementById(this.Id).onkeypress = function (evt) {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnKeyPress"].call(_this, evt);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnKeyPress");
                }
            };
            document.getElementById(this.Id).onkeyup = function (evt) {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnKeyUp"].call(_this, evt);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnKeyUp");
                }
            };
            document.getElementById(this.Id).onblur = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnBlur"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnBlur");
                }
            };
        }
        Image.prototype.Display = function () {
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                document.getElementById(this.Id).style.removeProperty("display");
            }
            else {
                document.getElementById(this.Id).style.setProperty("display", "none");
            }
        };
        Image.GetIdsStack = function () {
            return Image.idsStack;
        };
        Image.prototype.GetId = function () {
            return this.Id;
        };
        Image.prototype.GetMetaObject = function () {
            return this.MetaObject;
        };
        Image.prototype.RedrawObject = function () {
            this.SetColor(this.GetColor());
            this.SetBackColor(this.GetBackColor());
            if (this.Link) {
                if (this.Enabled) {
                    document.getElementById(this.Id).style.cursor = "pointer";
                    document.getElementById(this.Id).style.filter = "grayscale(0%)";
                }
                else {
                    document.getElementById(this.Id).style.cursor = "default";
                    document.getElementById(this.Id).style.filter = "grayscale(100%)";
                }
            }
            else {
                document.getElementById(this.Id).style.cursor = "default";
                document.getElementById(this.Id).style.filter = "grayscale(0%)";
            }
        };
        Image.prototype.SetCrossZ = function (crossZ) {
            this.CrossZ = crossZ;
            var x = this.GetX();
            var y = this.GetY();
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, crossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        Image.prototype.GetCrossZ = function () {
            return this.CrossZ;
        };
        Image.prototype.Raise = function () {
            this.Raised = true;
            document.getElementById(this.Id).style.setProperty("position", "fixed");
        };
        Image.prototype.Unraise = function () {
            this.Raised = false;
            document.getElementById(this.Id).style.setProperty("position", "absolute");
        };
        Image.prototype.GetRaised = function () {
            return this.Raised;
        };
        Image.prototype.SetX = function (x) {
            var X = x;
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolx = String(x);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                x -= Table.GetViewFinderX();
                document.getElementById(this.Id).style.left = String(x) + "px";
            }
            this.Display();
        };
        Image.prototype.GetX = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        };
        Image.prototype.SetY = function (y) {
            var Y = y;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitooly = String(y);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        Image.prototype.GetY = function () {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        };
        Image.prototype.SetZ = function (z) {
            var Z = z;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            this.Display();
        };
        Image.prototype.GetZ = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        };
        Image.prototype.SetXYZ = function (x, y, z) {
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(x, y, z, Width, Height, CrossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        Image.prototype.SetWidth = function (width) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
        };
        Image.prototype.GetWidth = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolwidth);
        };
        Image.prototype.SetHeight = function (height) {
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        };
        Image.prototype.GetHeight = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolheight);
        };
        Image.prototype.SetDimensions = function (width, height) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        };
        Image.prototype.GetInViewFinder = function () {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        };
        Image.prototype.SetImageFile = function (imageFile) {
            this.ImageFile = imageFile;
            document.getElementById(this.Id).setAttribute("src", imageFile);
        };
        Image.prototype.GetImageFile = function () {
            return this.ImageFile;
        };
        Image.prototype.SetCaption = function (caption) {
            this.Caption = caption;
            document.getElementById(this.Id).setAttribute("alt", caption);
        };
        Image.prototype.GetCaption = function () {
            return this.Caption;
        };
        Image.prototype.SetVisible = function (visible) {
            this.Visible = visible;
            if (visible === true) {
                document.getElementById(this.Id).style.visibility = 'visible';
            }
            else {
                document.getElementById(this.Id).style.visibility = 'hidden';
            }
        };
        Image.prototype.GetVisible = function () {
            return this.Visible;
        };
        Image.prototype.SetColor = function (color) {
            this.Color = color;
            document.getElementById(this.Id).style.color = color;
        };
        Image.prototype.GetColor = function () {
            return this.Color;
        };
        Image.prototype.SetBackColor = function (backColor) {
            this.BackColor = backColor;
            document.getElementById(this.Id).style.backgroundColor = backColor;
        };
        Image.prototype.GetBackColor = function () {
            return this.BackColor;
        };
        Image.prototype.SetTabIndex = function (tabIndex) {
            this.TabIndex = tabIndex;
            document.getElementById(this.Id).tabIndex = tabIndex;
        };
        Image.prototype.GetTabIndex = function () {
            return this.TabIndex;
        };
        Image.prototype.RestoreTabIndex = function () {
            this.SetTabIndex(0);
        };
        Image.prototype.SetZIndex = function (zIndex) {
            this.ZIndex = zIndex;
            document.getElementById(this.Id).style.zIndex = zIndex;
        };
        Image.prototype.GetZIndex = function () {
            return this.ZIndex;
        };
        Image.prototype.RestoreZIndex = function () {
            this.SetZIndex("auto");
        };
        Image.prototype.SetEnabled = function (enabled) {
            this.Enabled = enabled;
            if (this.Link) {
                if (enabled) {
                    document.getElementById(this.Id).removeAttribute("disabled");
                }
                else {
                    document.getElementById(this.Id).setAttribute("disabled", "disabled");
                }
            }
            this.RedrawObject();
        };
        Image.prototype.GetEnabled = function () {
            return this.Enabled;
        };
        Image.prototype.SetLink = function (valor) {
            this.Link = valor;
            if (!valor) {
                this.LinkTo = null;
            }
            this.RedrawObject();
        };
        Image.prototype.GetLink = function () {
            return this.Link;
        };
        Image.prototype.SetLinkTo = function (destination) {
            this.LinkTo = destination;
            this.Link = true;
            this.RedrawObject();
        };
        Image.prototype.GetLinkTo = function () {
            return this.LinkTo;
        };
        Image.prototype.RestoreLinkTo = function () {
            this.LinkTo = null;
            document.getElementById(this.Id).style.cursor = "default";
            this.RedrawObject();
        };
        Image.prototype.SetFocus = function () {
            document.getElementById(this.Id).focus();
        };
        Image.prototype.Talk = function (message, metaMessage) {
            if (metaMessage === void 0) { metaMessage = ""; }
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (var i = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    }
                    catch (e) { }
                }
            }
            for (var _i = 0, _a = MetaObject.GetIdsStack(); _i < _a.length; _i++) {
                var idMetaobjeto = _a[_i];
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                }
                catch (e) { }
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
        };
        Image.NumberOfUnnamedObjects = 0;
        Image.idsStack = [];
        return Image;
    }());
    sci.Image = Image;
    var Video = /** @class */ (function () {
        function Video(metaObject, x, y, z, width, height, videoFile, autoPlay, id) {
            var _this = this;
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (videoFile === void 0) { videoFile = ""; }
            if (autoPlay === void 0) { autoPlay = false; }
            this.Id = id;
            Video.idsStack.push(this.Id);
            this.MetaObject = metaObject;
            MetaObject_private.AddDataObject(this.MetaObject, this.Id, ObjectType.Video);
            this.CrossZ = false;
            this.VideoFile = videoFile;
            this.Visible = true;
            this.TabIndex = 0;
            if (scitool.GetParentDocumentId(this.Id) !== false) {
                this.ZIndex = String(Number(window[scitool.GetParentDocumentId(this.Id)].GetZIndex()) + scitool.GetMetaObjectObjectsNumber(scitool.GetParentDocumentId(this.Id)));
            }
            else {
                this.ZIndex = "auto";
            }
            this.Enabled = true;
            this.Link = false;
            this.LinkTo = null;
            this.Controls = false;
            this.Loop = false;
            this.Muted = false;
            //Crear nodo.
            var nodoNuevo = document.createElement("VIDEO");
            nodoNuevo.setAttribute("id", this.Id);
            if (autoPlay)
                nodoNuevo.setAttribute("autoplay", "autoplay");
            nodoNuevo.dataset.scitoolx = String(x);
            nodoNuevo.dataset.scitooly = String(y);
            nodoNuevo.dataset.scitoolz = String(z);
            nodoNuevo.dataset.scitoolwidth = String(width);
            nodoNuevo.dataset.scitoolheight = String(height);
            nodoNuevo.setAttribute("width", String(width) + "px");
            nodoNuevo.setAttribute("height", String(height) + "px");
            nodoNuevo.style.setProperty("position", "absolute");
            nodoNuevo.style.setProperty("display", "none");
            nodoNuevo.style.outline = "0";
            document.body.appendChild(nodoNuevo);
            //Implementar en el DOM las otras propiedades en el nodo.
            this.SetX(this.GetX());
            this.SetY(this.GetY());
            this.SetZ(this.GetZ());
            this.SetVisible(this.GetVisible());
            this.SetTabIndex(this.GetTabIndex());
            this.SetZIndex(this.GetZIndex());
            this.SetCrossZ(this.GetCrossZ());
            this.SetVideoFile(this.GetVideoFile());
            document.getElementById(this.Id).onclick = function () {
                if (_this.Enabled) {
                    ////////Activar eventual documento padre de este objeto.
                    //Buscar metaobjeto de este objeto.
                    var datosObjeto_3 = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                        if (objeto["ObjectId"] === _this.Id) {
                            return objeto;
                        }
                    });
                    //Verificar si el metaobjeto es un documento.
                    var datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                        if (objeto["ObjectId"] === datosObjeto_3[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                            return objeto;
                        }
                    });
                    if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();
                        try {
                            window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(_this);
                        }
                        catch (e) { }
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                    }
                    ////////
                    try {
                        window[_this.Id + "_OnClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnClick");
                    if (_this.LinkTo !== null) {
                        location.href = _this.LinkTo;
                    }
                }
            };
            document.getElementById(this.Id).ondblclick = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnDblClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnDblClick");
                }
            };
            document.getElementById(this.Id).onfocus = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnFocus"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnFocus");
                }
            };
            document.getElementById(this.Id).onmouseover = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseOver"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseOver");
                }
            };
            document.getElementById(this.Id).onmousemove = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseMove"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseMove");
                }
            };
            document.getElementById(this.Id).onmousedown = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseDown"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseDown");
                }
            };
            document.getElementById(this.Id).onmouseup = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseUp"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseUp");
                }
            };
            document.getElementById(this.Id).onmouseout = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseOut"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseOut");
                }
            };
            document.getElementById(this.Id).onkeydown = function (evt) {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnKeyDown"].call(_this, evt);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnKeyDown");
                }
            };
            document.getElementById(this.Id).onkeypress = function (evt) {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnKeyPress"].call(_this, evt);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnKeyPress");
                }
            };
            document.getElementById(this.Id).onkeyup = function (evt) {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnKeyUp"].call(_this, evt);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnKeyUp");
                }
            };
            document.getElementById(this.Id).onblur = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnBlur"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnBlur");
                }
            };
        }
        Video.prototype.Display = function () {
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                document.getElementById(this.Id).style.removeProperty("display");
            }
            else {
                document.getElementById(this.Id).style.setProperty("display", "none");
            }
        };
        Video.GetIdsStack = function () {
            return Video.idsStack;
        };
        Video.prototype.GetId = function () {
            return this.Id;
        };
        Video.prototype.GetMetaObject = function () {
            return this.MetaObject;
        };
        Video.prototype.RedrawObject = function () {
            if (this.Link) {
                if (this.Enabled) {
                    document.getElementById(this.Id).style.cursor = "pointer";
                    document.getElementById(this.Id).style.filter = "grayscale(0%)";
                }
                else {
                    document.getElementById(this.Id).style.cursor = "default";
                    document.getElementById(this.Id).style.filter = "grayscale(100%)";
                }
            }
            else {
                document.getElementById(this.Id).style.cursor = "default";
                document.getElementById(this.Id).style.filter = "grayscale(0%)";
            }
        };
        Video.prototype.Play = function () {
            document.getElementById(this.Id).play();
        };
        Video.prototype.Pause = function () {
            document.getElementById(this.Id).pause();
        };
        Video.prototype.Skip = function (value) {
            document.getElementById(this.Id).currentTime += value;
        };
        Video.prototype.Restart = function () {
            document.getElementById(this.Id).currentTime = 0;
        };
        Video.prototype.SetMuted = function (value) {
            this.Muted = value;
            if (value) {
                document.getElementById(this.Id).setAttribute("muted", "muted");
            }
            else {
                document.getElementById(this.Id).removeAttribute("muted");
            }
        };
        Video.prototype.SetLoop = function (value) {
            this.Loop = value;
            var nodo = document.getElementById(this.Id);
            if (value) {
                nodo.setAttribute("loop", "loop");
            }
            else {
                nodo.removeAttribute("loop");
            }
        };
        Video.prototype.GetLoop = function () {
            return this.Loop;
        };
        Video.prototype.SetControls = function (value) {
            this.Controls = value;
            var nodo = document.getElementById(this.Id);
            if (value) {
                nodo.setAttribute("Controls", "Controls");
            }
            else {
                nodo.removeAttribute("Controls");
            }
        };
        Video.prototype.GetControls = function () {
            return this.Controls;
        };
        Video.prototype.SetCrossZ = function (crossZ) {
            this.CrossZ = crossZ;
            var x = this.GetX();
            var y = this.GetY();
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, crossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        Video.prototype.GetCrossZ = function () {
            return this.CrossZ;
        };
        Video.prototype.SetX = function (x) {
            var X = x;
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolx = String(x);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                x -= Table.GetViewFinderX();
                document.getElementById(this.Id).style.left = String(x) + "px";
            }
            this.Display();
        };
        Video.prototype.GetX = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        };
        Video.prototype.SetY = function (y) {
            var Y = y;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitooly = String(y);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        Video.prototype.GetY = function () {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        };
        Video.prototype.SetZ = function (z) {
            var Z = z;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            this.Display();
        };
        Video.prototype.GetZ = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        };
        Video.prototype.SetXYZ = function (x, y, z) {
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(x, y, z, Width, Height, CrossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        Video.prototype.SetWidth = function (width) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
        };
        Video.prototype.GetWidth = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolwidth);
        };
        Video.prototype.SetHeight = function (height) {
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        };
        Video.prototype.GetHeight = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolheight);
        };
        Video.prototype.SetDimensions = function (width, height) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        };
        Video.prototype.GetInViewFinder = function () {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        };
        Video.prototype.SetVideoFile = function (videoFile) {
            this.VideoFile = videoFile;
            document.getElementById(this.Id).setAttribute("src", videoFile);
        };
        Video.prototype.GetVideoFile = function () {
            return this.VideoFile;
        };
        Video.prototype.SetVisible = function (visible) {
            this.Visible = visible;
            if (visible === true) {
                document.getElementById(this.Id).style.visibility = 'visible';
            }
            else {
                document.getElementById(this.Id).style.visibility = 'hidden';
            }
        };
        Video.prototype.GetVisible = function () {
            return this.Visible;
        };
        Video.prototype.SetTabIndex = function (tabIndex) {
            this.TabIndex = tabIndex;
            document.getElementById(this.Id).tabIndex = tabIndex;
        };
        Video.prototype.GetTabIndex = function () {
            return this.TabIndex;
        };
        Video.prototype.RestoreTabIndex = function () {
            this.SetTabIndex(0);
        };
        Video.prototype.SetZIndex = function (zIndex) {
            this.ZIndex = zIndex;
            document.getElementById(this.Id).style.zIndex = zIndex;
        };
        Video.prototype.GetZIndex = function () {
            return this.ZIndex;
        };
        Video.prototype.RestoreZIndex = function () {
            this.SetZIndex("auto");
        };
        Video.prototype.SetEnabled = function (enabled) {
            this.Enabled = enabled;
            if (this.Link) {
                if (enabled) {
                    document.getElementById(this.Id).removeAttribute("disabled");
                }
                else {
                    document.getElementById(this.Id).setAttribute("disabled", "disabled");
                }
            }
            this.RedrawObject();
        };
        Video.prototype.GetEnabled = function () {
            return this.Enabled;
        };
        Video.prototype.SetLink = function (valor) {
            this.Link = valor;
            if (!valor) {
                this.LinkTo = null;
            }
            this.RedrawObject();
        };
        Video.prototype.GetLink = function () {
            return this.Link;
        };
        Video.prototype.SetLinkTo = function (destination) {
            this.LinkTo = destination;
            this.Link = true;
            this.RedrawObject();
        };
        Video.prototype.GetLinkTo = function () {
            return this.LinkTo;
        };
        Video.prototype.RestoreLinkTo = function () {
            this.LinkTo = null;
            document.getElementById(this.Id).style.cursor = "default";
            this.RedrawObject();
        };
        Video.prototype.SetFocus = function () {
            document.getElementById(this.Id).focus();
        };
        Video.prototype.Talk = function (message, metaMessage) {
            if (metaMessage === void 0) { metaMessage = ""; }
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (var i = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    }
                    catch (e) { }
                }
            }
            for (var _i = 0, _a = MetaObject.GetIdsStack(); _i < _a.length; _i++) {
                var idMetaobjeto = _a[_i];
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                }
                catch (e) { }
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
        };
        Video.NumberOfUnnamedObjects = 0;
        Video.idsStack = [];
        return Video;
    }());
    sci.Video = Video;
    var CheckBox = /** @class */ (function () {
        function CheckBox(metaObject, x, y, z, caption, id) {
            var _this = this;
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (caption === void 0) { caption = ""; }
            this.Id = id;
            var labelId;
            labelId = 'lblChk' + id;
            CheckBox.idsStack.push(this.Id);
            CheckBox.labelIdsStack.push(labelId);
            this.MetaObject = metaObject;
            MetaObject_private.AddDataObject(this.MetaObject, this.Id, ObjectType.CheckBox);
            MetaObject_private.AddDataObject(this.MetaObject, labelId, ObjectType.AssociatedControl); //Label asociado al checkbox.
            this.Name = this.Id;
            this.CrossZ = false;
            if (caption.replace(/ /g, "") == "") {
                this.Caption = this.Id;
            }
            else {
                this.Caption = caption;
            }
            this.Visible = true;
            this.Color = Skin.GetCheckBoxColor();
            this.BackColor = Skin.GetCheckBoxBackColor();
            this.DisabledColor = Skin.GetCheckBoxDisabledColor();
            this.TabIndex = 0;
            if (scitool.GetParentDocumentId(this.Id) !== false) {
                this.ZIndex = String(Number(window[scitool.GetParentDocumentId(this.Id)].GetZIndex()) + scitool.GetMetaObjectObjectsNumber(scitool.GetParentDocumentId(this.Id)));
            }
            else {
                this.ZIndex = "auto";
            }
            this.AccessKey = null;
            this.Enabled = true;
            //Crear nodo.
            var nodoNuevo = document.createElement("INPUT");
            nodoNuevo.setAttribute("type", "checkbox");
            nodoNuevo.setAttribute("id", this.Id);
            nodoNuevo.setAttribute("name", this.Name);
            nodoNuevo.dataset.scitoolx = String(x);
            nodoNuevo.dataset.scitooly = String(y);
            nodoNuevo.dataset.scitoolz = String(z);
            nodoNuevo.dataset.scitoolwidth = String(CheckBox.squareCheckBoxWidth);
            nodoNuevo.dataset.scitoolheight = String(CheckBox.squareCheckBoxHeight);
            nodoNuevo.style.width = String(CheckBox.squareCheckBoxWidth) + "px";
            nodoNuevo.style.height = String(CheckBox.squareCheckBoxHeight) + "px";
            nodoNuevo.style.padding = "0";
            nodoNuevo.style.margin = "0";
            nodoNuevo.style.setProperty("position", "absolute");
            nodoNuevo.style.setProperty("display", "none");
            nodoNuevo.setAttribute("value", this.Id);
            document.body.appendChild(nodoNuevo);
            //Crear nodo label asociado.
            var nodoAsociado = document.createElement("LABEL");
            nodoAsociado.setAttribute("id", labelId);
            nodoAsociado.dataset.scitoolx = String(x + CheckBox.squareCheckBoxWidth);
            nodoAsociado.dataset.scitooly = String(y);
            nodoAsociado.dataset.scitoolz = String(z);
            nodoAsociado.dataset.scitoolwidth = String(Skin.GetCheckBoxWidth() - CheckBox.squareCheckBoxWidth);
            nodoAsociado.dataset.scitoolheight = String(Skin.GetCheckBoxHeight());
            nodoAsociado.style.width = String(Skin.GetCheckBoxWidth() - CheckBox.squareCheckBoxWidth) + "px";
            nodoAsociado.style.height = String(Skin.GetCheckBoxHeight()) + "px";
            nodoAsociado.style.padding = "0";
            nodoAsociado.style.margin = "0";
            nodoAsociado.style.fontSize = String(Skin.GetCheckBoxFontSize()) + "px";
            nodoAsociado.style.setProperty("position", "absolute");
            nodoAsociado.style.setProperty("display", "none");
            nodoAsociado.innerText = this.Caption;
            nodoAsociado.setAttribute("for", this.Id);
            document.body.appendChild(nodoAsociado);
            //Implementar en el DOM las otras propiedades en el nodo.
            this.SetX(this.GetX());
            this.SetY(this.GetY());
            this.SetZ(this.GetZ());
            this.SetVisible(this.GetVisible());
            this.SetColor(this.GetColor());
            this.SetBackColor(this.GetBackColor());
            this.SetTabIndex(this.GetTabIndex());
            this.SetZIndex(this.GetZIndex());
            this.SetCrossZ(this.GetCrossZ());
            this.SetFontFamily(Skin.GetCheckBoxFontFamily());
            document.getElementById(this.Id).onclick = function () {
                ////////Activar eventual documento padre de este objeto.
                //Buscar metaobjeto de este objeto.
                var datosObjeto = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                    if (objeto["ObjectId"] === _this.Id) {
                        return objeto;
                    }
                });
                //Verificar si el metaobjeto es un documento.
                var datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                    if (objeto["ObjectId"] === datosObjeto[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                        return objeto;
                    }
                });
                if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();
                    try {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(_this);
                    }
                    catch (e) { }
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                }
                ////////
                try {
                    window[_this.Id + "_OnClick"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnClick");
            };
            document.getElementById(this.Id).ondblclick = function () {
                try {
                    window[_this.Id + "_OnDblClick"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnDblClick");
            };
            document.getElementById(labelId).ondblclick = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnDblClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnDblClick");
                }
            };
            document.getElementById(this.Id).onchange = function () {
                try {
                    window[_this.Id + "_OnChange"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnChange");
            };
            document.getElementById(this.Id).onfocus = function () {
                try {
                    window[_this.Id + "_OnFocus"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnFocus");
            };
            document.getElementById(this.Id).onmouseover = function () {
                try {
                    window[_this.Id + "_OnMouseOver"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseOver");
            };
            document.getElementById(labelId).onmouseover = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseOver"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseOver");
                }
            };
            document.getElementById(this.Id).onmousemove = function () {
                try {
                    window[_this.Id + "_OnMouseMove"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseMove");
            };
            document.getElementById(labelId).onmousemove = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseMove"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseMove");
                }
            };
            document.getElementById(this.Id).onmousedown = function () {
                try {
                    window[_this.Id + "_OnMouseDown"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseDown");
            };
            document.getElementById(labelId).onmousedown = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseDown"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseDown");
                }
            };
            document.getElementById(this.Id).onmouseup = function () {
                try {
                    window[_this.Id + "_OnMouseUp"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseUp");
            };
            document.getElementById(labelId).onmouseup = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseUp"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseUp");
                }
            };
            document.getElementById(this.Id).onmouseout = function () {
                try {
                    window[_this.Id + "_OnMouseOut"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseOut");
            };
            document.getElementById(labelId).onmouseout = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseOut"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseOut");
                }
            };
            document.getElementById(this.Id).onkeydown = function (evt) {
                try {
                    window[_this.Id + "_OnKeyDown"].call(_this, evt);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnKeyDown");
            };
            document.getElementById(this.Id).onkeypress = function (evt) {
                try {
                    window[_this.Id + "_OnKeyPress"].call(_this, evt);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnKeyPress");
            };
            document.getElementById(this.Id).onkeyup = function (evt) {
                try {
                    window[_this.Id + "_OnKeyUp"].call(_this, evt);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnKeyUp");
            };
        }
        CheckBox.prototype.Display = function () {
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                document.getElementById(this.Id).style.removeProperty("display");
                document.getElementById('lblChk' + this.Id).style.removeProperty("display");
            }
            else {
                document.getElementById(this.Id).style.setProperty("display", "none");
                document.getElementById('lblChk' + this.Id).style.setProperty("display", "none");
            }
        };
        CheckBox.GetIdsStack = function () {
            return CheckBox.idsStack;
        };
        CheckBox.GetLabelIdsStack = function () {
            return CheckBox.labelIdsStack;
        };
        CheckBox.prototype.GetId = function () {
            return this.Id;
        };
        CheckBox.prototype.GetMetaObject = function () {
            return this.MetaObject;
        };
        CheckBox.prototype.RedrawObject = function () {
            if (this.Enabled) {
                this.SetColor(this.GetColor());
                this.SetBackColor(this.GetBackColor());
            }
            else {
                this.SetDisabledColor(this.GetDisabledColor());
                this.SetBackColor(this.GetBackColor());
            }
        };
        CheckBox.prototype.SetCrossZ = function (crossZ) {
            this.CrossZ = crossZ;
            var x = this.GetX();
            var y = this.GetY();
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);
            document.getElementById("lblChk" + this.Id).dataset.scitoolcrossz = String(crossZ);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, crossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
                document.getElementById("lblChk" + this.Id).style.left = String(x + CheckBox.squareCheckBoxWidth) + "px";
                document.getElementById("lblChk" + this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        CheckBox.prototype.GetCrossZ = function () {
            return this.CrossZ;
        };
        CheckBox.prototype.SetX = function (x) {
            var X = x;
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth) + Number(document.getElementById("lblChk" + this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById("lblChk" + this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById("lblChk" + this.Id).dataset.scitoolx = String(x + CheckBox.squareCheckBoxWidth);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                x -= Table.GetViewFinderX();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById("lblChk" + this.Id).style.left = String(x + CheckBox.squareCheckBoxWidth) + "px";
            }
            this.Display();
        };
        CheckBox.prototype.GetX = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        };
        CheckBox.prototype.SetY = function (y) {
            var Y = y;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth) + Number(document.getElementById("lblChk" + this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById("lblChk" + this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById("lblChk" + this.Id).dataset.scitooly = String(y);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.top = String(y) + "px";
                document.getElementById("lblChk" + this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        CheckBox.prototype.GetY = function () {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        };
        CheckBox.prototype.SetZ = function (z) {
            var Z = z;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth) + Number(document.getElementById("lblChk" + this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById("lblChk" + this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            document.getElementById("lblChk" + this.Id).dataset.scitoolz = String(z);
            this.Display();
        };
        CheckBox.prototype.GetZ = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        };
        CheckBox.prototype.SetXYZ = function (x, y, z) {
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth) + Number(document.getElementById("lblChk" + this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById("lblChk" + this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById("lblChk" + this.Id).dataset.scitoolx = String(x + CheckBox.squareCheckBoxWidth);
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById("lblChk" + this.Id).dataset.scitooly = String(y);
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            document.getElementById("lblChk" + this.Id).dataset.scitoolz = String(z);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(x, y, z, Width, Height, CrossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById("lblChk" + this.Id).style.left = String(x + CheckBox.squareCheckBoxWidth) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
                document.getElementById("lblChk" + this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        CheckBox.prototype.SetWidth = function (width) {
            document.getElementById("lblChk" + this.Id).dataset.scitoolwidth = String(width - CheckBox.squareCheckBoxWidth);
            document.getElementById("lblChk" + this.Id).style.width = String(width - CheckBox.squareCheckBoxWidth) + "px";
        };
        CheckBox.prototype.GetWidth = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolwidth);
        };
        CheckBox.prototype.SetHeight = function (height) {
            document.getElementById("lblChk" + this.Id).dataset.scitoolheight = String(height);
            document.getElementById("lblChk" + this.Id).style.height = String(height) + "px";
        };
        CheckBox.prototype.GetHeight = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolheight);
        };
        CheckBox.prototype.SetDimensions = function (width, height) {
            document.getElementById("lblChk" + this.Id).dataset.scitoolwidth = String(width - CheckBox.squareCheckBoxWidth);
            document.getElementById("lblChk" + this.Id).style.width = String(width - CheckBox.squareCheckBoxWidth) + "px";
            document.getElementById("lblChk" + this.Id).dataset.scitoolheight = String(height);
            document.getElementById("lblChk" + this.Id).style.height = String(height) + "px";
        };
        CheckBox.prototype.GetInViewFinder = function () {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        };
        CheckBox.prototype.SetCaption = function (caption) {
            this.Caption = caption;
            document.getElementById("lblChk" + this.Id).innerText = caption;
        };
        CheckBox.prototype.GetCaption = function () {
            return this.Caption;
        };
        CheckBox.prototype.SetVisible = function (visible) {
            this.Visible = visible;
            if (visible === true) {
                document.getElementById(this.Id).style.visibility = 'visible';
                document.getElementById("lblChk" + this.Id).style.visibility = 'visible';
            }
            else {
                document.getElementById(this.Id).style.visibility = 'hidden';
                document.getElementById("lblChk" + this.Id).style.visibility = 'hidden';
            }
        };
        CheckBox.prototype.GetVisible = function () {
            return this.Visible;
        };
        CheckBox.prototype.SetColor = function (color) {
            this.Color = color;
            if (this.Enabled) {
                document.getElementById("lblChk" + this.Id).style.color = color;
            }
        };
        CheckBox.prototype.GetColor = function () {
            return this.Color;
        };
        CheckBox.prototype.SetBackColor = function (backColor) {
            this.BackColor = backColor;
            if (this.Enabled) {
                document.getElementById("lblChk" + this.Id).style.backgroundColor = backColor;
            }
        };
        CheckBox.prototype.GetBackColor = function () {
            return this.BackColor;
        };
        CheckBox.prototype.SetDisabledColor = function (color) {
            this.DisabledColor = color;
            if (!this.Enabled) {
                document.getElementById('lblChk' + this.Id).style.color = color;
            }
        };
        CheckBox.prototype.GetDisabledColor = function () {
            return this.DisabledColor;
        };
        CheckBox.prototype.SetTabIndex = function (tabIndex) {
            this.TabIndex = tabIndex;
            document.getElementById(this.Id).tabIndex = tabIndex;
        };
        CheckBox.prototype.GetTabIndex = function () {
            return this.TabIndex;
        };
        CheckBox.prototype.RestoreTabIndex = function () {
            this.SetTabIndex(0);
        };
        CheckBox.prototype.SetZIndex = function (zIndex) {
            this.ZIndex = zIndex;
            document.getElementById(this.Id).style.zIndex = zIndex;
            if (!isNaN(Number(zIndex))) {
                zIndex = String(Number(zIndex) + 1);
            }
            document.getElementById('lblChk' + this.Id).style.zIndex = zIndex;
        };
        CheckBox.prototype.GetZIndex = function () {
            return this.ZIndex;
        };
        CheckBox.prototype.RestoreZIndex = function () {
            this.SetZIndex("auto");
        };
        CheckBox.prototype.SetAccessKey = function (accesskey) {
            var expresionRegular = new RegExp("^([a-zA-Z]){1}$");
            var caracter = "";
            if (expresionRegular.test(accesskey)) {
                this.AccessKey = accesskey;
                document.getElementById("lblChk" + this.Id).accessKey = accesskey;
                if (this.Caption.indexOf(accesskey.toUpperCase()) >= 0 && this.Caption.indexOf(accesskey.toLowerCase()) >= 0) {
                    if (this.Caption.indexOf(accesskey.toUpperCase()) < this.Caption.indexOf(accesskey.toLowerCase())) {
                        caracter = accesskey.toUpperCase();
                    }
                    else {
                        caracter = accesskey.toLowerCase();
                    }
                }
                else {
                    if (this.Caption.indexOf(accesskey.toUpperCase()) >= 0) {
                        caracter = accesskey.toUpperCase();
                    }
                    if (this.Caption.indexOf(accesskey.toLowerCase()) >= 0) {
                        caracter = accesskey.toLowerCase();
                    }
                }
                if (caracter != "") {
                    document.getElementById("lblChk" + this.Id).innerHTML = this.GetCaption().replace(caracter, "<span style='text-decoration: underline;'>" + caracter + "</span>");
                }
            }
        };
        CheckBox.prototype.GetAccessKey = function () {
            return this.AccessKey;
        };
        CheckBox.prototype.RestoreAccessKey = function () {
            this.AccessKey = null;
            document.getElementById("lblChk" + this.Id).removeAttribute("accessKey");
            this.SetCaption(this.GetCaption()); //Quitar caracter accessKey subrayado del Caption del label (SetCaption fija el caption con innerText en lugar de innerHTML del método SetAccessKey, donde se subraya el caracter accessKey).
        };
        CheckBox.prototype.GetFontSize = function () {
            return Skin.GetCheckBoxFontSize();
        };
        CheckBox.prototype.SetFontFamily = function (fontFamily) {
            this.FontFamily = fontFamily;
            document.getElementById("lblChk" + this.Id).style.fontFamily = fontFamily;
        };
        CheckBox.prototype.GetFontFamily = function () {
            return this.FontFamily;
        };
        CheckBox.prototype.SetSelected = function (selected) {
            document.getElementById(this.Id).checked = selected;
        };
        CheckBox.prototype.GetSelected = function () {
            return document.getElementById(this.Id).checked;
        };
        CheckBox.prototype.SetEnabled = function (enabled) {
            this.Enabled = enabled;
            if (enabled) {
                document.getElementById(this.Id).removeAttribute("disabled");
            }
            else {
                document.getElementById(this.Id).setAttribute("disabled", "disabled");
            }
            this.RedrawObject();
        };
        CheckBox.prototype.GetEnabled = function () {
            return this.Enabled;
        };
        CheckBox.prototype.SetFocus = function () {
            document.getElementById(this.Id).focus();
        };
        CheckBox.prototype.Talk = function (message, metaMessage) {
            if (metaMessage === void 0) { metaMessage = ""; }
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (var i = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    }
                    catch (e) { }
                }
            }
            for (var _i = 0, _a = MetaObject.GetIdsStack(); _i < _a.length; _i++) {
                var idMetaobjeto = _a[_i];
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                }
                catch (e) { }
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
        };
        CheckBox.NumberOfUnnamedObjects = 0;
        CheckBox.idsStack = []; //Guarda solo los Ids de los CheckBox, sin considerar los Labels asociados.
        CheckBox.labelIdsStack = []; //Guarda los Ids de los Labels asociados a los CheckBox.
        CheckBox.squareCheckBoxWidth = 24; // Ancho reservado para el checkbox que antecede al texto.
        CheckBox.squareCheckBoxHeight = 16; // Alto reservado para el checkbox que antecede al texto.
        return CheckBox;
    }());
    sci.CheckBox = CheckBox;
    var ComboBox = /** @class */ (function () {
        function ComboBox(metaObject, x, y, z, id) {
            var _this = this;
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            this.comboBoxElementsId = []; //Lista que guarda los Ids de los elementos.
            this.Id = id;
            ComboBox.idsStack.push(this.Id);
            this.MetaObject = metaObject;
            MetaObject_private.AddDataObject(this.MetaObject, this.Id, ObjectType.ComboBox);
            this.Name = this.Id;
            this.X = x;
            this.Y = y;
            this.Z = z;
            this.CrossZ = false;
            this.Visible = true;
            this.Color = Skin.GetComboBoxColor();
            this.FromBackColor = Skin.GetComboBoxFromBackColor();
            this.ToBackColor = Skin.GetComboBoxToBackColor();
            this.TabIndex = 0;
            if (scitool.GetParentDocumentId(this.Id) !== false) {
                this.ZIndex = String(Number(window[scitool.GetParentDocumentId(this.Id)].GetZIndex()) + scitool.GetMetaObjectObjectsNumber(scitool.GetParentDocumentId(this.Id)));
            }
            else {
                this.ZIndex = "auto";
            }
            this.FontSize = Skin.GetComboBoxFontSize();
            this.FontFamily = Skin.GetComboBoxFontFamily();
            this.ListBoxColor = Skin.GetComboBoxListBoxColor();
            this.ListBoxBackColor = Skin.GetComboBoxListBoxBackColor();
            this.DisabledColor = Skin.GetComboBoxDisabledColor();
            this.DisabledFromBackColor = Skin.GetComboBoxDisabledFromBackColor();
            this.DisabledToBackColor = Skin.GetComboBoxDisabledToBackColor();
            this.DisabledListBoxFromBackColor = Skin.GetComboBoxDisabledListBoxFromBackColor();
            this.DisabledListBoxToBackColor = Skin.GetComboBoxDisabledListBoxToBackColor();
            this.Length = 0;
            this.Lines = 1;
            this.Multiple = false;
            this.Enabled = true;
            this.Raised = false;
            //Crear nodo.
            var nodoNuevo = document.createElement("SELECT");
            nodoNuevo.setAttribute("id", this.Id);
            nodoNuevo.setAttribute("name", this.Name);
            nodoNuevo.setAttribute("style", "background-image: -moz-linear-gradient(top, " + this.GetFromBackColor() + " ," + this.GetToBackColor() + "); background-image: -webkit-gradient(linear, left top,left bottom, from(" + this.GetFromBackColor() + "), to(" + this.GetToBackColor() + ")); background-image: linear-gradient(top, " + this.GetFromBackColor() + ", " + this.GetToBackColor() + ");");
            nodoNuevo.setAttribute("size", String(this.Lines));
            nodoNuevo.dataset.scitoolx = String(x);
            nodoNuevo.dataset.scitooly = String(y);
            nodoNuevo.dataset.scitoolz = String(z);
            nodoNuevo.dataset.scitoolwidth = String(Skin.GetComboBoxWidth());
            nodoNuevo.dataset.scitoolheight = String(Skin.GetComboBoxHeight());
            nodoNuevo.style.width = String(Skin.GetComboBoxWidth()) + "px";
            nodoNuevo.style.height = String(Skin.GetComboBoxHeight()) + "px";
            nodoNuevo.style.borderWidth = "1px";
            nodoNuevo.style.borderStyle = "solid";
            nodoNuevo.style.outline = "0px";
            nodoNuevo.style.borderRadius = "3px";
            nodoNuevo.style.borderColor = Skin.GetTextBoxBorderColor();
            nodoNuevo.style.setProperty("position", "absolute");
            nodoNuevo.style.setProperty("display", "none");
            document.body.appendChild(nodoNuevo);
            //Implementar en el DOM las otras propiedades en el nodo.
            this.SetX(this.GetX());
            this.SetY(this.GetY());
            this.SetZ(this.GetZ());
            this.SetVisible(this.GetVisible());
            this.SetColor(this.GetColor());
            this.SetFromBackColor(this.GetFromBackColor());
            this.SetToBackColor(this.GetToBackColor());
            this.SetTabIndex(this.GetTabIndex());
            this.SetZIndex(this.GetZIndex());
            this.SetFontSize(Skin.GetComboBoxFontSize());
            this.SetFontFamily(Skin.GetComboBoxFontFamily());
            this.SetCrossZ(this.GetCrossZ());
            document.getElementById(this.Id).onclick = function () {
                ////////Activar eventual documento padre de este objeto.
                //Buscar metaobjeto de este objeto.
                var datosObjeto = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                    if (objeto["ObjectId"] === _this.Id) {
                        return objeto;
                    }
                });
                //Verificar si el metaobjeto es un documento.
                var datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                    if (objeto["ObjectId"] === datosObjeto[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                        return objeto;
                    }
                });
                if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();
                    try {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(_this);
                    }
                    catch (e) { }
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                }
                ////////
                try {
                    window[_this.Id + "_OnClick"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnClick");
                if (!_this.GetMultiple() && _this.GetSelected() != false) {
                    try {
                        window[_this.GetSelected() + "_OnClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.GetSelected() + "_OnClick");
                }
            };
            document.getElementById(this.Id).ondblclick = function () {
                if (_this.GetMultiple() || _this.GetLines() > 1) {
                    try {
                        window[_this.Id + "_OnDblClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnDblClick");
                    if (!_this.GetMultiple() && _this.GetSelected() != false) {
                        try {
                            window[_this.GetSelected() + "_OnDblClick"].apply(_this);
                        }
                        catch (e) { }
                        window[_this.Id].Talk(_this.GetSelected() + "_OnDblClick");
                    }
                }
            };
            document.getElementById(this.Id).onchange = function () {
                try {
                    window[_this.Id + "_OnChange"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnChange");
                if (!_this.GetMultiple() && _this.GetSelected() != false) {
                    try {
                        window[_this.GetSelected() + "_OnClick"].apply(_this); // El OnChange de un combobox gatilla un OnClick del elemento seleccionado.
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.GetSelected() + "_OnClick");
                }
            };
            document.getElementById(this.Id).onfocus = function () {
                try {
                    window[_this.Id + "_OnFocus"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnFocus");
            };
            document.getElementById(this.Id).onmouseover = function () {
                try {
                    window[_this.Id + "_OnMouseOver"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseOver");
            };
            document.getElementById(this.Id).onmousemove = function () {
                try {
                    window[_this.Id + "_OnMouseMove"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseMove");
            };
            document.getElementById(this.Id).onmousedown = function () {
                try {
                    window[_this.Id + "_OnMouseDown"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseDown");
            };
            document.getElementById(this.Id).onmouseup = function () {
                try {
                    window[_this.Id + "_OnMouseUp"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseUp");
            };
            document.getElementById(this.Id).onmouseout = function () {
                try {
                    window[_this.Id + "_OnMouseOut"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseOut");
            };
            document.getElementById(this.Id).onkeydown = function (evt) {
                try {
                    window[_this.Id + "_OnKeyDown"].call(_this, evt);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnKeyDown");
            };
            document.getElementById(this.Id).onkeypress = function (evt) {
                try {
                    window[_this.Id + "_OnKeyPress"].call(_this, evt);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnKeyPress");
            };
            document.getElementById(this.Id).onkeyup = function (evt) {
                try {
                    window[_this.Id + "_OnKeyUp"].call(_this, evt);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnKeyUp");
            };
            document.getElementById(this.Id).onblur = function () {
                try {
                    window[_this.Id + "_OnBlur"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnBlur");
            };
        }
        ComboBox.prototype.Display = function () {
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                document.getElementById(this.Id).style.removeProperty("display");
            }
            else {
                document.getElementById(this.Id).style.setProperty("display", "none");
            }
        };
        ComboBox.GetIdsStack = function () {
            return ComboBox.idsStack;
        };
        ComboBox.prototype.GetId = function () {
            return this.Id;
        };
        ComboBox.prototype.GetMetaObject = function () {
            return this.MetaObject;
        };
        ComboBox.prototype.RedrawObject = function () {
            if (this.Enabled) {
                if (this.Lines === 1) {
                    this.SetColor(this.GetColor());
                    this.SetFromBackColor(this.GetFromBackColor());
                    this.SetToBackColor(this.GetToBackColor());
                }
                else {
                    this.SetListBoxColor(this.GetListBoxColor());
                    this.SetListBoxBackColor(this.GetListBoxBackColor());
                }
            }
            else {
                if (this.Lines === 1) {
                    this.SetDisabledColor(this.GetDisabledColor());
                    this.SetDisabledFromBackColor(this.GetDisabledFromBackColor());
                    this.SetDisabledToBackColor(this.GetDisabledToBackColor());
                }
                else {
                    this.SetDisabledListBoxBackColor(this.GetDisabledListBoxBackColor());
                }
            }
        };
        ComboBox.prototype.SetCrossZ = function (crossZ) {
            this.CrossZ = crossZ;
            var x = this.GetX();
            var y = this.GetY();
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, crossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        ComboBox.prototype.GetCrossZ = function () {
            return this.CrossZ;
        };
        ComboBox.prototype.Raise = function () {
            this.Raised = true;
            document.getElementById(this.Id).style.setProperty("position", "fixed");
        };
        ComboBox.prototype.Unraise = function () {
            this.Raised = false;
            document.getElementById(this.Id).style.setProperty("position", "absolute");
        };
        ComboBox.prototype.GetRaised = function () {
            return this.Raised;
        };
        ComboBox.prototype.Add = function (caption, id) {
            if (id === void 0) { id = ""; }
            this.Length++;
            var elementId;
            if (id.replace(/ /g, "") == "") {
                elementId = this.Id + String(this.Length);
            }
            else {
                elementId = id;
            }
            this.comboBoxElementsId.push(elementId);
            //Crear nodo.
            var nodoNuevo = document.createElement("option");
            nodoNuevo.setAttribute("id", elementId);
            nodoNuevo.setAttribute("name", elementId);
            nodoNuevo.setAttribute("value", elementId);
            nodoNuevo.text = caption;
            var nodoPadre = document.getElementById(this.Id);
            nodoPadre.appendChild(nodoNuevo);
        };
        ComboBox.prototype.AddList = function (lista) {
            var elementos = lista.split(",");
            for (var _i = 0, elementos_3 = elementos; _i < elementos_3.length; _i++) {
                var elemento = elementos_3[_i];
                this.Add(elemento);
            }
        };
        ComboBox.prototype.GetLength = function () {
            return this.Length;
        };
        ComboBox.prototype.SetX = function (x) {
            var X = x;
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolx = String(x);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                x -= Table.GetViewFinderX();
                document.getElementById(this.Id).style.left = String(x) + "px";
            }
            this.Display();
        };
        ComboBox.prototype.GetX = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        };
        ComboBox.prototype.SetY = function (y) {
            var Y = y;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitooly = String(y);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        ComboBox.prototype.GetY = function () {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        };
        ComboBox.prototype.SetZ = function (z) {
            var Z = z;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            this.Display();
        };
        ComboBox.prototype.GetZ = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        };
        ComboBox.prototype.SetXYZ = function (x, y, z) {
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(x, y, z, Width, Height, CrossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        ComboBox.prototype.SetWidth = function (width) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
        };
        ComboBox.prototype.GetWidth = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolwidth);
        };
        ComboBox.prototype.SetHeight = function (height) {
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        };
        ComboBox.prototype.GetHeight = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolheight);
        };
        ComboBox.prototype.SetDimensions = function (width, height) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        };
        ComboBox.prototype.SetLines = function (lines) {
            this.Lines = lines;
            document.getElementById(this.Id).setAttribute("size", String(this.Lines));
            if (lines === 1) {
                this.SetHeight(Skin.GetComboBoxHeight());
            }
            else {
                this.SetHeight((Skin.GetComboBoxFontSize() + 4) * lines + 10);
            }
            this.RedrawObject();
        };
        ComboBox.prototype.GetLines = function () {
            return this.Lines;
        };
        ComboBox.prototype.SetMultiple = function (multiple) {
            this.Multiple = multiple;
            if (multiple) {
                if (this.Lines > 1) {
                    document.getElementById(this.Id).setAttribute("multiple", "multiple");
                }
            }
            else {
                document.getElementById(this.Id).removeAttribute("multiple");
            }
            this.RedrawObject();
        };
        ComboBox.prototype.GetMultiple = function () {
            return this.Multiple;
        };
        ComboBox.prototype.GetInViewFinder = function () {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        };
        ComboBox.prototype.SetFontSize = function (fontSize) {
            this.FontSize = fontSize;
            document.getElementById(this.Id).style.fontSize = String(fontSize) + "px";
        };
        ComboBox.prototype.GetFontSize = function () {
            return this.FontSize;
        };
        ComboBox.prototype.SetFontFamily = function (fontFamily) {
            this.FontFamily = fontFamily;
            document.getElementById(this.Id).style.fontFamily = fontFamily;
        };
        ComboBox.prototype.GetFontFamily = function () {
            return this.FontFamily;
        };
        ComboBox.prototype.SetVisible = function (visible) {
            this.Visible = visible;
            if (visible === true) {
                document.getElementById(this.Id).style.visibility = 'visible';
            }
            else {
                document.getElementById(this.Id).style.visibility = 'hidden';
            }
        };
        ComboBox.prototype.GetVisible = function () {
            return this.Visible;
        };
        ComboBox.prototype.SetColor = function (color) {
            this.Color = color;
            if (this.Enabled && this.Lines === 1) {
                document.getElementById(this.Id).style.color = color;
            }
        };
        ComboBox.prototype.GetColor = function () {
            return this.Color;
        };
        ComboBox.prototype.SetFromBackColor = function (backColor) {
            this.FromBackColor = backColor;
            if (this.Enabled && this.Lines === 1) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.FromBackColor + "), to(" + this.ToBackColor + "))";
            }
        };
        ComboBox.prototype.GetFromBackColor = function () {
            return this.FromBackColor;
        };
        ComboBox.prototype.SetToBackColor = function (backColor) {
            this.ToBackColor = backColor;
            if (this.Enabled && this.Lines === 1) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.FromBackColor + "), to(" + this.ToBackColor + "))";
            }
        };
        ComboBox.prototype.GetToBackColor = function () {
            return this.ToBackColor;
        };
        ComboBox.prototype.SetBackColor = function (value) {
            this.FromBackColor = value;
            this.ToBackColor = value;
            if (this.Enabled && this.Lines === 1) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.FromBackColor + "), to(" + this.ToBackColor + "))";
            }
        };
        ComboBox.prototype.SetListBoxColor = function (color) {
            this.ListBoxColor = color;
            if (this.Enabled && this.Lines > 1) {
                document.getElementById(this.Id).style.color = color;
            }
        };
        ComboBox.prototype.GetListBoxColor = function () {
            return this.ListBoxColor;
        };
        ComboBox.prototype.SetListBoxBackColor = function (backColor) {
            this.ListBoxBackColor = backColor;
            if (this.Enabled && this.Lines > 1) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.ListBoxBackColor + "), to(" + this.ListBoxBackColor + "))";
            }
        };
        ComboBox.prototype.GetListBoxBackColor = function () {
            return this.ListBoxBackColor;
        };
        ComboBox.prototype.GetBackColor = function () {
            return this.FromBackColor;
        };
        ComboBox.prototype.SetDisabledColor = function (color) {
            this.DisabledColor = color;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.color = this.DisabledColor;
            }
        };
        ComboBox.prototype.GetDisabledColor = function () {
            return this.DisabledColor;
        };
        ComboBox.prototype.SetDisabledFromBackColor = function (fromBackColor) {
            this.DisabledFromBackColor = fromBackColor;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.DisabledFromBackColor + "), to(" + this.DisabledToBackColor + "))";
            }
        };
        ComboBox.prototype.GetDisabledFromBackColor = function () {
            return this.DisabledFromBackColor;
        };
        ComboBox.prototype.SetDisabledToBackColor = function (toBackColor) {
            this.DisabledToBackColor = toBackColor;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.DisabledFromBackColor + "), to(" + this.DisabledToBackColor + "))";
            }
        };
        ComboBox.prototype.GetDisabledToBackColor = function () {
            return this.DisabledToBackColor;
        };
        ComboBox.prototype.SetDisabledBackColor = function (value) {
            this.DisabledFromBackColor = value;
            this.DisabledToBackColor = value;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.DisabledFromBackColor + "), to(" + this.DisabledToBackColor + "))";
            }
        };
        ComboBox.prototype.GetDisabledBackColor = function () {
            return this.DisabledFromBackColor;
        };
        ComboBox.prototype.SetDisabledListBoxFromBackColor = function (fromBackColor) {
            this.DisabledListBoxFromBackColor = fromBackColor;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.DisabledListBoxFromBackColor + "), to(" + this.DisabledListBoxToBackColor + "))";
            }
        };
        ComboBox.prototype.GetDisabledListBoxFromBackColor = function () {
            return this.DisabledListBoxFromBackColor;
        };
        ComboBox.prototype.SetDisabledListBoxToBackColor = function (toBackColor) {
            this.DisabledListBoxToBackColor = toBackColor;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.DisabledListBoxFromBackColor + "), to(" + this.DisabledListBoxToBackColor + "))";
            }
        };
        ComboBox.prototype.GetDisabledListBoxToBackColor = function () {
            return this.DisabledListBoxToBackColor;
        };
        ComboBox.prototype.SetDisabledListBoxBackColor = function (value) {
            this.DisabledListBoxFromBackColor = value;
            this.DisabledListBoxToBackColor = value;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.DisabledListBoxFromBackColor + "), to(" + this.DisabledListBoxToBackColor + "))";
            }
        };
        ComboBox.prototype.GetDisabledListBoxBackColor = function () {
            return this.DisabledListBoxFromBackColor;
        };
        ComboBox.prototype.SetTabIndex = function (tabIndex) {
            this.TabIndex = tabIndex;
            document.getElementById(this.Id).tabIndex = tabIndex;
        };
        ComboBox.prototype.GetTabIndex = function () {
            return this.TabIndex;
        };
        ComboBox.prototype.RestoreTabIndex = function () {
            this.SetTabIndex(0);
        };
        ComboBox.prototype.SetZIndex = function (zIndex) {
            this.ZIndex = zIndex;
            document.getElementById(this.Id).style.zIndex = zIndex;
        };
        ComboBox.prototype.GetZIndex = function () {
            return this.ZIndex;
        };
        ComboBox.prototype.RestoreZIndex = function () {
            this.SetZIndex("auto");
        };
        ComboBox.prototype.SetName = function (name) {
            this.Name = name;
            document.getElementById(this.Id).setAttribute("name", name);
        };
        ComboBox.prototype.GetName = function () {
            return this.Name;
        };
        ComboBox.prototype.SetSelected = function (id) {
            if (this.Multiple === false) { //ComboBox simple.
                if (typeof id === 'number') {
                    document.getElementById(this.Id).value = this.comboBoxElementsId[id - 1];
                }
                else {
                    document.getElementById(this.Id).value = id;
                }
            }
            else { //ComboBox múltiple.
                this.Clear();
                if (typeof id === 'number') { //No es una lista, sino solo un valor numérico.
                    document.getElementById(this.Id).options[id - 1].selected = true;
                }
                else {
                    var elementos = id.split(",");
                    var elementPosition = void 0;
                    for (var _i = 0, elementos_4 = elementos; _i < elementos_4.length; _i++) {
                        var elemento = elementos_4[_i];
                        if (!isNaN(parseInt(elemento))) { //Elemento es un número de posición.
                            elementPosition = elemento;
                        }
                        else { //Elemento es un id.
                            for (var i = 0; i < this.comboBoxElementsId.length; i++) {
                                if (elemento === this.comboBoxElementsId[i]) {
                                    elementPosition = i + 1;
                                    break;
                                }
                            }
                        }
                        document.getElementById(this.Id).options[elementPosition - 1].selected = true;
                    }
                }
            }
        };
        ComboBox.prototype.AddSelected = function (id) {
            if (this.Multiple === true) {
                if (typeof id === 'number') { //No es una lista, sino solo un valor numérico.
                    document.getElementById(this.Id).options[id - 1].selected = true;
                }
                else {
                    var elementos = id.split(",");
                    var elementPosition = void 0;
                    for (var _i = 0, elementos_5 = elementos; _i < elementos_5.length; _i++) {
                        var elemento = elementos_5[_i];
                        if (!isNaN(parseInt(elemento))) { //Elemento es un número de posición.
                            elementPosition = elemento;
                        }
                        else { //Elemento es un id.
                            for (var i = 0; i < this.comboBoxElementsId.length; i++) {
                                if (elemento === this.comboBoxElementsId[i]) {
                                    elementPosition = i + 1;
                                    break;
                                }
                            }
                        }
                        document.getElementById(this.Id).options[elementPosition - 1].selected = true;
                    }
                }
            }
        };
        ComboBox.prototype.Clear = function () {
            if (this.Multiple === true) {
                var numElementos = document.getElementById(this.Id).options.length;
                for (var i = 0; i < numElementos; i++) {
                    document.getElementById(this.Id).options[i].selected = false;
                }
            }
            else {
                document.getElementById(this.Id).value = this.comboBoxElementsId[0];
            }
        };
        ComboBox.prototype.GetSelected = function () {
            if (this.Lines === 1) {
                return document.getElementById(this.Id).value;
            }
            else {
                var selectedItems = [];
                var numElementos = document.getElementById(this.Id).options.length;
                for (var i = 0; i < numElementos; i++) {
                    if (document.getElementById(this.Id).options[i].selected) {
                        selectedItems.push(document.getElementById(this.Id).options[i].value);
                    }
                }
                if (selectedItems.length > 0) {
                    return selectedItems;
                }
                else {
                    return false;
                }
            }
        };
        ComboBox.prototype.GetSelectedNumber = function () {
            if (this.Lines === 1) {
                var i = 1;
                for (var _i = 0, _a = this.comboBoxElementsId; _i < _a.length; _i++) {
                    var elemento = _a[_i];
                    if (elemento === document.getElementById(this.Id).value) {
                        return i;
                    }
                    i++;
                }
            }
            else {
                var selectedItems = [];
                var numElementos = document.getElementById(this.Id).options.length;
                for (var i = 0; i < numElementos; i++) {
                    if (document.getElementById(this.Id).options[i].selected) {
                        selectedItems.push(i + 1);
                    }
                }
                if (selectedItems.length > 0) {
                    return selectedItems;
                }
                else {
                    return false;
                }
            }
        };
        ComboBox.prototype.GetSelectedCaption = function () {
            if (this.Lines === 1) {
                var numElementos = document.getElementById(this.Id).options.length;
                for (var i = 0; i < numElementos; i++) {
                    if (document.getElementById(this.Id).options[i].selected) {
                        return document.getElementById(this.Id).options[i].text;
                    }
                }
                return false;
            }
            else {
                var selectedItems = [];
                var numElementos = document.getElementById(this.Id).options.length;
                for (var i = 0; i < numElementos; i++) {
                    if (document.getElementById(this.Id).options[i].selected) {
                        selectedItems.push(document.getElementById(this.Id).options[i].text);
                    }
                }
                if (selectedItems.length > 0) {
                    return selectedItems;
                }
                else {
                    return false;
                }
            }
        };
        ComboBox.prototype.Empty = function () {
            var numElementos = document.getElementById(this.Id).options.length;
            var elemento;
            for (var i = 0; i < numElementos; i++) {
                elemento = document.getElementById(this.Id);
                elemento.remove(elemento.options[i]);
            }
            this.comboBoxElementsId = [];
            this.Length = 0;
        };
        ComboBox.prototype.Remove = function (id) {
            var elemento;
            if (typeof id === 'number') {
                elemento = document.getElementById(this.Id).options[id - 1];
                elemento.remove(elemento.selectedIndex);
                this.Length--;
            }
            else {
                for (var i = 0; i < this.comboBoxElementsId.length; i++) {
                    if (id === this.comboBoxElementsId[i]) {
                        elemento = document.getElementById(this.Id).options[i];
                        elemento.remove(elemento.selectedIndex);
                        this.Length--;
                        break;
                    }
                }
            }
        };
        ComboBox.prototype.SetEnabled = function (enabled) {
            this.Enabled = enabled;
            if (enabled) {
                document.getElementById(this.Id).removeAttribute("disabled");
            }
            else {
                document.getElementById(this.Id).setAttribute("disabled", "disabled");
            }
            this.RedrawObject();
        };
        ComboBox.prototype.GetEnabled = function () {
            return this.Enabled;
        };
        ComboBox.prototype.SetFocus = function () {
            document.getElementById(this.Id).focus();
        };
        ComboBox.prototype.Talk = function (message, metaMessage) {
            if (metaMessage === void 0) { metaMessage = ""; }
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (var i = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    }
                    catch (e) { }
                }
            }
            for (var _i = 0, _a = MetaObject.GetIdsStack(); _i < _a.length; _i++) {
                var idMetaobjeto = _a[_i];
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                }
                catch (e) { }
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
        };
        ComboBox.NumberOfUnnamedObjects = 0;
        ComboBox.idsStack = [];
        return ComboBox;
    }());
    sci.ComboBox = ComboBox;
    var RadioButtonGroup = /** @class */ (function () {
        function RadioButtonGroup(metaObject, x, y, z, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            this.elements = [];
            this.Id = id;
            RadioButtonGroup.idsStack.push(this.Id);
            this.MetaObject = metaObject;
            MetaObject_private.AddDataObject(this.MetaObject, this.Id, ObjectType.RadioButtonGroup);
            this.Name = this.Id;
            this.CrossZ = false;
            this.X = x;
            this.Y = y;
            this.Z = z;
            this.Width = Skin.GetRadioButtonWidth();
            this.Height = Skin.GetRadioButtonHeight();
            this.Visible = true;
            this.Color = Skin.GetRadioButtonColor();
            this.BackColor = Skin.GetRadioButtonBackColor();
            this.DisabledColor = Skin.GetRadioButtonDisabledColor();
            this.TabIndex = 0;
            if (scitool.GetParentDocumentId(this.Id) !== false) {
                this.ZIndex = String(Number(window[scitool.GetParentDocumentId(this.Id)].GetZIndex()) + scitool.GetMetaObjectObjectsNumber(scitool.GetParentDocumentId(this.Id)));
            }
            else {
                this.ZIndex = "auto";
            }
            this.FontSize = Skin.GetRadioButtonFontSize();
            this.FontFamily = Skin.GetRadioButtonFontFamily();
            this.Direction = sci.Const.Vertical;
            this.Length = 0;
        }
        RadioButtonGroup.GetIdsStack = function () {
            return RadioButtonGroup.idsStack;
        };
        RadioButtonGroup.GetOptIdsStack = function () {
            return RadioButtonGroup.optIdsStack;
        };
        RadioButtonGroup.GetLabelIdsStack = function () {
            return RadioButtonGroup.lblIdsStack;
        };
        RadioButtonGroup.prototype.GetId = function () {
            return this.Id;
        };
        RadioButtonGroup.prototype.GetMetaObject = function () {
            return this.MetaObject;
        };
        RadioButtonGroup.prototype.Add = function (caption, id) {
            var _this = this;
            if (id === void 0) { id = ""; }
            this.Length++;
            var elementId;
            var elementLabelId;
            if (id.replace(/ /g, "") == "") {
                elementId = this.Id + String(this.Length);
                elementLabelId = this.Id + "Lbl" + String(this.Length);
            }
            else {
                elementId = id;
                elementLabelId = "lblOpt" + id;
            }
            var elementData = {
                'Caption': caption,
                'Id': elementId,
                'LabelId': elementLabelId
            };
            this.elements.push(elementData);
            RadioButtonGroup.optIdsStack.push(elementId);
            RadioButtonGroup.lblIdsStack.push(elementLabelId);
            MetaObject_private.AddDataObject(this.MetaObject, elementId, ObjectType.RadioButton);
            MetaObject_private.AddDataObject(this.MetaObject, elementLabelId, ObjectType.AssociatedControl); //Label asociado al Option Button.
            //Crear nodo.
            var X;
            var Y;
            var Z = this.Z;
            var Width = this.Width;
            var Height = this.Height;
            if (this.Direction == sci.Const.Vertical) {
                X = this.X;
                Y = this.Y + (this.Length - 1) * this.Height;
            }
            else {
                X = this.X + (this.Length - 1) * this.Width;
                Y = this.Y;
            }
            var nodoNuevo = document.createElement("INPUT");
            nodoNuevo.setAttribute("type", "radio");
            nodoNuevo.setAttribute("id", elementId);
            nodoNuevo.setAttribute("name", this.Name);
            nodoNuevo.dataset.scitoolx = String(X);
            nodoNuevo.dataset.scitooly = String(Y);
            nodoNuevo.dataset.scitoolz = String(Z);
            nodoNuevo.dataset.scitoolwidth = String(RadioButtonGroup.circleRadioButtonWidth);
            nodoNuevo.dataset.scitoolheight = String(RadioButtonGroup.circleRadioButtonHeight);
            nodoNuevo.dataset.scitoolcrossz = String(this.CrossZ);
            nodoNuevo.style.width = String(RadioButtonGroup.circleRadioButtonWidth) + "px";
            nodoNuevo.style.height = String(RadioButtonGroup.circleRadioButtonHeight) + "px";
            nodoNuevo.style.padding = "0";
            nodoNuevo.style.margin = "0";
            nodoNuevo.style.setProperty("position", "absolute");
            nodoNuevo.style.setProperty("display", "none");
            nodoNuevo.setAttribute("value", elementId);
            if (this.TabIndex !== -1 && this.TabIndex !== 0) {
                if (this.Length === 1) {
                    nodoNuevo.tabIndex = this.TabIndex;
                }
            }
            if (this.ZIndex !== "auto" && this.ZIndex !== "initial" && this.ZIndex !== "inherit") {
                nodoNuevo.style.zIndex = String(Number(this.ZIndex) + ((this.Length - 1) * 2));
            }
            document.body.appendChild(nodoNuevo);
            //Crear nodo label asociado.
            var nodoAsociado = document.createElement("LABEL");
            nodoAsociado.setAttribute("id", elementLabelId);
            nodoAsociado.dataset.scitoolx = String(X + RadioButtonGroup.circleRadioButtonWidth);
            nodoAsociado.dataset.scitooly = String(Y);
            nodoAsociado.dataset.scitoolz = String(Z);
            nodoAsociado.dataset.scitoolwidth = String(this.Width - RadioButtonGroup.circleRadioButtonWidth);
            nodoAsociado.dataset.scitoolheight = String(this.Height);
            nodoAsociado.dataset.scitoolcrossz = String(this.CrossZ);
            nodoAsociado.style.width = String(this.Width - RadioButtonGroup.circleRadioButtonWidth) + "px";
            nodoAsociado.style.height = String(this.Height) + "px";
            nodoAsociado.style.padding = "0";
            nodoAsociado.style.margin = "0";
            nodoAsociado.style.fontSize = String(Skin.GetRadioButtonFontSize()) + "px";
            nodoAsociado.style.fontFamily = Skin.GetRadioButtonFontFamily();
            nodoAsociado.style.setProperty("position", "absolute");
            nodoAsociado.style.setProperty("display", "none");
            nodoAsociado.style.color = this.GetColor();
            nodoAsociado.style.backgroundColor = this.GetBackColor();
            nodoAsociado.innerText = caption;
            nodoAsociado.setAttribute("for", elementId);
            if (this.TabIndex !== -1 && this.TabIndex !== 0) {
                if (this.Length === 1) {
                    nodoAsociado.tabIndex = this.TabIndex + 1;
                }
            }
            if (this.ZIndex !== "auto" && this.ZIndex !== "initial" && this.ZIndex !== "inherit") {
                nodoAsociado.style.zIndex = String(Number(this.ZIndex) + ((this.Length - 1) * 2) + 1);
            }
            document.body.appendChild(nodoAsociado);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, this.CrossZ)) {
                X -= Table.GetViewFinderX();
                Y -= Table.GetViewFinderY();
                document.getElementById(elementId).style.left = String(X) + "px";
                document.getElementById(elementId).style.top = String(Y) + "px";
                document.getElementById(elementLabelId).style.left = String(X + RadioButtonGroup.circleRadioButtonWidth) + "px";
                document.getElementById(elementLabelId).style.top = String(Y) + "px";
                document.getElementById(elementId).style.removeProperty("display");
                document.getElementById(elementLabelId).style.removeProperty("display");
            }
            else {
                document.getElementById(elementId).style.setProperty("display", "none");
                document.getElementById(elementLabelId).style.setProperty("display", "none");
            }
            document.getElementById(elementId).onclick = function () {
                ////////Activar eventual documento padre de este objeto.
                //Buscar metaobjeto de este objeto.
                var datosObjeto = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                    if (objeto["ObjectId"] === _this.Id) {
                        return objeto;
                    }
                });
                //Verificar si el metaobjeto es un documento.
                var datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                    if (objeto["ObjectId"] === datosObjeto[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                        return objeto;
                    }
                });
                if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();
                    try {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(_this);
                    }
                    catch (e) { }
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                }
                ////////
                try {
                    window[elementId + "_OnClick"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(elementId + "_OnClick");
                try {
                    window[_this.Id + "_OnClick"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnClick");
            };
            document.getElementById(elementId).ondblclick = function () {
                try {
                    window[elementId + "_OnDblClick"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(elementId + "_OnDblClick");
                try {
                    window[_this.Id + "_OnDblClick"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnDblClick");
            };
            document.getElementById(elementLabelId).ondblclick = function () {
                if (_this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnDblClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(elementId + "_OnDblClick");
                    try {
                        window[_this.Id + "_OnDblClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnDblClick");
                }
            };
            document.getElementById(elementId).onchange = function () {
                try {
                    window[elementId + "_OnChange"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(elementId + "_OnChange");
                try {
                    window[_this.Id + "_OnChange"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnChange");
            };
            document.getElementById(elementId).onfocus = function () {
                try {
                    window[elementId + "_OnFocus"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(elementId + "_OnFocus");
                try {
                    window[_this.Id + "_OnFocus"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnFocus");
            };
            document.getElementById(elementId).onmouseover = function () {
                try {
                    window[elementId + "_OnMouseOver"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(elementId + "_OnMouseOver");
                try {
                    window[_this.Id + "_OnMouseOver"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseOver");
            };
            document.getElementById(elementLabelId).onmouseover = function () {
                if (_this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnMouseOver"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(elementId + "_OnMouseOver");
                    try {
                        window[_this.Id + "_OnMouseOver"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseOver");
                }
            };
            document.getElementById(elementId).onmousemove = function () {
                try {
                    window[elementId + "_OnMouseMove"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(elementId + "_OnMouseMove");
                try {
                    window[_this.Id + "_OnMouseMove"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseMove");
            };
            document.getElementById(elementLabelId).onmousemove = function () {
                if (_this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnMouseMove"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(elementId + "_OnMouseMove");
                    try {
                        window[_this.Id + "_OnMouseMove"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseMove");
                }
            };
            document.getElementById(elementId).onmousedown = function () {
                try {
                    window[elementId + "_OnMouseDown"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(elementId + "_OnMouseDown");
                try {
                    window[_this.Id + "_OnMouseDown"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseDown");
            };
            document.getElementById(elementLabelId).onmousedown = function () {
                if (_this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnMouseDown"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(elementId + "_OnMouseDown");
                    try {
                        window[_this.Id + "_OnMouseDown"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseDown");
                }
            };
            document.getElementById(elementId).onmouseup = function () {
                try {
                    window[elementId + "_OnMouseUp"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(elementId + "_OnMouseUp");
                try {
                    window[_this.Id + "_OnMouseUp"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseUp");
            };
            document.getElementById(elementLabelId).onmouseup = function () {
                if (_this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnMouseUp"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(elementId + "_OnMouseUp");
                    try {
                        window[_this.Id + "_OnMouseUp"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseUp");
                }
            };
            document.getElementById(elementId).onmouseout = function () {
                try {
                    window[elementId + "_OnMouseOut"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(elementId + "_OnMouseOut");
                try {
                    window[_this.Id + "_OnMouseOut"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseOut");
            };
            document.getElementById(elementLabelId).onmouseout = function () {
                if (_this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnMouseOut"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(elementId + "_OnMouseOut");
                    try {
                        window[_this.Id + "_OnMouseOut"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseOut");
                }
            };
            document.getElementById(elementId).onkeydown = function (evt) {
                try {
                    window[elementId + "_OnKeyDown"].call(_this, evt);
                }
                catch (e) { }
                window[_this.Id].Talk(elementId + "_OnKeyDown");
                try {
                    window[_this.Id + "_OnKeyDown"].call(_this, evt);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnKeyDown");
            };
            document.getElementById(elementId).onkeypress = function (evt) {
                try {
                    window[elementId + "_OnKeyPress"].call(_this, evt);
                }
                catch (e) { }
                window[_this.Id].Talk(elementId + "_OnKeyPress");
                try {
                    window[_this.Id + "_OnKeyPress"].call(_this, evt);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnKeyPress");
            };
            document.getElementById(elementId).onkeyup = function (evt) {
                try {
                    window[elementId + "_OnKeyUp"].call(_this, evt);
                }
                catch (e) { }
                window[_this.Id].Talk(elementId + "_OnKeyUp");
                try {
                    window[_this.Id + "_OnKeyUp"].call(_this, evt);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnKeyUp");
            };
        };
        RadioButtonGroup.prototype.AddList = function (lista) {
            var elementos = lista.split(",");
            for (var _i = 0, elementos_6 = elementos; _i < elementos_6.length; _i++) {
                var elemento = elementos_6[_i];
                this.Add(elemento);
            }
        };
        RadioButtonGroup.prototype.Clear = function () {
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                document.getElementById(elementData["Id"]).checked = false;
            }
        };
        RadioButtonGroup.prototype.GetLength = function () {
            return this.Length;
        };
        RadioButtonGroup.prototype.GetElements = function () {
            return this.elements;
        };
        RadioButtonGroup.prototype.SetDirection = function (direction) {
            if (direction === sci.Const.Horizontal || direction === sci.Const.Vertical) {
                this.Direction = direction;
                var X = void 0;
                var Y = void 0;
                var incrementoX = void 0;
                var incrementoY = void 0;
                if (this.Direction == sci.Const.Vertical) {
                    incrementoX = 0;
                    incrementoY = this.Height;
                }
                else {
                    incrementoX = this.Width;
                    incrementoY = 0;
                }
                var i = 0;
                for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                    var elementData = _a[_i];
                    X = this.X + i * incrementoX;
                    Y = this.Y + i * incrementoY;
                    document.getElementById(elementData["Id"]).dataset.scitoolx = String(X);
                    document.getElementById(elementData["LabelId"]).dataset.scitoolx = String(X + RadioButtonGroup.circleRadioButtonWidth);
                    document.getElementById(elementData["Id"]).dataset.scitooly = String(Y);
                    document.getElementById(elementData["LabelId"]).dataset.scitooly = String(Y);
                    i++;
                }
                this.RedrawRadioButtonGroup();
            }
        };
        RadioButtonGroup.prototype.GetDirection = function () {
            return this.Direction;
        };
        RadioButtonGroup.prototype.SetCrossZ = function (crossZ) {
            this.CrossZ = crossZ;
            var i = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                document.getElementById(elementData["Id"]).dataset.scitoolcrossz = String(crossZ);
                document.getElementById(elementData["LabelId"]).dataset.scitoolcrossz = String(crossZ);
                i++;
            }
            this.RedrawRadioButtonGroup();
        };
        RadioButtonGroup.prototype.GetCrossZ = function () {
            return this.CrossZ;
        };
        RadioButtonGroup.prototype.SetX = function (x) {
            this.X = x;
            var X;
            var Y;
            var incrementoX;
            var incrementoY;
            if (this.Direction == sci.Const.Vertical) {
                incrementoX = 0;
                incrementoY = this.Height;
            }
            else {
                incrementoX = this.Width;
                incrementoY = 0;
            }
            var i = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                X = this.X + i * incrementoX;
                Y = this.Y + i * incrementoY;
                document.getElementById(elementData["Id"]).dataset.scitoolx = String(X);
                document.getElementById(elementData["LabelId"]).dataset.scitoolx = String(X + RadioButtonGroup.circleRadioButtonWidth);
                i++;
            }
            this.RedrawRadioButtonGroup();
        };
        RadioButtonGroup.prototype.GetX = function () {
            return this.X;
        };
        RadioButtonGroup.prototype.SetY = function (y) {
            this.Y = y;
            var X;
            var Y;
            var incrementoX;
            var incrementoY;
            if (this.Direction == sci.Const.Vertical) {
                incrementoX = 0;
                incrementoY = this.Height;
            }
            else {
                incrementoX = this.Width;
                incrementoY = 0;
            }
            var i = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                X = this.X + i * incrementoX;
                Y = this.Y + i * incrementoY;
                document.getElementById(elementData["Id"]).dataset.scitooly = String(Y);
                document.getElementById(elementData["LabelId"]).dataset.scitooly = String(Y);
                i++;
            }
            this.RedrawRadioButtonGroup();
        };
        RadioButtonGroup.prototype.GetY = function () {
            return this.Y;
        };
        RadioButtonGroup.prototype.SetZ = function (z) {
            this.Z = z;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                document.getElementById(elementData["Id"]).dataset.scitoolz = String(this.Z);
                document.getElementById(elementData["LabelId"]).dataset.scitoolz = String(this.Z);
            }
            this.RedrawRadioButtonGroup();
        };
        RadioButtonGroup.prototype.GetZ = function () {
            return this.Z;
        };
        RadioButtonGroup.prototype.SetXYZ = function (x, y, z) {
            this.X = x;
            this.Y = y;
            this.Z = z;
            var X;
            var Y;
            var incrementoX;
            var incrementoY;
            if (this.Direction == sci.Const.Vertical) {
                incrementoX = 0;
                incrementoY = this.Height;
            }
            else {
                incrementoX = this.Width;
                incrementoY = 0;
            }
            var i = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                X = this.X + i * incrementoX;
                Y = this.Y + i * incrementoY;
                document.getElementById(elementData["Id"]).dataset.scitoolx = String(X);
                document.getElementById(elementData["LabelId"]).dataset.scitoolx = String(X + RadioButtonGroup.circleRadioButtonWidth);
                document.getElementById(elementData["Id"]).dataset.scitooly = String(Y);
                document.getElementById(elementData["LabelId"]).dataset.scitooly = String(Y);
                document.getElementById(elementData["Id"]).dataset.scitoolz = String(this.Z);
                document.getElementById(elementData["LabelId"]).dataset.scitoolz = String(this.Z);
                i++;
            }
            this.RedrawRadioButtonGroup();
        };
        RadioButtonGroup.prototype.RedrawRadioButtonGroup = function () {
            var X;
            var Y;
            var Z = this.Z;
            var incrementoX;
            var incrementoY;
            if (this.Direction == sci.Const.Vertical) {
                incrementoX = 0;
                incrementoY = this.Height;
            }
            else {
                incrementoX = this.Width;
                incrementoY = 0;
            }
            var i = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                X = this.X + i * incrementoX;
                Y = this.Y + i * incrementoY;
                if (Table.InViewFinder(X, Y, Z, this.Width, this.Height, this.CrossZ)) {
                    X -= Table.GetViewFinderX();
                    Y -= Table.GetViewFinderY();
                    document.getElementById(elementData["Id"]).style.left = String(X) + "px";
                    document.getElementById(elementData["Id"]).style.top = String(Y) + "px";
                    document.getElementById(elementData["LabelId"]).style.left = String(X + RadioButtonGroup.circleRadioButtonWidth) + "px";
                    document.getElementById(elementData["LabelId"]).style.top = String(Y) + "px";
                    document.getElementById(elementData["Id"]).style.removeProperty("display");
                    document.getElementById(elementData["LabelId"]).style.removeProperty("display");
                }
                else {
                    document.getElementById(elementData["Id"]).style.setProperty("display", "none");
                    document.getElementById(elementData["LabelId"]).style.setProperty("display", "none");
                }
                i++;
            }
        };
        RadioButtonGroup.prototype.SetWidth = function (width) {
            this.Width = width;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                document.getElementById(elementData["LabelId"]).dataset.scitoolwidth = String(this.Width - RadioButtonGroup.circleRadioButtonWidth);
                document.getElementById(elementData["LabelId"]).style.width = String(this.Width - RadioButtonGroup.circleRadioButtonWidth) + "px";
            }
            this.RedrawRadioButtonGroup();
        };
        RadioButtonGroup.prototype.GetWidth = function () {
            return this.Width;
        };
        RadioButtonGroup.prototype.SetHeight = function (height) {
            this.Height = height;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                document.getElementById(elementData["LabelId"]).dataset.scitoolheight = String(this.Height);
                document.getElementById(elementData["LabelId"]).style.height = String(this.Height) + "px";
            }
            this.RedrawRadioButtonGroup();
        };
        RadioButtonGroup.prototype.GetHeight = function () {
            return this.Height;
        };
        RadioButtonGroup.prototype.SetDimensions = function (width, height) {
            this.Width = width;
            this.Height = height;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                document.getElementById(elementData["LabelId"]).dataset.scitoolwidth = String(this.Width - RadioButtonGroup.circleRadioButtonWidth);
                document.getElementById(elementData["LabelId"]).style.width = String(this.Width - RadioButtonGroup.circleRadioButtonWidth) + "px";
                document.getElementById(elementData["LabelId"]).dataset.scitoolheight = String(this.Height);
                document.getElementById(elementData["LabelId"]).style.height = String(this.Height) + "px";
            }
            this.RedrawRadioButtonGroup();
        };
        RadioButtonGroup.prototype.GetInViewFinder = function () {
            var X;
            var Y;
            var Z = this.Z;
            var incrementoX;
            var incrementoY;
            if (this.Direction == sci.Const.Vertical) {
                incrementoX = 0;
                incrementoY = this.Height;
            }
            else {
                incrementoX = this.Width;
                incrementoY = 0;
            }
            var i = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                X = this.X + i * incrementoX;
                Y = this.Y + i * incrementoY;
                if (Table.InViewFinder(X, Y, Z, this.Width, this.Height, this.CrossZ)) {
                    return true;
                }
                i++;
            }
            return false;
        };
        RadioButtonGroup.prototype.SetVisible = function (visible) {
            this.Visible = visible;
            var visibilidad;
            if (visible === true) {
                visibilidad = 'visible';
            }
            else {
                visibilidad = 'hidden';
            }
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                document.getElementById(elementData["Id"]).style.visibility = visibilidad;
                document.getElementById(elementData["LabelId"]).style.visibility = visibilidad;
            }
        };
        RadioButtonGroup.prototype.GetVisible = function () {
            return this.Visible;
        };
        RadioButtonGroup.prototype.SetColor = function (color) {
            this.Color = color;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                if (this.GetEnabled(elementData["Id"])) {
                    document.getElementById(elementData["LabelId"]).style.color = color;
                }
            }
        };
        RadioButtonGroup.prototype.GetColor = function () {
            return this.Color;
        };
        RadioButtonGroup.prototype.SetBackColor = function (backColor) {
            this.BackColor = backColor;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                if (this.GetEnabled(elementData["Id"])) {
                    document.getElementById(elementData["LabelId"]).style.backgroundColor = backColor;
                }
            }
        };
        RadioButtonGroup.prototype.GetBackColor = function () {
            return this.BackColor;
        };
        RadioButtonGroup.prototype.SetTabIndex = function (tabIndex) {
            if (this.Length >= 1) {
                this.TabIndex = tabIndex;
                document.getElementById(this.elements[0]["Id"]).tabIndex = tabIndex;
            }
        };
        RadioButtonGroup.prototype.GetTabIndex = function () {
            return this.TabIndex;
        };
        RadioButtonGroup.prototype.RestoreTabIndex = function () {
            this.SetTabIndex(0);
        };
        RadioButtonGroup.prototype.SetZIndex = function (zIndex) {
            this.ZIndex = zIndex;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                document.getElementById(elementData["Id"]).style.zIndex = zIndex;
                if (!isNaN(Number(zIndex))) {
                    zIndex = String(Number(zIndex) + 1);
                }
                document.getElementById(elementData["LabelId"]).style.zIndex = zIndex;
                if (!isNaN(Number(zIndex))) {
                    zIndex = String(Number(zIndex) + 1);
                }
            }
        };
        RadioButtonGroup.prototype.GetZIndex = function () {
            return this.ZIndex;
        };
        RadioButtonGroup.prototype.RestoreZIndex = function () {
            this.SetZIndex("auto");
        };
        RadioButtonGroup.prototype.GetFontSize = function () {
            return this.FontSize;
        };
        RadioButtonGroup.prototype.SetFontFamily = function (fontFamily) {
            this.FontFamily = fontFamily;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                document.getElementById(elementData["LabelId"]).style.fontFamily = fontFamily;
            }
        };
        RadioButtonGroup.prototype.GetFontFamily = function () {
            return this.FontFamily;
        };
        RadioButtonGroup.prototype.SetSelected = function (id, selected) {
            if (typeof id === 'number') {
                document.getElementById(this.elements[id - 1]["Id"]).checked = selected;
            }
            else {
                document.getElementById(id).checked = selected;
            }
        };
        RadioButtonGroup.prototype.GetSelected = function () {
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                if (document.getElementById(elementData["Id"]).checked === true) {
                    return document.getElementById(elementData["Id"]).value;
                }
            }
            return false;
        };
        RadioButtonGroup.prototype.GetSelectedNumber = function () {
            var i = 1;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                if (document.getElementById(elementData["Id"]).checked === true) {
                    return i;
                }
                i++;
            }
            return false;
        };
        RadioButtonGroup.prototype.SetEnabled = function (id, enabled) {
            if (id === void 0) { id = ""; }
            //TRUCO para hacer al parámetro id opcional: si solo se recibe un único parámetro booleano, entonces ese valor viene en el parámetro id y enabled viene undefined,
            //entonces, se hace enabled = id y se aplica el valor true o false guardado en enabled a todos los elementos del grupo.
            if (enabled !== undefined) {
                if (enabled) {
                    if (typeof id === 'number') {
                        document.getElementById(this.elements[id - 1]["Id"]).removeAttribute("disabled");
                    }
                    else {
                        document.getElementById(id).removeAttribute("disabled");
                    }
                    this.SetColor(this.GetColor());
                    this.SetBackColor(this.GetBackColor());
                }
                else {
                    if (typeof id === 'number') {
                        document.getElementById(this.elements[id - 1]["Id"]).setAttribute("disabled", "disabled");
                    }
                    else {
                        document.getElementById(id).setAttribute("disabled", "disabled");
                    }
                    this.SetDisabledColor(this.GetDisabledColor());
                    this.SetBackColor(this.GetBackColor());
                }
            }
            else {
                enabled = id; //Solo vino un parámetro: el booleano, para enabled, pero vino, por tanto, en el parámetro id.
                if (enabled) {
                    for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                        var elementData = _a[_i];
                        document.getElementById(elementData["Id"]).removeAttribute("disabled");
                        document.getElementById(elementData["LabelId"]).style.color = this.GetColor();
                        document.getElementById(elementData["LabelId"]).style.backgroundColor = this.GetBackColor();
                    }
                }
                else {
                    for (var _b = 0, _c = this.elements; _b < _c.length; _b++) {
                        var elementData = _c[_b];
                        document.getElementById(elementData["Id"]).setAttribute("disabled", "disabled");
                        document.getElementById(elementData["LabelId"]).style.color = this.GetDisabledColor();
                        document.getElementById(elementData["LabelId"]).style.backgroundColor = this.GetBackColor();
                    }
                }
            }
        };
        RadioButtonGroup.prototype.GetEnabled = function (id) {
            if (typeof id === 'number') {
                if (document.getElementById(this.elements[id - 1]["Id"]).getAttribute("disabled") === null) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                if (document.getElementById(id).getAttribute("disabled") === null) {
                    return true;
                }
                else {
                    return false;
                }
            }
        };
        RadioButtonGroup.prototype.SetDisabledColor = function (color) {
            this.DisabledColor = color;
            var i = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                if (!this.GetEnabled(elementData["Id"])) {
                    document.getElementById(elementData["LabelId"]).style.color = color;
                }
                i++;
            }
        };
        RadioButtonGroup.prototype.GetDisabledColor = function () {
            return this.DisabledColor;
        };
        RadioButtonGroup.prototype.SetFocus = function () {
            document.getElementById(this.elements[0]["Id"]).focus();
        };
        RadioButtonGroup.prototype.Talk = function (message, metaMessage) {
            if (metaMessage === void 0) { metaMessage = ""; }
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (var i = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    }
                    catch (e) { }
                }
            }
            for (var _i = 0, _a = MetaObject.GetIdsStack(); _i < _a.length; _i++) {
                var idMetaobjeto = _a[_i];
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                }
                catch (e) { }
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
        };
        RadioButtonGroup.NumberOfUnnamedObjects = 0;
        RadioButtonGroup.idsStack = [];
        RadioButtonGroup.optIdsStack = []; //Lista que guarda los Ids solo de los Option Buttons, sin considerar los Labels asociados.
        RadioButtonGroup.lblIdsStack = []; //Lista que guarda los Ids de los Labels asociados a los Option Button.
        RadioButtonGroup.circleRadioButtonWidth = 22; // Ancho reservado para el círculo del RadioButton que antecede al texto.
        RadioButtonGroup.circleRadioButtonHeight = 15; // Alto reservado para el círculo del RadioButton que antecede al texto.
        return RadioButtonGroup;
    }());
    sci.RadioButtonGroup = RadioButtonGroup;
    var File = /** @class */ (function () {
        function File(metaObject, x, y, z, id) {
            var _this = this;
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            this.Id = id;
            File.idsStack.push(this.Id);
            this.MetaObject = metaObject;
            MetaObject_private.AddDataObject(this.MetaObject, this.Id, ObjectType.File);
            this.CrossZ = false;
            this.Visible = true;
            this.Color = Skin.GetFileColor();
            this.BackColor = Skin.GetFileBackColor();
            this.DisabledColor = Skin.GetFileDisabledColor();
            this.DisabledBackColor = Skin.GetFileDisabledBackColor();
            this.TabIndex = 0;
            if (scitool.GetParentDocumentId(this.Id) !== false) {
                this.ZIndex = String(Number(window[scitool.GetParentDocumentId(this.Id)].GetZIndex()) + scitool.GetMetaObjectObjectsNumber(scitool.GetParentDocumentId(this.Id)));
            }
            else {
                this.ZIndex = "auto";
            }
            this.Name = this.Id;
            this.Enabled = true;
            //Crear nodo formulario al cual pertenecerá el control file.
            var nodoFormNuevo = document.createElement("FORM");
            nodoFormNuevo.setAttribute("id", "form" + this.Id);
            nodoFormNuevo.setAttribute("name", "form" + this.Name);
            nodoFormNuevo.setAttribute("enctype", "multipart/form-data");
            document.body.appendChild(nodoFormNuevo);
            //Crear nodo del control file y añadirlo al form.
            var nodoNuevo = document.createElement("INPUT");
            nodoNuevo.setAttribute("id", this.Id);
            nodoNuevo.setAttribute("name", this.Name);
            nodoNuevo.setAttribute("type", "file");
            nodoNuevo.dataset.scitoolx = String(x);
            nodoNuevo.dataset.scitooly = String(y);
            nodoNuevo.dataset.scitoolz = String(z);
            nodoNuevo.dataset.scitoolwidth = String(Skin.GetFileWidth());
            nodoNuevo.dataset.scitoolheight = String(Skin.GetFileHeight());
            nodoNuevo.style.width = String(Skin.GetFileWidth()) + "px";
            nodoNuevo.style.height = String(Skin.GetFileHeight()) + "px";
            nodoNuevo.style.setProperty("position", "absolute");
            nodoNuevo.style.setProperty("display", "none");
            nodoFormNuevo.appendChild(nodoNuevo);
            //Implementar en el DOM las otras propiedades.
            this.SetX(this.GetX());
            this.SetY(this.GetY());
            this.SetZ(this.GetZ());
            this.SetVisible(this.GetVisible());
            this.SetColor(this.GetColor());
            this.SetBackColor(this.GetBackColor());
            this.SetTabIndex(this.GetTabIndex());
            this.SetZIndex(this.GetZIndex());
            this.SetFontSize(Skin.GetFileFontSize());
            this.SetFontFamily(Skin.GetFileFontFamily());
            this.SetCrossZ(this.GetCrossZ());
            document.getElementById(this.Id).onclick = function () {
                ////////Activar eventual documento padre de este objeto.
                //Buscar metaobjeto de este objeto.
                var datosObjeto = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                    if (objeto["ObjectId"] === _this.Id) {
                        return objeto;
                    }
                });
                //Verificar si el metaobjeto es un documento.
                var datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                    if (objeto["ObjectId"] === datosObjeto[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                        return objeto;
                    }
                });
                if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();
                    try {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(_this);
                    }
                    catch (e) { }
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                }
                ////////
                try {
                    window[_this.Id + "_OnClick"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnClick");
            };
            document.getElementById(this.Id).ondblclick = function () {
                try {
                    window[_this.Id + "_OnDblClick"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnDblClick");
            };
            document.getElementById(this.Id).onfocus = function () {
                try {
                    window[_this.Id + "_OnFocus"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnFocus");
            };
            document.getElementById(this.Id).onmouseover = function () {
                try {
                    window[_this.Id + "_OnMouseOver"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseOver");
            };
            document.getElementById(this.Id).onmousemove = function () {
                try {
                    window[_this.Id + "_OnMouseMove"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseMove");
            };
            document.getElementById(this.Id).onmousedown = function () {
                try {
                    window[_this.Id + "_OnMouseDown"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseDown");
            };
            document.getElementById(this.Id).onmouseup = function () {
                try {
                    window[_this.Id + "_OnMouseUp"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseUp");
            };
            document.getElementById(this.Id).onmouseout = function () {
                try {
                    window[_this.Id + "_OnMouseOut"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnMouseOut");
            };
            document.getElementById(this.Id).onkeydown = function (evt) {
                try {
                    window[_this.Id + "_OnKeyDown"].call(_this, evt);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnKeyDown");
            };
            document.getElementById(this.Id).onkeypress = function (evt) {
                try {
                    window[_this.Id + "_OnKeyPress"].call(_this, evt);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnKeyPress");
            };
            document.getElementById(this.Id).onkeyup = function (evt) {
                try {
                    window[_this.Id + "_OnKeyUp"].call(_this, evt);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnKeyUp");
            };
            document.getElementById(this.Id).onblur = function () {
                try {
                    window[_this.Id + "_OnBlur"].apply(_this);
                }
                catch (e) { }
                window[_this.Id].Talk(_this.Id + "_OnBlur");
            };
        }
        File.prototype.Display = function () {
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                document.getElementById(this.Id).style.removeProperty("display");
            }
            else {
                document.getElementById(this.Id).style.setProperty("display", "none");
            }
        };
        File.GetIdsStack = function () {
            return File.idsStack;
        };
        File.prototype.GetId = function () {
            return this.Id;
        };
        File.prototype.GetMetaObject = function () {
            return this.MetaObject;
        };
        File.prototype.RedrawObject = function () {
            if (this.Enabled) {
                this.SetColor(this.GetColor());
                this.SetBackColor(this.GetBackColor());
            }
            else {
                this.SetDisabledColor(this.GetDisabledColor());
                this.SetDisabledBackColor(this.GetDisabledBackColor());
            }
        };
        File.prototype.GetFile = function () {
            var input = document.getElementById(this.Id);
            if (input.files && input.files[0]) {
                return input.files[0];
            }
            else {
                return false;
            }
        };
        File.prototype.GetFileName = function () {
            var input = document.getElementById(this.Id);
            if (input.files && input.files[0]) {
                return input.files[0].name;
            }
            else {
                return false;
            }
        };
        File.prototype.GetFileType = function () {
            var input = document.getElementById(this.Id);
            if (input.files && input.files[0]) {
                return input.files[0].type;
            }
            else {
                return false;
            }
        };
        File.prototype.SetCrossZ = function (crossZ) {
            this.CrossZ = crossZ;
            var x = this.GetX();
            var y = this.GetY();
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, crossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        File.prototype.GetCrossZ = function () {
            return this.CrossZ;
        };
        File.prototype.SetX = function (x) {
            var X = x;
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolx = String(x);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                x -= Table.GetViewFinderX();
                document.getElementById(this.Id).style.left = String(x) + "px";
            }
            this.Display();
        };
        File.prototype.GetX = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        };
        File.prototype.SetY = function (y) {
            var Y = y;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitooly = String(y);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        File.prototype.GetY = function () {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        };
        File.prototype.SetZ = function (z) {
            var Z = z;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            this.Display();
        };
        File.prototype.GetZ = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        };
        File.prototype.SetXYZ = function (x, y, z) {
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(x, y, z, Width, Height, CrossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        File.prototype.SetWidth = function (width) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
        };
        File.prototype.GetWidth = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolwidth);
        };
        File.prototype.SetHeight = function (height) {
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        };
        File.prototype.GetHeight = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolheight);
        };
        File.prototype.SetDimensions = function (width, height) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        };
        File.prototype.GetInViewFinder = function () {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        };
        File.prototype.SetVisible = function (visible) {
            this.Visible = visible;
            if (visible === true) {
                document.getElementById(this.Id).style.visibility = 'visible';
            }
            else {
                document.getElementById(this.Id).style.visibility = 'hidden';
            }
        };
        File.prototype.GetVisible = function () {
            return this.Visible;
        };
        File.prototype.SetColor = function (color) {
            this.Color = color;
            if (this.Enabled) {
                document.getElementById(this.Id).style.color = color;
            }
        };
        File.prototype.GetColor = function () {
            return this.Color;
        };
        File.prototype.SetBackColor = function (backcolor) {
            this.BackColor = backcolor;
            if (this.Enabled) {
                document.getElementById(this.Id).style.backgroundColor = this.BackColor;
            }
        };
        File.prototype.GetBackColor = function () {
            return this.BackColor;
        };
        File.prototype.SetDisabledColor = function (color) {
            this.DisabledColor = color;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.color = color;
            }
        };
        File.prototype.GetDisabledColor = function () {
            return this.DisabledColor;
        };
        File.prototype.SetDisabledBackColor = function (backColor) {
            this.DisabledBackColor = backColor;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.backgroundColor = this.DisabledBackColor;
            }
        };
        File.prototype.GetDisabledBackColor = function () {
            return this.DisabledBackColor;
        };
        File.prototype.SetTabIndex = function (tabIndex) {
            this.TabIndex = tabIndex;
            document.getElementById(this.Id).tabIndex = tabIndex;
        };
        File.prototype.GetTabIndex = function () {
            return this.TabIndex;
        };
        File.prototype.RestoreTabIndex = function () {
            this.SetTabIndex(0);
        };
        File.prototype.SetZIndex = function (zIndex) {
            this.ZIndex = zIndex;
            document.getElementById(this.Id).style.zIndex = zIndex;
        };
        File.prototype.GetZIndex = function () {
            return this.ZIndex;
        };
        File.prototype.RestoreZIndex = function () {
            this.SetZIndex("auto");
        };
        File.prototype.SetName = function (name) {
            this.Name = name;
            document.getElementById(this.Id).setAttribute("name", name);
        };
        File.prototype.GetName = function () {
            return this.Name;
        };
        File.prototype.SetEnabled = function (enabled) {
            this.Enabled = enabled;
            if (enabled) {
                document.getElementById(this.Id).removeAttribute("disabled");
            }
            else {
                document.getElementById(this.Id).setAttribute("disabled", "disabled");
            }
            this.RedrawObject();
        };
        File.prototype.GetEnabled = function () {
            return this.Enabled;
        };
        File.prototype.SetFontSize = function (fontSize) {
            this.FontSize = fontSize;
            document.getElementById(this.Id).style.fontSize = String(fontSize) + "px";
        };
        File.prototype.GetFontSize = function () {
            return this.FontSize;
        };
        File.prototype.SetFontFamily = function (fontFamily) {
            this.FontFamily = fontFamily;
            document.getElementById(this.Id).style.fontFamily = fontFamily;
        };
        File.prototype.GetFontFamily = function () {
            return this.FontFamily;
        };
        File.prototype.SetFocus = function () {
            document.getElementById(this.Id).focus();
        };
        File.prototype.Clear = function () {
            var formulario = document.getElementById("form" + this.Id);
            formulario.reset();
        };
        File.prototype.Talk = function (message, metaMessage) {
            if (metaMessage === void 0) { metaMessage = ""; }
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (var i = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    }
                    catch (e) { }
                }
            }
            for (var _i = 0, _a = MetaObject.GetIdsStack(); _i < _a.length; _i++) {
                var idMetaobjeto = _a[_i];
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                }
                catch (e) { }
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
        };
        File.NumberOfUnnamedObjects = 0;
        File.idsStack = [];
        return File;
    }());
    sci.File = File;
    var Canvas = /** @class */ (function () {
        function Canvas(metaObject, x, y, z, width, height, id) {
            var _this = this;
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            this.Id = id;
            Canvas.idsStack.push(this.Id);
            this.MetaObject = metaObject;
            MetaObject_private.AddDataObject(this.MetaObject, this.Id, ObjectType.Canvas);
            this.CrossZ = false;
            this.Visible = true;
            this.Width = width;
            this.Height = height;
            this.TabIndex = -1;
            if (scitool.GetParentDocumentId(this.Id) !== false) {
                this.ZIndex = String(Number(window[scitool.GetParentDocumentId(this.Id)].GetZIndex()) + scitool.GetMetaObjectObjectsNumber(scitool.GetParentDocumentId(this.Id)));
            }
            else {
                this.ZIndex = "auto";
            }
            this.Enabled = true;
            //Crear nodo Canvas.
            var nodoNuevo = document.createElement("CANVAS");
            nodoNuevo.setAttribute("id", this.Id);
            nodoNuevo.dataset.scitoolx = String(x);
            nodoNuevo.dataset.scitooly = String(y);
            nodoNuevo.dataset.scitoolz = String(z);
            nodoNuevo.dataset.scitoolwidth = String(width);
            nodoNuevo.dataset.scitoolheight = String(height);
            nodoNuevo.setAttribute("width", String(width) + "px");
            nodoNuevo.setAttribute("height", String(height) + "px");
            nodoNuevo.style.setProperty("position", "absolute");
            nodoNuevo.style.setProperty("display", "none");
            nodoNuevo.style.outline = "0";
            document.body.appendChild(nodoNuevo);
            //Implementar en el DOM las otras propiedades en el nodo.
            this.SetX(this.GetX());
            this.SetY(this.GetY());
            this.SetZ(this.GetZ());
            this.SetVisible(this.GetVisible());
            this.SetTabIndex(this.GetTabIndex());
            this.SetZIndex(this.GetZIndex());
            this.SetCrossZ(this.GetCrossZ());
            document.getElementById(this.Id).onclick = function () {
                if (_this.Enabled) {
                    ////////Activar eventual documento padre de este objeto.
                    //Buscar metaobjeto de este objeto.
                    var datosObjeto_4 = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                        if (objeto["ObjectId"] === _this.Id) {
                            return objeto;
                        }
                    });
                    //Verificar si el metaobjeto es un documento.
                    var datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                        if (objeto["ObjectId"] === datosObjeto_4[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                            return objeto;
                        }
                    });
                    if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();
                        try {
                            window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(_this);
                        }
                        catch (e) { }
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                    }
                    ////////
                    try {
                        window[_this.Id + "_OnClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnClick");
                }
            };
            document.getElementById(this.Id).ondblclick = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnDblClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnDblClick");
                }
            };
            document.getElementById(this.Id).onfocus = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnFocus"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnFocus");
                }
            };
            document.getElementById(this.Id).onmouseover = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseOver"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseOver");
                }
            };
            document.getElementById(this.Id).onmousemove = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseMove"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseMove");
                }
            };
            document.getElementById(this.Id).onmousedown = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseDown"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseDown");
                }
            };
            document.getElementById(this.Id).onmouseup = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseUp"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseUp");
                }
            };
            document.getElementById(this.Id).onmouseout = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseOut"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseOut");
                }
            };
            document.getElementById(this.Id).onkeydown = function (evt) {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnKeyDown"].call(_this, evt);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnKeyDown");
                }
            };
            document.getElementById(this.Id).onkeypress = function (evt) {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnKeyPress"].call(_this, evt);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnKeyPress");
                }
            };
            document.getElementById(this.Id).onkeyup = function (evt) {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnKeyUp"].call(_this, evt);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnKeyUp");
                }
            };
            document.getElementById(this.Id).onblur = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnBlur"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnBlur");
                }
            };
        }
        Canvas.prototype.Display = function () {
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                document.getElementById(this.Id).style.removeProperty("display");
            }
            else {
                document.getElementById(this.Id).style.setProperty("display", "none");
            }
        };
        Canvas.GetIdsStack = function () {
            return Canvas.idsStack;
        };
        Canvas.prototype.GetId = function () {
            return this.Id;
        };
        Canvas.prototype.GetMetaObject = function () {
            return this.MetaObject;
        };
        Canvas.prototype.GetWidth = function () {
            return this.Width;
        };
        Canvas.prototype.GetHeight = function () {
            return this.Height;
        };
        Canvas.prototype.Erase = function () {
            var canvas = document.getElementById(this.Id);
            var figura = canvas.getContext('2d');
            figura.clearRect(0, 0, this.Width, this.Height);
        };
        Canvas.prototype.SetCrossZ = function (crossZ) {
            this.CrossZ = crossZ;
            var x = this.GetX();
            var y = this.GetY();
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, crossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        Canvas.prototype.GetCrossZ = function () {
            return this.CrossZ;
        };
        Canvas.prototype.SetX = function (x) {
            var X = x;
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolx = String(x);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                x -= Table.GetViewFinderX();
                document.getElementById(this.Id).style.left = String(x) + "px";
            }
            this.Display();
        };
        Canvas.prototype.GetX = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        };
        Canvas.prototype.SetY = function (y) {
            var Y = y;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitooly = String(y);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        Canvas.prototype.GetY = function () {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        };
        Canvas.prototype.SetZ = function (z) {
            var Z = z;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            this.Display();
        };
        Canvas.prototype.GetZ = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        };
        Canvas.prototype.SetXYZ = function (x, y, z) {
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(x, y, z, Width, Height, CrossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        Canvas.prototype.GetInViewFinder = function () {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        };
        Canvas.prototype.SetVisible = function (visible) {
            this.Visible = visible;
            if (visible === true) {
                document.getElementById(this.Id).style.visibility = 'visible';
            }
            else {
                document.getElementById(this.Id).style.visibility = 'hidden';
            }
        };
        Canvas.prototype.GetVisible = function () {
            return this.Visible;
        };
        Canvas.prototype.SetTabIndex = function (tabIndex) {
            this.TabIndex = tabIndex;
            document.getElementById(this.Id).tabIndex = tabIndex;
        };
        Canvas.prototype.GetTabIndex = function () {
            return this.TabIndex;
        };
        Canvas.prototype.RestoreTabIndex = function () {
            this.SetTabIndex(-1);
        };
        Canvas.prototype.SetZIndex = function (zIndex) {
            this.ZIndex = zIndex;
            document.getElementById(this.Id).style.zIndex = zIndex;
        };
        Canvas.prototype.GetZIndex = function () {
            return this.ZIndex;
        };
        Canvas.prototype.RestoreZIndex = function () {
            this.SetZIndex("auto");
        };
        Canvas.prototype.SetEnabled = function (enabled) {
            this.Enabled = enabled;
            if (enabled) {
                document.getElementById(this.Id).removeAttribute("disabled");
            }
            else {
                document.getElementById(this.Id).setAttribute("disabled", "disabled");
            }
        };
        Canvas.prototype.GetEnabled = function () {
            return this.Enabled;
        };
        Canvas.prototype.SetFocus = function () {
            document.getElementById(this.Id).focus();
        };
        Canvas.prototype.Talk = function (message, metaMessage) {
            if (metaMessage === void 0) { metaMessage = ""; }
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (var i = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    }
                    catch (e) { }
                }
            }
            for (var _i = 0, _a = MetaObject.GetIdsStack(); _i < _a.length; _i++) {
                var idMetaobjeto = _a[_i];
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                }
                catch (e) { }
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
        };
        Canvas.NumberOfUnnamedObjects = 0;
        Canvas.idsStack = [];
        return Canvas;
    }());
    sci.Canvas = Canvas;
    var Box = /** @class */ (function () {
        function Box(metaObject, x, y, z, width, height, borderWidth, borderColor, fillColor, id) {
            var _this = this;
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (borderWidth === void 0) { borderWidth = Skin.GetBoxBorderWidth(); }
            if (borderColor === void 0) { borderColor = Skin.GetBoxBorderColor(); }
            if (fillColor === void 0) { fillColor = Skin.GetBoxFillColor(); }
            this.Id = id;
            Box.idsStack.push(this.Id);
            this.MetaObject = metaObject;
            MetaObject_private.AddDataObject(this.MetaObject, this.Id, ObjectType.Box);
            this.CrossZ = false;
            this.Visible = true;
            this.BorderColor = borderColor;
            this.FillColor = fillColor;
            this.Width = width;
            this.Height = height;
            this.BorderWidth = borderWidth;
            this.TabIndex = -1;
            if (scitool.GetParentDocumentId(this.Id) !== false) {
                this.ZIndex = String(Number(window[scitool.GetParentDocumentId(this.Id)].GetZIndex()) + scitool.GetMetaObjectObjectsNumber(scitool.GetParentDocumentId(this.Id)));
            }
            else {
                this.ZIndex = "auto";
            }
            this.Enabled = true;
            this.Raised = false;
            //Crear nodo Canvas.
            var nodoNuevo = document.createElement("CANVAS");
            nodoNuevo.setAttribute("id", this.Id);
            nodoNuevo.dataset.scitoolx = String(x);
            nodoNuevo.dataset.scitooly = String(y);
            nodoNuevo.dataset.scitoolz = String(z);
            nodoNuevo.dataset.scitoolwidth = String(width);
            nodoNuevo.dataset.scitoolheight = String(height);
            nodoNuevo.setAttribute("width", String(width) + "px");
            nodoNuevo.setAttribute("height", String(height) + "px");
            nodoNuevo.style.setProperty("position", "absolute");
            nodoNuevo.style.setProperty("display", "none");
            nodoNuevo.style.outline = "0";
            document.body.appendChild(nodoNuevo);
            //Crear nodo para la figura.
            if (nodoNuevo.getContext) {
                var figura = nodoNuevo.getContext('2d');
                figura.fillStyle = borderColor;
                figura.fillRect(0, 0, width, height);
                figura.fillStyle = fillColor;
                figura.fillRect(borderWidth, borderWidth, width - 2 * borderWidth, height - 2 * borderWidth);
            }
            //Implementar en el DOM las otras propiedades en el nodo.
            this.SetX(this.GetX());
            this.SetY(this.GetY());
            this.SetZ(this.GetZ());
            this.SetVisible(this.GetVisible());
            this.SetTabIndex(this.GetTabIndex());
            this.SetZIndex(this.GetZIndex());
            this.SetCrossZ(this.GetCrossZ());
            document.getElementById(this.Id).onclick = function () {
                if (_this.Enabled) {
                    ////////Activar eventual documento padre de este objeto.
                    //Buscar metaobjeto de este objeto.
                    var datosObjeto_5 = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                        if (objeto["ObjectId"] === _this.Id) {
                            return objeto;
                        }
                    });
                    //Verificar si el metaobjeto es un documento.
                    var datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                        if (objeto["ObjectId"] === datosObjeto_5[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                            return objeto;
                        }
                    });
                    if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();
                        try {
                            window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(_this);
                        }
                        catch (e) { }
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                    }
                    ////////
                    try {
                        window[_this.Id + "_OnClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnClick");
                }
            };
            document.getElementById(this.Id).ondblclick = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnDblClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnDblClick");
                }
            };
            document.getElementById(this.Id).onfocus = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnFocus"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnFocus");
                }
            };
            document.getElementById(this.Id).onmouseover = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseOver"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseOver");
                }
            };
            document.getElementById(this.Id).onmousemove = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseMove"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseMove");
                }
            };
            document.getElementById(this.Id).onmousedown = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseDown"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseDown");
                }
            };
            document.getElementById(this.Id).onmouseup = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseUp"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseUp");
                }
            };
            document.getElementById(this.Id).onmouseout = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseOut"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseOut");
                }
            };
            document.getElementById(this.Id).onkeydown = function (evt) {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnKeyDown"].call(_this, evt);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnKeyDown");
                }
            };
            document.getElementById(this.Id).onkeypress = function (evt) {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnKeyPress"].call(_this, evt);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnKeyPress");
                }
            };
            document.getElementById(this.Id).onkeyup = function (evt) {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnKeyUp"].call(_this, evt);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnKeyUp");
                }
            };
            document.getElementById(this.Id).onblur = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnBlur"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnBlur");
                }
            };
        }
        Box.prototype.Display = function () {
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                document.getElementById(this.Id).style.removeProperty("display");
            }
            else {
                document.getElementById(this.Id).style.setProperty("display", "none");
            }
        };
        Box.GetIdsStack = function () {
            return Box.idsStack;
        };
        Box.prototype.GetId = function () {
            return this.Id;
        };
        Box.prototype.GetMetaObject = function () {
            return this.MetaObject;
        };
        Box.prototype.RedrawObject = function () {
            var canvas = document.getElementById(this.Id);
            //Borrar contenido del canvas.
            var figura = canvas.getContext('2d');
            figura.clearRect(0, 0, this.Width, this.Height);
            //Redibujar figura.
            figura.fillStyle = this.BorderColor;
            figura.fillRect(0, 0, this.Width, this.Height);
            figura.fillStyle = this.FillColor;
            figura.fillRect(this.BorderWidth, this.BorderWidth, this.Width - 2 * this.BorderWidth, this.Height - 2 * this.BorderWidth);
        };
        Box.prototype.SetCrossZ = function (crossZ) {
            this.CrossZ = crossZ;
            var x = this.GetX();
            var y = this.GetY();
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, crossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        Box.prototype.GetCrossZ = function () {
            return this.CrossZ;
        };
        Box.prototype.SetX = function (x) {
            var X = x;
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolx = String(x);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                x -= Table.GetViewFinderX();
                document.getElementById(this.Id).style.left = String(x) + "px";
            }
            this.Display();
        };
        Box.prototype.GetX = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        };
        Box.prototype.SetY = function (y) {
            var Y = y;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitooly = String(y);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        Box.prototype.GetY = function () {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        };
        Box.prototype.SetZ = function (z) {
            var Z = z;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            this.Display();
        };
        Box.prototype.GetZ = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        };
        Box.prototype.SetXYZ = function (x, y, z) {
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(x, y, z, Width, Height, CrossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        Box.prototype.SetWidth = function (width) {
            this.Width = width;
            //Fijar Width del canvas.
            var canvas = document.getElementById(this.Id);
            canvas.dataset.scitoolwidth = String(width);
            canvas.setAttribute("width", String(width) + "px");
            this.RedrawObject();
        };
        Box.prototype.GetWidth = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolwidth);
        };
        Box.prototype.SetHeight = function (height) {
            this.Height = height;
            //Fijar Height del canvas.
            var canvas = document.getElementById(this.Id);
            canvas.dataset.scitoolheight = String(height);
            canvas.setAttribute("height", String(height) + "px");
            this.RedrawObject();
        };
        Box.prototype.GetHeight = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolheight);
        };
        Box.prototype.SetDimensions = function (width, height) {
            this.SetWidth(width);
            this.SetHeight(height);
        };
        Box.prototype.Raise = function () {
            this.Raised = true;
            document.getElementById(this.Id).style.setProperty("position", "fixed");
        };
        Box.prototype.Unraise = function () {
            this.Raised = false;
            document.getElementById(this.Id).style.setProperty("position", "absolute");
        };
        Box.prototype.GetRaised = function () {
            return this.Raised;
        };
        Box.prototype.GetInViewFinder = function () {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        };
        Box.prototype.SetVisible = function (visible) {
            this.Visible = visible;
            if (visible === true) {
                document.getElementById(this.Id).style.visibility = 'visible';
            }
            else {
                document.getElementById(this.Id).style.visibility = 'hidden';
            }
        };
        Box.prototype.GetVisible = function () {
            return this.Visible;
        };
        Box.prototype.SetBorderColor = function (color) {
            this.BorderColor = color;
            this.RedrawObject();
        };
        Box.prototype.GetBorderColor = function () {
            return this.BorderColor;
        };
        Box.prototype.SetBorderWidth = function (width) {
            this.BorderWidth = width;
            this.RedrawObject();
        };
        Box.prototype.GetBorderWidth = function () {
            return this.BorderWidth;
        };
        Box.prototype.SetFillColor = function (fillColor) {
            this.FillColor = fillColor;
            this.RedrawObject();
        };
        Box.prototype.GetFillColor = function () {
            return this.FillColor;
        };
        Box.prototype.SetTabIndex = function (tabIndex) {
            this.TabIndex = tabIndex;
            document.getElementById(this.Id).tabIndex = tabIndex;
        };
        Box.prototype.GetTabIndex = function () {
            return this.TabIndex;
        };
        Box.prototype.RestoreTabIndex = function () {
            this.SetTabIndex(-1);
        };
        Box.prototype.SetZIndex = function (zIndex) {
            this.ZIndex = zIndex;
            document.getElementById(this.Id).style.zIndex = zIndex;
        };
        Box.prototype.GetZIndex = function () {
            return this.ZIndex;
        };
        Box.prototype.RestoreZIndex = function () {
            this.SetZIndex("auto");
        };
        Box.prototype.SetEnabled = function (enabled) {
            this.Enabled = enabled;
            if (enabled) {
                document.getElementById(this.Id).removeAttribute("disabled");
            }
            else {
                document.getElementById(this.Id).setAttribute("disabled", "disabled");
            }
        };
        Box.prototype.GetEnabled = function () {
            return this.Enabled;
        };
        Box.prototype.SetFocus = function () {
            document.getElementById(this.Id).focus();
        };
        Box.prototype.Talk = function (message, metaMessage) {
            if (metaMessage === void 0) { metaMessage = ""; }
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (var i = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    }
                    catch (e) { }
                }
            }
            for (var _i = 0, _a = MetaObject.GetIdsStack(); _i < _a.length; _i++) {
                var idMetaobjeto = _a[_i];
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                }
                catch (e) { }
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
        };
        Box.NumberOfUnnamedObjects = 0;
        Box.idsStack = [];
        return Box;
    }());
    sci.Box = Box;
    var Ellipse = /** @class */ (function () {
        function Ellipse(metaObject, x, y, z, width, height, borderWidth, borderColor, fillColor, id) {
            var _this = this;
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (borderWidth === void 0) { borderWidth = Skin.GetEllipseBorderWidth(); }
            if (borderColor === void 0) { borderColor = Skin.GetEllipseBorderColor(); }
            if (fillColor === void 0) { fillColor = Skin.GetEllipseFillColor(); }
            this.Id = id;
            Ellipse.idsStack.push(this.Id);
            this.MetaObject = metaObject;
            MetaObject_private.AddDataObject(this.MetaObject, this.Id, ObjectType.Ellipse);
            this.CrossZ = false;
            this.Visible = true;
            this.BorderColor = borderColor;
            this.FillColor = fillColor;
            this.Width = width;
            this.Height = height;
            this.BorderWidth = borderWidth;
            this.TabIndex = -1;
            if (scitool.GetParentDocumentId(this.Id) !== false) {
                this.ZIndex = String(Number(window[scitool.GetParentDocumentId(this.Id)].GetZIndex()) + scitool.GetMetaObjectObjectsNumber(scitool.GetParentDocumentId(this.Id)));
            }
            else {
                this.ZIndex = "auto";
            }
            this.Enabled = true;
            //Crear nodo Canvas.
            var nodoNuevo = document.createElement("CANVAS");
            nodoNuevo.setAttribute("id", this.Id);
            nodoNuevo.dataset.scitoolx = String(x);
            nodoNuevo.dataset.scitooly = String(y);
            nodoNuevo.dataset.scitoolz = String(z);
            nodoNuevo.dataset.scitoolwidth = String(width);
            nodoNuevo.dataset.scitoolheight = String(height);
            nodoNuevo.setAttribute("width", String(width) + "px");
            nodoNuevo.setAttribute("height", String(height) + "px");
            nodoNuevo.style.setProperty("position", "absolute");
            nodoNuevo.style.setProperty("display", "none");
            nodoNuevo.style.outline = "0";
            document.body.appendChild(nodoNuevo);
            //Crear nodo para la figura.
            if (nodoNuevo.getContext) {
                if (nodoNuevo && nodoNuevo.getContext) {
                    var figura = nodoNuevo.getContext("2d");
                    if (figura) {
                        var kappa = 0.5522847498;
                        var ellipseWidth = width;
                        var ellipseHeight = height;
                        var offsetX = (ellipseWidth / 2) * kappa;
                        var offsetY = (ellipseHeight / 2) * kappa;
                        var endX = ellipseWidth;
                        var endY = ellipseHeight;
                        var halfX = ellipseWidth / 2;
                        var halfY = ellipseHeight / 2;
                        this.dibujarElipse(figura, 0, 0, ellipseWidth, ellipseHeight, borderColor);
                        this.dibujarElipse(figura, borderWidth, borderWidth, ellipseWidth - 2 * borderWidth, ellipseHeight - 2 * borderWidth, fillColor);
                    }
                }
            }
            //Implementar en el DOM las otras propiedades en el nodo.
            this.SetX(this.GetX());
            this.SetY(this.GetY());
            this.SetZ(this.GetZ());
            this.SetVisible(this.GetVisible());
            this.SetTabIndex(this.GetTabIndex());
            this.SetZIndex(this.GetZIndex());
            this.SetCrossZ(this.GetCrossZ());
            document.getElementById(this.Id).onclick = function () {
                if (_this.Enabled) {
                    ////////Activar eventual documento padre de este objeto.
                    //Buscar metaobjeto de este objeto.
                    var datosObjeto_6 = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                        if (objeto["ObjectId"] === _this.Id) {
                            return objeto;
                        }
                    });
                    //Verificar si el metaobjeto es un documento.
                    var datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                        if (objeto["ObjectId"] === datosObjeto_6[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                            return objeto;
                        }
                    });
                    if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();
                        try {
                            window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(_this);
                        }
                        catch (e) { }
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                    }
                    ////////
                    try {
                        window[_this.Id + "_OnClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnClick");
                }
            };
            document.getElementById(this.Id).ondblclick = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnDblClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnDblClick");
                }
            };
            document.getElementById(this.Id).onfocus = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnFocus"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnFocus");
                }
            };
            document.getElementById(this.Id).onmouseover = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseOver"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseOver");
                }
            };
            document.getElementById(this.Id).onmousemove = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseMove"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseMove");
                }
            };
            document.getElementById(this.Id).onmousedown = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseDown"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseDown");
                }
            };
            document.getElementById(this.Id).onmouseup = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseUp"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseUp");
                }
            };
            document.getElementById(this.Id).onmouseout = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseOut"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseOut");
                }
            };
            document.getElementById(this.Id).onkeydown = function (evt) {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnKeyDown"].call(_this, evt);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnKeyDown");
                }
            };
            document.getElementById(this.Id).onkeypress = function (evt) {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnKeyPress"].call(_this, evt);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnKeyPress");
                }
            };
            document.getElementById(this.Id).onkeyup = function (evt) {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnKeyUp"].call(_this, evt);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnKeyUp");
                }
            };
            document.getElementById(this.Id).onblur = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnBlur"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnBlur");
                }
            };
        }
        Ellipse.prototype.Display = function () {
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                document.getElementById(this.Id).style.removeProperty("display");
            }
            else {
                document.getElementById(this.Id).style.setProperty("display", "none");
            }
        };
        Ellipse.prototype.dibujarElipse = function (figura, x, y, width, height, color) {
            var kappa = 0.5522847498;
            var offsetX = (width / 2) * kappa;
            var offsetY = (height / 2) * kappa;
            var endX = x + width;
            var endY = y + height;
            var halfX = x + width / 2;
            var halfY = y + height / 2;
            figura.beginPath();
            figura.moveTo(x, halfY);
            figura.bezierCurveTo(x, halfY - offsetY, halfX - offsetX, y, halfX, y);
            figura.bezierCurveTo(halfX + offsetX, y, endX, halfY - offsetY, endX, halfY);
            figura.bezierCurveTo(endX, halfY + offsetY, halfX + offsetX, endY, halfX, endY);
            figura.bezierCurveTo(halfX - offsetX, endY, x, halfY + offsetY, x, halfY);
            figura.closePath();
            figura.fillStyle = color;
            figura.fill();
        };
        Ellipse.GetIdsStack = function () {
            return Ellipse.idsStack;
        };
        Ellipse.prototype.GetId = function () {
            return this.Id;
        };
        Ellipse.prototype.GetMetaObject = function () {
            return this.MetaObject;
        };
        Ellipse.prototype.RedrawObject = function () {
            var canvas = document.getElementById(this.Id);
            //Borrar contenido del canvas.
            var figura = canvas.getContext('2d');
            figura.clearRect(0, 0, this.Width, this.Height);
            //Redibujar figura.
            if (figura) {
                var kappa = 0.5522847498;
                var ellipseWidth = this.Width;
                var ellipseHeight = this.Height;
                var offsetX = (ellipseWidth / 2) * kappa;
                var offsetY = (ellipseHeight / 2) * kappa;
                var endX = ellipseWidth;
                var endY = ellipseHeight;
                var halfX = ellipseWidth / 2;
                var halfY = ellipseHeight / 2;
                this.dibujarElipse(figura, 0, 0, ellipseWidth, ellipseHeight, this.BorderColor);
                this.dibujarElipse(figura, this.BorderWidth, this.BorderWidth, ellipseWidth - 2 * this.BorderWidth, ellipseHeight - 2 * this.BorderWidth, this.FillColor);
            }
        };
        Ellipse.prototype.SetCrossZ = function (crossZ) {
            this.CrossZ = crossZ;
            var x = this.GetX();
            var y = this.GetY();
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, crossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        Ellipse.prototype.GetCrossZ = function () {
            return this.CrossZ;
        };
        Ellipse.prototype.SetX = function (x) {
            var X = x;
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolx = String(x);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                x -= Table.GetViewFinderX();
                document.getElementById(this.Id).style.left = String(x) + "px";
            }
            this.Display();
        };
        Ellipse.prototype.GetX = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        };
        Ellipse.prototype.SetY = function (y) {
            var Y = y;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitooly = String(y);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        Ellipse.prototype.GetY = function () {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        };
        Ellipse.prototype.SetZ = function (z) {
            var Z = z;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            this.Display();
        };
        Ellipse.prototype.GetZ = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        };
        Ellipse.prototype.SetXYZ = function (x, y, z) {
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(x, y, z, Width, Height, CrossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        Ellipse.prototype.SetWidth = function (width) {
            this.Width = width;
            //Fijar Width del canvas.
            var canvas = document.getElementById(this.Id);
            canvas.dataset.scitoolwidth = String(width);
            canvas.setAttribute("width", String(width) + "px");
            this.RedrawObject();
        };
        Ellipse.prototype.GetWidth = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolwidth);
        };
        Ellipse.prototype.SetHeight = function (height) {
            this.Height = height;
            //Fijar Height del canvas.
            var canvas = document.getElementById(this.Id);
            canvas.dataset.scitoolheight = String(height);
            canvas.setAttribute("height", String(height) + "px");
            this.RedrawObject();
        };
        Ellipse.prototype.GetHeight = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolheight);
        };
        Ellipse.prototype.SetDimensions = function (width, height) {
            this.SetWidth(width);
            this.SetHeight(height);
        };
        Ellipse.prototype.GetInViewFinder = function () {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        };
        Ellipse.prototype.SetVisible = function (visible) {
            this.Visible = visible;
            if (visible === true) {
                document.getElementById(this.Id).style.visibility = 'visible';
            }
            else {
                document.getElementById(this.Id).style.visibility = 'hidden';
            }
        };
        Ellipse.prototype.GetVisible = function () {
            return this.Visible;
        };
        Ellipse.prototype.SetBorderColor = function (color) {
            this.BorderColor = color;
            this.RedrawObject();
        };
        Ellipse.prototype.GetBorderColor = function () {
            return this.BorderColor;
        };
        Ellipse.prototype.SetBorderWidth = function (width) {
            this.BorderWidth = width;
            this.RedrawObject();
        };
        Ellipse.prototype.GetBorderWidth = function () {
            return this.BorderWidth;
        };
        Ellipse.prototype.SetFillColor = function (fillColor) {
            this.FillColor = fillColor;
            this.RedrawObject();
        };
        Ellipse.prototype.GetFillColor = function () {
            return this.FillColor;
        };
        Ellipse.prototype.SetTabIndex = function (tabIndex) {
            this.TabIndex = tabIndex;
            document.getElementById(this.Id).tabIndex = tabIndex;
        };
        Ellipse.prototype.GetTabIndex = function () {
            return this.TabIndex;
        };
        Ellipse.prototype.RestoreTabIndex = function () {
            this.SetTabIndex(-1);
        };
        Ellipse.prototype.SetZIndex = function (zIndex) {
            this.ZIndex = zIndex;
            document.getElementById(this.Id).style.zIndex = zIndex;
        };
        Ellipse.prototype.GetZIndex = function () {
            return this.ZIndex;
        };
        Ellipse.prototype.RestoreZIndex = function () {
            this.SetZIndex("auto");
        };
        Ellipse.prototype.SetEnabled = function (enabled) {
            this.Enabled = enabled;
            if (enabled) {
                document.getElementById(this.Id).removeAttribute("disabled");
            }
            else {
                document.getElementById(this.Id).setAttribute("disabled", "disabled");
            }
        };
        Ellipse.prototype.GetEnabled = function () {
            return this.Enabled;
        };
        Ellipse.prototype.SetFocus = function () {
            document.getElementById(this.Id).focus();
        };
        Ellipse.prototype.Talk = function (message, metaMessage) {
            if (metaMessage === void 0) { metaMessage = ""; }
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (var i = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    }
                    catch (e) { }
                }
            }
            for (var _i = 0, _a = MetaObject.GetIdsStack(); _i < _a.length; _i++) {
                var idMetaobjeto = _a[_i];
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                }
                catch (e) { }
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
        };
        Ellipse.NumberOfUnnamedObjects = 0;
        Ellipse.idsStack = [];
        return Ellipse;
    }());
    sci.Ellipse = Ellipse;
    var Requester = /** @class */ (function () {
        function Requester(id) {
            this.Id = id;
            Requester.idsStack.push(this.Id);
            this.EndPoint = null;
            this.Param = null;
            this.Query = null;
            this.FormName = null;
            this.ControlFileNameToUpload = null;
            this.ResponseType = null;
            this.Response = null;
            this.ResponseText = null;
            this.ResponseXML = null;
            this.ResponseJSON = null;
            this.ResponseURL = null;
            this.Verb = sci.Const.Get;
            this.Status = null;
            this.MimeTypes = null;
        }
        Requester.prototype.GetIdsStack = function () {
            return Requester.idsStack;
        };
        Requester.prototype.GetId = function () {
            return this.Id;
        };
        Requester.prototype.SetVerb = function (verb) {
            this.Verb = verb;
        };
        Requester.prototype.GetVerb = function () {
            return this.Verb;
        };
        Requester.prototype.SetEndPoint = function (endPoint) {
            this.EndPoint = endPoint;
        };
        Requester.prototype.GetEndPoint = function () {
            return this.EndPoint;
        };
        Requester.prototype.SetParam = function (key, value) {
            this.Param = key + "=" + value;
        };
        Requester.prototype.GetParam = function () {
            return this.Param;
        };
        Requester.prototype.RestoreParam = function () {
            this.Param = null;
        };
        Requester.prototype.SetQuery = function (key, value) {
            this.Query = key + "=" + value;
        };
        Requester.prototype.AddToQuery = function (key, value) {
            if (this.Query == null) {
                this.Query = key + "=" + value;
            }
            else {
                this.Query += "&" + key + "=" + value;
            }
        };
        Requester.prototype.GetQuery = function () {
            return this.Query;
        };
        Requester.prototype.RestoreQuery = function () {
            this.Query = null;
        };
        Requester.prototype.SetMimeTypes = function (mimeTypes) {
            this.MimeTypes = mimeTypes;
            // Actualizar los tipos MIME en el formulario.
            var formulario = document.getElementById("form" + this.ControlFileNameToUpload);
            formulario.setAttribute('accept', mimeTypes);
        };
        Requester.prototype.GetMimeTypes = function () {
            return this.MimeTypes;
        };
        Requester.prototype.RestoreMimeTypes = function () {
            this.MimeTypes = null;
            // Actualizar los tipos MIME en el formulario.
            var formulario = document.getElementById("form" + this.ControlFileNameToUpload);
            formulario.removeAttribute('accept');
        };
        Requester.prototype.SetControlFileNameToUpload = function (controlFileName) {
            this.ControlFileNameToUpload = controlFileName;
        };
        Requester.prototype.GetControlFileNameToUpload = function () {
            return this.ControlFileNameToUpload;
        };
        Requester.prototype.RestoreControlFileNameToUpload = function () {
            this.ControlFileNameToUpload = null;
        };
        Requester.prototype.SendRequest = function () {
            var _this = this;
            var xhr = new XMLHttpRequest();
            var endPoint = "";
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    _this.ResponseType = xhr.responseType;
                    _this.Response = xhr.response;
                    _this.ResponseText = xhr.responseText;
                    _this.ResponseXML = xhr.responseXML;
                    try {
                        _this.ResponseJSON = JSON.parse(xhr.response);
                    }
                    catch (e) {
                        _this.ResponseJSON = null;
                    }
                    _this.ResponseURL = xhr.responseURL;
                    _this.Status = xhr.status;
                    if (xhr.status == 200) {
                        // Incluir eventual mensaje en evento OnOk siempre y cuando la operación no sea un Get, pues podría ser muy grande.
                        var mensaje = '';
                        if (_this.Verb !== sci.Const.Get) {
                            try {
                                mensaje = xhr.response;
                            }
                            catch (e) { }
                        }
                        try {
                            window[_this.Id + "_OnOk"].call(_this, mensaje);
                        }
                        catch (e) { }
                        window[_this.Id].Talk(_this.Id + "_OnOk", mensaje);
                    }
                    else {
                        try {
                            window[_this.Id + "_OnError"].call(_this, xhr.response, xhr.status);
                        }
                        catch (e) { }
                        window[_this.Id].Talk(_this.Id + "_OnError", xhr.response);
                    }
                }
            };
            endPoint = this.EndPoint;
            if (this.Param !== null) {
                endPoint += '/' + this.Param;
            }
            if (this.Query !== null) {
                endPoint += '?' + this.Query;
            }
            xhr.open(this.Verb, endPoint, true);
            if (this.ControlFileNameToUpload !== null) { // Se envía un formulario con un control de tipo File. El formulario se crea automáticamente cuando el programador crea un control de tipo File.
                var formulario = new FormData(document.getElementById("form" + this.ControlFileNameToUpload));
                xhr.send(formulario);
            }
            else {
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr.send(null);
            }
        };
        Requester.prototype.SendRequestTo = function (endPoint) {
            var _this = this;
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    _this.ResponseType = xhr.responseType;
                    _this.Response = xhr.response;
                    _this.ResponseText = xhr.responseText;
                    _this.ResponseXML = xhr.responseXML;
                    try {
                        _this.ResponseJSON = JSON.parse(xhr.response);
                    }
                    catch (e) {
                        _this.ResponseJSON = null;
                    }
                    _this.ResponseURL = xhr.responseURL;
                    _this.Status = xhr.status;
                    if (xhr.status == 200) {
                        // Incluir eventual mensaje en evento OnOk siempre y cuando la operación no sea un Get, pues podría ser muy grande.
                        var mensaje = '';
                        if (_this.Verb !== sci.Const.Get) {
                            try {
                                mensaje = xhr.response;
                            }
                            catch (e) { }
                        }
                        try {
                            window[_this.Id + "_OnOk"].call(_this, mensaje);
                        }
                        catch (e) { }
                        window[_this.Id].Talk(_this.Id + "_OnOk", mensaje);
                    }
                    else {
                        try {
                            window[_this.Id + "_OnError"].call(_this, xhr.response, xhr.status);
                        }
                        catch (e) { }
                        window[_this.Id].Talk(_this.Id + "_OnError", xhr.response);
                    }
                }
            };
            if (this.Param !== null) {
                endPoint += '/' + this.Param;
            }
            if (this.Query !== null) {
                endPoint += '?' + this.Query;
            }
            xhr.open(this.Verb, endPoint, true);
            if (this.ControlFileNameToUpload !== null) { // Se envía un formulario con un control de tipo File. El formulario se crea automáticamente cuando el programador crea un control de tipo File.
                var formulario = new FormData(document.getElementById("form" + this.ControlFileNameToUpload));
                xhr.send(formulario);
            }
            else {
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr.send(null);
            }
        };
        Requester.prototype.GetResponseType = function () {
            return this.ResponseType;
        };
        Requester.prototype.GetResponse = function () {
            return this.Response;
        };
        Requester.prototype.GetResponseText = function () {
            return this.ResponseText;
        };
        Requester.prototype.GetResponseXML = function () {
            return this.ResponseXML;
        };
        Requester.prototype.GetResponseJSON = function () {
            return this.ResponseJSON;
        };
        Requester.prototype.GetResponseURL = function () {
            return this.ResponseURL;
        };
        Requester.prototype.GetStatus = function () {
            return this.Status;
        };
        Requester.prototype.Talk = function (message, metaMessage) {
            if (metaMessage === void 0) { metaMessage = ""; }
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (var i = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    }
                    catch (e) { }
                }
            }
            for (var _i = 0, _a = MetaObject.GetIdsStack(); _i < _a.length; _i++) {
                var idMetaobjeto = _a[_i];
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                }
                catch (e) { }
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
        };
        Requester.NumberOfUnnamedObjects = 0;
        Requester.idsStack = [];
        return Requester;
    }());
    sci.Requester = Requester;
    var Chronometer = /** @class */ (function () {
        function Chronometer(id) {
            this.Id = id;
            Chronometer.idsStack.push(this.Id);
            this.Hours = 0;
            this.Minutes = 0;
            this.Seconds = 0;
            this.Centiseconds = 0;
            this.centisecondsPerHour = 0;
            this.centisecondsPerMinute = 0;
            this.centisecondsPerSecond = 0;
            this.Running = false;
            this.Started = false;
        }
        Chronometer.prototype.GetIdsStack = function () {
            return Chronometer.idsStack;
        };
        Chronometer.prototype.GetId = function () {
            return this.Id;
        };
        Chronometer.prototype.GetHours = function () {
            return this.Hours;
        };
        Chronometer.prototype.GetMinutes = function () {
            return this.Minutes;
        };
        Chronometer.prototype.GetSeconds = function () {
            return this.Seconds;
        };
        Chronometer.prototype.GetCentiseconds = function () {
            return this.Centiseconds;
        };
        Chronometer.prototype.GetLapse = function () {
            //Devuelve la medida cronometrada en centisegundos.
            return this.Hours * 360000 + this.Minutes * 6000 + this.Seconds * 100 + this.Centiseconds;
        };
        Chronometer.prototype.GetDisplay = function () {
            var horas, minutos, segundos, centisegundos;
            if (this.Hours < 10) {
                horas = "0" + String(this.Hours);
            }
            else {
                horas = String(this.Hours);
            }
            if (this.Minutes < 10) {
                minutos = "0" + String(this.Minutes);
            }
            else {
                minutos = String(this.Minutes);
            }
            if (this.Seconds < 10) {
                segundos = "0" + String(this.Seconds);
            }
            else {
                segundos = String(this.Seconds);
            }
            if (this.Centiseconds < 10) {
                centisegundos = "0" + String(this.Centiseconds);
            }
            else {
                centisegundos = String(this.Centiseconds);
            }
            return horas + ":" + minutos + ":" + segundos + " " + centisegundos;
        };
        Chronometer.prototype.GetRunning = function () {
            return this.Running;
        };
        Chronometer.prototype.GetStarted = function () {
            return this.Started;
        };
        Chronometer.prototype.StartStopButton = function () {
            var _this = this;
            if (this.Running) {
                //Stop.
                clearInterval(this.cronometro);
                this.Running = false;
            }
            else {
                //Start.
                this.cronometro = setInterval(function () {
                    if (_this.Started) {
                        _this.centisecondsPerHour++;
                        _this.centisecondsPerMinute++;
                        _this.centisecondsPerSecond++;
                        if (_this.Centiseconds <= 99) {
                            _this.Centiseconds++;
                        }
                        if (_this.Centiseconds == 100) {
                            _this.Centiseconds = 0;
                        }
                        if (_this.Centiseconds == 0) {
                            _this.Seconds++;
                        }
                        if (_this.Seconds == 60) {
                            _this.Seconds = 0;
                        }
                        if (_this.Centiseconds == 0 && _this.Seconds == 0) {
                            _this.Minutes++;
                        }
                        if (_this.Minutes == 60) {
                            _this.Minutes = 0;
                        }
                        if (_this.Centiseconds == 0 && _this.Seconds == 0 && _this.Minutes == 0) {
                            _this.Hours++;
                        }
                    }
                    if (!_this.Started) {
                        _this.Started = true;
                    }
                    try {
                        window[_this.Id + "_OnEachCentisecond"].apply(_this); // Esto es muy rápido para hacer un "Talk".
                    }
                    catch (e) { }
                    if (_this.centisecondsPerSecond == 100) {
                        _this.centisecondsPerSecond = 0;
                        try {
                            window[_this.Id + "_OnEachSecond"].apply(_this); // Esto es muy rápido para hacer un "Talk".
                        }
                        catch (e) { }
                    }
                    if (_this.centisecondsPerMinute == 6000) {
                        _this.centisecondsPerMinute = 0;
                        try {
                            window[_this.Id + "_OnEachMinute"].apply(_this);
                        }
                        catch (e) { }
                        window[_this.Id].Talk(_this.Id + "_OnEachMinute");
                    }
                    if (_this.centisecondsPerHour == 360000) {
                        _this.centisecondsPerHour = 0;
                        try {
                            window[_this.Id + "_OnEachHour"].apply(_this);
                        }
                        catch (e) { }
                        window[_this.Id].Talk(_this.Id + "_OnEachHour");
                    }
                }, 10);
                this.Running = true;
            }
        };
        Chronometer.prototype.ResetButton = function () {
            if (this.Running) {
                clearInterval(this.cronometro);
            }
            this.Hours = 0;
            this.Minutes = 0;
            this.Seconds = 0;
            this.Centiseconds = 0;
            this.centisecondsPerHour = 0;
            this.centisecondsPerMinute = 0;
            this.centisecondsPerSecond = 0;
            this.Running = false;
            this.Started = false;
        };
        Chronometer.prototype.Talk = function (message, metaMessage) {
            if (metaMessage === void 0) { metaMessage = ""; }
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (var i = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    }
                    catch (e) { }
                }
            }
            for (var _i = 0, _a = MetaObject.GetIdsStack(); _i < _a.length; _i++) {
                var idMetaobjeto = _a[_i];
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                }
                catch (e) { }
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
        };
        Chronometer.NumberOfUnnamedObjects = 0;
        Chronometer.idsStack = [];
        return Chronometer;
    }());
    sci.Chronometer = Chronometer;
    var Timer = /** @class */ (function () {
        function Timer(hours, minutes, seconds, centiseconds, id) {
            if (hours === void 0) { hours = 0; }
            if (minutes === void 0) { minutes = 0; }
            if (seconds === void 0) { seconds = 0; }
            if (centiseconds === void 0) { centiseconds = 0; }
            this.Id = id;
            Timer.idsStack.push(this.Id);
            this.Ciclyc = false;
            //Dejar solo números positivos.
            if (hours < 0)
                hours = -hours;
            if (minutes < 0)
                minutes = -minutes;
            if (seconds < 0)
                seconds = -seconds;
            if (centiseconds < 0)
                centiseconds = -centiseconds;
            //Dejar solo enteros.
            hours = Math.floor(hours);
            minutes = Math.floor(minutes);
            seconds = Math.floor(seconds);
            centiseconds = Math.floor(centiseconds);
            if (centiseconds <= 99) {
                this.InitialCentiseconds = centiseconds;
            }
            else {
                seconds += Math.floor(centiseconds / 100);
                this.InitialCentiseconds = centiseconds - Math.floor(centiseconds / 100) * 100;
            }
            if (seconds <= 59) {
                this.InitialSeconds = seconds;
            }
            else {
                minutes += Math.floor(seconds / 60);
                this.InitialSeconds = seconds - Math.floor(seconds / 60) * 60;
            }
            if (minutes <= 59) {
                this.InitialMinutes = minutes;
            }
            else {
                hours += Math.floor(minutes / 60);
                this.InitialMinutes = minutes - Math.floor(minutes / 60) * 60;
            }
            this.InitialHours = hours;
            this.Hours = this.InitialHours;
            this.Minutes = this.InitialMinutes;
            this.Seconds = this.InitialSeconds;
            this.Centiseconds = this.InitialCentiseconds;
            this.Lapse = 0;
            this.centisecondsPerHour = 0;
            this.centisecondsPerMinute = 0;
            this.centisecondsPerSecond = 0;
            this.Running = false;
            this.Started = false;
        }
        Timer.prototype.GetIdsStack = function () {
            return Timer.idsStack;
        };
        Timer.prototype.GetId = function () {
            return this.Id;
        };
        Timer.prototype.SetCiclyc = function (ciclyc) {
            this.Ciclyc = ciclyc;
        };
        Timer.prototype.GetCiclyc = function () {
            return this.Ciclyc;
        };
        Timer.prototype.GetInitialLapse = function () {
            return this.InitialHours * 360000 + this.InitialMinutes * 6000 + this.InitialSeconds * 100 + this.InitialCentiseconds;
        };
        Timer.prototype.SetInitialTimer = function (hours, minutes, seconds, centiseconds) {
            if (hours === void 0) { hours = 0; }
            if (minutes === void 0) { minutes = 0; }
            if (seconds === void 0) { seconds = 0; }
            if (centiseconds === void 0) { centiseconds = 0; }
            //Dejar solo números positivos.
            if (hours < 0)
                hours = -hours;
            if (minutes < 0)
                minutes = -minutes;
            if (seconds < 0)
                seconds = -seconds;
            if (centiseconds < 0)
                centiseconds = -centiseconds;
            //Dejar solo enteros.
            hours = Math.floor(hours);
            minutes = Math.floor(minutes);
            seconds = Math.floor(seconds);
            centiseconds = Math.floor(centiseconds);
            if (this.Running) {
                clearInterval(this.timer);
            }
            if (centiseconds <= 99) {
                this.InitialCentiseconds = centiseconds;
            }
            else {
                seconds += Math.floor(centiseconds / 100);
                this.InitialCentiseconds = centiseconds - Math.floor(centiseconds / 100) * 100;
            }
            if (seconds <= 59) {
                this.InitialSeconds = seconds;
            }
            else {
                minutes += Math.floor(seconds / 60);
                this.InitialSeconds = seconds - Math.floor(seconds / 60) * 60;
            }
            if (minutes <= 59) {
                this.InitialMinutes = minutes;
            }
            else {
                hours += Math.floor(minutes / 60);
                this.InitialMinutes = minutes - Math.floor(minutes / 60) * 60;
            }
            this.InitialHours = hours;
            this.Hours = this.InitialHours;
            this.Minutes = this.InitialMinutes;
            this.Seconds = this.InitialSeconds;
            this.Centiseconds = this.InitialCentiseconds;
            this.Lapse = 0;
            this.centisecondsPerHour = 0;
            this.centisecondsPerMinute = 0;
            this.centisecondsPerSecond = 0;
            this.Running = false;
            this.Started = false;
        };
        Timer.prototype.GetInitialHours = function () {
            return this.InitialHours;
        };
        Timer.prototype.GetInitialMinutes = function () {
            return this.InitialMinutes;
        };
        Timer.prototype.GetInitialSeconds = function () {
            return this.InitialSeconds;
        };
        Timer.prototype.GetInitialCentiseconds = function () {
            return this.InitialCentiseconds;
        };
        Timer.prototype.GetInitialDisplay = function () {
            var horas, minutos, segundos, centisegundos;
            if (this.InitialHours < 10) {
                horas = "0" + String(this.InitialHours);
            }
            else {
                horas = String(this.InitialHours);
            }
            if (this.InitialMinutes < 10) {
                minutos = "0" + String(this.InitialMinutes);
            }
            else {
                minutos = String(this.InitialMinutes);
            }
            if (this.InitialSeconds < 10) {
                segundos = "0" + String(this.InitialSeconds);
            }
            else {
                segundos = String(this.InitialSeconds);
            }
            if (this.InitialCentiseconds < 10) {
                centisegundos = "0" + String(this.InitialCentiseconds);
            }
            else {
                centisegundos = String(this.InitialCentiseconds);
            }
            return horas + ":" + minutos + ":" + segundos + " " + centisegundos;
        };
        Timer.prototype.GetLapse = function () {
            //Devuelve la medida restante en centisegundos.
            return (this.InitialHours * 360000 + this.InitialMinutes * 6000 + this.InitialSeconds * 100 + this.InitialCentiseconds) - this.Lapse;
        };
        Timer.prototype.GetHours = function () {
            return this.Hours;
        };
        Timer.prototype.GetMinutes = function () {
            return this.Minutes;
        };
        Timer.prototype.GetSeconds = function () {
            return this.Seconds;
        };
        Timer.prototype.GetCentiseconds = function () {
            return this.Centiseconds;
        };
        Timer.prototype.GetDisplay = function () {
            var horas, minutos, segundos, centisegundos;
            if (this.Hours < 10) {
                horas = "0" + String(this.Hours);
            }
            else {
                horas = String(this.Hours);
            }
            if (this.Minutes < 10) {
                minutos = "0" + String(this.Minutes);
            }
            else {
                minutos = String(this.Minutes);
            }
            if (this.Seconds < 10) {
                segundos = "0" + String(this.Seconds);
            }
            else {
                segundos = String(this.Seconds);
            }
            if (this.Centiseconds < 10) {
                centisegundos = "0" + String(this.Centiseconds);
            }
            else {
                centisegundos = String(this.Centiseconds);
            }
            return horas + ":" + minutos + ":" + segundos + " " + centisegundos;
        };
        Timer.prototype.GetElapsedLapse = function () {
            //Devuelve la medida en centisegundos transcurridos hasta el momento.
            return this.Lapse;
        };
        Timer.prototype.GetElapsedHours = function () {
            var horas;
            var centisegundosRestantes = this.Lapse;
            horas = Math.floor(centisegundosRestantes / 360000);
            return horas;
        };
        Timer.prototype.GetElapsedMinutes = function () {
            var horas;
            var minutos;
            var centisegundosRestantes = this.Lapse;
            horas = Math.floor(centisegundosRestantes / 360000);
            centisegundosRestantes = centisegundosRestantes - horas * 360000;
            minutos = Math.floor(centisegundosRestantes / 6000);
            return minutos;
        };
        Timer.prototype.GetElapsedSeconds = function () {
            var horas;
            var minutos;
            var segundos;
            var centisegundosRestantes = this.Lapse;
            horas = Math.floor(centisegundosRestantes / 360000);
            centisegundosRestantes = centisegundosRestantes - horas * 360000;
            minutos = Math.floor(centisegundosRestantes / 6000);
            centisegundosRestantes = centisegundosRestantes - minutos * 6000;
            segundos = Math.floor(centisegundosRestantes / 100);
            return segundos;
        };
        Timer.prototype.GetElapsedCentiseconds = function () {
            var horas;
            var minutos;
            var segundos;
            var centisegundos;
            var centisegundosRestantes = this.Lapse;
            horas = Math.floor(centisegundosRestantes / 360000);
            centisegundosRestantes = centisegundosRestantes - horas * 360000;
            minutos = Math.floor(centisegundosRestantes / 6000);
            centisegundosRestantes = centisegundosRestantes - minutos * 6000;
            segundos = Math.floor(centisegundosRestantes / 100);
            centisegundos = centisegundosRestantes - segundos * 100;
            return centisegundos;
        };
        Timer.prototype.GetElapsedDisplay = function () {
            var horas, minutos, segundos, centisegundos;
            var horasTranscurridas = 0;
            var minutosTranscurridos = 0;
            var segundosTranscurridos = 0;
            var centisegundosTranscurridos = 0;
            var centisegundosRestantes = this.Lapse;
            horasTranscurridas = Math.floor(centisegundosRestantes / 360000);
            centisegundosRestantes = centisegundosRestantes - horasTranscurridas * 360000;
            minutosTranscurridos = Math.floor(centisegundosRestantes / 6000);
            centisegundosRestantes = centisegundosRestantes - minutosTranscurridos * 6000;
            segundosTranscurridos = Math.floor(centisegundosRestantes / 100);
            centisegundosTranscurridos = centisegundosRestantes - segundosTranscurridos * 100;
            if (horasTranscurridas < 10) {
                horas = "0" + String(horasTranscurridas);
            }
            else {
                horas = String(horasTranscurridas);
            }
            if (minutosTranscurridos < 10) {
                minutos = "0" + String(minutosTranscurridos);
            }
            else {
                minutos = String(minutosTranscurridos);
            }
            if (segundosTranscurridos < 10) {
                segundos = "0" + String(segundosTranscurridos);
            }
            else {
                segundos = String(segundosTranscurridos);
            }
            if (centisegundosTranscurridos < 10) {
                centisegundos = "0" + String(centisegundosTranscurridos);
            }
            else {
                centisegundos = String(centisegundosTranscurridos);
            }
            return horas + ":" + minutos + ":" + segundos + " " + centisegundos;
        };
        Timer.prototype.GetRunning = function () {
            return this.Running;
        };
        Timer.prototype.GetStarted = function () {
            return this.Started;
        };
        Timer.prototype.StartStopButton = function () {
            var _this = this;
            if (this.Running) {
                //Stop.
                clearInterval(this.timer);
                this.Running = false;
            }
            else {
                //Start.
                var lapsoInicial_1 = this.InitialHours * 360000 + this.InitialMinutes * 6000 + this.InitialSeconds * 100 + this.InitialCentiseconds;
                if (this.Lapse < lapsoInicial_1) {
                    this.timer = setInterval(function () {
                        if (_this.Started) {
                            _this.Lapse++;
                            _this.centisecondsPerHour++;
                            _this.centisecondsPerMinute++;
                            _this.centisecondsPerSecond++;
                            if (_this.Centiseconds >= 0) {
                                _this.Centiseconds--;
                            }
                            if (_this.Centiseconds == -1) {
                                _this.Centiseconds = 99;
                            }
                            if (_this.Centiseconds == 99) {
                                _this.Seconds--;
                            }
                            if (_this.Seconds == -1) {
                                _this.Seconds = 59;
                            }
                            if (_this.Centiseconds == 99 && _this.Seconds == 59) {
                                _this.Minutes--;
                            }
                            if (_this.Minutes == -1) {
                                _this.Minutes = 59;
                            }
                            if (_this.Centiseconds == 99 && _this.Seconds == 59 && _this.Minutes == 59) {
                                _this.Hours--;
                            }
                        }
                        if (!_this.Started) {
                            _this.Started = true;
                        }
                        try {
                            window[_this.Id + "_OnEachCentisecond"].apply(_this); // Esto es muy rápido para hacer un "Talk"
                        }
                        catch (e) { }
                        if (_this.centisecondsPerSecond == 100) {
                            _this.centisecondsPerSecond = 0;
                            try {
                                window[_this.Id + "_OnEachSecond"].apply(_this); // Esto es muy rápido para hacer un "Talk"
                            }
                            catch (e) { }
                        }
                        if (_this.centisecondsPerMinute == 6000) {
                            _this.centisecondsPerMinute = 0;
                            try {
                                window[_this.Id + "_OnEachMinute"].apply(_this);
                            }
                            catch (e) { }
                            window[_this.Id].Talk(_this.Id + "_OnEachMinute");
                        }
                        if (_this.centisecondsPerHour == 360000) {
                            _this.centisecondsPerHour = 0;
                            try {
                                window[_this.Id + "_OnEachHour"].apply(_this);
                            }
                            catch (e) { }
                            window[_this.Id].Talk(_this.Id + "_OnEachHour");
                        }
                        if (_this.Lapse === lapsoInicial_1 && !_this.Ciclyc) {
                            clearInterval(_this.timer);
                            _this.Running = false;
                            try {
                                window[_this.Id + "_OnFinish"].apply(_this);
                            }
                            catch (e) { }
                            window[_this.Id].Talk(_this.Id + "_OnFinish");
                        }
                        if (_this.Lapse === lapsoInicial_1 && _this.Ciclyc) {
                            try {
                                window[_this.Id + "_OnFinish"].apply(_this);
                            }
                            catch (e) { }
                            window[_this.Id].Talk(_this.Id + "_OnFinish");
                            _this.Hours = _this.InitialHours;
                            _this.Minutes = _this.InitialMinutes;
                            _this.Seconds = _this.InitialSeconds;
                            _this.Centiseconds = _this.InitialCentiseconds;
                            _this.Lapse = 0;
                            _this.centisecondsPerHour = 0;
                            _this.centisecondsPerMinute = 0;
                            _this.centisecondsPerSecond = 0;
                        }
                    }, 10);
                    this.Running = true;
                }
            }
        };
        Timer.prototype.ResetButton = function () {
            if (this.Running) {
                clearInterval(this.timer);
            }
            this.Hours = this.InitialHours;
            this.Minutes = this.InitialMinutes;
            this.Seconds = this.InitialSeconds;
            this.Centiseconds = this.InitialCentiseconds;
            this.Lapse = 0;
            this.centisecondsPerHour = 0;
            this.centisecondsPerMinute = 0;
            this.centisecondsPerSecond = 0;
            this.Running = false;
            this.Started = false;
        };
        Timer.prototype.Talk = function (message, metaMessage) {
            if (metaMessage === void 0) { metaMessage = ""; }
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (var i = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    }
                    catch (e) { }
                }
            }
            for (var _i = 0, _a = MetaObject.GetIdsStack(); _i < _a.length; _i++) {
                var idMetaobjeto = _a[_i];
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                }
                catch (e) { }
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
        };
        Timer.NumberOfUnnamedObjects = 0;
        Timer.idsStack = [];
        return Timer;
    }());
    sci.Timer = Timer;
    var Div = /** @class */ (function () {
        function Div(metaObject, x, y, z, width, height, borderWidth, borderColor, fillColor, id) {
            var _this = this;
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (borderWidth === void 0) { borderWidth = Skin.GetDivBorderWidth(); }
            if (borderColor === void 0) { borderColor = Skin.GetDivBorderColor(); }
            if (fillColor === void 0) { fillColor = Skin.GetDivFillColor(); }
            this.Id = id;
            Div.idsStack.push(this.Id);
            this.MetaObject = metaObject;
            MetaObject_private.AddDataObject(this.MetaObject, this.Id, ObjectType.Div);
            this.CrossZ = false;
            this.Visible = true;
            this.BorderColor = borderColor;
            this.FillColor = fillColor;
            this.BorderWidth = borderWidth;
            this.TabIndex = 0;
            if (scitool.GetParentDocumentId(this.Id) !== false) {
                this.ZIndex = String(Number(window[scitool.GetParentDocumentId(this.Id)].GetZIndex()) + scitool.GetMetaObjectObjectsNumber(scitool.GetParentDocumentId(this.Id)));
            }
            else {
                this.ZIndex = "auto";
            }
            this.Enabled = true;
            //Crear nodo DIV.
            var nodoNuevo = document.createElement("DIV");
            nodoNuevo.setAttribute("id", this.Id);
            nodoNuevo.dataset.scitoolx = String(x);
            nodoNuevo.dataset.scitooly = String(y);
            nodoNuevo.dataset.scitoolz = String(z);
            nodoNuevo.dataset.scitoolwidth = String(width - 2 * borderWidth);
            nodoNuevo.dataset.scitoolheight = String(height - 2 * borderWidth);
            nodoNuevo.style.setProperty("position", "absolute");
            nodoNuevo.style.setProperty("display", "none");
            nodoNuevo.style.backgroundColor = fillColor;
            nodoNuevo.style.width = String(width - 2 * borderWidth) + "px";
            nodoNuevo.style.height = String(height - 2 * borderWidth) + "px";
            nodoNuevo.style.borderWidth = String(borderWidth) + "px";
            nodoNuevo.style.borderColor = borderColor;
            nodoNuevo.style.borderStyle = "solid";
            nodoNuevo.style.outline = "0";
            document.body.appendChild(nodoNuevo);
            //Implementar en el DOM las otras propiedades en el nodo.
            this.SetX(this.GetX());
            this.SetY(this.GetY());
            this.SetZ(this.GetZ());
            this.SetVisible(this.GetVisible());
            this.SetTabIndex(this.GetTabIndex());
            this.SetZIndex(this.GetZIndex());
            this.SetCrossZ(this.GetCrossZ());
            document.getElementById(this.Id).onclick = function () {
                if (_this.Enabled) {
                    ////////Activar eventual documento padre de este objeto.
                    //Buscar metaobjeto de este objeto.
                    var datosObjeto_7 = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                        if (objeto["ObjectId"] === _this.Id) {
                            return objeto;
                        }
                    });
                    //Verificar si el metaobjeto es un documento.
                    var datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                        if (objeto["ObjectId"] === datosObjeto_7[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                            return objeto;
                        }
                    });
                    if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();
                        try {
                            window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(_this);
                        }
                        catch (e) { }
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                    }
                    ////////
                    try {
                        window[_this.Id + "_OnClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnClick");
                }
            };
            document.getElementById(this.Id).ondblclick = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnDblClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnDblClick");
                }
            };
            document.getElementById(this.Id).onfocus = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnFocus"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnFocus");
                }
            };
            document.getElementById(this.Id).onmouseover = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseOver"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseOver");
                }
            };
            document.getElementById(this.Id).onmousemove = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseMove"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseMove");
                }
            };
            document.getElementById(this.Id).onmousedown = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseDown"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseDown");
                }
            };
            document.getElementById(this.Id).onmouseup = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseUp"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseUp");
                }
            };
            document.getElementById(this.Id).onmouseout = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnMouseOut"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseOut");
                }
            };
            document.getElementById(this.Id).onkeydown = function (evt) {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnKeyDown"].call(_this, evt);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnKeyDown");
                }
            };
            document.getElementById(this.Id).onkeypress = function (evt) {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnKeyPress"].call(_this, evt);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnKeyPress");
                }
            };
            document.getElementById(this.Id).onkeyup = function (evt) {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnKeyUp"].call(_this, evt);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnKeyUp");
                }
            };
            document.getElementById(this.Id).onblur = function () {
                if (_this.Enabled) {
                    try {
                        window[_this.Id + "_OnBlur"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnBlur");
                }
            };
        }
        Div.prototype.Display = function () {
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                document.getElementById(this.Id).style.removeProperty("display");
            }
            else {
                document.getElementById(this.Id).style.setProperty("display", "none");
            }
        };
        Div.GetIdsStack = function () {
            return Div.idsStack;
        };
        Div.prototype.GetId = function () {
            return this.Id;
        };
        Div.prototype.GetMetaObject = function () {
            return this.MetaObject;
        };
        Div.prototype.SetCrossZ = function (crossZ) {
            this.CrossZ = crossZ;
            var x = this.GetX();
            var y = this.GetY();
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, crossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        Div.prototype.GetCrossZ = function () {
            return this.CrossZ;
        };
        Div.prototype.SetX = function (x) {
            var X = x;
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolx = String(x);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                x -= Table.GetViewFinderX();
                document.getElementById(this.Id).style.left = String(x) + "px";
            }
            this.Display();
        };
        Div.prototype.GetX = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        };
        Div.prototype.SetY = function (y) {
            var Y = y;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Z = Number(document.getElementById(this.Id).dataset.scitoolz);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitooly = String(y);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X, Y, Z, Width, Height, CrossZ)) {
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        Div.prototype.GetY = function () {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        };
        Div.prototype.SetZ = function (z) {
            var Z = z;
            var X = Number(document.getElementById(this.Id).dataset.scitoolx);
            var Y = Number(document.getElementById(this.Id).dataset.scitooly);
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            this.Display();
        };
        Div.prototype.GetZ = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        };
        Div.prototype.SetXYZ = function (x, y, z) {
            var Width = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            var Height = Number(document.getElementById(this.Id).dataset.scitoolheight);
            var CrossZ = document.getElementById(this.Id).dataset.scitoolcrossz === "true";
            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(x, y, z, Width, Height, CrossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }
            this.Display();
        };
        Div.prototype.SetWidth = function (width) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width - 2 * this.GetBorderWidth());
            document.getElementById(this.Id).style.width = String(width) + "px";
        };
        Div.prototype.GetWidth = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolwidth) + 2 * this.GetBorderWidth();
        };
        Div.prototype.SetHeight = function (height) {
            document.getElementById(this.Id).dataset.scitoolheight = String(height - 2 * this.GetBorderWidth());
            document.getElementById(this.Id).style.height = String(height) + "px";
        };
        Div.prototype.GetHeight = function () {
            return Number(document.getElementById(this.Id).dataset.scitoolheight) + 2 * this.GetBorderWidth();
        };
        Div.prototype.SetDimensions = function (width, height) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width - 2 * this.GetBorderWidth());
            document.getElementById(this.Id).style.width = String(width - 2 * this.GetBorderWidth()) + "px";
            document.getElementById(this.Id).dataset.scitoolheight = String(height - 2 * this.GetBorderWidth());
            document.getElementById(this.Id).style.height = String(height - 2 * this.GetBorderWidth()) + "px";
        };
        Div.prototype.GetInViewFinder = function () {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        };
        Div.prototype.SetVisible = function (visible) {
            this.Visible = visible;
            if (visible === true) {
                document.getElementById(this.Id).style.visibility = 'visible';
            }
            else {
                document.getElementById(this.Id).style.visibility = 'hidden';
            }
        };
        Div.prototype.GetVisible = function () {
            return this.Visible;
        };
        Div.prototype.SetBorderColor = function (color) {
            this.BorderColor = color;
            document.getElementById(this.Id).style.borderColor = color;
        };
        Div.prototype.GetBorderColor = function () {
            return this.BorderColor;
        };
        Div.prototype.SetBorderWidth = function (width) {
            this.SetWidth(this.GetWidth() - 2 * width);
            this.SetHeight(this.GetHeight() - 2 * width);
            this.BorderWidth = width;
            document.getElementById(this.Id).style.borderWidth = String(width);
        };
        Div.prototype.GetBorderWidth = function () {
            return this.BorderWidth;
        };
        Div.prototype.SetFillColor = function (fillColor) {
            this.FillColor = fillColor;
            document.getElementById(this.Id).style.backgroundColor = fillColor;
        };
        Div.prototype.GetFillColor = function () {
            return this.FillColor;
        };
        Div.prototype.SetTabIndex = function (tabIndex) {
            this.TabIndex = tabIndex;
            document.getElementById(this.Id).tabIndex = tabIndex;
        };
        Div.prototype.GetTabIndex = function () {
            return this.TabIndex;
        };
        Div.prototype.RestoreTabIndex = function () {
            this.SetTabIndex(0);
        };
        Div.prototype.SetZIndex = function (zIndex) {
            this.ZIndex = zIndex;
            document.getElementById(this.Id).style.zIndex = zIndex;
        };
        Div.prototype.GetZIndex = function () {
            return this.ZIndex;
        };
        Div.prototype.RestoreZIndex = function () {
            this.SetZIndex("auto");
        };
        Div.prototype.SetEnabled = function (enabled) {
            this.Enabled = enabled;
            if (enabled) {
                document.getElementById(this.Id).removeAttribute("disabled");
            }
            else {
                document.getElementById(this.Id).setAttribute("disabled", "disabled");
            }
        };
        Div.prototype.GetEnabled = function () {
            return this.Enabled;
        };
        Div.prototype.Talk = function (message, metaMessage) {
            if (metaMessage === void 0) { metaMessage = ""; }
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (var i = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    }
                    catch (e) { }
                }
            }
            for (var _i = 0, _a = MetaObject.GetIdsStack(); _i < _a.length; _i++) {
                var idMetaobjeto = _a[_i];
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                }
                catch (e) { }
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
        };
        Div.NumberOfUnnamedObjects = 0;
        Div.idsStack = [];
        return Div;
    }());
    sci.Div = Div;
    var Menu = /** @class */ (function () {
        function Menu(metaObject, x, y, z, menuType, id) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            this.elements = [];
            this.ultimaOpcionDeMenuSeleccionada = '';
            this.SeparationBetweenOptions = 21;
            this.Id = id;
            Menu.idsStack.push(this.Id);
            this.MetaObject = metaObject;
            MetaObject_private.AddDataObject(this.MetaObject, this.Id, menuType);
            this.CrossZ = false;
            this.X = x;
            this.Y = y;
            this.Z = z;
            this.Height = Skin.GetMenuHeight();
            this.Visible = true;
            this.Color = Skin.GetMenuColor();
            this.BackColor = Skin.GetMenuBackColor();
            this.DisabledColor = Skin.GetMenuDisabledColor();
            this.ColorOnMouseOver = Skin.GetMenuColorOnMouseOver();
            this.BackColorOnMouseOver = Skin.GetMenuBackColorOnMouseOver();
            this.TabIndex = 0;
            if (scitool.GetParentDocumentId(this.Id) !== false) {
                this.ZIndex = String(Number(window[scitool.GetParentDocumentId(this.Id)].GetZIndex()) + scitool.GetMetaObjectObjectsNumber(scitool.GetParentDocumentId(this.Id)));
            }
            else {
                this.ZIndex = "auto";
            }
            this.FontSize = Skin.GetMenuFontSize();
            this.FontFamily = Skin.GetMenuFontFamily();
            this.MenuType = menuType;
            this.Length = 0;
            this.Enabled = true;
        }
        Menu.GetIdsStack = function () {
            return Menu.idsStack;
        };
        Menu.prototype.GetId = function () {
            return this.Id;
        };
        Menu.prototype.GetMetaObject = function () {
            return this.MetaObject;
        };
        //Si se especifica un Id de una opción, devuelve su longitud en pixeles. Si no se especifica, devuelve la longitud completa si el menú es de barra, o de la opción más larga si el menú es pulldown.
        Menu.prototype.GetPixelsLength = function (MenuBarOption) {
            if (MenuBarOption === void 0) { MenuBarOption = ""; }
            if (MenuBarOption === "") {
                for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                    var elementData = _a[_i];
                    var anchoEnPixeles = 0;
                    var ancho = 0;
                    var nodoNuevo = document.getElementById(elementData["Id"]).cloneNode(true);
                    nodoNuevo.setAttribute("id", "elementoTemporalParaCalcularAnchoEnPixeles");
                    nodoNuevo.style.visibility = "hidden";
                    document.body.appendChild(nodoNuevo);
                    if (anchoEnPixeles == 0) {
                        ancho = nodoNuevo.offsetWidth + 1;
                    }
                    else {
                        if (this.MenuType === ObjectType.PulldownMenu) {
                            ancho = nodoNuevo.offsetWidth + 1;
                        }
                        else {
                            ancho = this.GetSeparationBetweenOptions() + nodoNuevo.offsetWidth + 1;
                        }
                    }
                    if (this.MenuType === ObjectType.PulldownMenu) {
                        if (ancho > anchoEnPixeles) {
                            anchoEnPixeles = ancho;
                        }
                    }
                    else {
                        anchoEnPixeles += ancho;
                    }
                    //ELiminar elemento temporal.
                    var nodoActual = document.getElementById("elementoTemporalParaCalcularAnchoEnPixeles");
                    var nodoPadre = nodoActual.parentNode;
                    nodoPadre.removeChild(nodoActual);
                }
                return anchoEnPixeles;
            }
            else {
                for (var _b = 0, _c = this.elements; _b < _c.length; _b++) {
                    var elementData = _c[_b];
                    if (MenuBarOption === elementData["Id"]) {
                        var visible = void 0;
                        var width = void 0;
                        var styleWidth = void 0;
                        // Hacer visible temporalmente al nodo a copiar si es que está oculto.
                        if (document.getElementById(elementData["Id"]).style.display === "none") {
                            visible = false;
                            document.getElementById(elementData["Id"]).style.removeProperty("display");
                        }
                        else {
                            visible = true;
                        }
                        width = document.getElementById(elementData["Id"]).dataset.scitoolwidth;
                        styleWidth = document.getElementById(elementData["Id"]).style.width;
                        document.getElementById(elementData["Id"]).style.width = "auto";
                        var anchoEnPixeles = Math.ceil(document.getElementById(elementData["Id"]).offsetWidth) + 1;
                        // Restaurar visibilidad y ancho del nodo copiado.
                        if (!visible) {
                            document.getElementById(elementData["Id"]).style.setProperty("display", "none");
                        }
                        if (styleWidth !== "auto") {
                            document.getElementById(elementData["Id"]).dataset.scitoolwidth = width;
                            document.getElementById(elementData["Id"]).style.width = width + "px";
                        }
                        else {
                            document.getElementById(elementData["Id"]).dataset.scitoolwidth = width;
                            document.getElementById(elementData["Id"]).style.width = "auto";
                        }
                        break;
                    }
                }
                return anchoEnPixeles;
            }
        };
        //Si se especifica un Id de una opción, devuelve su altura en pixeles. Si no se especifica, devuelve la altura completa si el menú es pulldown, o de la primera opción si el menú es de barra (ahí todas las opciones tienen igual altura).
        Menu.prototype.GetPixelsTextHeight = function (MenuBarOption) {
            if (MenuBarOption === void 0) { MenuBarOption = ""; }
            if (MenuBarOption === "") {
                for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                    var elementData = _a[_i];
                    var altoEnPixeles = 0;
                    var nodoNuevo = document.getElementById(elementData["Id"]).cloneNode(true);
                    document.body.appendChild(nodoNuevo);
                    nodoNuevo.setAttribute("id", "elementoTemporalParaCalcularaltoEnPixeles");
                    nodoNuevo.style.visibility = "hidden";
                    altoEnPixeles += nodoNuevo.offsetHeight + 1;
                    //ELiminar elemento temporal.
                    var nodoActual = document.getElementById("elementoTemporalParaCalcularaltoEnPixeles");
                    var nodoPadre = nodoActual.parentNode;
                    nodoPadre.removeChild(nodoActual);
                    if (this.MenuType === ObjectType.MenuBar) {
                        break;
                    }
                }
                return altoEnPixeles;
            }
            else {
                for (var _b = 0, _c = this.elements; _b < _c.length; _b++) {
                    var elementData = _c[_b];
                    if (MenuBarOption === elementData["Id"]) {
                        var visible = void 0;
                        // Hacer visible temporalmente al nodo a copiar si es que está oculto.
                        if (document.getElementById(elementData["Id"]).style.display === "none") {
                            visible = false;
                            document.getElementById(elementData["Id"]).style.removeProperty("display");
                        }
                        else {
                            visible = true;
                        }
                        var altoEnPixeles = Math.ceil(document.getElementById(elementData["Id"]).offsetHeight) + 1;
                        // Restaurar visibilidad y alto del nodo copiado.
                        if (!visible) {
                            document.getElementById(elementData["Id"]).style.setProperty("display", "none");
                        }
                        break;
                    }
                }
                return altoEnPixeles;
            }
        };
        Menu.prototype.GetSeparationBetweenOptions = function () {
            return this.SeparationBetweenOptions;
        };
        Menu.prototype.Raise = function () {
            this.Raised = true;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                document.getElementById(elementData["Id"]).style.setProperty("position", "fixed");
            }
        };
        Menu.prototype.Unraise = function () {
            this.Raised = false;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                document.getElementById(elementData["Id"]).style.setProperty("position", "absolute");
            }
        };
        Menu.prototype.GetRaised = function () {
            return this.Raised;
        };
        Menu.prototype.Add = function (caption, id) {
            var _this = this;
            if (id === void 0) { id = ""; }
            var datosMetaObjetoPadre;
            this.Length++;
            var elementId;
            if (id.replace(/ /g, "") == "") {
                elementId = this.Id + String(this.Length);
            }
            else {
                elementId = id;
            }
            //Crear nodo.
            var X;
            var Y;
            var Z = this.Z;
            X = this.X;
            Y = this.Y;
            var nodoNuevo = document.createElement("LABEL");
            nodoNuevo.setAttribute("id", elementId);
            nodoNuevo.dataset.scitoolx = String(X);
            nodoNuevo.dataset.scitooly = String(Y);
            nodoNuevo.dataset.scitoolz = String(Z);
            nodoNuevo.dataset.scitoolwidth = String(Skin.GetLabelWidth());
            nodoNuevo.dataset.scitoolheight = String(Skin.GetLabelHeight());
            nodoNuevo.dataset.scitoolcrossz = String(this.CrossZ);
            nodoNuevo.style.width = "auto"; // Un Label es "auto" cuando se crea, antes de que SciTool le fije el ancho según su contenido cuando ya se agregó al DOM.
            nodoNuevo.style.height = String(Skin.GetMenuHeight()) + "px";
            nodoNuevo.style.padding = "5";
            nodoNuevo.style.margin = "0";
            nodoNuevo.style.fontSize = String(Skin.GetMenuFontSize()) + "px";
            nodoNuevo.style.fontFamily = Skin.GetMenuFontFamily();
            nodoNuevo.style.setProperty("position", "absolute");
            nodoNuevo.style.setProperty("display", "none");
            nodoNuevo.style.color = this.GetColor();
            nodoNuevo.style.backgroundColor = this.GetBackColor();
            nodoNuevo.innerText = caption;
            if (this.TabIndex !== -1 && this.TabIndex !== 0) {
                if (this.Length === 1) {
                    nodoNuevo.tabIndex = this.TabIndex + 1;
                }
            }
            if (this.ZIndex !== "auto" && this.ZIndex !== "initial" && this.ZIndex !== "inherit") {
                nodoNuevo.style.zIndex = String(Number(this.ZIndex) + ((this.Length - 1) * 2) + 1);
            }
            nodoNuevo.style.borderWidth = "1px";
            nodoNuevo.style.borderColor = Skin.GetPulldownMenuBorderColor();
            nodoNuevo.style.borderStyle = "none";
            // Analizar bordes si el menú es Pulldown.
            if (this.MenuType === ObjectType.PulldownMenu) {
                if (this.Length === 1) {
                    nodoNuevo.style.borderTopStyle = "solid";
                }
                nodoNuevo.style.borderLeftStyle = "solid";
                nodoNuevo.style.borderRightStyle = "solid";
            }
            document.body.appendChild(nodoNuevo);
            var elementData = {
                'Caption': caption,
                'Id': elementId,
                'MenuId': ''
            };
            this.elements.push(elementData);
            if (this.MenuType === ObjectType.MenuBar) {
                MetaObject_private.AddDataObject(this.MetaObject, elementId, ObjectType.MenuBarOption);
            }
            else {
                MetaObject_private.AddDataObject(this.MetaObject, elementId, ObjectType.PulldownMenuOption);
            }
            document.getElementById(elementId).onclick = function () {
                ////////Activar eventual documento padre de este objeto.
                //Buscar metaobjeto de este objeto.
                var datosObjeto = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                    if (objeto["ObjectId"] === _this.Id) {
                        return objeto;
                    }
                });
                //Verificar si el metaobjeto es un documento.
                datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter(function (objeto) {
                    if (objeto["ObjectId"] === datosObjeto[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                        return objeto;
                    }
                });
                if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();
                    try {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(_this);
                    }
                    catch (e) { }
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                }
                ////////
                if (_this.GetEnabled(elementId)) {
                    //Activar/desactivar despliegue automático de menús.
                    Menu.openMenus = !Menu.openMenus;
                    _this.ultimaOpcionDeMenuSeleccionada = elementId;
                    //Abrir/Cerrar menús.
                    if (Menu.openMenus) {
                        var menuPulldownAsociado = false;
                        //Abrir eventual menú asociado.
                        var i = 0;
                        for (var _i = 0, _a = _this.elements; _i < _a.length; _i++) {
                            var elementData_1 = _a[_i];
                            if (elementData_1['Id'] === id && elementData_1['MenuId'] !== '') {
                                var anchoEnPixeles = 0;
                                var ancho = 0;
                                menuPulldownAsociado = true;
                                //Fijar el width para todas las opciones del menú igual al ancho mayor.
                                var opciones = window[elementData_1['MenuId']].GetElements();
                                for (var _b = 0, opciones_3 = opciones; _b < opciones_3.length; _b++) {
                                    opcion = opciones_3[_b];
                                    ancho = Number(window[elementData_1['MenuId']].GetPixelsLength(opcion["Id"]));
                                    if (ancho > anchoEnPixeles) {
                                        anchoEnPixeles = ancho;
                                    }
                                }
                                window[elementData_1['MenuId']].SetWidth(anchoEnPixeles);
                                //Fijar raise o unraise al menú pulldown según menú padre.
                                if (_this.GetRaised()) {
                                    window[elementData_1['MenuId']].Raise();
                                }
                                else {
                                    window[elementData_1['MenuId']].Unraise();
                                }
                                // Calcular posición x,y en donde mostrar el pulldown menu, según si está asociado a un MenuBar o a otro PulldownMenu.
                                if (_this.MenuType === ObjectType.MenuBar) {
                                    window[elementData_1['MenuId']].SetX(Number(document.getElementById(elementId).dataset.scitoolx));
                                    window[elementData_1['MenuId']].SetY(_this.Y + _this.Height);
                                }
                                else {
                                    window[elementData_1['MenuId']].SetX(document.getElementById(elementId).dataset.scitoolx);
                                    window[elementData_1['MenuId']].SetY(_this.Y + _this.Height);
                                }
                                window[elementData_1['MenuId']].SetZ(Table.GetViewFinderZ());
                                if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) { //Pulldown pertenece a un documento.
                                    window[elementData_1['MenuId']].SetZIndex(window[datosMetaObjetoPadre[0]["MetaObjectId"]].GetZIndex() + ZIndexDocumentSeparation - ZIndexPulldownMenuMarginFromTheTopOfTheDocumentBack);
                                }
                                else { //Pulldown pertenece al escritorio.
                                    window[elementData_1['MenuId']].SetZIndex(ZIndexSciToolPulldownMenu);
                                }
                                break;
                            }
                            i++;
                        }
                        if (!menuPulldownAsociado) {
                            Menu.openMenus = false;
                        }
                    }
                    else {
                        //Cerrar menús.
                        for (var _c = 0, _d = Menu.idsStack; _c < _d.length; _c++) {
                            var menu = _d[_c];
                            for (var _e = 0, _f = window[menu].elements; _e < _f.length; _e++) {
                                var elementData_2 = _f[_e];
                                if (elementData_2['MenuId'] !== '') {
                                    window[elementData_2['MenuId']].SetZ(sci.Limbo);
                                }
                            }
                        }
                    }
                    try {
                        window[elementId + "_OnClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(elementId + "_OnClick");
                    try {
                        window[_this.Id + "_OnClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnClick");
                }
            };
            document.getElementById(elementId).onmouseover = function () {
                if (_this.GetEnabled(elementId)) {
                    document.getElementById(elementId).style.color = _this.GetColorOnMouseOver();
                    document.getElementById(elementId).style.backgroundColor = _this.GetBackColorOnMouseOver();
                    //Determinar si se cambió de opción y esta pertenece a una barra de menú.
                    if (elementId !== _this.ultimaOpcionDeMenuSeleccionada && _this.GetMenuType() === ObjectType.MenuBar) {
                        _this.ultimaOpcionDeMenuSeleccionada = elementId;
                        //Cerrar todos los menús pulldown.
                        for (var _i = 0, _a = Menu.idsStack; _i < _a.length; _i++) {
                            var menu = _a[_i];
                            // if (window[menu].GetMenuType() === ObjectType.PulldownMenu) {
                            //     window[menu].SetZ(Limbo);
                            // }
                            for (var _b = 0, _c = window[menu].elements; _b < _c.length; _b++) {
                                var elementData_3 = _c[_b];
                                if (elementData_3['MenuId'] !== '') {
                                    window[elementData_3['MenuId']].SetZ(sci.Limbo);
                                }
                            }
                        }
                    }
                    //Determinar si se cambió de opción y esta pertenece a un menú pulldown.
                    if (elementId !== _this.ultimaOpcionDeMenuSeleccionada && _this.GetMenuType() === ObjectType.PulldownMenu) {
                        _this.ultimaOpcionDeMenuSeleccionada = elementId;
                        //Cerrar los menús hacia adelante del menú actual.
                        for (var _d = 0, _e = _this.elements; _d < _e.length; _d++) {
                            var elementData_4 = _e[_d];
                            if (elementData_4['MenuId'] !== '') {
                                window[elementData_4['MenuId']].SetZ(sci.Limbo);
                            }
                        }
                    }
                    //Abrir eventual menú asociado.
                    if (Menu.openMenus) { //Está activado el despliegue automático de menús.
                        var i = 0;
                        for (var _f = 0, _g = _this.elements; _f < _g.length; _f++) {
                            var elementData_5 = _g[_f];
                            if (elementData_5['Id'] === id && elementData_5['MenuId'] !== '') {
                                var anchoEnPixeles = 0;
                                var ancho = 0;
                                //Fijar el width para todas las opciones del menú igual al ancho mayor.
                                var opciones = window[elementData_5['MenuId']].GetElements();
                                for (var _h = 0, opciones_4 = opciones; _h < opciones_4.length; _h++) {
                                    opcion = opciones_4[_h];
                                    ancho = Number(window[elementData_5['MenuId']].GetPixelsLength(opcion["Id"]));
                                    if (ancho > anchoEnPixeles) {
                                        anchoEnPixeles = ancho;
                                    }
                                }
                                window[elementData_5['MenuId']].SetWidth(anchoEnPixeles);
                                //Fijar raise o unraise al menú pulldown según menú padre.
                                if (_this.GetRaised()) {
                                    window[elementData_5['MenuId']].Raise();
                                }
                                else {
                                    window[elementData_5['MenuId']].Unraise();
                                }
                                // Calcular posición x,y en donde mostrar el pulldown menu, según si está asociado a un MenuBar o a otro PulldownMenu.
                                if (_this.MenuType === ObjectType.MenuBar) {
                                    window[elementData_5['MenuId']].SetX(Number(document.getElementById(elementId).dataset.scitoolx));
                                    window[elementData_5['MenuId']].SetY(_this.Y + _this.Height);
                                }
                                else {
                                    window[elementData_5['MenuId']].SetX(document.getElementById(elementId).dataset.scitoolx);
                                    window[elementData_5['MenuId']].SetY(_this.Y + _this.Height);
                                }
                                window[elementData_5['MenuId']].SetZ(Table.GetViewFinderZ());
                                if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) { //Pulldown pertenece a un documento.
                                    window[elementData_5['MenuId']].SetZIndex(window[datosMetaObjetoPadre[0]["MetaObjectId"]].GetZIndex() + ZIndexDocumentSeparation - ZIndexPulldownMenuMarginFromTheTopOfTheDocumentBack);
                                }
                                else { //Pulldown pertenece al escritorio.
                                    window[elementData_5['MenuId']].SetZIndex(ZIndexSciToolPulldownMenu);
                                }
                            }
                            i++;
                        }
                    }
                    try {
                        window[elementId + "_OnMouseOver"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(elementId + "_OnMouseOver");
                    try {
                        window[_this.Id + "_OnMouseOver"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseOver");
                }
            };
            document.getElementById(elementId).ondblclick = function () {
                if (_this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnDblClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(elementId + "_OnDblClick");
                    try {
                        window[_this.Id + "_OnDblClick"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnDblClick");
                }
            };
            document.getElementById(elementId).onfocus = function () {
                if (_this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnFocus"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(elementId + "_OnFocus");
                    try {
                        window[_this.Id + "_OnFocus"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnFocus");
                }
            };
            document.getElementById(elementId).onmousemove = function () {
                if (_this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnMouseMove"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(elementId + "_OnMouseMove");
                    try {
                        window[_this.Id + "_OnMouseMove"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseMove");
                }
            };
            document.getElementById(elementId).onmousedown = function () {
                if (_this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnMouseDown"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(elementId + "_OnMouseDown");
                    try {
                        window[_this.Id + "_OnMouseDown"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseDown");
                }
            };
            document.getElementById(elementId).onmouseup = function () {
                if (_this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnMouseUp"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(elementId + "_OnMouseUp");
                    try {
                        window[_this.Id + "_OnMouseUp"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseUp");
                }
            };
            document.getElementById(elementId).onmouseout = function () {
                if (_this.GetEnabled(elementId)) {
                    document.getElementById(elementId).style.color = _this.GetColor();
                    document.getElementById(elementId).style.backgroundColor = _this.GetBackColor();
                    try {
                        window[elementId + "_OnMouseOut"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(elementId + "_OnMouseOut");
                    try {
                        window[_this.Id + "_OnMouseOut"].apply(_this);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnMouseOut");
                }
            };
            document.getElementById(elementId).onkeydown = function (evt) {
                if (_this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnKeyDown"].call(_this, evt);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(elementId + "_OnKeyDown");
                    try {
                        window[_this.Id + "_OnKeyDown"].call(_this, evt);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnKeyDown");
                }
            };
            document.getElementById(elementId).onkeypress = function (evt) {
                if (_this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnKeyPress"].call(_this, evt);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(elementId + "_OnKeyPress");
                    try {
                        window[_this.Id + "_OnKeyPress"].call(_this, evt);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnKeyPress");
                }
            };
            document.getElementById(elementId).onkeyup = function (evt) {
                if (_this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnKeyUp"].call(_this, evt);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(elementId + "_OnKeyUp");
                    try {
                        window[_this.Id + "_OnKeyUp"].call(_this, evt);
                    }
                    catch (e) { }
                    window[_this.Id].Talk(_this.Id + "_OnKeyUp");
                }
            };
            this.RedrawMenu();
        };
        Menu.prototype.AddList = function (lista) {
            var elementos = lista.split(",");
            for (var _i = 0, elementos_7 = elementos; _i < elementos_7.length; _i++) {
                var elemento = elementos_7[_i];
                this.Add(elemento);
            }
        };
        Menu.prototype.Clear = function () {
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                document.getElementById(elementData["Id"]).checked = false;
            }
        };
        Menu.prototype.GetLength = function () {
            return this.Length;
        };
        Menu.prototype.GetElements = function () {
            return this.elements;
        };
        Menu.prototype.GetMenuType = function () {
            return this.MenuType;
        };
        Menu.prototype.SetCrossZ = function (crossZ) {
            this.CrossZ = crossZ;
            var i = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                document.getElementById(elementData["Id"]).dataset.scitoolcrossz = String(crossZ);
                i++;
            }
            this.RedrawMenu();
        };
        Menu.prototype.GetCrossZ = function () {
            return this.CrossZ;
        };
        Menu.prototype.LinkMenu = function (elementId, menuId) {
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                if (elementData["Id"] === elementId) {
                    elementData["MenuId"] = menuId;
                    break;
                }
            }
        };
        Menu.prototype.SetX = function (x) {
            this.X = x;
            var X = x;
            if (this.MenuType == ObjectType.PulldownMenu) {
                for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                    var elementData = _a[_i];
                    document.getElementById(elementData["Id"]).dataset.scitoolx = String(X);
                }
            }
            else {
                for (var _b = 0, _c = this.elements; _b < _c.length; _b++) {
                    var elementData = _c[_b];
                    document.getElementById(elementData["Id"]).dataset.scitoolx = String(X);
                    X += this.GetPixelsLength(elementData["Id"]) + this.GetSeparationBetweenOptions();
                }
            }
            this.RedrawMenu();
        };
        Menu.prototype.GetX = function () {
            return this.X;
        };
        Menu.prototype.SetY = function (y) {
            this.Y = y;
            var Y = y;
            if (this.MenuType == ObjectType.PulldownMenu) {
                for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                    var elementData = _a[_i];
                    document.getElementById(elementData["Id"]).dataset.scitooly = String(Y);
                    Y += this.Height;
                }
            }
            else {
                for (var _b = 0, _c = this.elements; _b < _c.length; _b++) {
                    var elementData = _c[_b];
                    document.getElementById(elementData["Id"]).dataset.scitooly = String(Y);
                }
            }
            this.RedrawMenu();
        };
        Menu.prototype.GetY = function () {
            return this.Y;
        };
        Menu.prototype.SetZ = function (z) {
            this.Z = z;
            var i = 1;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                document.getElementById(elementData["Id"]).dataset.scitoolz = String(this.Z);
                //Borrar eventual borde inferior si acaso antes la opción actual fue la última de un menú Pulldown.
                if (this.MenuType === ObjectType.PulldownMenu) {
                    document.getElementById(elementData["Id"]).style.borderBottomStyle = "none";
                }
                //Dibujar borde inferior si opción es la última de un menú Pulldown.
                if (i === this.Length) {
                    if (this.MenuType === ObjectType.PulldownMenu) {
                        document.getElementById(elementData["Id"]).style.borderBottomStyle = "solid";
                        document.getElementById(elementData["Id"]).style.borderBottomLeftRadius = "6px";
                        document.getElementById(elementData["Id"]).style.borderBottomRightRadius = "6px";
                    }
                }
                i++;
            }
            this.RedrawMenu();
        };
        Menu.prototype.GetZ = function () {
            return this.Z;
        };
        Menu.prototype.SetXYZ = function (x, y, z) {
            this.X = x;
            this.Y = y;
            this.Z = z;
            var X;
            var Y;
            var incrementoX;
            var incrementoY;
            if (this.MenuType == ObjectType.PulldownMenu) {
                incrementoX = 0;
                incrementoY = this.Height;
            }
            else {
                incrementoX = this.Width;
                incrementoY = 0;
            }
            var i = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                X = this.X + i * incrementoX;
                Y = this.Y + i * incrementoY;
                document.getElementById(elementData["Id"]).dataset.scitoolx = String(X);
                document.getElementById(elementData["Id"]).dataset.scitooly = String(Y);
                document.getElementById(elementData["Id"]).dataset.scitoolz = String(this.Z);
                i++;
            }
            this.RedrawMenu();
        };
        Menu.prototype.RedrawMenu = function () {
            var x;
            var y;
            var z;
            var width;
            var xRelativo = Table.GetViewFinderX();
            var yRelativo = Table.GetViewFinderY();
            var xDocument, yDocument, xDocumentOrigin, yDocumentOrigin;
            var widthDocument, heightDocument, heightDocumentTitleBar;
            var documentParentId;
            var objectData;
            var anchoEnPixeles;
            if (this.MenuType === sci.Const.PulldownMenu) {
                for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                    var elementData = _a[_i];
                    x = Number(document.getElementById(elementData["Id"]).dataset.scitoolx);
                    y = Number(document.getElementById(elementData["Id"]).dataset.scitooly);
                    z = Number(document.getElementById(elementData["Id"]).dataset.scitoolz);
                    width = Number(document.getElementById(elementData["Id"]).dataset.scitoolwidth);
                    if (Table.InViewFinder(x, y, z, width, this.Height, this.CrossZ)) {
                        documentParentId = scitool.GetParentDocumentId(elementData['Id']);
                        if (documentParentId !== false) { // Objeto pertenece a un documento. Se usa "!== false" porque el valor puede ser False o un Id, nunca True.
                            xDocument = window[documentParentId].GetX();
                            yDocument = window[documentParentId].GetY();
                            xDocumentOrigin = window[documentParentId].GetOriginX();
                            yDocumentOrigin = window[documentParentId].GetOriginY();
                            widthDocument = window[documentParentId].GetWidth();
                            heightDocument = window[documentParentId].GetHeight();
                            heightDocumentTitleBar = window[documentParentId].GetTitleBarHeight();
                        }
                        else {
                            xDocument = 0;
                            yDocument = 0;
                            xDocumentOrigin = 0;
                            yDocumentOrigin = 0;
                            widthDocument = 0;
                            heightDocument = 0;
                            heightDocumentTitleBar = 0;
                        }
                        //Calcular coordenadas del objeto a mostrar según posición del ViewFinder.
                        xRelativo = x - Table.GetViewFinderX();
                        yRelativo = y - Table.GetViewFinderY();
                        //Recoger datos del objeto.
                        for (var i = 0; i < MetaObject_private.objects.length; i++) {
                            if (MetaObject_private.objects[i]["ObjectId"] === elementData['Id'] && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.RadioButtonGroup) {
                                objectData = MetaObject_private.objects[i];
                                break;
                            }
                        }
                        if (documentParentId !== false) {
                            // Descomentar si no funciona bien SciTool
                            xRelativo -= xDocumentOrigin;
                            yRelativo -= yDocumentOrigin;
                            window[elementData['Id']].style.left = String(xRelativo) + "px";
                            window[elementData['Id']].style.top = String(yRelativo) + "px";
                            window[elementData['Id']].style.removeProperty("display");
                        }
                        else {
                            document.getElementById(elementData['Id']).style.left = String(xRelativo) + "px";
                            document.getElementById(elementData['Id']).style.top = String(yRelativo) + "px";
                            document.getElementById(elementData['Id']).style.removeProperty("display");
                        }
                    }
                    else {
                        document.getElementById(elementData['Id']).style.setProperty("display", "none");
                    }
                }
            }
            Table_private.RedrawViewFinderContent();
        };
        Menu.prototype.SetWidth = function (width) {
            this.Width = width;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                document.getElementById(elementData["Id"]).dataset.scitoolwidth = String(this.Width);
                document.getElementById(elementData["Id"]).style.width = String(this.Width) + "px";
            }
            this.RedrawMenu();
        };
        Menu.prototype.GetWidth = function () {
            return this.Width;
        };
        Menu.prototype.SetHeight = function (height) {
            this.Height = height;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                document.getElementById(elementData["Id"]).dataset.scitoolheight = String(this.Height);
                document.getElementById(elementData["Id"]).style.height = String(this.Height) + "px";
            }
            this.RedrawMenu();
        };
        Menu.prototype.GetHeight = function () {
            return this.Height;
        };
        Menu.prototype.SetDimensions = function (width, height) {
            this.Width = width;
            this.Height = height;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                document.getElementById(elementData["Id"]).dataset.scitoolwidth = String(this.Width);
                document.getElementById(elementData["Id"]).style.width = String(this.Width) + "px";
                document.getElementById(elementData["Id"]).dataset.scitoolheight = String(this.Height);
                document.getElementById(elementData["Id"]).style.height = String(this.Height) + "px";
            }
            this.RedrawMenu();
        };
        Menu.prototype.GetInViewFinder = function () {
            var X;
            var Y;
            var Z = this.Z;
            var Width;
            var Height;
            var incrementoX;
            var incrementoY;
            if (this.MenuType == ObjectType.PulldownMenu) {
                incrementoX = 0;
                incrementoY = this.Height;
                var i = 0;
                for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                    var elementData = _a[_i];
                    X = this.X + i * incrementoX;
                    Y = this.Y + i * incrementoY;
                    if (Table.InViewFinder(X, Y, Z, this.Width, this.Height, this.CrossZ)) {
                        return true;
                    }
                    i++;
                }
            }
            else {
                for (var _b = 0, _c = this.elements; _b < _c.length; _b++) {
                    var elementData = _c[_b];
                    X = window[elementData["Id"]].GetX();
                    Y = window[elementData["Id"]].GetY();
                    Width = window[elementData["Id"]].GetPixelsLength();
                    Height = window[elementData["Id"]].GetHeight();
                    if (Table.InViewFinder(X, Y, Z, Width, Height, this.CrossZ)) {
                        return true;
                    }
                }
            }
            return false;
        };
        Menu.prototype.SetVisible = function (visible) {
            this.Visible = visible;
            var visibilidad;
            if (visible === true) {
                visibilidad = 'visible';
            }
            else {
                visibilidad = 'hidden';
            }
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                document.getElementById(elementData["Id"]).style.visibility = visibilidad;
            }
        };
        Menu.prototype.GetVisible = function () {
            return this.Visible;
        };
        Menu.prototype.SetColor = function (color) {
            this.Color = color;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                if (this.GetEnabled(elementData["Id"])) {
                    document.getElementById(elementData["Id"]).style.color = color;
                }
            }
        };
        Menu.prototype.GetColor = function () {
            return this.Color;
        };
        Menu.prototype.SetBackColor = function (backColor) {
            this.BackColor = backColor;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                if (this.GetEnabled(elementData["Id"])) {
                    document.getElementById(elementData["Id"]).style.backgroundColor = backColor;
                }
            }
        };
        Menu.prototype.GetBackColor = function () {
            return this.BackColor;
        };
        Menu.prototype.SetColorOnMouseOver = function (color) {
            this.ColorOnMouseOver = color;
        };
        Menu.prototype.GetColorOnMouseOver = function () {
            return this.ColorOnMouseOver;
        };
        Menu.prototype.SetBackColorOnMouseOver = function (color) {
            this.BackColorOnMouseOver = color;
        };
        Menu.prototype.GetBackColorOnMouseOver = function () {
            return this.BackColorOnMouseOver;
        };
        Menu.prototype.SetTabIndex = function (tabIndex) {
            if (this.Length >= 1) {
                this.TabIndex = tabIndex;
                for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                    var elementData = _a[_i];
                    if (this.GetEnabled(elementData["Id"])) {
                        document.getElementById(elementData["Id"]).tabIndex = tabIndex;
                    }
                    tabIndex++;
                }
            }
        };
        Menu.prototype.GetTabIndex = function () {
            return this.TabIndex;
        };
        Menu.prototype.RestoreTabIndex = function () {
            this.SetTabIndex(0);
        };
        Menu.prototype.SetZIndex = function (zIndex) {
            this.ZIndex = zIndex;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                document.getElementById(elementData["Id"]).style.zIndex = zIndex;
                if (!isNaN(Number(zIndex))) {
                    zIndex = String(Number(zIndex) + 1);
                }
            }
        };
        Menu.prototype.GetZIndex = function () {
            return this.ZIndex;
        };
        Menu.prototype.RestoreZIndex = function () {
            this.SetZIndex("auto");
        };
        Menu.prototype.SetFontSize = function (fontSize) {
            this.FontSize = fontSize;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                document.getElementById(elementData["Id"]).style.fontSize = String(fontSize);
            }
        };
        Menu.prototype.GetFontSize = function () {
            return this.FontSize;
        };
        Menu.prototype.SetFontFamily = function (fontFamily) {
            this.FontFamily = fontFamily;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                document.getElementById(elementData["Id"]).style.fontFamily = fontFamily;
            }
        };
        Menu.prototype.GetFontFamily = function () {
            return this.FontFamily;
        };
        Menu.prototype.SetEnabled = function (id, enabled) {
            if (id === void 0) { id = ""; }
            //TRUCO para hacer al parámetro id opcional: si solo se recibe un único parámetro booleano, entonces ese valor viene en el parámetro id y enabled viene undefined,
            //entonces, se hace enabled = id y se aplica el valor true o false guardado en enabled a todos los elementos del grupo.
            if (enabled !== undefined) {
                if (enabled) {
                    if (typeof id === 'number') {
                        document.getElementById(this.elements[id - 1]["Id"]).removeAttribute("disabled");
                    }
                    else {
                        document.getElementById(id).removeAttribute("disabled");
                    }
                    this.SetColor(this.GetColor());
                    this.SetBackColor(this.GetBackColor());
                }
                else {
                    if (typeof id === 'number') {
                        document.getElementById(this.elements[id - 1]["Id"]).setAttribute("disabled", "disabled");
                    }
                    else {
                        document.getElementById(id).setAttribute("disabled", "disabled");
                    }
                    this.SetDisabledColor(this.GetDisabledColor());
                    this.SetBackColor(this.GetBackColor());
                }
            }
            else {
                enabled = id; //Solo vino un parámetro: el booleano, para enabled, pero vino, por tanto, en el parámetro id.
                if (enabled) {
                    for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                        var elementData = _a[_i];
                        document.getElementById(elementData["Id"]).removeAttribute("disabled");
                        document.getElementById(elementData["Id"]).style.color = this.GetColor();
                        document.getElementById(elementData["Id"]).style.backgroundColor = this.GetBackColor();
                    }
                }
                else {
                    for (var _b = 0, _c = this.elements; _b < _c.length; _b++) {
                        var elementData = _c[_b];
                        document.getElementById(elementData["Id"]).setAttribute("disabled", "disabled");
                        document.getElementById(elementData["Id"]).style.color = this.GetDisabledColor();
                        document.getElementById(elementData["Id"]).style.backgroundColor = this.GetBackColor();
                    }
                }
            }
        };
        Menu.prototype.GetEnabled = function (id) {
            if (typeof id === 'number') {
                if (document.getElementById(this.elements[id - 1]["Id"]).getAttribute("disabled") === null) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                if (document.getElementById(id).getAttribute("disabled") === null) {
                    return true;
                }
                else {
                    return false;
                }
            }
        };
        Menu.prototype.SetDisabledColor = function (color) {
            this.DisabledColor = color;
            var i = 0;
            for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                var elementData = _a[_i];
                if (!this.GetEnabled(elementData["Id"])) {
                    document.getElementById(elementData["Id"]).style.color = color;
                }
                i++;
            }
        };
        Menu.prototype.GetDisabledColor = function () {
            return this.DisabledColor;
        };
        Menu.prototype.SetFocus = function () {
            document.getElementById(this.elements[0]["Id"]).focus();
        };
        Menu.prototype.Talk = function (message, metaMessage) {
            if (metaMessage === void 0) { metaMessage = ""; }
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (var i = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    }
                    catch (e) { }
                }
            }
            for (var _i = 0, _a = MetaObject.GetIdsStack(); _i < _a.length; _i++) {
                var idMetaobjeto = _a[_i];
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                }
                catch (e) { }
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            }
            catch (e) { }
        };
        Menu.NumberOfUnnamedObjects = 0;
        Menu.idsStack = [];
        Menu.openMenus = false; //Indica si se hizo click en alguna opción de un menú raíz, activando/desactivando el despliegue automático de los submenús.
        return Menu;
    }());
    sci.Menu = Menu;
    //Funciones para ahorrar escritura al programador, pues son éstas quienes llaman a los métodos de la clase "scitool"
    //(evitándole al programador escribir "sci.scitool.método", donde "sci" corresponde al módulo y "scitool" corresponde a la clase).
    function LoadComponent(componentFile) {
        scitool.LoadComponent(componentFile);
    }
    sci.LoadComponent = LoadComponent;
    function GetStackObjectsToLoad() {
        return scitool.GetStackObjectsToLoad();
    }
    sci.GetStackObjectsToLoad = GetStackObjectsToLoad;
    function GetLoadedObjectsData() {
        return scitool.GetLoadedObjectsData();
    }
    sci.GetLoadedObjectsData = GetLoadedObjectsData;
    function GetObjectDataById(id) {
        return scitool.GetObjectDataById(id);
    }
    sci.GetObjectDataById = GetObjectDataById;
    function GetObjectDataByFileName(fileName) {
        return scitool.GetObjectDataByFileName(fileName);
    }
    sci.GetObjectDataByFileName = GetObjectDataByFileName;
    function GetLoadedObjectStateById(id) {
        return scitool.GetLoadedObjectStateById(id);
    }
    sci.GetLoadedObjectStateById = GetLoadedObjectStateById;
    function GetLoadedObjectStateByFileName(fileName) {
        return scitool.GetLoadedObjectStateByFileName(fileName);
    }
    sci.GetLoadedObjectStateByFileName = GetLoadedObjectStateByFileName;
    function LoadingObjects() {
        return scitool.LoadingObjects();
    }
    sci.LoadingObjects = LoadingObjects;
    function LoadedObjectById(id) {
        return scitool.LoadedObjectById(id);
    }
    sci.LoadedObjectById = LoadedObjectById;
    function LoadedObjectByFileName(fileName) {
        return scitool.LoadedObjectByFileName(fileName);
    }
    sci.LoadedObjectByFileName = LoadedObjectByFileName;
    function GetObjectsMap() {
        return scitool.GetObjectsMap();
    }
    sci.GetObjectsMap = GetObjectsMap;
    function GetParentDocumentId(idObjeto) {
        return scitool.GetParentDocumentId(idObjeto);
    }
    sci.GetParentDocumentId = GetParentDocumentId;
    function GetParentMetaObjectId(idObjeto) {
        return scitool.GetParentMetaObjectId(idObjeto);
    }
    sci.GetParentMetaObjectId = GetParentMetaObjectId;
    function GetMetaObjectObjectsNumber(idMetaobjeto) {
        return scitool.GetMetaObjectObjectsNumber(idMetaobjeto);
    }
    sci.GetMetaObjectObjectsNumber = GetMetaObjectObjectsNumber;
    //Funciones para ahorrar escritura al programador, pues son éstas quienes crean las variables de objetos de las clases
    //(evitándole al programador escribir "let variable = new ...").
    function AddMetaObject(id) {
        if (id === void 0) { id = 'MetaObject' + (MetaObject.NumberOfUnnamedObjects++); }
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new MetaObject(id);
            return true;
        }
        else {
            return false;
        }
    }
    sci.AddMetaObject = AddMetaObject;
    // Los documentos se crean por defecto en el Limbo, por tanto no requieren un Z, y de este modo,
    // se fuerza a que todos los documentos deban ejecutar el método Bring(), y además, al pasar del Limbo a un Z cualquiera con Bring(),
    // entonces todos los documentos llamarán al menos una vez al evento OnOpen().
    function AddDocument(x, y, width, height, caption, id) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (caption === void 0) { caption = ""; }
        if (id === void 0) { id = 'Document' + (Document.NumberOfUnnamedObjects++); }
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Document(x, y, sci.Limbo, width, height, caption, id);
            return true;
        }
        else {
            return false;
        }
    }
    sci.AddDocument = AddDocument;
    function AddCanvas(x, y, z, width, height, id) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (id === void 0) { id = 'Canvas' + (Canvas.NumberOfUnnamedObjects++); }
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Canvas("scitool", x, y, z, width, height, id);
            return true;
        }
        else {
            return false;
        }
    }
    sci.AddCanvas = AddCanvas;
    function AddBox(x, y, z, width, height, borderWidth, borderColor, fillColor, id) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (borderWidth === void 0) { borderWidth = Skin.GetBoxBorderWidth(); }
        if (borderColor === void 0) { borderColor = Skin.GetBoxBorderColor(); }
        if (fillColor === void 0) { fillColor = Skin.GetBoxFillColor(); }
        if (id === void 0) { id = 'Box' + (Box.NumberOfUnnamedObjects++); }
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Box("scitool", x, y, z, width, height, borderWidth, borderColor, fillColor, id);
            return true;
        }
        else {
            return false;
        }
    }
    sci.AddBox = AddBox;
    function AddEllipse(x, y, z, width, height, borderWidth, borderColor, fillColor, id) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (borderWidth === void 0) { borderWidth = Skin.GetEllipseBorderWidth(); }
        if (borderColor === void 0) { borderColor = Skin.GetEllipseBorderColor(); }
        if (fillColor === void 0) { fillColor = Skin.GetEllipseFillColor(); }
        if (id === void 0) { id = 'Ellipse' + (Ellipse.NumberOfUnnamedObjects++); }
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Ellipse("scitool", x, y, z, width, height, borderWidth, borderColor, fillColor, id);
            return true;
        }
        else {
            return false;
        }
    }
    sci.AddEllipse = AddEllipse;
    function AddLabel(x, y, z, caption, id) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (caption === void 0) { caption = ""; }
        if (id === void 0) { id = 'Label' + (Label.NumberOfUnnamedObjects++); }
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Label("scitool", x, y, z, caption, id);
            return true;
        }
        else {
            return false;
        }
    }
    sci.AddLabel = AddLabel;
    function AddTextBox(x, y, z, caption, id) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (caption === void 0) { caption = ""; }
        if (id === void 0) { id = 'TextBox' + (TextBox.NumberOfUnnamedObjects++); }
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new TextBox("scitool", x, y, z, caption, id);
            return true;
        }
        else {
            return false;
        }
    }
    sci.AddTextBox = AddTextBox;
    function AddButton(x, y, z, caption, id) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (caption === void 0) { caption = ""; }
        if (id === void 0) { id = 'Button' + (Button.NumberOfUnnamedObjects++); }
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Button("scitool", x, y, z, caption, id);
            return true;
        }
        else {
            return false;
        }
    }
    sci.AddButton = AddButton;
    function AddImage(x, y, z, width, height, imageFile, caption, id) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (imageFile === void 0) { imageFile = ""; }
        if (caption === void 0) { caption = ""; }
        if (id === void 0) { id = 'Image' + (Image.NumberOfUnnamedObjects++); }
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Image("scitool", x, y, z, width, height, imageFile, caption, id);
            return true;
        }
        else {
            return false;
        }
    }
    sci.AddImage = AddImage;
    function AddVideo(x, y, z, width, height, videoFile, autoPlay, id) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (videoFile === void 0) { videoFile = ""; }
        if (autoPlay === void 0) { autoPlay = false; }
        if (id === void 0) { id = 'Video' + (Video.NumberOfUnnamedObjects++); }
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Video("scitool", x, y, z, width, height, videoFile, autoPlay, id);
            return true;
        }
        else {
            return false;
        }
    }
    sci.AddVideo = AddVideo;
    function AddCheckBox(x, y, z, caption, id) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (caption === void 0) { caption = ""; }
        if (id === void 0) { id = 'CheckBox' + (CheckBox.NumberOfUnnamedObjects++); }
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new CheckBox("scitool", x, y, z, caption, id);
            return true;
        }
        else {
            return false;
        }
    }
    sci.AddCheckBox = AddCheckBox;
    function AddRadioButtonGroup(x, y, z, id) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (id === void 0) { id = 'RadioButtonGroup' + (RadioButtonGroup.NumberOfUnnamedObjects++); }
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new RadioButtonGroup("scitool", x, y, z, id);
            return true;
        }
        else {
            return false;
        }
    }
    sci.AddRadioButtonGroup = AddRadioButtonGroup;
    function AddComboBox(x, y, z, id) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (id === void 0) { id = 'ComboBox' + (ComboBox.NumberOfUnnamedObjects++); }
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new ComboBox("scitool", x, y, z, id);
            return true;
        }
        else {
            return false;
        }
    }
    sci.AddComboBox = AddComboBox;
    function AddFile(x, y, z, id) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (id === void 0) { id = 'File' + (File.NumberOfUnnamedObjects++); }
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new File("scitool", x, y, z, id);
            return true;
        }
        else {
            return false;
        }
    }
    sci.AddFile = AddFile;
    function AddRequester(id) {
        if (id === void 0) { id = 'Requester' + (Requester.NumberOfUnnamedObjects++); }
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Requester(id);
            return true;
        }
        else {
            return false;
        }
    }
    sci.AddRequester = AddRequester;
    function AddChronometer(id) {
        if (id === void 0) { id = 'Chronometer' + (Chronometer.NumberOfUnnamedObjects++); }
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Chronometer(id);
            return true;
        }
        else {
            return false;
        }
    }
    sci.AddChronometer = AddChronometer;
    function AddTimer(hours, minutes, seconds, centiseconds, id) {
        if (hours === void 0) { hours = 0; }
        if (minutes === void 0) { minutes = 0; }
        if (seconds === void 0) { seconds = 0; }
        if (centiseconds === void 0) { centiseconds = 0; }
        if (id === void 0) { id = 'Timer' + (Timer.NumberOfUnnamedObjects++); }
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Timer(hours, minutes, seconds, centiseconds, id);
            return true;
        }
        else {
            return false;
        }
    }
    sci.AddTimer = AddTimer;
    function AddDiv(x, y, z, width, height, borderWidth, borderColor, fillColor, id) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (borderWidth === void 0) { borderWidth = Skin.GetDivBorderWidth(); }
        if (borderColor === void 0) { borderColor = Skin.GetDivBorderColor(); }
        if (fillColor === void 0) { fillColor = Skin.GetDivFillColor(); }
        if (id === void 0) { id = 'Div' + (Div.NumberOfUnnamedObjects++); }
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Div("scitool", x, y, z, width, height, borderWidth, borderColor, fillColor, id);
            return true;
        }
        else {
            return false;
        }
    }
    sci.AddDiv = AddDiv;
    function AddMenuBar(x, y, z, id) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (id === void 0) { id = 'Menu' + (Menu.NumberOfUnnamedObjects++); }
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Menu("scitool", x, y, z, ObjectType.MenuBar, id);
            return true;
        }
        else {
            return false;
        }
    }
    sci.AddMenuBar = AddMenuBar;
    //Los Menú Pulldown siempre se crean en las coordenadas (0,0,Limbo).
    function AddPulldownMenu(id) {
        if (id === void 0) { id = 'Menu' + (Menu.NumberOfUnnamedObjects++); }
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Menu("scitool", 0, 0, sci.Limbo, ObjectType.PulldownMenu, id);
            return true;
        }
        else {
            return false;
        }
    }
    sci.AddPulldownMenu = AddPulldownMenu;
})(sci || (sci = {}));
