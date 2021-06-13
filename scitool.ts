// SciTool
// MIT License
// Copyright (c) 2021 Gabriel Lucero
// Email: pensadornatural@gmail.com

module sci {
    export const Const = {
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
        AutomaticWidth: '-1', // Usado para indicar que un Label tiene un ancho automático.
        FixedWidth: '-2', // Usado para indicar que un Label tiene un ancho fijo.
        SuccessColor: 'rgb(149,193,31)',
        UnsuccessColor: 'rgb(230,66,90)',
        DangerColor: 'rgb(230,66,90)',
        NoticeColor: 'rgb(58,138,211)',
        WarningColor: 'rgb(221,150,10)',
        ZIndexOnTop: '4000200', //Usado para que el programador pueda posicionar hasta 299 objetos sobre los documentos.
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
    }

    //Estructura de ZIndex.
    const ZIndexDocumentSeparation = 2000; //Cada documento puede tener como máximo 1999 objetos, pues cada dos mil números de ZIndex comienza un nuevo documento.

    const MinZIndexBelowMostDocument = 1000000; //Si ZIndexDocumentSeparation = 2000, se permiten 500 documentos BelowMost.

    const MinZIndexNormalDocument = 2000000; //Si ZIndexDocumentSeparation = 2000, se permiten 500 documentos Normal.

    const MinZIndexTopMostDocument = 3000000; //Si ZIndexDocumentSeparation = 2000, se permiten 500 documentos TopMost (después vienen los menús y la StatusBar).

    const ZIndexIconosEscritorio = 4000000;

    const ZIndexStatusBar = "4000101"; //Hay 99 números para contenidos de la StatusBar, hasta el 4000199. Luego viene el ZIndexOnTop, para que el programador posicione hasta 299 objetos sobre los documentos (hasta antes del ZIndexSciToolPulldownMenu).

    const ZIndexSciToolPulldownMenu = 4000500; //Los menús pulldown del escritorio tienen el mayor ZIndex entre los objetos.

    const ZIndexPulldownMenuMarginFromTheTopOfTheDocumentBack = 200; //Los menús pulldown tienen un ZIndex igual al tope del documento al que pertenezcan, menos la cantidad de este parámetro y de allí hacia arriba nuevamente.


    export const Limbo = -100000;

    const LimboEscritorio = -100001;

    // Variables que contienen las coordenadas del mouse, disponibles para toda la librería.
    var xMouse: number;
    var yMouse: number;

    //Detectar evento Resize del navegador y llamar a un evento.
    window.onresize = () => {
        try {
            window["scitool_OnResize"].apply();
        } catch(e) {}
        Table.Talk("scitool_OnResize");
    }

    // Variable que indica si hay documentos recogidos.
    var docRecogidos: boolean = false;

    const ObjectType = {
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
    }

    const StandardSkin = {
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
        LabelColor: Const.Black,
        LabelBackColor: 'transparent',
        LabelTypeWidth: Const.AutomaticWidth,
        LabelWidth: 9000, // Ancho inicial de los labels, hasta que SciTool lo fija al ancho que mida el contenido de ellos cuando ya han sido creados en el DOM.
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
        ButtonWidth: Const.DefaultButtonWidth,
        ButtonHeight: Const.DefaultButtonHeight,
        ButtonFontSize: 15,
        ButtonFontFamily: "'Lucida Grande', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        ButtonColor: Const.DarkGray,
        ButtonFromBackColor: Const.LightGray,
        ButtonToBackColor: Const.LightGray,
        ButtonColorOnMouseOver: Const.White,
        ButtonFromBackColorOnMouseOver: Const.DarkBlue,
        ButtonToBackColorOnMouseOver: Const.DarkBlue,
        ButtonBorderTopColor: Const.Gray,
        ButtonBorderRightColor: Const.Gray,
        ButtonBorderBottomColor: Const.Gray,
        ButtonBorderLeftColor: Const.Gray,
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
    }

    export class Skin {
        private static SciToolBackColor: string = StandardSkin.SciToolBackColor;
        private static SciToolTexture: boolean = StandardSkin.SciToolTexture;
        private static SciToolBackgroundImage: string = StandardSkin.SciToolBackgroundImage;
        private static SciToolBackgroundPositionX: string = StandardSkin.SciToolBackgroundPositionX;
        private static SciToolBackgroundPositionY: string = StandardSkin.SciToolBackgroundPositionY;
        private static SciToolBackgroundAttachment: string = StandardSkin.SciToolBackgroundAttachment;
        private static SciToolBackgroundRepeat: string = StandardSkin.SciToolBackgroundRepeat;
        private static ToolBoxShow: boolean = StandardSkin.ToolBoxShow;
        private static ToolBoxHideAutomatically: boolean = StandardSkin.ToolBoxHideAutomatically;
        private static ToolBoxWindowPickupDropIcons: boolean = StandardSkin.ToolBoxWindowPickupDropIcons;
        private static ToolBoxWindowOrganizationIcons: boolean = StandardSkin.ToolBoxWindowOrganizationIcons;
        private static ToolBoxTableIcons: boolean = StandardSkin.ToolBoxTableIcons;
        private static ToolBoxColor: string = StandardSkin.ToolBoxColor;
        private static ToolBoxIconColor: string = StandardSkin.ToolBoxIconColor;
        private static ToolBoxIconDisabledColor: string = StandardSkin.ToolBoxIconDisabledColor;
        private static ToolBoxTop: number = StandardSkin.ToolBoxTop;
        private static StatusBarHeight: number = StandardSkin.StatusBarHeight;
        private static StatusBarColor: string = StandardSkin.StatusBarColor;
        private static StatusBarBackColor: string = StandardSkin.StatusBarBackColor;
        private static StatusBarFontSize: number = StandardSkin.StatusBarFontSize;
        private static StatusBarFontFamily: string = StandardSkin.StatusBarFontFamily;
        private static StatusBarSuccessColor: string = StandardSkin.StatusBarSuccessColor;
        private static StatusBarSuccessBackColor: string = StandardSkin.StatusBarSuccessBackColor;
        private static StatusBarUnsuccessColor: string = StandardSkin.StatusBarUnsuccessColor;
        private static StatusBarUnsuccessBackColor: string = StandardSkin.StatusBarUnsuccessBackColor;
        private static StatusBarNoticeColor: string = StandardSkin.StatusBarNoticeColor;
        private static StatusBarNoticeBackColor: string = StandardSkin.StatusBarNoticeBackColor;
        private static StatusBarWarningColor: string = StandardSkin.StatusBarWarningColor;
        private static StatusBarWarningBackColor: string = StandardSkin.StatusBarWarningBackColor;
        private static StatusBarTimeToResetColor: number = StandardSkin.StatusBarTimeToResetColor;
        private static DocumentBorderColor: string = StandardSkin.DocumentBorderColor;
        private static DocumentTitleBarFontColor: string = StandardSkin.DocumentTitleBarFontColor;
        private static DocumentTitleBarColor: string = StandardSkin.DocumentTitleBarColor;
        private static DocumentColor: string = StandardSkin.DocumentColor;
        private static DocumentBorderWidth: number = StandardSkin.DocumentBorderWidth;
        private static DocumentBorderRadius: number = StandardSkin.DocumentBorderRadius;
        private static DocumentDisabledTitleBarFontColor: string = StandardSkin.DocumentDisabledTitleBarFontColor;
        private static DocumentDisabledTitleBarColor: string = StandardSkin.DocumentDisabledTitleBarColor;
        private static DocumentTitleFontSize: number = StandardSkin.DocumentTitleFontSize;
        private static DocumentTitleFontFamily: string = StandardSkin.DocumentTitleFontFamily;
        private static DocumentTitleBarHeight: number = StandardSkin.DocumentTitleBarHeight;
        private static DocumentTitleBarButtonColor: string = StandardSkin.DocumentTitleBarButtonColor;
        private static DocumentTitleBarButtonColorOnMouseOver: string = StandardSkin.DocumentTitleBarButtonColorOnMouseOver;
        private static DocumentTitleBarDisabledButtonColor: string = StandardSkin.DocumentTitleBarDisabledButtonColor;
        private static LabelColor: string = StandardSkin.LabelColor;
        private static LabelBackColor: string = StandardSkin.LabelBackColor;
        private static LabelTypeWidth: string = StandardSkin.LabelTypeWidth;
        private static LabelWidth: number = StandardSkin.LabelWidth;
        private static LabelHeight: number = StandardSkin.LabelHeight;
        private static LabelFontSize: number = StandardSkin.LabelFontSize;
        private static LabelFontFamily: string = StandardSkin.LabelFontFamily;
        private static LabelLinkColor: string = StandardSkin.LabelLinkColor;
        private static LabelDisabledColor: string = StandardSkin.LabelDisabledColor;
        private static BoxBorderColor: string = StandardSkin.BoxBorderColor;
        private static BoxFillColor: string = StandardSkin.BoxFillColor;
        private static BoxBorderWidth: number = StandardSkin.BoxBorderWidth;
        private static EllipseBorderColor: string = StandardSkin.EllipseBorderColor;
        private static EllipseFillColor: string = StandardSkin.EllipseFillColor;
        private static EllipseBorderWidth: number = StandardSkin.EllipseBorderWidth;
        private static CheckBoxWidth: number = StandardSkin.CheckBoxWidth;
        private static CheckBoxHeight: number = StandardSkin.CheckBoxHeight;
        private static CheckBoxFontSize: number = StandardSkin.CheckBoxFontSize;
        private static CheckBoxFontFamily: string = StandardSkin.CheckBoxFontFamily;
        private static CheckBoxColor: string = StandardSkin.CheckBoxColor;
        private static CheckBoxBackColor: string = StandardSkin.CheckBoxBackColor;
        private static CheckBoxDisabledColor: string = StandardSkin.CheckBoxDisabledColor;
        private static RadioButtonWidth: number = StandardSkin.RadioButtonWidth;
        private static RadioButtonHeight: number = StandardSkin.RadioButtonHeight;
        private static RadioButtonFontSize: number = StandardSkin.RadioButtonFontSize;
        private static RadioButtonFontFamily: string = StandardSkin.RadioButtonFontFamily;
        private static RadioButtonColor: string = StandardSkin.RadioButtonColor;
        private static RadioButtonBackColor: string = StandardSkin.RadioButtonBackColor;
        private static RadioButtonDisabledColor: string = StandardSkin.RadioButtonDisabledColor;
        private static ComboBoxWidth: number = StandardSkin.ComboBoxWidth;
        private static ComboBoxHeight: number = StandardSkin.ComboBoxHeight;
        private static ComboBoxLineHeight: number = StandardSkin.ComboBoxLineHeight;
        private static ComboBoxFontSize: number = StandardSkin.ComboBoxFontSize;
        private static ComboBoxFontFamily: string = StandardSkin.ComboBoxFontFamily;
        private static ComboBoxColor: string = StandardSkin.ComboBoxColor;
        private static ComboBoxFromBackColor: string = StandardSkin.ComboBoxFromBackColor;
        private static ComboBoxToBackColor: string = StandardSkin.ComboBoxToBackColor;
        private static ComboBoxListBoxColor: string = StandardSkin.ComboBoxListBoxColor;
        private static ComboBoxListBoxBackColor: string = StandardSkin.ComboBoxListBoxBackColor;
        private static ComboBoxDisabledColor: string = StandardSkin.ComboBoxDisabledColor;
        private static ComboBoxDisabledFromBackColor: string = StandardSkin.ComboBoxDisabledFromBackColor;
        private static ComboBoxDisabledToBackColor: string = StandardSkin.ComboBoxDisabledToBackColor;
        private static ComboBoxDisabledListBoxFromBackColor: string = StandardSkin.ComboBoxDisabledListBoxFromBackColor;
        private static ComboBoxDisabledListBoxToBackColor: string = StandardSkin.ComboBoxDisabledListBoxToBackColor;
        private static TextBoxWidth: number = StandardSkin.TextBoxWidth;
        private static TextBoxHeight: number = StandardSkin.TextBoxHeight;
        private static TextBoxFontSize: number = StandardSkin.TextBoxFontSize;
        private static TextBoxFontFamily: string = StandardSkin.TextBoxFontFamily;
        private static TextBoxColor: string = StandardSkin.TextBoxColor;
        private static TextBoxBackColor: string = StandardSkin.TextBoxBackColor;
        private static TextBoxDisabledColor: string = StandardSkin.TextBoxDisabledColor;
        private static TextBoxDisabledFlagColor: string = StandardSkin.TextBoxDisabledFlagColor;
        private static TextBoxBorderColor: string = StandardSkin.TextBoxBorderColor;
        private static TextBoxReadyColor: string = StandardSkin.TextBoxReadyColor;
        private static TextBoxNotReadyColor: string = StandardSkin.TextBoxNotReadyColor;
        private static ButtonWidth: number = StandardSkin.ButtonWidth;
        private static ButtonHeight: number = StandardSkin.ButtonHeight;
        private static ButtonFontSize: number = StandardSkin.ButtonFontSize;
        private static ButtonFontFamily: string = StandardSkin.ButtonFontFamily;
        private static ButtonColor: string = StandardSkin.ButtonColor;
        private static ButtonFromBackColor: string = StandardSkin.ButtonFromBackColor;
        private static ButtonToBackColor: string = StandardSkin.ButtonToBackColor;
        private static ButtonColorOnMouseOver: string = StandardSkin.ButtonColorOnMouseOver;
        private static ButtonFromBackColorOnMouseOver: string = StandardSkin.ButtonFromBackColorOnMouseOver;
        private static ButtonToBackColorOnMouseOver: string = StandardSkin.ButtonToBackColorOnMouseOver;
        private static ButtonBorderTopColor: string = StandardSkin.ButtonBorderTopColor;
        private static ButtonBorderRightColor: string = StandardSkin.ButtonBorderRightColor;
        private static ButtonBorderBottomColor: string = StandardSkin.ButtonBorderBottomColor;
        private static ButtonBorderLeftColor: string = StandardSkin.ButtonBorderLeftColor;
        private static ButtonTopLeftRadius: number = StandardSkin.ButtonTopLeftRadius;
        private static ButtonTopRightRadius: number = StandardSkin.ButtonTopRightRadius;
        private static ButtonBottomLeftRadius: number = StandardSkin.ButtonBottomLeftRadius;
        private static ButtonBottomRightRadius: number = StandardSkin.ButtonBottomRightRadius;
        private static ButtonTopBorderWidth: number = StandardSkin.ButtonTopBorderWidth;
        private static ButtonRightBorderWidth: number = StandardSkin.ButtonRightBorderWidth;
        private static ButtonBottomBorderWidth: number = StandardSkin.ButtonBottomBorderWidth;
        private static ButtonLeftBorderWidth: number = StandardSkin.ButtonLeftBorderWidth;
        private static ButtonDisabledColor: string = StandardSkin.ButtonDisabledColor;
        private static ButtonDisabledFromBackColor: string = StandardSkin.ButtonDisabledFromBackColor;
        private static ButtonDisabledToBackColor: string = StandardSkin.ButtonDisabledToBackColor;
        private static FileWidth: number = StandardSkin.FileWidth;
        private static FileHeight: number = StandardSkin.FileHeight;
        private static FileFontSize: number = StandardSkin.FileFontSize;
        private static FileFontFamily: string = StandardSkin.FileFontFamily;
        private static FileColor: string = StandardSkin.FileColor;
        private static FileBackColor: string = StandardSkin.FileBackColor;
        private static FileDisabledColor: string = StandardSkin.FileDisabledColor;
        private static FileDisabledBackColor: string = StandardSkin.FileDisabledBackColor;
        private static ImageColor: string = StandardSkin.ImageColor;
        private static ImageBackColor: string = StandardSkin.ImageBackColor;
        private static DivBorderColor: string = StandardSkin.DivBorderColor;
        private static DivFillColor: string = StandardSkin.DivFillColor;
        private static DivBorderWidth: number = StandardSkin.DivBorderWidth;
        private static MenuHeight: number = StandardSkin.MenuHeight;
        private static MenuFontSize: number = StandardSkin.MenuFontSize;
        private static MenuFontFamily: string = StandardSkin.MenuFontFamily;
        private static MenuColor: string = StandardSkin.MenuColor;
        private static MenuBackColor: string = StandardSkin.MenuBackColor;
        private static MenuDisabledColor: string = StandardSkin.MenuDisabledColor;
        private static MenuDisabledBackColor: string = StandardSkin.MenuDisabledBackColor;
        private static MenuColorOnMouseOver: string = StandardSkin.MenuColorOnMouseOver;
        private static MenuBackColorOnMouseOver: string = StandardSkin.MenuBackColorOnMouseOver;
        private static PulldownMenuBorderColor: string = StandardSkin.PulldownMenuBorderColor;

        constructor() {
        }

        public static SetSciToolTexture(value: boolean) {
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
            } else {
                document.body.style.backgroundImage = "";
                document.body.style.backgroundSize = "";
                document.body.style.backgroundPosition = "";
            }
        }

        public static GetSciToolTexture() {
            return Skin.SciToolTexture;
        }

        public static SetSciToolBackColor(value: string) {
            Skin.SciToolBackColor = value;
            document.body.style.backgroundColor = value;
        }

        public static GetSciToolBackColor() {
            return Skin.SciToolBackColor;
        }

        public static SetSciToolBackgroundImage(value: string, positionX: string = Skin.SciToolBackgroundPositionX, positionY: string = Skin.SciToolBackgroundPositionY, attachment: string = Skin.SciToolBackgroundAttachment, repeat: string = Skin.SciToolBackgroundRepeat) {
            Skin.SciToolBackgroundImage = value;
            Skin.SciToolBackgroundPositionX = positionX;
            Skin.SciToolBackgroundPositionY = positionY;
            document.body.style.backgroundImage = "url("+value+")";
            document.body.style.backgroundPosition = positionX + " " + positionY;
            document.body.style.backgroundAttachment = attachment;
            document.body.style.backgroundRepeat = repeat;
        }

        public static GetSciToolBackgroundImage() {
            return Skin.SciToolBackgroundImage;
        }

        public static GetSciToolBackgroundPositionX() {
            return Skin.SciToolBackgroundPositionX;
        }

        public static GetSciToolBackgroundPositionY() {
            return Skin.SciToolBackgroundPositionY;
        }

        public static GetSciToolBackgroundAttachment() {
            return Skin.SciToolBackgroundAttachment;
        }

        public static GetSciToolBackgroundRepeat() {
            return Skin.SciToolBackgroundRepeat;
        }

        public static SetToolBoxHideAutomatically(value: boolean) {
            Skin.ToolBoxHideAutomatically = value;

            if (!value) {
                if (Skin.ToolBoxShow) {
                    Skin.SetToolBoxWindowPickupDropIcons(Skin.ToolBoxWindowPickupDropIcons);
                    Skin.SetToolBoxWindowOrganizationIcons(Skin.ToolBoxWindowOrganizationIcons);
                    Skin.SetToolBoxTableIcons(Skin.ToolBoxTableIcons);
                }
            }
        }

        public static GetToolBoxHideAutomatically() {
            return Skin.ToolBoxHideAutomatically;
        }

        public static SetToolBoxShow(value: boolean) {
            Skin.ToolBoxShow = value;

            if (value) {
                Skin.SetToolBoxWindowPickupDropIcons(Skin.ToolBoxWindowPickupDropIcons);
                Skin.SetToolBoxWindowOrganizationIcons(Skin.ToolBoxWindowOrganizationIcons);
                Skin.SetToolBoxTableIcons(Skin.ToolBoxTableIcons);
            } else {
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
        }

        public static GetToolBoxShow() {
            return Skin.ToolBoxShow;
        }

        public static SetToolBoxWindowPickupDropIcons(value: boolean) {
            Skin.ToolBoxWindowPickupDropIcons = value;

            if (value && Skin.ToolBoxShow) {
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosRecoger").style.visibility = 'visible';
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosSoltar").style.visibility = 'visible';
            } else {
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosRecoger").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosSoltar").style.visibility = 'hidden';
            }

            if (!Skin.ToolBoxWindowPickupDropIcons && !Skin.ToolBoxWindowOrganizationIcons && !Skin.ToolBoxTableIcons) {
                document.getElementById("divSciToolFondoToolBox").style.visibility = 'hidden';
            } else {
                if (Skin.ToolBoxShow) {
                    document.getElementById("divSciToolFondoToolBox").style.visibility = 'visible';
                }
            }
        }

        public static GetToolBoxWindowPickupDropIcons() {
            return Skin.SetToolBoxWindowPickupDropIcons;
        }

        public static SetToolBoxWindowOrganizationIcons(value: boolean) {
            Skin.ToolBoxWindowOrganizationIcons = value;

            if (value && Skin.ToolBoxShow) {
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosSolapado").style.visibility = 'visible';
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosHorizontal").style.visibility = 'visible';
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosVertical").style.visibility = 'visible';
            } else {
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosSolapado").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosHorizontal").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioOrdenarDocumentosVertical").style.visibility = 'hidden';
            }

            if (!Skin.ToolBoxWindowPickupDropIcons && !Skin.ToolBoxWindowOrganizationIcons && !Skin.ToolBoxTableIcons) {
                document.getElementById("divSciToolFondoToolBox").style.visibility = 'hidden';
            } else {
                if (Skin.ToolBoxShow) {
                    document.getElementById("divSciToolFondoToolBox").style.visibility = 'visible';
                }
            }
        }

        public static GetToolBoxWindowOrganizationIcons() {
            return Skin.ToolBoxWindowOrganizationIcons;
        }

        public static SetToolBoxTableIcons(value: boolean) {
            Skin.ToolBoxTableIcons = value;

            if (value && Skin.ToolBoxShow) {
                document.getElementById("lblSciToolEscritorioZTitulo").style.visibility = 'visible';
                document.getElementById("lblSciToolEscritorioZ").style.visibility = 'visible';
                document.getElementById("lblSciToolEscritorioZInicio").style.visibility = 'visible';
                document.getElementById("lblSciToolEscritorioZAdelante").style.visibility = 'visible';
                document.getElementById("lblSciToolEscritorioZAtras").style.visibility = 'visible';
            } else {
                document.getElementById("lblSciToolEscritorioZTitulo").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioZ").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioZInicio").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioZAdelante").style.visibility = 'hidden';
                document.getElementById("lblSciToolEscritorioZAtras").style.visibility = 'hidden';
            }

            if (!Skin.ToolBoxWindowPickupDropIcons && !Skin.ToolBoxWindowOrganizationIcons && !Skin.ToolBoxTableIcons) {
                document.getElementById("divSciToolFondoToolBox").style.visibility = 'hidden';
            } else {
                if (Skin.ToolBoxShow) {
                    document.getElementById("divSciToolFondoToolBox").style.visibility = 'visible';
                }
            }
        }

        public static GetToolBoxTableIcons() {
            return Skin.ToolBoxTableIcons;
        }

        public static SetToolBoxColor(value: string) {
            Skin.ToolBoxColor = value;
            document.getElementById('divSciToolFondoToolBox').style.backgroundColor = value;
        }

        public static GetToolBoxColor() {
            return Skin.ToolBoxColor;
        }

        public static SetToolBoxIconColor(value: string) {
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
        }

        public static GetToolBoxIconColor() {
            return Skin.ToolBoxIconColor;
        }

        public static SetToolBoxIconDisabledColor(value: string) {
            Skin.ToolBoxIconDisabledColor = value;

            if (!docRecogidos) {
                document.getElementById('lblSciToolEscritorioOrdenarDocumentosSoltar').style.color = value;
            }
            document.getElementById('lblSciToolEscritorioZ').style.color = value;
            document.getElementById('lblSciToolEscritorioZTitulo').style.color = value;
        }

        public static GetToolBoxIconDisabledColor() {
            return Skin.ToolBoxIconDisabledColor;
        }

        public static GetToolBoxTop() {
            return Skin.ToolBoxTop;
        }

        public static GetStatusBarHeight() {
            return Skin.StatusBarHeight;
        }

        public static SetStatusBarColor(value: string) {
            Skin.StatusBarColor = value;
        }

        public static GetStatusBarColor() {
            return Skin.StatusBarColor;
        }

        public static SetStatusBarBackColor(value: string) {
            Skin.StatusBarBackColor = value;
        }

        public static GetStatusBarBackColor() {
            return Skin.StatusBarBackColor;
        }

        public static SetStatusBarSuccessColor(value: string) {
            Skin.StatusBarSuccessColor = value;
        }

        public static GetStatusBarSuccessColor() {
            return Skin.StatusBarSuccessColor;
        }

        public static SetStatusBarSuccessBackColor(value: string) {
            Skin.StatusBarSuccessBackColor = value;
        }

        public static GetStatusBarSuccessBackColor() {
            return Skin.StatusBarSuccessBackColor;
        }

        public static SetStatusBarUnsuccessColor(value: string) {
            Skin.StatusBarUnsuccessColor = value;
        }

        public static GetStatusBarUnsuccessColor() {
            return Skin.StatusBarUnsuccessColor;
        }

        public static SetStatusBarUnsuccessBackColor(value: string) {
            Skin.StatusBarUnsuccessBackColor = value;
        }

        public static GetStatusBarUnsuccessBackColor() {
            return Skin.StatusBarUnsuccessBackColor;
        }

        public static SetStatusBarNoticeColor(value: string) {
            Skin.StatusBarNoticeColor = value;
        }

        public static GetStatusBarNoticeColor() {
            return Skin.StatusBarNoticeColor;
        }

        public static SetStatusBarNoticeBackColor(value: string) {
            Skin.StatusBarNoticeBackColor = value;
        }

        public static GetStatusBarNoticeBackColor() {
            return Skin.StatusBarNoticeBackColor;
        }

        public static SetStatusBarWarningColor(value: string) {
            Skin.StatusBarWarningColor = value;
        }

        public static GetStatusBarWarningColor() {
            return Skin.StatusBarWarningColor;
        }

        public static SetStatusBarWarningBackColor(value: string) {
            Skin.StatusBarWarningBackColor = value;
        }

        public static GetStatusBarWarningBackColor() {
            return Skin.StatusBarWarningBackColor;
        }

        public static SetStatusBarTimeToResetColor(value: number) {
            Skin.StatusBarTimeToResetColor = value;
        }

        public static GetStatusBarTimeToResetColor() {
            return Skin.StatusBarTimeToResetColor;
        }

        public static GetStatusBarFontSize() {
            return Skin.StatusBarFontSize;
        }

        public static SetStatusBarFontFamily(value: string) {
            Skin.StatusBarFontFamily = value;
            document.getElementById("StatusBar").style.fontFamily = value;
        }

        public static GetStatusBarFontFamily() {
            return Skin.StatusBarFontFamily;
        }

        public static SetDocumentBorderColor(value: string) {
            Skin.DocumentBorderColor = value;
        }

        public static GetDocumentBorderColor() {
            return Skin.DocumentBorderColor;
        }

        public static SetDocumentTitleBarFontColor(value: string) {
            Skin.DocumentTitleBarFontColor = value;
        }

        public static GetDocumentTitleBarFontColor() {
            return Skin.DocumentTitleBarFontColor;
        }

        public static SetDocumentTitleBarColor(value: string) {
            Skin.DocumentTitleBarColor = value;
        }

        public static GetDocumentTitleBarColor() {
            return Skin.DocumentTitleBarColor;
        }

        public static SetDocumentColor(value: string) {
            Skin.DocumentColor = value;
        }

        public static GetDocumentColor() {
            return Skin.DocumentColor;
        }

        public static SetDocumentBorderWidth(value: number) {
            Skin.DocumentBorderWidth = value;
        }

        public static GetDocumentBorderWidth() {
            return Skin.DocumentBorderWidth;
        }

        public static GetDocumentBorderRadius() {
            return Skin.DocumentBorderRadius;
        }
        public static SetDocumentDisabledTitleBarFontColor(value: string) {
            Skin.DocumentDisabledTitleBarFontColor = value;
        }

        public static GetDocumentDisabledTitleBarFontColor() {
            return Skin.DocumentDisabledTitleBarFontColor;
        }

        public static SetDocumentDisabledTitleBarColor(value: string) {
            Skin.DocumentDisabledTitleBarColor = value;
        }

        public static GetDocumentDisabledTitleBarColor() {
            return Skin.DocumentDisabledTitleBarColor;
        }

        public static SetDocumentTitleFontSize(value: number) {
            Skin.DocumentTitleFontSize = value;
            Skin.SetDocumentTitleBarHeight(value + 8);
        }

        public static GetDocumentTitleFontSize() {
            return Skin.DocumentTitleFontSize;
        }

        public static SetDocumentTitleFontFamily(value: string) {
            Skin.DocumentTitleFontFamily = value;
        }

        public static GetDocumentTitleFontFamily() {
            return Skin.DocumentTitleFontFamily;
        }

        public static SetDocumentTitleBarHeight(value: number) {
            Skin.DocumentTitleBarHeight = value;
        }

        public static GetDocumentTitleBarHeight() {
            return Skin.DocumentTitleBarHeight;
        }

        public static SetDocumentTitleBarButtonColor(value: string) {
            Skin.DocumentTitleBarButtonColor = value;
        }

        public static GetDocumentTitleBarButtonColor() {
            return Skin.DocumentTitleBarButtonColor;
        }

        public static SetDocumentTitleBarButtonColorOnMouseOver(value: string) {
            Skin.DocumentTitleBarButtonColorOnMouseOver = value;
        }

        public static GetDocumentTitleBarButtonColorOnMouseOver() {
            return Skin.DocumentTitleBarButtonColorOnMouseOver;
        }

        public static SetDocumentTitleBarDisabledButtonColor(value: string) {
            Skin.DocumentTitleBarDisabledButtonColor = value;
        }

        public static GetDocumentTitleBarDisabledButtonColor() {
            return Skin.DocumentTitleBarDisabledButtonColor;
        }

        public static SetLabelColor(value: string) {
            Skin.LabelColor = value;
        }

        public static GetLabelColor() {
            return Skin.LabelColor;
        }

        public static SetLabelBackColor(value: string) {
            Skin.LabelBackColor = value;
        }

        public static GetLabelBackColor() {
            return Skin.LabelBackColor;
        }

        public static SetLabelLinkColor(value: string) {
            Skin.LabelLinkColor = value;
        }

        public static GetLabelLinkColor() {
            return Skin.LabelLinkColor;
        }

        public static SetLabelWidth(value: number) {
            Skin.LabelWidth = value;
        }

        public static GetLabelWidth() {
            return Skin.LabelWidth;
        }

        public static GetLabelTypeWidth() {
            return Skin.LabelTypeWidth;
        }

        public static SetLabelHeight(value: number) {
            Skin.LabelHeight = value;
        }

        public static GetLabelHeight() {
            return Skin.LabelHeight;
        }

        public static SetLabelFontSize(value: number) {
            Skin.LabelFontSize = value;
        }

        public static GetLabelFontSize() {
            return Skin.LabelFontSize;
        }

        public static SetLabelFontFamily(value: string) {
            Skin.LabelFontFamily = value;
        }

        public static GetLabelFontFamily() {
            return Skin.LabelFontFamily;
        }

        public static SetLabelDisabledColor(value: string) {
            Skin.LabelDisabledColor = value;
        }

        public static GetLabelDisabledColor() {
            return Skin.LabelDisabledColor;
        }

        public static SetBoxBorderColor(value: string) {
            Skin.BoxBorderColor = value;
        }

        public static GetBoxBorderColor() {
            return Skin.BoxBorderColor;
        }

        public static SetBoxFillColor(value: string) {
            Skin.BoxFillColor = value;
        }

        public static GetBoxFillColor() {
            return Skin.BoxFillColor;
        }

        public static SetBoxBorderWidth(value: number) {
            Skin.BoxBorderWidth = value;
        }

        public static GetBoxBorderWidth() {
            return Skin.BoxBorderWidth;
        }

        public static SetEllipseBorderColor(value: string) {
            Skin.EllipseBorderColor = value;
        }

        public static GetEllipseBorderColor() {
            return Skin.EllipseBorderColor;
        }

        public static SetEllipseFillColor(value: string) {
            Skin.EllipseFillColor = value;
        }

        public static GetEllipseFillColor() {
            return Skin.EllipseFillColor;
        }

        public static SetEllipseBorderWidth(value: number) {
            Skin.EllipseBorderWidth = value;
        }

        public static GetEllipseBorderWidth() {
            return Skin.EllipseBorderWidth;
        }

        public static SetCheckBoxWidth(value: number) {
            Skin.CheckBoxWidth = value;
        }

        public static GetCheckBoxWidth() {
            return Skin.CheckBoxWidth;
        }

        public static SetCheckBoxHeight(value: number) {
            Skin.CheckBoxHeight = value;
        }

        public static GetCheckBoxHeight() {
            return Skin.CheckBoxHeight;
        }

        public static GetCheckBoxFontSize() { //Nota: no se habilitó modificar el FontSize de los CheckBox, solo se puede leer su valor, fijado por el Skin.
            return Skin.CheckBoxFontSize;
        }

        public static SetCheckBoxFontFamily(value: string) {
            Skin.CheckBoxFontFamily = value;
        }

        public static GetCheckBoxFontFamily() {
            return Skin.CheckBoxFontFamily;
        }

        public static SetCheckBoxColor(value: string) {
            Skin.CheckBoxColor = value;
        }

        public static GetCheckBoxColor() {
            return Skin.CheckBoxColor;
        }

        public static SetCheckBoxBackColor(value: string) {
            Skin.CheckBoxBackColor = value;
        }

        public static GetCheckBoxBackColor() {
            return Skin.CheckBoxBackColor;
        }

        public static SetCheckBoxDisabledColor(value: string) {
            Skin.CheckBoxDisabledColor = value;
        }

        public static GetCheckBoxDisabledColor() {
            return Skin.CheckBoxDisabledColor;
        }

        public static SetRadioButtonWidth(value: number) {
            Skin.RadioButtonWidth = value;
        }

        public static GetRadioButtonWidth() {
            return Skin.RadioButtonWidth;
        }

        public static SetRadioButtonHeight(value: number) {
            Skin.RadioButtonHeight = value;
        }

        public static GetRadioButtonHeight() {
            return Skin.RadioButtonHeight;
        }

        public static GetRadioButtonFontSize() { //Nota: no se habilitó modificar el FontSize de los RadioButton, solo se puede leer su valor, fijado por el Skin.
            return Skin.RadioButtonFontSize;
        }

        public static SetRadioButtonFontFamily(value: string) {
            Skin.RadioButtonFontFamily = value;
        }

        public static GetRadioButtonFontFamily() {
            return Skin.RadioButtonFontFamily;
        }

        public static SetRadioButtonColor(value: string) {
            Skin.RadioButtonColor = value;
        }

        public static GetRadioButtonColor() {
            return Skin.RadioButtonColor;
        }

        public static SetRadioButtonBackColor(value: string) {
            Skin.RadioButtonBackColor = value;
        }

        public static GetRadioButtonBackColor() {
            return Skin.RadioButtonBackColor;
        }

        public static SetRadioButtonDisabledColor(value: string) {
            Skin.RadioButtonDisabledColor = value;
        }

        public static GetRadioButtonDisabledColor() {
            return Skin.RadioButtonDisabledColor;
        }

        public static SetComboBoxWidth(value: number) {
            Skin.ComboBoxWidth = value;
        }

        public static GetComboBoxWidth() {
            return Skin.ComboBoxWidth;
        }

        public static SetComboBoxHeight(value: number) {
            Skin.ComboBoxHeight = value;
        }

        public static GetComboBoxHeight() {
            return Skin.ComboBoxHeight;
        }

        public static GetComboBoxLineHeight() {
            return Skin.ComboBoxLineHeight;
        }

        public static SetComboBoxFontSize(value: number) {
            Skin.ComboBoxFontSize = value;
        }

        public static GetComboBoxFontSize() {
            return Skin.ComboBoxFontSize;
        }

        public static SetComboBoxFontFamily(value: string) {
            Skin.ComboBoxFontFamily = value;
        }

        public static GetComboBoxFontFamily() {
            return Skin.ComboBoxFontFamily;
        }

        public static SetComboBoxColor(value: string) {
            Skin.ComboBoxColor = value;
        }

        public static GetComboBoxColor() {
            return Skin.ComboBoxColor;
        }

        public static SetComboBoxFromBackColor(value: string) {
            Skin.ComboBoxFromBackColor = value;
        }

        public static GetComboBoxFromBackColor() {
            return Skin.ComboBoxFromBackColor;
        }

        public static SetComboBoxToBackColor(value: string) {
            Skin.ComboBoxToBackColor = value;
        }

        public static GetComboBoxToBackColor() {
            return Skin.ComboBoxToBackColor;
        }

        public static SetComboBoxBackColor(value: string) {
            Skin.ComboBoxFromBackColor = value;
            Skin.ComboBoxToBackColor = value;
        }

        public static GetComboBoxBackColor() {
            return Skin.ComboBoxFromBackColor;
        }

        public static SetComboBoxListBoxColor(value: string) {
            Skin.ComboBoxListBoxColor = value;
        }

        public static GetComboBoxListBoxColor() {
            return Skin.ComboBoxListBoxColor;
        }

        public static SetComboBoxListBoxBackColor(value: string) {
            Skin.ComboBoxListBoxBackColor = value;
        }

        public static GetComboBoxListBoxBackColor() {
            return Skin.ComboBoxListBoxBackColor;
        }

        public static SetComboBoxDisabledColor(value: string) {
            Skin.ComboBoxDisabledColor = value;
        }

        public static GetComboBoxDisabledColor() {
            return Skin.ComboBoxDisabledColor;
        }

        public static SetComboBoxDisabledFromBackColor(value: string) {
            Skin.ComboBoxDisabledFromBackColor = value;
        }

        public static GetComboBoxDisabledFromBackColor() {
            return Skin.ComboBoxDisabledFromBackColor;
        }

        public static SetComboBoxDisabledToBackColor(value: string) {
            Skin.ComboBoxDisabledToBackColor = value;
        }

        public static GetComboBoxDisabledToBackColor() {
            return Skin.ComboBoxDisabledToBackColor;
        }

        public static SetComboBoxDisabledListBoxFromBackColor(value: string) {
            Skin.ComboBoxDisabledListBoxFromBackColor = value;
        }

        public static GetComboBoxDisabledListBoxFromBackColor() {
            return Skin.ComboBoxDisabledListBoxFromBackColor;
        }

        public static SetComboBoxDisabledListBoxToBackColor(value: string) {
            Skin.ComboBoxDisabledListBoxToBackColor = value;
        }

        public static GetComboBoxDisabledListBoxToBackColor() {
            return Skin.ComboBoxDisabledListBoxToBackColor;
        }

        public static SetTextBoxWidth(value: number) {
            Skin.TextBoxWidth = value;
        }

        public static GetTextBoxWidth() {
            return Skin.TextBoxWidth;
        }

        public static SetTextBoxHeight(value: number) {
            Skin.TextBoxHeight = value;
        }

        public static GetTextBoxHeight() {
            return Skin.TextBoxHeight;
        }

        public static SetTextBoxFontSize(value: number) {
            Skin.TextBoxFontSize = value;
        }

        public static GetTextBoxFontSize() {
            return Skin.TextBoxFontSize;
        }

        public static SetTextBoxFontFamily(value: string) {
            Skin.TextBoxFontFamily = value;
        }

        public static GetTextBoxFontFamily() {
            return Skin.TextBoxFontFamily;
        }

        public static SetTextBoxColor(value: string) {
            Skin.TextBoxColor = value;
        }

        public static GetTextBoxColor() {
            return Skin.TextBoxColor;
        }

        public static SetTextBoxBackColor(value: string) {
            Skin.TextBoxBackColor = value;
        }

        public static GetTextBoxBackColor() {
            return Skin.TextBoxBackColor;
        }

        public static SetTextBoxDisabledColor(value: string) {
            Skin.TextBoxDisabledColor = value;
        }

        public static GetTextBoxDisabledColor() {
            return Skin.TextBoxDisabledColor;
        }

        public static SetTextBoxDisabledFlagColor(value: string) {
            Skin.TextBoxDisabledFlagColor = value;
        }

        public static GetTextBoxDisabledFlagColor() {
            return Skin.TextBoxDisabledFlagColor;
        }

        public static SetTextBoxBorderColor(value: string) {
            Skin.TextBoxBorderColor = value;
        }

        public static GetTextBoxBorderColor() {
            return Skin.TextBoxBorderColor;
        }

        public static SetTextBoxReadyColor(value: string) {
            Skin.TextBoxReadyColor = value;
        }

        public static GetTextBoxReadyColor() {
            return Skin.TextBoxReadyColor;
        }

        public static SetTextBoxNotReadyColor(value: string) {
            Skin.TextBoxNotReadyColor = value;
        }

        public static GetTextBoxNotReadyColor() {
            return Skin.TextBoxNotReadyColor;
        }

        public static SetButtonWidth(value: number) {
            Skin.ButtonWidth = value;
        }

        public static GetButtonWidth() {
            return Skin.ButtonWidth;
        }

        public static SetButtonHeight(value: number) {
            Skin.ButtonHeight = value;
        }

        public static GetButtonHeight() {
            return Skin.ButtonHeight;
        }

        public static SetButtonFontSize(value: number) {
            Skin.ButtonFontSize = value;
        }

        public static GetButtonFontSize() {
            return Skin.ButtonFontSize;
        }

        public static SetButtonFontFamily(value: string) {
            Skin.ButtonFontFamily = value;
        }

        public static GetButtonFontFamily() {
            return Skin.ButtonFontFamily;
        }

        public static SetButtonColor(value: string) {
            Skin.ButtonColor = value;
        }

        public static GetButtonColor() {
            return Skin.ButtonColor;
        }

        public static SetButtonFromBackColor(value: string) {
            Skin.ButtonFromBackColor = value;
        }

        public static GetButtonFromBackColor() {
            return Skin.ButtonFromBackColor;
        }

        public static SetButtonToBackColor(value: string) {
            Skin.ButtonToBackColor = value;
        }

        public static GetButtonToBackColor() {
            return Skin.ButtonToBackColor;
        }

        public static SetButtonBackColor(value: string) {
            Skin.ButtonFromBackColor = value;
            Skin.ButtonToBackColor = value;
        }

        public static GetButtonBackColor() {
            return Skin.ButtonFromBackColor;
        }

        public static SetButtonColorOnMouseOver(value: string) {
            Skin.ButtonColorOnMouseOver = value;
        }

        public static GetButtonColorOnMouseOver() {
            return Skin.ButtonColorOnMouseOver;
        }

        public static SetButtonFromBackColorOnMouseOver(value: string) {
            Skin.ButtonFromBackColorOnMouseOver = value;
        }

        public static GetButtonFromBackColorOnMouseOver() {
            return Skin.ButtonFromBackColorOnMouseOver;
        }

        public static SetButtonToBackColorOnMouseOver(value: string) {
            Skin.ButtonToBackColorOnMouseOver = value;
        }

        public static GetButtonToBackColorOnMouseOver() {
            return Skin.ButtonToBackColorOnMouseOver;
        }

        public static SetButtonBackColorOnMouseOver(value: string) {
            Skin.ButtonFromBackColorOnMouseOver = value;
            Skin.ButtonToBackColorOnMouseOver = value;
        }

        public static GetButtonBackColorOnMouseOver() {
            return Skin.ButtonFromBackColorOnMouseOver;
        }

        public static SetButtonBorderColor(value: string) {
            Skin.ButtonBorderTopColor = value;
            Skin.ButtonBorderRightColor = value;
            Skin.ButtonBorderBottomColor = value;
            Skin.ButtonBorderLeftColor = value;
        }

        public static GetButtonBorderColor() { // Si los 4 bordes tienen el mismo color, se devuelve ese color. En caso contrario, se devuelve False, pero se pueden obtener los colores por separado.
            if (Skin.ButtonBorderTopColor === Skin.ButtonBorderRightColor && Skin.ButtonBorderTopColor === Skin.ButtonBorderBottomColor && Skin.ButtonBorderTopColor === Skin.ButtonBorderLeftColor) {
                return Skin.ButtonBorderTopColor;
            } else {
                false;
            }
        }

        public static SetButtonBorderTopColor(value: string) {
            Skin.ButtonBorderTopColor = value;
        }

        public static GetButtonBorderTopColor() {
            return Skin.ButtonBorderTopColor;
        }

        public static SetButtonBorderRightColor(value: string) {
            Skin.ButtonBorderRightColor = value;
        }

        public static GetButtonBorderRightColor() {
            return Skin.ButtonBorderRightColor;
        }

        public static SetButtonBorderBottomColor(value: string) {
            Skin.ButtonBorderBottomColor = value;
        }

        public static GetButtonBorderBottomColor() {
            return Skin.ButtonBorderBottomColor;
        }

        public static SetButtonBorderLeftColor(value: string) {
            Skin.ButtonBorderLeftColor = value;
        }

        public static GetButtonBorderLeftColor() {
            return Skin.ButtonBorderLeftColor;
        }

        public static SetButtonRadius(value: number) {
            Skin.ButtonTopLeftRadius = value;
            Skin.ButtonTopRightRadius = value;
            Skin.ButtonBottomLeftRadius = value;
            Skin.ButtonBottomRightRadius = value;
        }

        public static GetButtonRadius() { // Si las 4 esquinas tienen el mismo radius, se devuelve ese valor. En caso contrario, se devuelve False, pero se pueden obtener los radius por separado.
            if (Skin.ButtonTopLeftRadius === Skin.ButtonTopRightRadius && Skin.ButtonTopLeftRadius === Skin.ButtonBottomLeftRadius && Skin.ButtonTopLeftRadius === Skin.ButtonBottomRightRadius) {
                return Skin.ButtonTopLeftRadius;
            } else {
                false;
            }
        }

        public static SetButtonTopLeftRadius(value: number) {
            Skin.ButtonTopLeftRadius = value;
        }

        public static GetButtonTopLeftRadius() {
            return Skin.ButtonTopLeftRadius;
        }

        public static SetButtonTopRightRadius(value: number) {
            Skin.ButtonTopRightRadius = value;
        }

        public static GetButtonTopRightRadius() {
            return Skin.ButtonTopRightRadius;
        }

        public static SetButtonBottomLeftRadius(value: number) {
            Skin.ButtonBottomLeftRadius = value;
        }

        public static GetButtonBottomLeftRadius() {
            return Skin.ButtonBottomLeftRadius;
        }

        public static SetButtonBottomRightRadius(value: number) {
            Skin.ButtonBottomRightRadius = value;
        }

        public static GetButtonBottomRightRadius() {
            return Skin.ButtonBottomRightRadius;
        }

        public static SetButtonTopBorderWidth(value: number) {
            Skin.ButtonTopBorderWidth = value;
        }

        public static GetButtonTopBorderWidth() {
            return Skin.ButtonTopBorderWidth;
        }

        public static SetButtonRightBorderWidth(value: number) {
            Skin.ButtonRightBorderWidth = value;
        }

        public static GetButtonRightBorderWidth() {
            return Skin.ButtonRightBorderWidth;
        }

        public static SetButtonBottomBorderWidth(value: number) {
            Skin.ButtonBottomBorderWidth = value;
        }

        public static GetButtonBottomBorderWidth() {
            return Skin.ButtonBottomBorderWidth;
        }

        public static SetButtonLeftBorderWidth(value: number) {
            Skin.ButtonLeftBorderWidth = value;
        }

        public static GetButtonLeftBorderWidth() {
            return Skin.ButtonLeftBorderWidth;
        }

        public static SetButtonBorderWidth(value: number) {
            Skin.ButtonTopBorderWidth = value;
            Skin.ButtonRightBorderWidth = value;
            Skin.ButtonBottomBorderWidth = value;
            Skin.ButtonLeftBorderWidth = value;
        }

        public static GetButtonBorderWidth() { // Si los 4 bordes tienen el mismo grosor, se devuelve ese valor. En caso contrario, se devuelve False, pero se pueden obtener los grosores por separado.
            if (Skin.ButtonTopBorderWidth == Skin.ButtonRightBorderWidth && Skin.ButtonTopBorderWidth == Skin.ButtonBottomBorderWidth && Skin.ButtonTopBorderWidth == Skin.ButtonLeftBorderWidth) {
                return Skin.ButtonTopBorderWidth;
            } else {
                return false;
            }
        }

        public static SetButtonDisabledColor(value: string) {
            Skin.ButtonDisabledColor = value;
        }

        public static GetButtonDisabledColor() {
            return Skin.ButtonDisabledColor;
        }

        public static SetButtonDisabledFromBackColor(value: string) {
            Skin.ButtonDisabledFromBackColor = value;
        }

        public static GetButtonDisabledFromBackColor() {
            return Skin.ButtonDisabledFromBackColor;
        }

        public static SetButtonDisabledToBackColor(value: string) {
            Skin.ButtonDisabledToBackColor = value;
        }

        public static GetButtonDisabledToBackColor() {
            return Skin.ButtonDisabledToBackColor;
        }

        public static SetFileWidth(value: number) {
            Skin.FileWidth = value;
        }

        public static GetFileWidth() {
            return Skin.FileWidth;
        }

        public static SetFileHeight(value: number) {
            Skin.FileHeight = value;
        }

        public static GetFileHeight() {
            return Skin.FileHeight;
        }

        public static SetFileFontSize(value: number) {
            Skin.FileFontSize = value;
        }

        public static GetFileFontSize() {
            return Skin.FileFontSize;
        }

        public static SetFileFontFamily(value: string) {
            Skin.FileFontFamily = value;
        }

        public static GetFileFontFamily() {
            return Skin.FileFontFamily;
        }

        public static SetFileColor(value: string) {
            Skin.FileColor = value;
        }

        public static GetFileColor() {
            return Skin.FileColor;
        }

        public static SetFileBackColor(value: string) {
            Skin.FileBackColor = value;
        }

        public static GetFileBackColor() {
            return Skin.FileBackColor;
        }

        public static SetFileDisabledColor(value: string) {
            Skin.FileDisabledColor = value;
        }

        public static GetFileDisabledColor() {
            return Skin.FileDisabledColor;
        }

        public static SetFileDisabledBackColor(value: string) {
            Skin.FileDisabledBackColor = value;
        }

        public static GetFileDisabledBackColor() {
            return Skin.FileDisabledBackColor;
        }

        public static SetImageColor(value: string) {
            Skin.ImageColor = value;
        }

        public static GetImageColor() {
            return Skin.ImageColor;
        }

        public static SetImageBackColor(value: string) {
            Skin.ImageBackColor = value;
        }

        public static GetImageBackColor() {
            return Skin.ImageBackColor;
        }

        public static SetDivBorderColor(value: string) {
            Skin.DivBorderColor = value;
        }

        public static GetDivBorderColor() {
            return Skin.DivBorderColor;
        }

        public static SetDivFillColor(value: string) {
            Skin.DivFillColor = value;
        }

        public static GetDivFillColor() {
            return Skin.DivFillColor;
        }

        public static SetDivBorderWidth(value: number) {
            Skin.DivBorderWidth = value;
        }

        public static GetDivBorderWidth() {
            return Skin.DivBorderWidth;
        }

        public static SetMenuHeight(value: number) {
            Skin.MenuHeight = value;
        }

        public static GetMenuHeight() {
            return Skin.MenuHeight;
        }

        public static SetMenuFontSize(value: number) {
            Skin.MenuFontSize = value;
        }

        public static GetMenuFontSize() {
            return Skin.MenuFontSize;
        }

        public static SetMenuFontFamily(value: string) {
            Skin.MenuFontFamily = value;
        }

        public static GetMenuFontFamily() {
            return Skin.MenuFontFamily;
        }

        public static SetMenuColor(value: string) {
            Skin.MenuColor = value;
        }

        public static GetMenuColor() {
            return Skin.MenuColor;
        }

        public static SetMenuBackColor(value: string) {
            Skin.MenuBackColor = value;
        }

        public static GetMenuBackColor() {
            return Skin.MenuBackColor;
        }

        public static SetMenuDisabledColor(value: string) {
            Skin.MenuDisabledColor = value;
        }

        public static GetMenuDisabledColor() {
            return Skin.MenuDisabledColor;
        }

        public static SetMenuDisabledBackColor(value: string) {
            Skin.MenuDisabledBackColor = value;
        }

        public static GetMenuDisabledBackColor() {
            return Skin.MenuDisabledBackColor;
        }

        public static SetMenuColorOnMouseOver(value: string) {
            Skin.MenuColorOnMouseOver = value;
        }

        public static GetMenuColorOnMouseOver() {
            return Skin.MenuColorOnMouseOver;
        }

        public static SetMenuBackColorOnMouseOver(value: string) {
            Skin.MenuBackColorOnMouseOver = value;
        }

        public static GetMenuBackColorOnMouseOver() {
            return Skin.MenuBackColorOnMouseOver;
        }

        public static SetPulldownMenuBorderColor(value: string) {
            Skin.PulldownMenuBorderColor = value;
        }

        public static GetPulldownMenuBorderColor() {
            return Skin.PulldownMenuBorderColor;
        }
    }

    function application_OnLoaded() {
        Table_private.RedrawViewFinderContent();

        //Llamar a evento que ocurre cuando se carga la página y el DOM está listo, sin esperar la carga de imágenes y otros recursos.
        try {
            window["scitool_OnLoaded"].call();
        } catch(e) {}
    }

    function applicationResources_OnLoaded() {
        //Llamar a evento que ocurre cuando imágenes y otros recursos fueron cargados.
        try {
            window["Resources_OnLoaded"].call();
        } catch(e) {}
    }

    export function Begin() { //Este comando es fundamental: debe ser llamado siempre por la aplicación que desee utilizar esta librería.
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
        } else {
            document.body.style.backgroundImage = "";
            document.body.style.backgroundSize = "";
            document.body.style.backgroundPosition = "";
        }

        StatusBar_private.Create();

        window.addEventListener("DOMContentLoaded", application_OnLoaded);
        window.addEventListener("load", applicationResources_OnLoaded);

        window.onmousemove = () => {
            xMouse = window.event.clientX;
            yMouse = window.event.clientY;

            if ((Skin.GetToolBoxHideAutomatically() && xMouse <= 30) || (!Skin.GetToolBoxHideAutomatically())) { //Mostrar toolbox si corresponde.
                if (Skin.GetToolBoxShow()) {
                    Skin.SetToolBoxShow(true);
                }
            } else {
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
        }

        //Crear firma.
        var lblSciToolVersion = new Label("scitool", window.innerWidth - 70, window.innerHeight - 40, 0, "SciTool", "lblSciToolVersion");
        lblSciToolVersion.SetColor('#ddd');
        lblSciToolVersion.SetCrossZ(true);
        lblSciToolVersion.SetFontSize(12)
        lblSciToolVersion.SetWidth(320);

        // Crear funciones de escritorio.
        let SeparacionEntreIconos: number = 0;

        // Fondo de las herramientas.
        let nodoNuevo = document.createElement("DIV");
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
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosRecoger").setAttribute('title','1 click: recoger documentos de mesa actual / pick up documents from current table\n2 clicks: recoger documentos de todas las mesas / pick up documents from all tables');
        lblSciToolEscritorioOrdenarDocumentosRecoger.SetZIndex(String(ZIndexIconosEscritorio));
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosRecoger").style.padding = "0px";
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosRecoger").style.textAlign = "center";
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosRecoger").style.setProperty("position", "fixed");

        // Recoger documentos de la mesa actual.
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosRecoger").onclick = () => {
            let documentos = Document.GetIdsStack();
            let ZActualViewFinder = Table.GetViewFinderZ();

            for (let documento of documentos) {
                if (window[documento].GetZ() === ZActualViewFinder || window[documento].GetCrossZ() === true) {
                    if (window[documento].GetDraggable()) {
                        if (!window[documento].GetRaised()) {
                            if (!window[documento].GetCancelCollecting()) {
                                try {
                                    window[documento + "_OnBeforeCollecting"].apply(this);
                                } catch(e) {}
                                window[documento].Talk(documento + "_OnBeforeCollecting");

                                window[documento].SetZ(LimboEscritorio);

                                try {
                                    window[documento + "_OnCollected"].apply(this);
                                } catch(e) {}
                                window[documento].Talk(documento + "_OnCollected");
                            }

                            // Resetear valor en false.
                            window[documento].SetCancelCollecting(false);
                        }
                    }
                }
            }

            try {
                window["Table_OnCollectedDocuments"].apply(this);
            } catch(e) {}
            Table.Talk("Table_OnCollectedDocuments");
        }

        // Recoger documentos de todas las mesas.
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosRecoger").ondblclick = () => {
            let documentos = Document.GetIdsStack();

            for (let documento of documentos) {
                if ((window[documento].GetZ() !== Limbo && window[documento].GetZ() !== LimboEscritorio) || window[documento].GetCrossZ() === true) {
                    if (window[documento].GetDraggable()) {
                        if (!window[documento].GetRaised()) {
                            if (!window[documento].GetCancelCollecting()) {
                                try {
                                    window[documento + "_OnBeforeCollecting"].apply(this);
                                } catch(e) {}
                                window[documento].Talk(documento + "_OnBeforeCollecting");

                                window[documento].SetZ(LimboEscritorio);

                                try {
                                    window[documento + "_OnCollected"].apply(this);
                                } catch(e) {}
                                window[documento].Talk(documento + "_OnCollected");
                            }

                            // Resetear valor en false.
                            window[documento].SetCancelCollecting(false);
                        }
                    }
                }
            }

            try {
                window["Table_OnCollectedDocuments"].apply(this);
            } catch(e) {}
            Table.Talk("Table_OnCollectedDocuments");
        }

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
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosSoltar").setAttribute('title','Soltar documentos recogidos sobre la mesa actual / Drop documents collected on the current table');

        document.getElementById("lblSciToolEscritorioOrdenarDocumentosSoltar").onclick = () => {
            let documentos = Document.GetIdsStack();

            for (let documento of documentos) {
                if (window[documento].GetZ() === LimboEscritorio) {
                    window[documento].SetZ(Table.GetViewFinderZ());

                    try {
                        window[documento + "_OnDrop"].apply(this);
                    } catch(e) {}
                    window[documento].Talk(documento + "_OnDrop");
                }
            }

            try {
                window["Table_OnDocumentsDrop"].apply(this);
            } catch(e) {}
            Table.Talk("Table_OnDocumentsDrop");
        }

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
        document.getElementById("lblSciToolEscritorioZTitulo").setAttribute('title','Mesa actual / Current table');

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
        document.getElementById("lblSciToolEscritorioZ").setAttribute('title','Mesa actual / Current table');
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
        document.getElementById("lblSciToolEscritorioZInicio").setAttribute('title','Ir a mesa inicial / Go to initial table');
        // lblSciToolEscritorioZInicio.SetBackColor('rgba(255,255,255,0.8)');

        document.getElementById("lblSciToolEscritorioZInicio").onclick = () => {
            if (Table.GetViewFinderZ() !== 0) {
                Table.ViewFinderJumpToZ(0);
                lblSciToolEscritorioZ.SetCaption("0");
            }
        }

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
        document.getElementById("lblSciToolEscritorioZAdelante").setAttribute('title','Ir una mesa adelante / Go a table forward');
        // lblSciToolEscritorioZAdelante.SetBackColor('rgba(255,255,255,0.8)');

        document.getElementById("lblSciToolEscritorioZAdelante").onclick = () => {
            Table.ViewFinderJumpToZ(Table.GetViewFinderZ() + 1);
            lblSciToolEscritorioZ.SetCaption(String(Table.GetViewFinderZ()));
        }

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
        document.getElementById("lblSciToolEscritorioZAtras").setAttribute('title','Ir una mesa atrás / Go a table back');
        // lblSciToolEscritorioZAtras.SetBackColor('rgba(255,255,255,0.8)');

        document.getElementById("lblSciToolEscritorioZAtras").onclick = () => {
            Table.ViewFinderJumpToZ(Table.GetViewFinderZ() - 1);
            lblSciToolEscritorioZ.SetCaption(String(Table.GetViewFinderZ()));
        }

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
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosSolapado").setAttribute('title','1 click: organizar documentos visibles / organize visible documents\n2 clicks: organizar todos los documentos de la mesa actual / Organize all the documents in current table');
        // lblSciToolEscritorioOrdenarDocumentosSolapado.SetBackColor('rgba(255,255,255,0.8)');

        document.getElementById("lblSciToolEscritorioOrdenarDocumentosSolapado").onclick = () => {
            Table.OrganizeDocuments(Const.Overlapping, Const.OrganizeVisibleDocuments);
        }

        document.getElementById("lblSciToolEscritorioOrdenarDocumentosSolapado").ondblclick = () => {
            Table.OrganizeDocuments(Const.Overlapping, Const.OrganizeAllDocuments);
        }

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
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosHorizontal").setAttribute('title','1 click: organizar documentos visibles / organize visible documents\n2 clicks: organizar todos los documentos de la mesa actual / Organize all the documents in current table');

        document.getElementById("lblSciToolEscritorioOrdenarDocumentosHorizontal").onclick = () => {
            Table.OrganizeDocuments(Const.Horizontal, Const.OrganizeVisibleDocuments);
        }

        document.getElementById("lblSciToolEscritorioOrdenarDocumentosHorizontal").ondblclick = () => {
            Table.OrganizeDocuments(Const.Horizontal, Const.OrganizeAllDocuments);
        }

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
        document.getElementById("lblSciToolEscritorioOrdenarDocumentosVertical").setAttribute('title','1 click: organizar documentos visibles / organize visible documents\n2 clicks: organizar todos los documentos de la mesa actual / Organize all the documents in current table');

        document.getElementById("lblSciToolEscritorioOrdenarDocumentosVertical").onclick = () => {
            Table.OrganizeDocuments(Const.Vertical, Const.OrganizeVisibleDocuments);
        }

        document.getElementById("lblSciToolEscritorioOrdenarDocumentosVertical").ondblclick = () => {
            Table.OrganizeDocuments(Const.Vertical, Const.OrganizeAllDocuments);
        }
    }

    export class scitool {
        private static StackObjectsToLoad: object[] = []; //En esta pila dinámica de tipo FIFO, se almacenan todos los objects y sus datos, que deben cargarse asincrónicamente desde sus archivos.
        private static LoadedObjects: object[] = [];

        private static contador: number = 0;

        constructor() {
        }

        //Este método guarda los datos del objeto a cargar en la pila, y luego llama al método LoadComponentFromStack, que carga asíncronamente en el DOM todos los objetos de la pila.
        //La carga de objetos es asíncrona, pero a diferencia de usar el atributo "async" de las etiquetas "<script>", que hace que se carguen todos los script con ese atributo de manera paralela
        //a costa de perder el control y una carga en desorden, aquí en SciTool se cargan asíncronamente pero de manera secuencial: cada objeto que se añade a la pila es procesado, y solo cuando
        //ya está cargado se continúa con el siguiente. Esto permite la carga en segundo plano, pero sin perder el control, y SciTool ofrece eventos para saber cuándo un objeto está cargado,
        //por ejemplo, o cuándo están todos cargados.
        //No se restringe que se cargue un objeto más de una vez, para permitir la posibilidad de cargar un mismo objeto desde un archivo que haya cambiado su contenido.
        public static LoadComponent(componentFile: string) {
            let objectId: string = "Component" + componentFile.substr(0,componentFile.indexOf("."));

            let objectData = {
                'FileName': componentFile,
                'Id': objectId,
                'LoadedState': undefined
                }
            scitool.StackObjectsToLoad.push(objectData);

            //Llamar al método que carga el objeto solo si la pila estaba vacía antes de agregar este objeto, pues si tiene más, la pila ya está siendo procesada.
            if (scitool.StackObjectsToLoad.length === 1) {
                scitool.LoadComponentFromStack();
            }
        }

        private static LoadComponentFromStack() { //Carga todos los componentes que estén en la pila, invocándose así misma luego de ser gatillada por el método LoadComponent cuando se le llamó para cargar un componente.
            let xhr = new XMLHttpRequest();
            let componentFile: string;
            let objectId: string;

            xhr.responseType = "text"

            //Tomar datos del primer objeto de la pila, que corresponde al más antiguo de todos los que estén en este momento.
            let objectData: object = scitool.StackObjectsToLoad[0];
            for (let propiedad in objectData) {
                if (objectData.hasOwnProperty(propiedad)) {
                    if (propiedad === "FileName") {
                        componentFile = objectData[propiedad];
                    }
                    if (propiedad === "Id") {
                        objectId = objectData[propiedad];
                    }
                }
            }

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    //Quitar objeto de la pila.
                    scitool.StackObjectsToLoad.splice((0), 1);

                    if (xhr.status == 200) {
                        let nodoBody = document.getElementsByTagName("BODY")[0];
                        let nodoNuevo = document.createElement("SCRIPT");
                        nodoNuevo.setAttribute("id", objectId);
                        nodoBody.appendChild(nodoNuevo);

                        //Insertar el archivo cargado en el DOM.
                        document.getElementById(objectId).innerHTML = xhr.responseText;

                        for (let objectData of scitool.StackObjectsToLoad) {
                            if (objectData["FileName"] === componentFile) {
                                objectData["LoadedState"] = "OK";
                                scitool.LoadedObjects.push(objectData);
                            }
                        }
                        try {
                            window[objectId + "_OnLoaded"].apply(this);
                        } catch(e) {}
                        scitool.Talk(objectId + "_OnLoaded", componentFile);
                    } else {
                        for (let objectData of scitool.StackObjectsToLoad) {
                            if (objectData["FileName"] === componentFile) {
                                objectData["LoadedState"] = "NOK";
                                scitool.LoadedObjects.push(objectData);
                            }
                        }
                        try {
                            window[objectId + "_OnLoadingError"].apply(this);
                        } catch(e) {}
                        console.log("Error: object " + componentFile + " could not be loaded.");
                        scitool.Talk('scitool' + "_OnLoadingError", componentFile);
                    }

                    //Llamarse así mismo para continuar cargando los objetos de la pila, si es que todavía quedan.
                    if (scitool.StackObjectsToLoad.length >= 1) {
                        scitool.LoadComponentFromStack();
                    } else {
                        Table_private.RedrawViewFinderContent();

                        // Llamar a método que se ejecuta una vez cargados toda la pila de componentes.
                        try {
                            window["Components_OnLoaded"].apply(this);
                        } catch(e) {}
                        scitool.Talk("Components_OnLoaded");
                    }
                }
            }
            xhr.open('GET', componentFile, true);
            xhr.send(null);
        }

        public static GetStackObjectsToLoad() {
            if (scitool.StackObjectsToLoad.length === 0) {
                return false;
            } else {
                return scitool.StackObjectsToLoad;
            }
        }

        public static GetLoadedObjectsData() {
            return scitool.LoadedObjects;
        }

        public static GetObjectDataById(id: string) {
            for (let objectData of scitool.LoadedObjects) {
                if (objectData["Id"] === id) {
                    return objectData;
                }
            }
            return false;
        }

        public static GetObjectDataByFileName(fileName: string) {
            for (let objectData of scitool.LoadedObjects) {
                if (objectData["FileName"] === fileName) {
                    return objectData;
                }
            }
            return false;
        }

        public static GetLoadedObjectStateById(id: string) {
            for (let objectData of scitool.LoadedObjects) {
                if (objectData["Id"] === id) {
                    return objectData["LoadedState"];
                }
            }
            return false;
        }

        public static GetLoadedObjectStateByFileName(fileName: string) {
            for (let objectData of scitool.LoadedObjects) {
                if (objectData["FileName"] === fileName) {
                    return objectData["LoadedState"];
                }
            }
            return false;
        }

        public static LoadingObjects() {
            if (scitool.StackObjectsToLoad.length === 0) {
                return false;
            } else {
                return true;
            }
        }

        public static LoadedObjectById(id: string) { //Retorna True o False si el objeto está cargado o no.
            for (let objectData of scitool.LoadedObjects) {
                if (objectData["Id"] === id) {
                    return true;
                }
            }
            return false;
        }

        public static LoadedObjectByFileName(fileName: string) { //Retorna True o False si el objeto está cargado o no.
            for (let objectData of scitool.LoadedObjects) {
                if (objectData["FileName"] === fileName) {
                    return true;
                }
            }
            return false;
        }

        public static GetObjectsMap() {
            return MetaObject_private.GetObjectsMap();
        }

        public static GetParentDocumentId(idObjeto) { // Retorna el id del documento padre al que pertenece el objeto, o False si no portenece a ninguna.
            return MetaObject_private.GetParentDocumentId(idObjeto);
        }

        public static GetParentMetaObjectId(idObjeto) { // Retorna el id del metaobjeto padre al que pertenece el objeto (documento, metaobjeto o scitool).
            return MetaObject_private.GetParentMetaObjectId(idObjeto);
        }

        public static GetMetaObjectObjectsNumber(idMetaobjeto) {
            return MetaObject_private.GetMetaObjectObjectsNumber(idMetaobjeto); // Retorna el número de objetos que contiene un metaobjeto.
        }

        public static ObjectIdExists(idObjeto) { //Retorna True si el objeto ya existe, o False si no.
            let objects = MetaObject_private.GetObjectsMap();

            for (let objeto of objects) {
                if (objeto["ObjectId"] === idObjeto) {
                    return true
                }
            }

            return false;
        }

        public static Talk(message: string, metaMessage: any = "") {
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, "scitool", message, metaMessage);
                    } catch(e) {}
                }
            }
            for (let idMetaobjeto of MetaObject.GetIdsStack()) {
                try {
                    window[idMetaobjeto + "_Listen"].call(this, "scitool", message, metaMessage);
                } catch(e) {}
            }
            try {
                window["scitool_Listen"].call(this, "scitool", message, metaMessage);
            } catch(e) {}
            try {
                window["Desk_Listen"].call(this, "scitool", message, metaMessage);
            } catch(e) {}
            try {
                window["StatusBar_Listen"].call(this, "scitool", message, metaMessage);
            } catch(e) {}
        }
    }

    class Table_private {
        public static RedrawViewFinderContent() {
            let metaObjetos = MetaObject.GetIdsStack();
            let documentos = Document.GetIdsStack();

            MetaObject_private.RedrawMetaObject("scitool");

            for (let idMetaobjeto of metaObjetos) {
                MetaObject_private.RedrawMetaObject(idMetaobjeto)
            }

            for (let idDocumento of documentos) {
                Document_private.RedrawDocument(idDocumento)
            }

            // Actualizar Z mostrado en el escritorio.
            document.getElementById("lblSciToolEscritorioZ").innerText = String(Table.GetViewFinderZ());
        }
    }

    export class Table {
        private static ViewFinderX: number = 0;
        private static ViewFinderY: number = 0;
        private static ViewFinderZ: number = 0;
        private static Scrollable: boolean = false;
        private static Width: number = window.innerWidth;
        private static Height: number = window.innerHeight;

        private static deltaTime: number = 8; //Longitud en centisegundos de cada incremento en el movimiento del ViewFinder por el Table.
        private static deltaLenght: number = 70; //Longitud en pixeles de cada incremento en el movimiento del ViewFinder por el Table en ejes X e Y (en Z los incrementos van de 1 en 1).

        constructor() {
        }

        //Comprueba si el objeto está dentro del plano visible actual.
        public static InViewFinder(x: number, y: number, z: number, width: number, height: number, crossZ: boolean) {
            if (z === Table.GetViewFinderZ() || (crossZ === true && z !== LimboEscritorio)) {
                if (Table.Scrollable) {
                    if ((x + width >= Table.GetViewFinderX()) && (y + height >= Table.GetViewFinderY())) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    if ((x + width >= Table.GetViewFinderX() && x <= (Table.GetViewFinderX() + window.innerWidth)) && (y + height >= Table.GetViewFinderY() && y <= (Table.GetViewFinderY() + window.innerHeight))) {
                        return true;
                    } else {
                        return false;
                    }
                }
            } else {
                return false;
            }
        }

        public static SetScrollable(scrollable: boolean) {
            Table.Scrollable = scrollable;
            Table_private.RedrawViewFinderContent();
        }

        public static GetScrollable() {
            return Table.Scrollable;
        }
        
        public static SetWidth(width: number) { //El valor del ancho de la mesa se usa en realidad como coordenada X de la firma, para crear con eso las dimensiones de la mesa.
            if (width < window.innerWidth) {
                width = window.innerWidth - 350; //Se descuenta el ancho de la firma.
            }

            Table.Width = width;

            let X: number = width;
            let Y: number = Number(document.getElementById('lblSciToolVersion').dataset.scitooly);
            let Z: number = Number(document.getElementById('lblSciToolVersion').dataset.scitoolz);
            let Width: number = Number(document.getElementById('lblSciToolVersion').dataset.scitoolwidth);
            let Height: number = Number(document.getElementById('lblSciToolVersion').dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById('lblSciToolVersion').dataset.scitoolcrossz === "true";

            document.getElementById('lblSciToolVersion').dataset.scitoolx = String(width);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                width -= Table.GetViewFinderX();
                document.getElementById('lblSciToolVersion').style.left = String(width) + "px";
            }
        }

        public static GetWidth() {
            return Table.Width;
        }

        public static SetHeight(height: number) {
            if (height < window.innerHeight) {
                height = window.innerHeight - 40; //Se descuenta el alto de la firma.
            }

            Table.Height = height;

            let Y: number = height;
            let X: number = Number(document.getElementById('lblSciToolVersion').dataset.scitoolx);
            let Z: number = Number(document.getElementById('lblSciToolVersion').dataset.scitoolz);
            let Width: number = Number(document.getElementById('lblSciToolVersion').dataset.scitoolwidth);
            let Height: number = Number(document.getElementById('lblSciToolVersion').dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById('lblSciToolVersion').dataset.scitoolcrossz === "true";

            document.getElementById('lblSciToolVersion').dataset.scitooly = String(height);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                height -= Table.GetViewFinderY();
                document.getElementById('lblSciToolVersion').style.top = String(height) + "px";
            }
        }

        public static GetHeight() {
            return Table.Height;
        }

        public static ViewFinderJumpToX(x: number) {
            Table.ViewFinderX = Math.floor(x);
            Table_private.RedrawViewFinderContent();
        }

        public static ViewFinderMoveToX(x: number) {
            let origenX: number = Table.ViewFinderX;
            let deltaX: number;

            if (Table.ViewFinderX <= x) {
                deltaX = Table.deltaLenght;
            } else {
                deltaX = -Table.deltaLenght;
            }

            function mover() {
                if (Math.abs(Table.ViewFinderX + deltaX - origenX) <= Math.abs(x - origenX)) {
                    Table.ViewFinderX += Math.floor(deltaX);
                    Table_private.RedrawViewFinderContent();
                } else {
                    clearInterval(deltaT);
                    if (Table.ViewFinderX !== x) {
                        Table.ViewFinderX = x;
                        Table_private.RedrawViewFinderContent();
                    }
                }
            }

            let deltaT = setInterval(mover, Table.deltaTime);
        }

        public static GetViewFinderX() {
            return Table.ViewFinderX;
        }

        public static ViewFinderJumpToY(y: number) {
            Table.ViewFinderY = Math.floor(y);
            Table_private.RedrawViewFinderContent();
        }

        public static ViewFinderMoveToY(y: number) {
            let origenY: number = Table.ViewFinderY;
            let deltaY: number;

            if (Table.ViewFinderY <= y) {
                deltaY = Table.deltaLenght;
            } else {
                deltaY = -Table.deltaLenght;
            }

            function mover() {
                if (Math.abs(Table.ViewFinderY + deltaY - origenY) <= Math.abs(y - origenY)) {
                    Table.ViewFinderY += Math.floor(deltaY);
                    Table_private.RedrawViewFinderContent();
                } else {
                    clearInterval(deltaT);
                    if (Table.ViewFinderY !== y) {
                        Table.ViewFinderY = y;
                        Table_private.RedrawViewFinderContent();
                    }
                }
            }

            let deltaT = setInterval(mover, Table.deltaTime);
        }

        public static GetViewFinderY() {
            return Table.ViewFinderY;
        }

        public static ViewFinderJumpToZ(z: number) {
            if (Table.ViewFinderZ !== Math.floor(z)) {
                Table.ViewFinderZ = Math.floor(z);
                Table_private.RedrawViewFinderContent();

                try {
                    window["Table_OnViewFinderMove"].apply(this);
                } catch(e) {}
                Table.Talk("Table_OnViewFinderMove");
            }
        }

        public static ViewFinderMoveToZ(z: number) {
            let origenZ: number = Table.ViewFinderZ;
            let deltaZ: number;

            if (Table.ViewFinderZ <= z) {
                deltaZ = 1;
            } else {
                deltaZ = -1;
            }

            function mover() {
                if (Math.abs(Table.ViewFinderZ + deltaZ - origenZ) <= Math.abs(z - origenZ)) {
                    Table.ViewFinderZ += Math.floor(deltaZ);
                    Table_private.RedrawViewFinderContent();
                } else {
                    clearInterval(deltaT);
                    if (Table.ViewFinderZ !== z) {
                        Table.ViewFinderZ = z;
                        Table_private.RedrawViewFinderContent();
                    }
                }
            }

            let deltaT = setInterval(mover, Table.deltaTime);
        }

        public static GetViewFinderZ() {
            return Table.ViewFinderZ;
        }

        public static ViewFinderJumpToXYZ(x: number, y: number, z: number) {
            Table.ViewFinderX = Math.floor(x);
            Table.ViewFinderY = Math.floor(y);
            Table.ViewFinderZ = Math.floor(z);
            Table_private.RedrawViewFinderContent();
        }

        public static ViewFinderMoveToXYZ(x: number, y: number, z: number) {
            Table.ViewFinderMoveToX(x);
            Table.ViewFinderMoveToY(y);
            Table.ViewFinderMoveToZ(z);
        }

        public static GetViewFinderXYZ() {
            return Table.GetViewFinderX() + ", " + Table.GetViewFinderY() + ", " + Table.GetViewFinderZ()
        }

        public static OrganizeDocuments(OrganizationType: string, SetOfDocuments: string = Const.OrganizeVisibleDocuments) {
            let MargenIzquierdoEscritorioOrganizacionDocumentos: number = 45;
            let MargenSuperiorEscritorioOrganizacionDocumentos: number = 80;
            let SeparacionEntreDocumentos: number = 2;
            let documentos = Document.GetIdsStack();
            let documentosBelowMost = Document.GetBelowMostDocumentIdsStack();
            let documentosNormal = Document.GetNormalDocumentIdsStack();
            let documentosTopMost = Document.GetTopMostDocumentIdsStack();
            let ZActualViewFinder = Table.GetViewFinderZ();
            let xAcumulada = MargenIzquierdoEscritorioOrganizacionDocumentos + window.scrollX;
            let yAcumulada = MargenSuperiorEscritorioOrganizacionDocumentos + window.scrollY;

            switch (OrganizationType) {
                case 'Overlapping':
                    let desplazamientoHorizontalDesdeDocumentoAnterior = 90;

                    for (let documento of documentosBelowMost) {
                        if (!window[documento].GetRaised()) {
                            if (window[documento].GetZ() === ZActualViewFinder) {
                                if (window[documento].GetDraggable()) {
                                    if (SetOfDocuments == Const.OrganizeAllDocuments || (SetOfDocuments == Const.OrganizeVisibleDocuments && window[documento].VisibleInScreen())) {
                                        window[documento].SetX(xAcumulada);
                                        window[documento].SetY(yAcumulada);
                                        xAcumulada = xAcumulada + desplazamientoHorizontalDesdeDocumentoAnterior + window[documento].GetBorderWidth() * 2;
                                        yAcumulada = yAcumulada + window[documento].GetTitleBarHeight() + window[documento].GetBorderWidth();
                                    }
                                }
                            }
                        }
                    }
                    for (let documento of documentosNormal) {
                        if (!window[documento].GetRaised()) {
                            if (window[documento].GetZ() === ZActualViewFinder) {
                                if (window[documento].GetDraggable()) {
                                    if (SetOfDocuments == Const.OrganizeAllDocuments || (SetOfDocuments == Const.OrganizeVisibleDocuments && window[documento].VisibleInScreen())) {
                                        window[documento].SetX(xAcumulada);
                                        window[documento].SetY(yAcumulada);
                                        xAcumulada = xAcumulada + desplazamientoHorizontalDesdeDocumentoAnterior + window[documento].GetBorderWidth() * 2;
                                        yAcumulada = yAcumulada + window[documento].GetTitleBarHeight() + window[documento].GetBorderWidth();
                                    }
                                }
                            }
                        }
                    }
                    for (let documento of documentosTopMost) {
                        if (!window[documento].GetRaised()) {
                            if (window[documento].GetZ() === ZActualViewFinder) {
                                if (window[documento].GetDraggable()) {
                                    if (SetOfDocuments == Const.OrganizeAllDocuments || (SetOfDocuments == Const.OrganizeVisibleDocuments && window[documento].VisibleInScreen())) {
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
                    } catch(e) {}
                    Table.Talk("Table_OnDocumentsOrganized");
                    break;

                case 'Horizontal':
                    for (let documento of documentos) {
                        if (!window[documento].GetRaised()) {
                            if (window[documento].GetZ() === ZActualViewFinder) {
                                if (window[documento].GetDraggable()) {
                                    if (SetOfDocuments == Const.OrganizeAllDocuments || (SetOfDocuments == Const.OrganizeVisibleDocuments && window[documento].VisibleInScreen())) {
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
                    } catch(e) {}
                    Table.Talk("Table_OnDocumentsOrganized");
                    break;

                case 'Vertical':
                    for (let documento of documentos) {
                        if (!window[documento].GetRaised()) {
                            if (window[documento].GetZ() === ZActualViewFinder) {
                                if (window[documento].GetDraggable()) {
                                    if (SetOfDocuments == Const.OrganizeAllDocuments || (SetOfDocuments == Const.OrganizeVisibleDocuments && window[documento].VisibleInScreen())) {
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
                    } catch(e) {}
                    Table.Talk("Table_OnDocumentsOrganized");
                    break;
            }
        }

        public static Talk(message: string, metaMessage: any = "") {
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, "Table", message, metaMessage);
                    } catch(e) {}
                }
            }
            for (let idMetaobjeto of MetaObject.GetIdsStack()) {
                try {
                    window[idMetaobjeto + "_Listen"].call(this, "Table", message, metaMessage);
                } catch(e) {}
            }
            try {
                window["scitool_Listen"].call(this, "Table", message, metaMessage);
            } catch(e) {}
            try {
                window["Desk_Listen"].call(this, "Table", message, metaMessage);
            } catch(e) {}
            try {
                window["StatusBar_Listen"].call(this, "Table", message, metaMessage);
            } catch(e) {}
        }
    }

    class MetaObject_private {
        public static objects: object[] = [];

        constructor() {
        }

        public static RedrawMetaObject(metaObjectId: string) {
            let objectData: object;
            let idObjeto: string;
            let x, y, z, width, height: number;
            let crossZ: boolean;
            let anchoEnPixeles: string;

            for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
                objectData = MetaObject_private.objects[i];
                idObjeto = objectData["ObjectId"];

                // Fijar el width si aún está en "auto", que es el valor inicial asignado por SciTool a los Labels.
                if (objectData["ObjectType"] === ObjectType.Label && document.getElementById(idObjeto).style.width === "auto") {
                    try { // Se excluyen los Labels propios de SciTool, como la versión, por ejemplo.
                        anchoEnPixeles = String(window[idObjeto].GetPixelsLength());

                        document.getElementById(idObjeto).dataset.scitoolwidth = anchoEnPixeles;
                        document.getElementById(idObjeto).style.width = anchoEnPixeles + "px";
                    } catch(e) {}
                }

                if (objectData["ObjectType"] === ObjectType.MenuBar) {
                    try {
                        let opciones: object = window[idObjeto].GetElements();
                        x = window[idObjeto].GetX();

                        for (let opcion of opciones) {
                            anchoEnPixeles = String(window[idObjeto].GetPixelsLength(opcion["Id"]));

                            // Verificar si la etiqueta aún está fijado con width "auto".
                            if (document.getElementById(opcion["Id"]).style.width === "auto") { // Un Label es "auto" cuando se crea, antes de que SciTool le fije el ancho según su contenido cuando ya se agregó al DOM.
                                // Fijar coordenada x de la opción.
                                document.getElementById(opcion["Id"]).dataset.scitoolx = String(x);

                                // Fijar ancho de la opción.
                                document.getElementById(opcion["Id"]).dataset.scitoolwidth = anchoEnPixeles;
                                document.getElementById(opcion["Id"]).style.width = anchoEnPixeles + "px";
                            }

                            x += Number(anchoEnPixeles) +  window[idObjeto].GetSeparationBetweenOptions();
                        }
                    } catch(e) {}
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
                        } else {
                            document.getElementById(idObjeto).style.setProperty("display", "none");
                        }
                    }
                }
            }
        }

        public static AddDataObject(metaObjectId: string, objectId: string, objectType: String) {
            let dataObject = {
                'MetaObjectId': metaObjectId,
                'ObjectId': objectId,
                'ObjectType': objectType
            }
            MetaObject_private.objects.push(dataObject);
        }

        public static GetObjectsMap() {
            return MetaObject_private.objects;
        }

        public static GetParentDocumentId(idObjeto) { //Retorna el id del documento padre al que pertenece el objeto, o False si no portenece a ninguna.
            let objects = MetaObject_private.GetObjectsMap();
            for (let objeto of objects) {
                if (objeto["ObjectId"] === idObjeto) {
                    if (objeto["ObjectType"] !== ObjectType.scitool //Descartar metaobjetos y StatusBar para revisar solo los objetos que pueden pertener a un documento.
                        && objeto["ObjectType"] !== ObjectType.MetaObject
                        && objeto["ObjectType"] !== ObjectType.StatusBar
                        && objeto["ObjectType"] !== ObjectType.Document) {

                        //Revisar si el metaobjeto al que pertenece es un documento.
                        let metaObjectId: string = objeto["MetaObjectId"];
                        let metaObjects = MetaObject_private.GetObjectsMap();
                        for (let metaObjeto of metaObjects) {
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
        }

        public static GetParentMetaObjectId(idObjeto) { //Retorna el id del metaobjeto padre al que pertenece el objeto (documento, metaobjeto o scitool).
            let objects = MetaObject_private.objects;
            for (let objeto of objects) {
                if (objeto["ObjectId"] === idObjeto) {
                    if (objeto["ObjectType"] !== ObjectType.scitool //Descartar metaobjetos y StatusBar para revisar solo los objetos que pueden pertener a un metaobjeto.
                        && objeto["ObjectType"] !== ObjectType.MetaObject
                        && objeto["ObjectType"] !== ObjectType.StatusBar
                        && objeto["ObjectType"] !== ObjectType.Document) {

                        return objeto["MetaObjectId"];
                    }
                }
            }
        }

        public static GetMetaObjectObjectsNumber(idMetaobjeto) {
            let numObjetos: number = 0;
            let objects = MetaObject_private.objects;
            for (let objeto of objects) {
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
        }
    }

    export class MetaObject {
        private Id: string;

        public static NumberOfUnnamedObjects: number = 0;
        private static objects: string[] = [];
        private static idsStack: string[] = [];
        private X: number;
        private Y: number;
        private Z: number;

        constructor(id: string) {
            this.Id = id;
            MetaObject.idsStack.push(this.Id);
            this.X = 0;
            this.Y = 0;
            this.Z = 0;
        }

        public static GetIdsStack() {
            return MetaObject.idsStack;
        }

        public AddCanvas(x: number = 0, y: number = 0, z: number = 0, width: number = 0, height: number = 0, id: string = 'Canvas' + (Canvas.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Canvas(this.Id, this.X + x, this.Y + y, this.Z + z,width,height,id);
                return true;
            } else {
                return false;
            }
        }

        public AddBox(x: number = 0, y: number = 0, z: number = 0, width: number = 0, height: number = 0, borderWidth: number = Skin.GetBoxBorderWidth(), borderColor: string = Skin.GetBoxBorderColor(), fillColor: string = Skin.GetBoxFillColor(), id: string = 'Box' + (Box.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Box(this.Id,this.X + x, this.Y + y, this.Z + z,width,height,borderWidth,borderColor,fillColor,id);
                return true;
            } else {
                return false;
            }
        }

        public AddEllipse(x: number = 0, y: number = 0, z: number = 0, width: number = 0, height: number = 0, borderWidth: number = Skin.GetEllipseBorderWidth(), borderColor: string = Skin.GetEllipseBorderColor(), fillColor: string = Skin.GetEllipseFillColor(), id: string = 'Ellipse' + (Ellipse.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Ellipse(this.Id,this.X + x, this.Y + y, this.Z + z,width,height,borderWidth,borderColor,fillColor,id);
                return true;
            } else {
                return false;
            }
        }

        public AddLabel(x: number = 0, y: number = 0, z: number = 0, caption: string = "", id: string = 'Label' + (Label.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Label(this.Id,this.X + x, this.Y + y, this.Z + z,caption,id);
                return true;
            } else {
                return false;
            }
        }

        public AddTextBox(x: number = 0, y: number = 0, z: number = 0, caption: string = "", id: string = 'TextBox' + (TextBox.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new TextBox(this.Id,this.X + x, this.Y + y, this.Z + z,caption,id);
                return true;
            } else {
                return false;
            }
        }

        public AddButton(x: number = 0, y: number = 0, z: number = 0, caption: string = "", id: string = 'Button' + (Button.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Button(this.Id,this.X + x, this.Y + y, this.Z + z,caption,id);
                return true;
            } else {
                return false;
            }
        }

        public AddImage(x: number = 0, y: number = 0, z: number = 0, width: number = 0, height: number = 0, imageFile: string = "", caption: string = "", id: string = 'Image' + (Image.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Image(this.Id,this.X + x, this.Y + y, this.Z + z,width,height,imageFile,caption,id);
                return true;
            } else {
                return false;
            }
        }

        public AddVideo(x: number = 0, y: number = 0, z: number = 0, width: number = 0, height: number = 0, videoFile: string = "", autoPlay: boolean = false, id: string = 'Video' + (Video.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Video(this.Id,this.X + x, this.Y + y, this.Z + z,width,height,videoFile,autoPlay,id);
                return true;
            } else {
                return false;
            }
        }

        public AddCheckBox(x: number = 0, y: number = 0, z: number = 0, caption: string = "", id: string = 'CheckBox' + (CheckBox.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new CheckBox(this.Id,this.X + x, this.Y + y, this.Z + z,caption,id);
                return true;
            } else {
                return false;
            }
        }

        public AddRadioButtonGroup(x: number = 0, y: number = 0, z: number = 0, id: string = 'RadioButtonGroup' + (RadioButtonGroup.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new RadioButtonGroup(this.Id,this.X + x, this.Y + y, this.Z + z,id);
                return true;
            } else {
                return false;
            }
        }

        public AddComboBox(x: number = 0, y: number = 0, z: number = 0, id: string = 'ComboBox' + (ComboBox.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new ComboBox(this.Id,this.X + x, this.Y + y, this.Z + z,id);
                return true;
            } else {
                return false;
            }
        }

        public AddFile(x: number = 0, y: number = 0, z: number = 0, id: string = 'File' + (File.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new File(this.Id,this.X + x, this.Y + y, this.Z + z,id);
                return true;
            } else {
                return false;
            }
        }

        public AddRequester(id: string = 'Requester' + (Requester.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Requester(id);
                return true;
            } else {
                return false;
            }
        }

        public AddChronometer(id: string = 'Chronometer' + (Chronometer.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Chronometer(id);
                return true;
            } else {
                return false;
            }
        }

        public AddTimer(hours: number = 0, minutes: number = 0, seconds: number = 0, centiseconds: number = 0, id: string = 'Timer' + (Timer.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Timer(hours,minutes,seconds,centiseconds,id);
                return true;
            } else {
                return false;
            }
        }

        public AddDiv(x: number = 0, y: number = 0, z: number = 0, width: number = 0, height: number = 0, borderWidth: number = Skin.GetDivBorderWidth(), borderColor: string = Skin.GetDivBorderColor(), fillColor: string = Skin.GetDivFillColor(), id: string = 'Div' + (Div.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Div(this.Id,this.X + x, this.Y + y, this.Z + z,width,height,borderWidth,borderColor,fillColor,id);
                return true;
            } else {
                return false;
            }
        }

        public AddMenuBar(x: number = 0, y: number = 0, z: number = 0, id: string = 'Menu' + (Menu.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Menu(this.Id,this.X + x, this.Y + y, this.Z + z,ObjectType.MenuBar,id);
                return true;
            } else {
                return false;
            }
        }

        //Los Menú Pulldown siempre se crean en (0,0,Limbo).
        public AddPulldownMenu(id: string = 'Menu' + (Menu.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Menu(this.Id,0,0,Limbo,ObjectType.PulldownMenu,id);
                return true;
            } else {
                return false;
            }
        }

        public Talk(message: string, metaMessage: any = "") {
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    } catch(e) {}
                }
            }
            for (let idMetaobjeto of MetaObject.GetIdsStack()) {
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                } catch(e) {}
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
        }


        public GetId() {
            return this.Id;
        }

        public static AddDataObject(objectId: string) {
            MetaObject.objects.push(objectId);
        }

        public MoveOnX(xOffset: number) {
            this.X = this.X + xOffset;

            let objects = MetaObject_private.GetObjectsMap();

            for (let objeto of objects) {
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
        }

        public MoveOnY(yOffset: number) {
            this.Y = this.Y + yOffset;

            let objects = MetaObject_private.GetObjectsMap();
            for (let objeto of objects) {
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
        }

        public MoveOnZ(zOffset: number) {
            this.Z = this.Z + zOffset;

            let objects = MetaObject_private.GetObjectsMap();

            for (let objeto of objects) {
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
        }

        public MoveToZ(z: number) {
            this.Z = z;

            let objects = MetaObject_private.GetObjectsMap();

            for (let objeto of objects) {
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
        }

        public SetX(x: number) {
            let offset = x - this.X;

            this.MoveOnX(offset);
        }

        public GetX() {
            return this.X;
        }

        public SetY(y: number) {
            let offset = y - this.Y;

            this.MoveOnY(offset);
        }

        public GetY() {
            return this.Y;
        }

        public SetZ(z: number) {
            let offset = z - this.Z;

            this.MoveOnZ(offset);
        }

        public GetZ() {
            return this.Z;
        }

        public Bring() {
            this.MoveToZ(Table.GetViewFinderZ());

            try {
                window[this.Id + "_OnBring"].apply(this);
            } catch(e) {}
            window[this.Id].Talk(this.Id + "_OnBring");
        }

        public ToLimbo() {
            this.MoveToZ(Limbo);

            try {
                window[this.Id + "_OnToLimbo"].apply(this);
            } catch(e) {}
            window[this.Id].Talk(this.Id + "_OnToLimbo");
        }

        public SetEnabled(enabled: boolean) {
            let objetosExcluidos = ['AssociatedControl', 'RadioButton', 'MenuBarOption', 'PulldownMenuOption'];
            let objects = MetaObject_private.GetObjectsMap();
            for (let objeto of objects) {
                if (objeto["MetaObjectId"] === this.Id) {
                    if (objetosExcluidos.indexOf(objeto["ObjectType"]) === -1) {
                        window[objeto["ObjectId"]].SetEnabled(enabled);
                    }
                }
            }
            MetaObject_private.RedrawMetaObject(this.Id);
        }

        public SetVisible(visible: boolean) {
            let objetosExcluidos = ['AssociatedControl', 'RadioButton', 'MenuBarOption', 'PulldownMenuOption'];
            let objects = MetaObject_private.GetObjectsMap();
            for (let objeto of objects) {
                if (objeto["MetaObjectId"] === this.Id) {
                    if (objetosExcluidos.indexOf(objeto["ObjectType"]) === -1) {
                        window[objeto["ObjectId"]].SetVisible(visible);
                    }
                }
            }
            MetaObject_private.RedrawMetaObject(this.Id);
        }

        public SetCrossZ(crossZ: boolean) {
            let objetosExcluidos = ['AssociatedControl', 'RadioButton', 'MenuBarOption', 'PulldownMenu', 'PulldownMenuOption'];
            let objects = MetaObject_private.GetObjectsMap();
            for (let objeto of objects) {
                if (objeto["MetaObjectId"] === this.Id) {
                    if (objetosExcluidos.indexOf(objeto["ObjectType"]) === -1) {
                        window[objeto["ObjectId"]].SetCrossZ(crossZ);
                    }
                }
            }
            MetaObject_private.RedrawMetaObject(this.Id);
        }

        public SetZIndex(zIndex: string) {
            let objetosExcluidos = ['AssociatedControl', 'RadioButton', 'MenuBarOption', 'PulldownMenuOption'];
            let objects = MetaObject_private.GetObjectsMap();
            for (let objeto of objects) {
                if (objeto["MetaObjectId"] === this.Id) {
                    if (objetosExcluidos.indexOf(objeto["ObjectType"]) === -1) {
                        window[objeto["ObjectId"]].SetZIndex(zIndex);
                        if (!isNaN(Number(zIndex))) {
                            zIndex = String(Number(zIndex)+1);
                        }
                    }
                }
            }
            MetaObject_private.RedrawMetaObject(this.Id);
        }

        public SetFontFamily(fontFamily: string) {
            let objetosExcluidos = ['AssociatedControl', 'RadioButton', 'Image', 'Canvas', 'Box', 'Ellipse', 'MenuBarOption', 'PulldownMenuOption'];
            let objects = MetaObject_private.GetObjectsMap();
            for (let objeto of objects) {
                if (objeto["MetaObjectId"] === this.Id) {
                    if (objetosExcluidos.indexOf(objeto["ObjectType"]) === -1) {
                        window[objeto["ObjectId"]].SetFontFamily(fontFamily);
                    }
                }
            }
            MetaObject_private.RedrawMetaObject(this.Id);
        }

        public SetFontSize(fontSize: number) {
            let objetosExcluidos = ['AssociatedControl', 'RadioButtonGroup', 'RadioButton', 'Image', 'CheckBox', 'Canvas', 'Box', 'Ellipse', 'MenuBarOption', 'PulldownMenuOption'];
            let objects = MetaObject_private.GetObjectsMap();
            for (let objeto of objects) {
                if (objeto["MetaObjectId"] === this.Id) {
                    if (objetosExcluidos.indexOf(objeto["ObjectType"]) === -1) {
                        window[objeto["ObjectId"]].SetFontSize(fontSize);
                    }
                }
            }
            MetaObject_private.RedrawMetaObject(this.Id);
        }
    }

    class StatusBar_private {
        public static Create() {
            //Crear nodo.
            let nodoNuevo = document.createElement("DIV");
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
        }
    }

    export class StatusBar {
        private static Id: string = "StatusBar";
        private static Caption: string = "";
        private static Visible: boolean = false;
        private static Color: string = Skin.GetStatusBarColor();
        private static BackColor: string = Skin.GetStatusBarBackColor();
        private static SuccessColor: string = Skin.GetStatusBarSuccessColor();
        private static SuccessBackColor: string = Skin.GetStatusBarSuccessBackColor();
        private static UnsuccessColor: string = Skin.GetStatusBarUnsuccessColor();
        private static UnsuccessBackColor: string = Skin.GetStatusBarUnsuccessBackColor();
        private static NoticeColor: string = Skin.GetStatusBarNoticeColor();
        private static NoticeBackColor: string = Skin.GetStatusBarNoticeBackColor();
        private static WarningColor: string = Skin.GetStatusBarWarningColor();
        private static WarningBackColor: string = Skin.GetStatusBarWarningBackColor();
        private static TimeToResetColor: number = Skin.GetStatusBarTimeToResetColor();

        private static timSciTool;

        constructor() {
        }

        public static Show() {
            if (!StatusBar.GetVisible()) { StatusBar.SetVisible(true); }
        }

        public static GetId() {
            return StatusBar.Id;
        }

        public static SetCaption(caption: string, messageType: string = Const.Default) {
            StatusBar.Caption = caption;
            document.getElementById(StatusBar.Id).innerText = caption;

            clearTimeout(StatusBar.timSciTool); //Limpiar el timer por si estuviera corriendo a causa de un mensaje anterior, para que este nuevo mensaje tenga todo su tiempo.

            let color: string;
            let backColor: string;

            if (messageType === Const.Default) {
                color = StatusBar.Color;
                backColor = StatusBar.BackColor;
            }
            if (messageType === Const.Success) {
                color = StatusBar.SuccessColor;
                backColor = StatusBar.SuccessBackColor;
            }
            if (messageType === Const.Unsuccess) {
                color = StatusBar.UnsuccessColor;
                backColor = StatusBar.UnsuccessBackColor;
            }
            if (messageType === Const.Notice) {
                color = StatusBar.NoticeColor;
                backColor = StatusBar.NoticeBackColor;
            }
            if (messageType === Const.Warning) {
                color = StatusBar.WarningColor;
                backColor = StatusBar.WarningBackColor;
            }
            document.getElementById(StatusBar.Id).style.color = color;
            document.getElementById(StatusBar.Id).style.backgroundColor = backColor;

            if (messageType === Const.Success || messageType === Const.Unsuccess || messageType === Const.Notice || messageType === Const.Warning) {
                StatusBar.timSciTool= setTimeout(() => {
                    document.getElementById(StatusBar.Id).style.color = StatusBar.GetColor();
                    document.getElementById(StatusBar.Id).style.backgroundColor = StatusBar.GetBackColor();
                    clearTimeout(StatusBar.timSciTool);
                    try {
                        window[StatusBar.Id + "_OnTimeToResetOver"].apply(StatusBar);
                    } catch(e) {}
                    StatusBar.Talk(StatusBar.Id + "_OnTimeToResetOver");
                }, StatusBar.TimeToResetColor * 1000);
            }
        }

        public static GetCaption() {
            return StatusBar.Caption;
        }

        public static SetVisible(visible: boolean) {
            StatusBar.Visible = visible;

            if (visible === true) {
                document.getElementById(StatusBar.Id).style.visibility = 'visible';
            } else {
                document.getElementById(StatusBar.Id).style.visibility = 'hidden';
            }
        }

        public static GetVisible() {
            return StatusBar.Visible;
        }

        public static SetColor(color: string) {
            StatusBar.Color = color;

            document.getElementById(StatusBar.Id).style.color = color;
        }

        public static GetColor() {
            return StatusBar.Color;
        }

        public static SetBackColor(backColor: string) {
            StatusBar.BackColor = backColor;

            document.getElementById(StatusBar.Id).style.backgroundColor = backColor;
        }

        public static GetBackColor() {
            return StatusBar.BackColor;
        }

        public static Clear() {
            StatusBar.Caption = "";
            document.getElementById(StatusBar.Id).innerText = "";
        }

        public static Talk(message: string, metaMessage: any = "") {
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, "StatusBar", message, metaMessage);
                    } catch(e) {}
                }
            }
            for (let idMetaobjeto of MetaObject.GetIdsStack()) {
                try {
                    window[idMetaobjeto + "_Listen"].call(this, "StatusBar", message, metaMessage);
                } catch(e) {}
            }
            try {
                window["scitool_Listen"].call(this, "StatusBar", message, metaMessage);
            } catch(e) {}
            try {
                window["Desk_Listen"].call(this, "StatusBar", message, metaMessage);
            } catch(e) {}
            try {
                window["StatusBar_Listen"].call(this, "StatusBar", message, metaMessage);
            } catch(e) {}
        }
    }

    class Document_private {
        constructor() {
        }

        public static RedrawDocument(documentId: string) {
            let objectData: object;
            let idObjeto: string;
            let x, y, z, width, height: number;
            let xRelativo, yRelativo: number;
            let xDocumentOrigin: number = window[documentId].GetOriginX();
            let yDocumentOrigin: number = window[documentId].GetOriginY();
            let xDocument: number = window[documentId].GetX();
            let yDocument: number = window[documentId].GetY();
            let widthDocument: number = window[documentId].GetWidth();
            let heightDocument: number = window[documentId].GetHeight();
            let heightDocumentTitleBar: number = window[documentId].GetTitleBarHeight();
            let crossZ: boolean;
            let anchoEnPixeles: string;

            for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
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
                        } catch(e) {}
                    }

                    if (objectData["ObjectType"] === ObjectType.MenuBar) {
                        try {
                            let opciones = window[idObjeto].GetElements();
                            let x: number = window[idObjeto].GetX();

                            for (let opcion of opciones) {
                                // Verificar si la etiqueta aún está fijado con width "auto".
                                if (document.getElementById(opcion["Id"]).style.width === "auto") { // Un Label es "auto" cuando se crea, antes de que SciTool le fije el ancho según su contenido cuando ya se agregó al DOM.
                                    anchoEnPixeles = String(window[idObjeto].GetPixelsLength(opcion["Id"]));

                                    // Fijar coordenada x de la opción.
                                    document.getElementById(opcion["Id"]).dataset.scitoolx = String(x);

                                    // Fijar ancho de la opción.
                                    document.getElementById(opcion["Id"]).dataset.scitoolwidth = anchoEnPixeles;
                                    document.getElementById(opcion["Id"]).style.width = anchoEnPixeles + "px";
                                }

                                x += Number(anchoEnPixeles) +  window[idObjeto].GetSeparationBetweenOptions();
                            }
                        } catch(e) {}
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
                            } else { //Elementos del contenido del documento.
                                document.getElementById(idObjeto).style.clip = "rect(" + String(yDocument + heightDocumentTitleBar - y + yDocumentOrigin) + "px," + String(xDocument + widthDocument - x + xDocumentOrigin) + "px," + String(yDocument + heightDocument - y + yDocumentOrigin) + "px," + String(xDocument - x + xDocumentOrigin) + "px)";
                                document.getElementById(idObjeto).style.removeProperty("display");
                            }
                        } else {
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
        }
    }

    export class Document {
        private Id: string;
        private Caption: string;
        private Visible: boolean;
        private CrossZ: boolean;
        private ZIndex: string;
        private Enabled: boolean;
        private BorderWidth: number;
        private BorderColor: string;
        private TitleBarFontColor: string;
        private TitleBarColor: string;
        private Color: string;
        private DisabledTitleBarFontColor: string;
        private DisabledTitleBarColor: string;
        private TitleFontSize: number;
        private TitleFontFamily: string;
        private TitleBarHeight: number;
        private DisplayStyle: string;
        private OriginX: number;
        private OriginY: number;
        private Draggable: boolean;
        private Raisable: boolean;
        private Raised: boolean;
        private Closable: boolean;
        private CancelRaise: boolean;
        private CancelClose: boolean;
        private CancelCollect: boolean;
        private auxDisplayStyle: string; //Guarda el tipo de despliegue del documento. De uso solo para la librería, no para uso del programador.

        public static NumberOfUnnamedObjects: number = 0;
        private static idsStack: string[] = [];
        private static titleBarIdsStack: string[] = [];
        private static labelTitleIdsStack: string[] = [];
        private static labelDocumentRaiseButtonIdsStack: string[] = [];
        private static labelDocumentCloseButtonIdsStack: string[] = [];
        private static labelDocumentCollectButtonIdsStack: string[] = [];
        private static belowMostDocumentStack: string[] = []; //Pila que contiene el orden en que se despliegan los documentos BelowMost.
        private static normalDocumentStack: string[] = []; //Pila que contiene el orden en que se despliegan los documentos normales.
        private static topMostDocumentStack: string[] = []; //Pila que contiene el orden en que se despliegan los documentos TopMost.
        private static titleLeftMargin: number = 5; // Margen izquierdo del título de la barra de título.
        private static titleRightMargin: number = 20; // Margen derecho para los botones de la barra de título.
        private static documentButtonWidth: number = 22; // Ancho de botones de documento.
        private static documentButtonTop: number = -4;

        constructor(x: number = 0, y: number = 0, z: number = 0, width: number = 0, height: number = 0, caption: string = "", id: string) {
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
            this.DisplayStyle = Const.Normal;
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
            let nodoNuevo = document.createElement("DIV");
            nodoNuevo.setAttribute("id", this.Id);
            nodoNuevo.dataset.scitoolx = String(x);
            nodoNuevo.dataset.scitooly = String(y);
            nodoNuevo.dataset.scitoolz = String(z);
            nodoNuevo.dataset.scitoolwidth = String(width);
            nodoNuevo.dataset.scitoolheight = String(height);
            nodoNuevo.style.setProperty("position", "absolute");
            nodoNuevo.style.setProperty("display", "none");
            nodoNuevo.style.backgroundColor = Skin.GetDocumentColor();
            nodoNuevo.style.width = String(width)+"px";
            nodoNuevo.style.height = String(height)+"px";
            nodoNuevo.style.borderWidth = String(Skin.GetDocumentBorderWidth()) + "px";
            nodoNuevo.style.borderColor = Skin.GetDocumentBorderColor();
            nodoNuevo.style.borderStyle = "solid";
            nodoNuevo.style.borderRadius = String(Skin.GetDocumentBorderRadius()) + "px";
            nodoNuevo.style.boxShadow = "0px 3px 6px 0px rgba(0,0,0,0.4)";
            nodoNuevo.style.zIndex = String(MinZIndexNormalDocument + Document.normalDocumentStack.length * ZIndexDocumentSeparation);
            document.body.appendChild(nodoNuevo);

            //Crear nodo DIV para la barra de título.
            let nodoBarraTitulo = document.createElement("DIV");
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
            let nodoTitulo = document.createElement("LABEL");
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
            let nodoDocumentCloseButton = document.createElement("LABEL");
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
            let nodoDocumentCollectButton = document.createElement("LABEL");
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
            let nodoDocumentRaiseButton = document.createElement("LABEL");
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
                let X: number = x;
                let Y: number = y;
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

            document.getElementById(this.Id).onclick = () => {
                if (this.Enabled) {
                    window[this.Id].Bring();
                    try {
                        window[this.Id + "_OnClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnClick");
                }
            }
            document.getElementById(this.Id + "TitleBar").onclick = () => {
                if (this.Enabled) {
                    window[this.Id].Bring();
                    try {
                        window[this.Id + "_OnClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnClick");
                }
            }

            document.getElementById(this.Id + "TitleBar").ondblclick = () => {
                if (this.Enabled) {
                    window[this.Id].Bring();

                    //Enviar documento al borde de la pantalla.
                    if (this.GetRaised()) { // Primero se fuerza a que el documento vuelva a pegarse a la mesa.
                        window[this.Id].Unraise();
                    }
                    if (StatusBar.GetVisible()) {
                        this.SetY(window.scrollY + window.innerHeight - Skin.GetStatusBarHeight() - this.GetBorderWidth() - this.GetTitleBarHeight() - 30);
                    } else {
                        this.SetY(window.scrollY + window.innerHeight - this.GetBorderWidth() - this.GetTitleBarHeight() - 30);
                    }

                    try {
                        window[this.Id + "_OnDblClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnDblClick");
                }
            }

            document.getElementById("lblTitle" + this.Id).onclick = () => {
                if (this.Enabled) {
                    window[this.Id].Bring();
                    try {
                        window[this.Id + "_OnClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnClick");
                }
            }

            document.getElementById("lblTitle" + this.Id).ondblclick = () => {
                if (this.Enabled) {
                    window[this.Id].Bring();

                    //Enviar documento al borde de la pantalla.
                    if (this.GetRaised()) { // Primero se fuerza a que el documento vuelva a pegarse a la mesa.
                        window[this.Id].Unraise();
                    }
                    if (StatusBar.GetVisible()) {
                        this.SetY(window.scrollY + window.innerHeight - Skin.GetStatusBarHeight() - this.GetBorderWidth() - this.GetTitleBarHeight() - 30);
                    } else {
                        this.SetY(window.scrollY + window.innerHeight - this.GetBorderWidth() - this.GetTitleBarHeight() - 30);
                    }

                    try {
                        window[this.Id + "_OnDblClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnDblClick");
                }
            }

            document.getElementById("lblDocumentRaiseButton" + this.Id).onclick = () => {
                if (this.Enabled) {
                    if (this.Raisable) {
                        try {
                            window[this.Id + "_OnBeforeRaising"].apply(this);
                        } catch(e) {}
                        window[this.Id].Talk(this.Id + "_OnBeforeRaising");

                        if (!this.CancelRaise) {
                            if (window[this.Id].GetRaised()) {
                                window[this.Id].Unraise();
                            } else {
                                window[this.Id].Raise();
                            }

                            try {
                                window[this.Id + "_OnClick"].apply(this);
                            } catch(e) {}
                            window[this.Id].Talk(this.Id + "_OnClick");

                            try {
                                window[this.Id + "_OnRaise"].apply(this);
                            } catch(e) {}
                            window[this.Id].Talk(this.Id + "_OnRaise");
                        }

                        // Resetear valor en false.
                        this.CancelRaise = false;
                    }
                }
            }

            document.getElementById("lblDocumentRaiseButton" + this.Id).onmouseover = () => {
                if (this.Enabled) {
                    if (this.Raisable) {
                        document.getElementById("lblDocumentRaiseButton" + this.Id).style.color = Skin.GetDocumentTitleBarButtonColorOnMouseOver();
                    }
                }
            }

            document.getElementById("lblDocumentRaiseButton" + this.Id).onmouseout = () => {
                if (this.Enabled) {
                    if (this.Raisable) {
                        document.getElementById("lblDocumentRaiseButton" + this.Id).style.color = Skin.GetDocumentTitleBarButtonColor();
                    }
                }
            }

            document.getElementById("lblDocumentCloseButton" + this.Id).onclick = () => {
                if (this.Enabled) {
                    if (this.Closable) {
                        try {
                            window[this.Id + "_OnBeforeClosing"].apply(this);
                        } catch(e) {}
                        window[this.Id].Talk(this.Id + "_OnBeforeClosing");

                        if (!this.CancelClose) {
                            window[this.Id].ToLimbo();
                            try {
                                window[this.Id + "_OnClick"].apply(this);
                            } catch(e) {}
                            window[this.Id].Talk(this.Id + "_OnClick");

                            try {
                                window[this.Id + "_OnClose"].apply(this);
                            } catch(e) {}
                            window[this.Id].Talk(this.Id + "_OnClose");
                        }

                        // Resetear valor en false.
                        this.CancelClose = false;
                    }
                }
            }

            document.getElementById("lblDocumentCloseButton" + this.Id).onmouseover = () => {
                if (this.Enabled) {
                    if (this.Closable) {
                        document.getElementById("lblDocumentCloseButton" + this.Id).style.color = Skin.GetDocumentTitleBarButtonColorOnMouseOver();
                    }
                }
            }

            document.getElementById("lblDocumentCloseButton" + this.Id).onmouseout = () => {
                if (this.Enabled) {
                    if (this.Closable) {
                        document.getElementById("lblDocumentCloseButton" + this.Id).style.color = Skin.GetDocumentTitleBarButtonColor();
                    }
                }
            }

            document.getElementById("lblDocumentCollectButton" + this.Id).onclick = () => {
                if (this.Enabled) {
                    if (this.Draggable) {
                        try {
                            window[this.Id + "_OnBeforeCollecting"].apply(this);
                        } catch(e) {}
                        window[this.Id].Talk(this.Id + "_OnBeforeCollecting");

                        if (!this.CancelCollect) {
                            window[this.Id].SetZ(LimboEscritorio);

                            try {
                                window[this.Id + "_OnClick"].apply(this);
                            } catch(e) {}
                            window[this.Id].Talk(this.Id + "_OnClick");

                            try {
                                window[this.Id + "_OnCollect"].apply(this);
                            } catch(e) {}
                            window[this.Id].Talk(this.Id + "_OnCollect");
                        }

                        // Resetear valor en false.
                        this.CancelCollect = false;
                    }
                }
            }

            document.getElementById("lblDocumentCollectButton" + this.Id).onmouseover = () => {
                if (this.Enabled) {
                    if (this.Draggable) {
                        document.getElementById("lblDocumentCollectButton" + this.Id).style.color = Skin.GetDocumentTitleBarButtonColorOnMouseOver();
                    }
                }
            }

            document.getElementById("lblDocumentCollectButton" + this.Id).onmouseout = () => {
                if (this.Enabled) {
                    if (this.Draggable) {
                        document.getElementById("lblDocumentCollectButton" + this.Id).style.color = Skin.GetDocumentTitleBarButtonColor();
                    }
                }
            }

            //Hacer arrastrable al documento.
            documentoArrastrable(this);

            function documentoArrastrable(documento) {
                let elementoArrastrador1 = document.getElementById("lblTitle" + documento.Id); //Título de la barra.
                let elementoArrastrador2 = document.getElementById(documento.Id); //Documento mismo, es decir, el DIV de fondo.
                let desfaceX = 0;
                let desfaceY = 0;
                let anchoNavegador = 0;
                let altoNavegador = 0;
                let altoBarraEstado = 0;
                let clientX = 0;
                let clientY = 0;
                let anchoDocumento = 0;
                let altoDocumento = 0;
                let anchoBordeDocumento = 0;
                let margenDeSeguridad = 0;

                document.getElementById(elementoArrastrador1.id).onmousedown = ComenzarArrastre;
                document.getElementById(elementoArrastrador2.id).onmousedown = ComenzarArrastre;

                function ComenzarArrastre(e) {
                    if (documento.Draggable) {
                        e = e || window.event;
                        e.preventDefault();

                        if (documento.Enabled) {
                            documento.Bring(Const.NormalBring, true);
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
                            altoBarraEstado = Skin.GetStatusBarHeight()
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
                    } else {
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

        public InDocument(x: number, y: number, z: number, width: number, height: number, crossZ: boolean) {
            if ((x >= this.GetX() && x + width <= this.GetX() + this.GetWidth()) && (y >= this.GetY() && y + height <= this.GetY() + this.GetHeight()) && (z === this.GetZ() || crossZ === true)) {
                return true;
            } else {
                return false;
            }
        }

        public static GetIdsStack() {
            return Document.idsStack;
        }

        public static GetTitleBarIdsStack() {
            return Document.titleBarIdsStack;
        }

        public static GetLabelTitleIdsStack() {
            return Document.labelTitleIdsStack;
        }

        public static GetLabelDocumentRaiseButtonIdsStack() {
            return Document.labelDocumentRaiseButtonIdsStack;
        }

        public static GetLabelDocumentCloseButtonIdsStack() {
            return Document.labelDocumentCloseButtonIdsStack;
        }

        public static GetLabelDocumentCollectButtonIdsStack() {
            return Document.labelDocumentCollectButtonIdsStack;
        }

        public AddCanvas(x: number = 0, y: number = 0, width: number = 0, height: number = 0, id: string = 'Canvas' + (Canvas.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Canvas(this.Id,this.GetX()+this.GetBorderWidth()+x,this.GetY()+this.GetBorderWidth()+this.GetTitleBarHeight()+y,this.GetZ(),width,height,id);
                return true;
            } else {
                return false;
            }
        }

        public AddBox(x: number = 0, y: number = 0, width: number = 0, height: number = 0, borderWidth: number = Skin.GetBoxBorderWidth(), borderColor: string = Skin.GetBoxBorderColor(), fillColor: string = Skin.GetBoxFillColor(), id: string = 'Box' + (Box.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Box(this.Id,this.GetX()+this.GetBorderWidth()+x,this.GetY()+this.GetBorderWidth()+this.GetTitleBarHeight()+y,this.GetZ(),width,height,borderWidth,borderColor,fillColor,id);
                return true;
            } else {
                return false;
            }
        }

        public AddEllipse(x: number = 0, y: number = 0, width: number = 0, height: number = 0, borderWidth: number = Skin.GetEllipseBorderWidth(), borderColor: string = Skin.GetEllipseBorderColor(), fillColor: string = Skin.GetEllipseFillColor(), id: string = 'Ellipse' + (Ellipse.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Ellipse(this.Id,this.GetX()+this.GetBorderWidth()+x,this.GetY()+this.GetBorderWidth()+this.GetTitleBarHeight()+y,this.GetZ(),width,height,borderWidth,borderColor,fillColor,id);
                return true;
            } else {
                return false;
            }
        }

        public AddLabel(x: number = 0, y: number = 0, caption: string = "", id: string = 'Label' + (Label.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Label(this.Id,this.GetX()+this.GetBorderWidth()+x,this.GetY()+this.GetBorderWidth()+this.GetTitleBarHeight()+y,this.GetZ(),caption,id);
                return true;
            } else {
                return false;
            }
        }

        public AddTextBox(x: number = 0, y: number = 0, caption: string = "", id: string = 'TextBox' + (TextBox.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new TextBox(this.Id,this.GetX()+this.GetBorderWidth()+x,this.GetY()+this.GetBorderWidth()+this.GetTitleBarHeight()+y,this.GetZ(),caption,id);
                return true;
            } else {
                return false;
            }
        }

        public AddButton(x: number = 0, y: number = 0, caption: string = "", id: string = 'Button' + (Button.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Button(this.Id,this.GetX()+this.GetBorderWidth()+x,this.GetY()+this.GetBorderWidth()+this.GetTitleBarHeight()+y,this.GetZ(),caption,id);
                return true;
            } else {
                return false;
            }
        }

        public AddImage(x: number = 0, y: number = 0, width: number = 0, height: number = 0, imageFile: string = "", caption: string = "", id: string = 'Image' + (Image.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Image(this.Id,this.GetX()+this.GetBorderWidth()+x,this.GetY()+this.GetBorderWidth()+this.GetTitleBarHeight()+y,this.GetZ(),width,height,imageFile,caption,id);
                return true;
            } else {
                return false;
            }
        }

        public AddVideo(x: number = 0, y: number = 0, width: number = 0, height: number = 0, videoFile: string = "", autoPlay: boolean = false, id: string = 'Video' + (Video.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Video(this.Id,this.GetX()+this.GetBorderWidth()+x,this.GetY()+this.GetBorderWidth()+this.GetTitleBarHeight()+y,this.GetZ(),width,height,videoFile,autoPlay,id);
                return true;
            } else {
                return false;
            }
        }

        public AddCheckBox(x: number = 0, y: number = 0, caption: string = "", id: string = 'CheckBox' + (CheckBox.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new CheckBox(this.Id,this.GetX()+this.GetBorderWidth()+x,this.GetY()+this.GetBorderWidth()+this.GetTitleBarHeight()+y,this.GetZ(),caption,id);
                return true;
            } else {
                return false;
            }
        }

        public AddRadioButtonGroup(x: number = 0, y: number = 0, id: string = 'RadioButtonGroup' + (RadioButtonGroup.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new RadioButtonGroup(this.Id,this.GetX()+this.GetBorderWidth()+x,this.GetY()+this.GetBorderWidth()+this.GetTitleBarHeight()+y,this.GetZ(),id);
                return true;
            } else {
                return false;
            }
        }

        public AddComboBox(x: number = 0, y: number = 0, id: string = 'ComboBox' + (ComboBox.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new ComboBox(this.Id,this.GetX()+this.GetBorderWidth()+x,this.GetY()+this.GetBorderWidth()+this.GetTitleBarHeight()+y,this.GetZ(),id);
                return true;
            } else {
                return false;
            }
        }

        public AddFile(x: number = 0, y: number = 0, id: string = 'File' + (File.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new File(this.Id,this.GetX()+this.GetBorderWidth()+x,this.GetY()+this.GetBorderWidth()+this.GetTitleBarHeight()+y,this.GetZ(),id);
                return true;
            } else {
                return false;
            }
        }

        public AddRequester(id: string = 'Requester' + (Requester.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Requester(id);
                return true;
            } else {
                return false;
            }
        }

        public AddChronometer(id: string = 'Chronometer' + (Chronometer.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Chronometer(id);
                return true;
            } else {
                return false;
            }
        }

        public AddTimer(hours: number = 0, minutes: number = 0, seconds: number = 0, centiseconds: number = 0, id: string = 'Timer' + (Timer.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Timer(hours,minutes,seconds,centiseconds,id);
                return true;
            } else {
                return false;
            }
        }

        public AddDiv(x: number = 0, y: number = 0, width: number = 0, height: number = 0, borderWidth: number = Skin.GetDivBorderWidth(), borderColor: string = Skin.GetDivBorderColor(), fillColor: string = Skin.GetDivFillColor(), id: string = 'Div' + (Div.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Div(this.Id,this.GetX()+this.GetBorderWidth()+x,this.GetY()+this.GetBorderWidth()+this.GetTitleBarHeight()+y,this.GetZ(),width,height,borderWidth,borderColor,fillColor,id);
                return true;
            } else {
                return false;
            }
        }

        public AddMenuBar(x: number = 0, y: number = 0, id: string = 'Menu' + (Menu.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Menu(this.Id,this.GetX()+this.GetBorderWidth()+x,this.GetY()+this.GetBorderWidth()+this.GetTitleBarHeight()+y,this.GetZ(),ObjectType.MenuBar,id);
                return true;
            } else {
                return false;
            }
        }

        //Los Menú Pulldown siempre se crean en (0,0,Limbo).
        public AddPulldownMenu(id: string = 'Menu' + (Menu.NumberOfUnnamedObjects++)) {
            if (!scitool.ObjectIdExists(id)) {
                window[id] = new Menu(this.Id,0,0,Limbo,ObjectType.PulldownMenu,id);
                return true;
            } else {
                return false;
            }
        }

        public Talk(message: string, metaMessage: any = "") {
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    } catch(e) {}
                }
            }
            for (let idMetaobjeto of MetaObject.GetIdsStack()) {
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                } catch(e) {}
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
        }

        public CancelRaising() {
            this.CancelRaise = true;
        }

        public CancelClosing() {
            this.CancelClose = true;
        }

        public CancelCollecting() {
            this.CancelCollect = true;
        }

        public SetCancelCollecting(cancelCollecting: boolean) {
            this.CancelCollect = cancelCollecting;
        }

        public GetCancelCollecting() {
            return this.CancelCollect;
        }

        public GetId() {
            return this.Id;
        }

        public VisibleInScreen() {
            if ((this.GetX() + this.GetWidth() >= Number(window.scrollX)) && (this.GetX() <= Number(window.scrollX) + Number(window.innerWidth)) && (this.GetY() + this.GetHeight() >= Number(window.scrollY)) && (this.GetY() <= Number(window.scrollY) + Number(window.innerHeight))) {
                return true;
            } else {
                return false;
            }
        }

        public SetOriginX(originX: number) {
            this.OriginX = originX;

            Document_private.RedrawDocument(this.Id);
        }

        public GetOriginX() {
            return this.OriginX;
        }

        public SetOriginY(originY: number) {
            this.OriginY = originY;

            Document_private.RedrawDocument(this.Id);
        }

        public GetOriginY() {
            return this.OriginY;
        }

        public SetX(x: number) {
            let documentX: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let objectX: number;
            let X: number = x;
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            let objects = MetaObject_private.GetObjectsMap();
            for (let objeto of objects) {
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
                            } else {
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
        }

        public GetX() {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        }

        public SetY(y: number) {
            let documentY: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let objectY: number;
            let Y: number = y;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            let objects = MetaObject_private.GetObjectsMap();
            for (let objeto of objects) {
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
                            } else {
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
        }

        public GetY() {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        }

        public SetZ(z: number) {
            let Z: number = z;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolz = String(z);
            document.getElementById(this.Id + "TitleBar").dataset.scitoolz = String(z);
            document.getElementById("lblTitle" + this.Id).dataset.scitoolz = String(z);
            document.getElementById("lblDocumentRaiseButton" + this.Id).dataset.scitoolz = String(z);
            document.getElementById("lblDocumentCloseButton" + this.Id).dataset.scitoolz = String(z);
            document.getElementById("lblDocumentCollectButton" + this.Id).dataset.scitoolz = String(z);

            let objects = MetaObject_private.GetObjectsMap();
            for (let objeto of objects) {
                if (objeto["MetaObjectId"] === this.Id) {
                    if (objeto["ObjectType"] !== ObjectType.PulldownMenuOption) {
                        if (objeto["ObjectType"] !== ObjectType.RadioButtonGroup && objeto["ObjectType"] !== ObjectType.MenuBar && objeto["ObjectType"] !== ObjectType.PulldownMenu) {
                            document.getElementById(objeto["ObjectId"]).dataset.scitoolz = String(z);
                        } else {
                            if (objeto["ObjectType"] === ObjectType.MenuBar) {
                                window[objeto["ObjectId"]].SetZ(z);
                            }
                        }
                    }
                }
            }

            Document_private.RedrawDocument(this.Id);

            // Actualizar color del icono Soltar del escritorio.
            let documentos = Document.GetIdsStack();

            document.getElementById("lblSciToolEscritorioOrdenarDocumentosSoltar").style.color = Skin.GetToolBoxIconDisabledColor();

            for (let documento of documentos) {
                if (window[documento].GetZ() === LimboEscritorio) {
                    document.getElementById("lblSciToolEscritorioOrdenarDocumentosSoltar").style.color = Skin.GetToolBoxIconColor();
                    break;
                }
            }
        }

        public GetZ() {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        }

        public SetDisplayStyle(displayStyle: string) {
            let displayStyleActual = this.DisplayStyle;
            let numDocumento: number = 0;
            let documentos: string[] = [];

            this.DisplayStyle = displayStyle;

            //Eliminar Id del documento de la pila de documentos actual (normales, belowMost o topMost).
            if (displayStyleActual === Const.BelowMost) {
                Document.EraseFromBelowMostDocumentIdsStack(this.Id);
            }
            if (displayStyleActual === Const.Normal) {
                Document.EraseFromNormalDocumentIdsStack(this.Id);
            }
            if (displayStyleActual === Const.TopMost) {
                Document.EraseFromTopMostDocumentIdsStack(this.Id);
            }

            switch (displayStyle) {
                case Const.BelowMost:
                    //Añadir Id del documento a la pila de documentos BelowMost.
                    Document.AddToBelowMostDocumentIdsStack(this.Id);

                    //Fijar ZIndex de todos los documentos BelowMost en orden de abajo hacia arriba.
                    documentos = Document.GetBelowMostDocumentIdsStack();

                    for (let documento of documentos) {
                        window[documento].SetZIndex(MinZIndexBelowMostDocument + numDocumento * ZIndexDocumentSeparation);
                        numDocumento++;
                    }
                    break;

                case Const.Normal:
                    //Añadir Id del documento a la pila de documentos Normal.
                    Document.AddToNormalDocumentIdsStack(this.Id);

                    //Fijar ZIndex de todos los documentos Normal en orden de abajo hacia arriba.
                    documentos = Document.GetNormalDocumentIdsStack();
                    for (let documento of documentos) {
                        window[documento].SetZIndex(MinZIndexNormalDocument + numDocumento * ZIndexDocumentSeparation);
                        numDocumento++;
                    }
                    break;

                case Const.TopMost:
                    //Añadir Id del documento a la pila de documentos TopMost.
                    Document.AddToTopMostDocumentIdsStack(this.Id);

                    //Fijar ZIndex de todos los documentos TopMost en orden de abajo hacia arriba.
                    documentos = Document.GetTopMostDocumentIdsStack();
                    for (let documento of documentos) {
                        window[documento].SetZIndex(MinZIndexTopMostDocument + numDocumento * ZIndexDocumentSeparation);
                        numDocumento++;
                    }
                    break;
            }
        }

        public GetDisplayStyle() {
            return this.DisplayStyle;
        }

        public static GetBelowMostDocumentIdsStack() {
            return Document.belowMostDocumentStack;
        }

        public static GetNormalDocumentIdsStack() {
            return Document.normalDocumentStack;
        }

        public static GetTopMostDocumentIdsStack() {
            return Document.topMostDocumentStack;
        }

        private static EraseFromBelowMostDocumentIdsStack(documentId: string) {
            if (Document.GetBelowMostDocumentIdsStack().indexOf(documentId) !== -1) {
                Document.belowMostDocumentStack.splice(Document.belowMostDocumentStack.indexOf(documentId),1);
            }
        }

        private static EraseFromNormalDocumentIdsStack(documentId: string) {
            if (Document.GetNormalDocumentIdsStack().indexOf(documentId) !== -1) {
                Document.normalDocumentStack.splice(Document.normalDocumentStack.indexOf(documentId),1);
            }
        }

        private static EraseFromTopMostDocumentIdsStack(documentId: string) {
            if (Document.GetTopMostDocumentIdsStack().indexOf(documentId) !== -1) {
                Document.topMostDocumentStack.splice(Document.topMostDocumentStack.indexOf(documentId),1);
            }
        }

        public static AddToBelowMostDocumentIdsStack(documentId: string) {
            Document.belowMostDocumentStack.push(documentId);
        }

        public static AddToNormalDocumentIdsStack(documentId: string) {
            Document.normalDocumentStack.push(documentId);
        }

        public static AddToTopMostDocumentIdsStack(documentId: string) {
            Document.topMostDocumentStack.push(documentId);
        }

        public Bring(TipoDeBring: string = Const.NormalBring, accionArrastre: boolean = false) { // Parámetro accionArrastre es solo para uso de la librería, no para el programador. No documentarlo para él.
            let documentos;
            let posicion: number;
            let numDocumento: number = 0;
            let ZActual: number = this.GetZ();
            let xDocumento: number = 0;
            let yDocumento: number = 0;
            let MargenIzquierdoEscritorioOrganizacionDocumentos: number = 45;
            let MargenSuperiorEscritorioOrganizacionDocumentos: number = 80;
            let MargenSuperiorDesdeMouse: number = 20;

            this.SetZ(Table.GetViewFinderZ());

            // Añadir incrementos para traer el documento a la zona visible actualmente de la mesa.
            if (TipoDeBring == Const.BringToLeftBorderScreen) {
                this.SetX(MargenIzquierdoEscritorioOrganizacionDocumentos + window.scrollX);
                this.SetY(MargenSuperiorEscritorioOrganizacionDocumentos + window.scrollY);
            }
            if (TipoDeBring == Const.BringToRightBorderScreen) {
                this.SetX(window.scrollX + window.innerWidth - this.GetWidth() - MargenIzquierdoEscritorioOrganizacionDocumentos);
                this.SetY(MargenSuperiorEscritorioOrganizacionDocumentos + window.scrollY);
            }
            if (TipoDeBring == Const.BringToCenter) {
                this.SetX(window.scrollX + window.innerWidth / 2 - this.GetWidth() / 2);
                this.SetY(window.scrollY + window.innerHeight / 2 + - this.GetHeight() / 2);
            }
            if (TipoDeBring == Const.BringToHCenter) {
                this.SetX(window.scrollX + window.innerWidth / 2 - this.GetWidth() / 2);
            }
            if (TipoDeBring == Const.BringToVCenter) {
                this.SetY(window.scrollY + window.innerHeight / 2 + - this.GetHeight() / 2);
            }
            if (TipoDeBring == Const.BringToMouseToMiddle) {
                this.SetX(window.scrollX + xMouse - this.GetWidth() / 2);
                this.SetY(window.scrollY + yMouse + MargenSuperiorDesdeMouse);
            }
            if (TipoDeBring == Const.BringToMouse) {
                this.SetX(window.scrollX + xMouse);
                this.SetY(window.scrollY + yMouse + MargenSuperiorDesdeMouse);
            }

            switch(this.DisplayStyle) {
                case Const.BelowMost:
                    //Mover el Id del documento de la pila de documentos BelowMost desde su posición actual a la cima.
                    documentos = Document.GetBelowMostDocumentIdsStack();
                    posicion = documentos.indexOf(this.Id);
                    Document.belowMostDocumentStack.splice(posicion,1);
                    Document.belowMostDocumentStack.push(this.Id);

                    //Fijar ZIndex de todos los documentos BelowMost en orden de abajo hacia arriba.
                    documentos = Document.GetBelowMostDocumentIdsStack();
                    for (let documento of documentos) {
                        window[documento].SetZIndex(MinZIndexBelowMostDocument + numDocumento * ZIndexDocumentSeparation);
                        numDocumento++;
                    }
                    break;

                case Const.Normal:
                    //Mover el Id del documento de la pila de documentos normales desde su posición actual a la cima.
                    documentos = Document.GetNormalDocumentIdsStack();
                    posicion = documentos.indexOf(this.Id);
                    Document.normalDocumentStack.splice(posicion,1);
                    Document.normalDocumentStack.push(this.Id);

                    //Fijar ZIndex de todos los documentos normales en orden de abajo hacia arriba.
                    documentos = Document.GetNormalDocumentIdsStack();
                    for (let documento of documentos) {
                        window[documento].SetZIndex(MinZIndexNormalDocument + numDocumento * ZIndexDocumentSeparation);
                        numDocumento++;
                    }
                    break;

                case Const.TopMost:
                    //Mover el Id del documento de la pila de documentos TopMost desde su posición actual a la cima.
                    documentos = Document.GetTopMostDocumentIdsStack();
                    posicion = documentos.indexOf(this.Id);
                    Document.topMostDocumentStack.splice(posicion,1);
                    Document.topMostDocumentStack.push(this.Id);

                    //Fijar ZIndex de todos los documentos TopMost en orden de abajo hacia arriba.
                    documentos = Document.GetTopMostDocumentIdsStack();
                    for (let documento of documentos) {
                        window[documento].SetZIndex(MinZIndexTopMostDocument + numDocumento * ZIndexDocumentSeparation);
                        numDocumento++;
                    }
                    break;
            }

            if (ZActual === Limbo && Table.GetViewFinderZ() !== Limbo) { // Solo si el documento va desde el Limbo al Z actual del ViewFinder se ejecuta este método.
                try {
                    window[this.Id + "_OnOpen"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnOpen");
            }

            if (!accionArrastre) {
                try {
                    window[this.Id + "_OnBring"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnBring");
            }
        }

        public ToLimbo() {
            this.SetZ(Limbo);

            try {
                window[this.Id + "_OnToLimbo"].apply(this);
            } catch(e) {}
            window[this.Id].Talk(this.Id + "_OnToLimbo");
        }

        public Opened() {
            if (Number(this.GetZ()) === Number(Table.GetViewFinderZ()) || this.CrossZ) {
                return true;
            } else {
                return false;
            }
        }

        public SetEnabled(enabled: boolean) {
            let objetosExcluidos = ['AssociatedControl', 'RadioButton','MenuBarOption', 'PulldownMenuOption'];
            let objects = MetaObject_private.GetObjectsMap();
            for (let objeto of objects) {
                if (objeto["MetaObjectId"] === this.Id && objetosExcluidos.indexOf(objeto["ObjectType"]) === -1) {
                    switch (objeto["ObjectId"]) {
                        case this.Id:
                            this.Enabled = enabled;
                            break;

                        case this.Id + "TitleBar":
                            if (enabled) {
                                document.getElementById(this.Id + "TitleBar").style.backgroundColor = this.GetTitleBarColor();
                            } else {
                                document.getElementById(this.Id + "TitleBar").style.backgroundColor = this.GetDisabledTitleBarColor();
                            }
                            break;

                        case "lblTitle" + this.Id:
                            if (enabled) {
                                document.getElementById("lblTitle" + this.Id).style.color = this.GetTitleBarFontColor();
                            } else {
                                document.getElementById("lblTitle" + this.Id).style.color = this.GetDisabledTitleBarFontColor();
                            }
                            break;

                        case "lblDocumentRaiseButton" + this.Id:
                            if (enabled) {
                                if (this.Raisable) {
                                    document.getElementById("lblDocumentRaiseButton" + this.Id).style.color = Skin.GetDocumentTitleBarButtonColor();
                                }
                            } else {
                                document.getElementById("lblDocumentRaiseButton" + this.Id).style.color = Skin.GetDocumentTitleBarDisabledButtonColor();
                            }
                            break;

                        case "lblDocumentCloseButton" + this.Id:
                            if (enabled) {
                                if (this.Closable) {
                                    document.getElementById("lblDocumentCloseButton" + this.Id).style.color = Skin.GetDocumentTitleBarButtonColor();
                                }
                            } else {
                                document.getElementById("lblDocumentCloseButton" + this.Id).style.color = Skin.GetDocumentTitleBarDisabledButtonColor();
                            }
                            break;

                        case "lblDocumentCollectButton" + this.Id:
                            if (enabled) {
                                if (this.Draggable) {
                                    document.getElementById("lblDocumentCollectButton" + this.Id).style.color = Skin.GetDocumentTitleBarButtonColor();
                                }
                            } else {
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
        }

        public Raise() {
            let objetosExcluidos = ['AssociatedControl', 'RadioButton', 'MenuBarOption', 'PulldownMenuOption'];
            let objects = MetaObject_private.GetObjectsMap();

            if (this.Raisable && !this.Raised) {
                this.auxDisplayStyle = this.GetDisplayStyle();
                if (this.auxDisplayStyle != Const.TopMost) this.SetDisplayStyle(Const.TopMost); //Forzar a ser TopMost mientras el documento esté Raised.

                for (let objeto of objects) {
                    if (objeto["MetaObjectId"] === this.Id && objetosExcluidos.indexOf(objeto["ObjectType"]) === -1) {
                        switch (objeto["ObjectType"]) {
                            case 'RadioButtonGroup':
                                let elementos = window[objeto['ObjectId']].GetElements();

                                for (let elemento of elementos) {
                                    document.getElementById(elemento["Id"]).style.setProperty("position", "fixed");
                                    document.getElementById(elemento["LabelId"]).style.setProperty("position", "fixed");
                                }
                                break

                            case 'CheckBox':
                                document.getElementById(objeto["ObjectId"]).style.setProperty("position", "fixed");
                                document.getElementById("lblChk" + objeto["ObjectId"]).style.setProperty("position", "fixed");
                                break

                            default:
                                document.getElementById(objeto["ObjectId"]).style.setProperty("position", "fixed");
                                break
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
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnRaise");
            }
        }

        public Unraise() {
            let objetosExcluidos = ['AssociatedControl', 'RadioButton', 'MenuBarOption', 'PulldownMenuOption'];
            let objects = MetaObject_private.GetObjectsMap();

            if (this.Raisable && this.Raised) {
                for (let objeto of objects) {
                    if (objeto["MetaObjectId"] === this.Id && objetosExcluidos.indexOf(objeto["ObjectType"]) === -1) {
                        switch (objeto["ObjectType"]) {
                            case 'RadioButtonGroup':
                                let elementos = window[objeto['ObjectId']].GetElements();

                                for (let elemento of elementos) {
                                    document.getElementById(elemento["Id"]).style.setProperty("position", "absolute");
                                    document.getElementById(elemento["LabelId"]).style.setProperty("position", "absolute");
                                }
                                break

                            case 'CheckBox':
                                document.getElementById(objeto["ObjectId"]).style.setProperty("position", "absolute");
                                document.getElementById("lblChk" + objeto["ObjectId"]).style.setProperty("position", "absolute");
                                break

                            default:
                                document.getElementById(objeto["ObjectId"]).style.setProperty("position", "absolute");
                            break
                        }
                    }
                }

                //Efecto de acercamiento del documento de la mesa.
                document.getElementById(this.Id).style.boxShadow = "0px 3px 6px 0px rgba(0,0,0,0.4)"; // Acercar sombra.

                this.SetX(this.GetX() + window.scrollX);
                this.SetY(this.GetY() + window.scrollY);
                document.getElementById("lblDocumentRaiseButton" + this.Id).innerText = "\u25cf";

                if (this.auxDisplayStyle != Const.TopMost) this.SetDisplayStyle(this.auxDisplayStyle); //Forzar a ser TopMost mientras el documento esté Raised.

                this.Raised = false;

                try {
                    window[this.Id + "_OnUnraise"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnUnraise");
            }
        }

        public GetRaised() {
            return this.Raised;
        }

        public SetVisible(visible: boolean) {
            let objetosExcluidos = ['AssociatedControl', 'RadioButton', 'MenuBarOption', 'PulldownMenuOption'];
            let objects = MetaObject_private.GetObjectsMap();
            for (let objeto of objects) {
                if (objeto["MetaObjectId"] === this.Id && objetosExcluidos.indexOf(objeto["ObjectType"]) === -1) {
                    switch (objeto["ObjectId"]) {
                        case this.Id:
                            this.Visible = visible;
                            if (visible === true) {
                                document.getElementById(this.Id).style.visibility = 'visible';
                            } else {
                                document.getElementById(this.Id).style.visibility = 'hidden';
                            }
                            break;

                        case this.Id + "TitleBar":
                            if (visible === true) {
                                document.getElementById(this.Id + "TitleBar").style.visibility = 'visible';
                            } else {
                                document.getElementById(this.Id + "TitleBar").style.visibility = 'hidden';
                            }
                            break;

                        case "lblTitle" + this.Id:
                            if (visible === true) {
                                document.getElementById("lblTitle" + this.Id).style.visibility = 'visible';
                            } else {
                                document.getElementById("lblTitle" + this.Id).style.visibility = 'hidden';
                            }
                            break;

                        case "lblDocumentRaiseButton" + this.Id:
                            if (visible === true) {
                                document.getElementById("lblDocumentRaiseButton" + this.Id).style.visibility = 'visible';
                            } else {
                                document.getElementById("lblDocumentRaiseButton" + this.Id).style.visibility = 'hidden';
                            }
                            break;

                        case "lblDocumentCloseButton" + this.Id:
                            if (visible === true) {
                                document.getElementById("lblDocumentCloseButton" + this.Id).style.visibility = 'visible';
                            } else {
                                document.getElementById("lblDocumentCloseButton" + this.Id).style.visibility = 'hidden';
                            }
                            break;

                        case "lblDocumentCollectButton" + this.Id:
                            if (visible === true) {
                                document.getElementById("lblDocumentCollectButton" + this.Id).style.visibility = 'visible';
                            } else {
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
        }

        public GetVisible() {
            return this.Visible;
        }

        public SetCrossZ(crossZ: boolean) {
            let objetosExcluidos = ['AssociatedControl', 'RadioButton', 'MenuBarOption', 'PulldownMenuOption'];

            //Objetos del documento.
            let objects = MetaObject_private.GetObjectsMap();
            for (let objeto of objects) {
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
        }

        public GetCrossZ() {
            return this.CrossZ;
        }

        private SetZIndex(zIndex: string) {
            let objetosExcluidos = ['AssociatedControl', 'RadioButton','MenuBarOption', 'PulldownMenuOption'];

            //Objetos del documento.
            let objects = MetaObject_private.GetObjectsMap();

            for (let objeto of objects) {
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
                        } else {
                            zIndex = String(Number(zIndex) + 1);
                        }
                    }
                }
            }
            Document_private.RedrawDocument(this.Id);
        }

        public GetZIndex() {
            return this.ZIndex;
        }

        public SetFontFamily(fontFamily: string) {
            let objetosExcluidos = ['AssociatedControl', 'RadioButton', 'Image', 'Canvas', 'Box', 'Ellipse', 'MenuBarOption', 'PulldownMenuOption'];

            //Objetos del documento.
            let objects = MetaObject_private.GetObjectsMap();
            for (let objeto of objects) {
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
        }

        public SetFontSize(fontSize: number) {
            let objetosExcluidos = ['AssociatedControl', 'RadioButtonGroup', 'RadioButton', 'Image', 'CheckBox', 'Canvas', 'Box', 'Ellipse', 'MenuBarOption', 'PulldownMenuOption'];

            //Objetos del documento.
            let objects = MetaObject_private.GetObjectsMap();
            for (let objeto of objects) {
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
        }

        public SetTitleFontSize(fontSize: number) {
            this.TitleFontSize = fontSize;
            document.getElementById("lblTitle" + this.Id).style.fontSize = String(fontSize) + "px";
            this.SetTitleBarHeight(fontSize + 8);
        }

        public GetTitleFontSize() {
            return this.TitleFontSize;
        }

        public SetTitleFontFamily(fontFamily: string) {
            this.TitleFontFamily = fontFamily;
            document.getElementById("lblTitle" + this.Id).style.fontFamily = String(fontFamily);
        }

        public GetTitleFontFamily() {
            return this.TitleFontFamily;
        }

        public SetTitleBarHeight(height: number) {
            this.TitleBarHeight = height;
            document.getElementById(this.Id + "TitleBar").style.height = String(height) + "px";
            document.getElementById("lblTitle" + this.Id).style.height = String(height) + "px";
        }

        public GetTitleBarHeight() {
            return this.TitleBarHeight;
        }

        public SetWidth(width: number) {
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
        }

        public GetWidth() {
            return Number(document.getElementById(this.Id).dataset.scitoolwidth);
        }

        public SetHeight(height: number) {
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";

            Document_private.RedrawDocument(this.Id);
        }

        public GetHeight() {
            return Number(document.getElementById(this.Id).dataset.scitoolheight);
        }

        public GetInViewFinder() {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        }

        public SetCaption(caption: string) {
            this.Caption = caption;

            document.getElementById("lblTitle" + this.Id).innerText = caption;
        }

        public GetCaption() {
            return this.Caption;
        }

        public SetColor(color: string) {
            this.Color = color;

            document.getElementById(this.Id).style.backgroundColor = color;
        }

        public GetColor() {
            return this.Color;
        }

        public GetBorderColor() {
            return this.BorderColor;
        }

        public GetBorderWidth() {
            return this.BorderWidth;
        }

        public SetTitleBarFontColor(color: string) {
            this.TitleBarFontColor = color;

            document.getElementById("lblTitle" + this.Id).style.color = color;
        }

        public GetTitleBarFontColor() {
            return this.TitleBarFontColor;
        }

        public SetTitleBarColor(color: string) {
            this.TitleBarColor = color;

            document.getElementById(this.Id + "TitleBar").style.backgroundColor = color;
        }

        public GetTitleBarColor() {
            return this.TitleBarColor;
        }

        public SetDisabledTitleBarFontColor(color: string) {
            this.DisabledTitleBarFontColor = color;

            if (!this.Enabled) {
                document.getElementById("lblTitle" + this.Id).style.color = color;
            }
        }

        public GetDisabledTitleBarFontColor() {
            return this.DisabledTitleBarFontColor;
        }

        public SetDisabledTitleBarColor(color: string) {
            this.DisabledTitleBarColor = color;

            if (!this.Enabled) {
                document.getElementById(this.Id + "TitleBar").style.backgroundColor = color;
            }
        }

        public GetDisabledTitleBarColor() {
            return this.DisabledTitleBarColor;
        }

        public SetDraggable(draggable: boolean) {
            this.Draggable = draggable;

            if (draggable) {
                document.getElementById("lblDocumentCollectButton" + this.Id).style.color = Skin.GetDocumentTitleBarButtonColor();
            } else {
                document.getElementById("lblDocumentCollectButton" + this.Id).style.color = Skin.GetDocumentTitleBarDisabledButtonColor();
            }
        }

        public GetDraggable() {
            return this.Draggable;
        }

        public SetRaisable(raisable: boolean) {
            this.Raisable = raisable;

            if (raisable) {
                document.getElementById("lblDocumentRaiseButton" + this.Id).style.color = Skin.GetDocumentTitleBarButtonColor();
            } else {
                document.getElementById("lblDocumentRaiseButton" + this.Id).style.color = Skin.GetDocumentTitleBarDisabledButtonColor();
            }
        }

        public GetRaisable() {
            return this.Raisable;
        }

        public SetClosable(closable: boolean) {
            this.Closable = closable;

            if (closable) {
                document.getElementById("lblDocumentCloseButton" + this.Id).style.color = Skin.GetDocumentTitleBarButtonColor();
            } else {
                document.getElementById("lblDocumentCloseButton" + this.Id).style.color = Skin.GetDocumentTitleBarDisabledButtonColor();
            }
        }

        public GetClosable() {
            return this.Closable;
        }
    }

    export class Label {
        private Id: string;
        private Caption: string;
        private Visible: boolean;
        private Color: string;
        private BackColor: string;
        private DisabledColor: string;
        private LinkColor: string;
        private TabIndex: number;
        private For: string;
        private AccessKey: string;
        private FontSize: number;
        private FontFamily: string;
        private CrossZ: boolean;
        private Link: boolean;
        private LinkTo: string;
        private ZIndex: string;
        private MetaObject: string;
        private Enabled: boolean;
        private TypeWidth: string;
        private Raised: boolean;

        public static NumberOfUnnamedObjects: number = 0;
        private static idsStack: string[] = [];
        private static topBottomMargin: number = 4;

        constructor(metaObject: string, x: number = 0, y: number = 0, z: number = 0, caption: string = "", id: string) {
            this.Id = id;
            Label.idsStack.push(this.Id);
            this.MetaObject = metaObject;
            MetaObject_private.AddDataObject(this.MetaObject, this.Id, ObjectType.Label);
            this.CrossZ = false;
            if (caption.replace(/ /g, "") == "") {
                this.Caption = this.Id;
            } else {
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
            } else {
                this.ZIndex = "auto";
            }
            this.Enabled = true;
            this.TypeWidth = Skin.GetLabelTypeWidth();
            this.Raised = false;

            //Crear nodo.
            let nodoNuevo = document.createElement("LABEL");
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

            document.getElementById(this.Id).onclick = () => {
                if (this.Enabled) {
                    ////////Activar eventual documento padre de este objeto.
                    //Buscar metaobjeto de este objeto.
                    let datosObjeto = MetaObject_private.GetObjectsMap().filter((objeto) => {
                        if (objeto["ObjectId"] === this.Id) {
                            return objeto;
                        }
                    });

                    //Verificar si el metaobjeto es un documento.
                    let datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter((objeto) => {
                        if (objeto["ObjectId"] === datosObjeto[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                            return objeto;
                        }
                    });
                    if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();

                        try {
                            window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(this);
                        } catch(e) {}
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                    }
                    ////////

                    try {
                        window[this.Id + "_OnClick"].apply(this);
                    } catch(e) {}
                    try { // Capturar error si se trata de uno de los Label de las funciones de escritorio que incorpora esta librería, pues no puede llamarse a sus métodos.
                        window[this.Id].Talk(this.Id + "_OnClick");
                    } catch(e) {}

                    if (this.LinkTo !== null) {
                        location.href = this.LinkTo;
                    }
                }
            }
            document.getElementById(this.Id).ondblclick = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnDblClick"].apply(this);
                    } catch(e) {}
                    try { // Capturar error si se trata de uno de los Label de las funciones de escritorio que incorpora esta librería, pues no puede llamarse a sus métodos.
                        window[this.Id].Talk(this.Id + "_OnDblClick");
                    } catch(e) {}
                }
            }
            document.getElementById(this.Id).onfocus = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnFocus"].apply(this);
                    } catch(e) {}
                    try { // Capturar error si se trata de uno de los Label de las funciones de escritorio que incorpora esta librería, pues no puede llamarse a sus métodos.
                        window[this.Id].Talk(this.Id + "_OnFocus");
                    } catch(e) {}
                }
            }
            document.getElementById(this.Id).onmouseover = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseOver"].apply(this);
                    } catch(e) {}
                    try { // Capturar error si se trata de uno de los Label de las funciones de escritorio que incorpora esta librería, pues no puede llamarse a sus métodos.
                        window[this.Id].Talk(this.Id + "_OnMouseOver");
                    } catch(e) {}
                }
            }
            document.getElementById(this.Id).onmousemove = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseMove"].apply(this);
                    } catch(e) {}
                    try { // Capturar error si se trata de uno de los Label de las funciones de escritorio que incorpora esta librería, pues no puede llamarse a sus métodos.
                        window[this.Id].Talk(this.Id + "_OnMouseMove");
                    } catch(e) {}
                }
            }
            document.getElementById(this.Id).onmousedown = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseDown"].apply(this);
                    } catch(e) {}
                    try { // Capturar error si se trata de uno de los Label de las funciones de escritorio que incorpora esta librería, pues no puede llamarse a sus métodos.
                        window[this.Id].Talk(this.Id + "_OnMouseDown");
                    } catch(e) {}
                }
            }
            document.getElementById(this.Id).onmouseup = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseUp"].apply(this);
                    } catch(e) {}
                    try { // Capturar error si se trata de uno de los Label de las funciones de escritorio que incorpora esta librería, pues no puede llamarse a sus métodos.
                        window[this.Id].Talk(this.Id + "_OnMouseUp");
                    } catch(e) {}
                }
            }
            document.getElementById(this.Id).onmouseout = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseOut"].apply(this);
                    } catch(e) {}
                    try { // Capturar error si se trata de uno de los Label de las funciones de escritorio que incorpora esta librería, pues no puede llamarse a sus métodos.
                        window[this.Id].Talk(this.Id + "_OnMouseOut");
                    } catch(e) {}
                }
            }
            document.getElementById(this.Id).onkeydown = (evt) => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnKeyDown"].call(this,evt);
                    } catch(e) {}
                    try { // Capturar error si se trata de uno de los Label de las funciones de escritorio que incorpora esta librería, pues no puede llamarse a sus métodos.
                        window[this.Id].Talk(this.Id + "_OnKeyDown");
                    } catch(e) {}
                }
            }
            document.getElementById(this.Id).onkeypress = (evt) => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnKeyPress"].call(this,evt);
                    } catch(e) {}
                    try { // Capturar error si se trata de uno de los Label de las funciones de escritorio que incorpora esta librería, pues no puede llamarse a sus métodos.
                        window[this.Id].Talk(this.Id + "_OnKeyPress");
                    } catch(e) {}
                }
            }
            document.getElementById(this.Id).onkeyup = (evt) => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnKeyUp"].call(this,evt);
                    } catch(e) {}
                    try { // Capturar error si se trata de uno de los Label de las funciones de escritorio que incorpora esta librería, pues no puede llamarse a sus métodos.
                        window[this.Id].Talk(this.Id + "_OnKeyUp");
                    } catch(e) {}
                }
            }
            document.getElementById(this.Id).onblur = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnBlur"].apply(this);
                    } catch(e) {}
                    try { // Capturar error si se trata de uno de los Label de las funciones de escritorio que incorpora esta librería, pues no puede llamarse a sus métodos.
                        window[this.Id].Talk(this.Id + "_OnBlur");
                    } catch(e) {}
                }
            }
        }

        private Display() {
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                document.getElementById(this.Id).style.removeProperty("display");
            } else {
                document.getElementById(this.Id).style.setProperty("display", "none");
            }
        }

        public static GetIdsStack() { //Retorna los id de todos los objetos Label creados.
            return Label.idsStack;
        }

        public GetId() {
            return this.Id;
        }

        public GetMetaObject() {
            return this.MetaObject;
        }

        private RedrawObject() {
            if (this.Link) {
                if (this.Enabled) {
                    this.SetLinkColor(this.GetLinkColor());
                    this.SetBackColor(this.GetBackColor());
                    document.getElementById(this.Id).style.cursor = "pointer";
                } else {
                    this.SetDisabledColor(this.GetDisabledColor());
                    this.SetBackColor(this.GetBackColor());
                    document.getElementById(this.Id).style.cursor = "default";
                }
            } else {
                this.SetColor(this.GetColor());
                this.SetBackColor(this.GetBackColor());
            }
        }

        public SetCrossZ(crossZ: boolean) {
            this.CrossZ = crossZ;
            let x: number = this.GetX();
            let y: number = this.GetY();
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,crossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetCrossZ() {
            return this.CrossZ;
        }

        public Raise() {
            this.Raised = true;

            document.getElementById(this.Id).style.setProperty("position", "fixed");
        }

        public Unraise() {
            this.Raised = false;

            document.getElementById(this.Id).style.setProperty("position", "absolute");
        }

        public GetRaised() {
            return this.Raised;
        }

        public SetX(x: number) {
            let X: number = x;
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolx = String(x);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                x -= Table.GetViewFinderX();
                document.getElementById(this.Id).style.left = String(x) + "px";
            }

            this.Display();
        }

        public GetX() {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        }

        public SetY(y: number) {
            let Y: number = y;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitooly = String(y);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetY() {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        }

        public SetZ(z: number) {
            let Z: number = z;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolz = String(z);
            this.Display();
        }

        public GetZ() {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        }

        public SetXYZ(x: number, y: number, z: number) {
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById(this.Id).dataset.scitoolz = String(z);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(x,y,z,Width,Height,CrossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public SetWidth(width: number) { // Solo recibe números. Si se desea que el ancho sea automático, se debe usar SetTypeWidth(Const.FixedWidth).
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
            this.TypeWidth = Const.FixedWidth;
        }

        public GetWidth() {
            return Number(document.getElementById(this.Id).dataset.scitoolwidth);
        }

        public GetPixelsLength() {
            let visible: boolean;
            let width: string;
            let styleWidth: string;

            // Hacer visible temporalmente al nodo a copiar si es que está oculto.
            if (document.getElementById(this.Id).style.display === "none") {
                visible = false;
                document.getElementById(this.Id).style.removeProperty("display");
            } else {
                visible = true;
            }

            width = document.getElementById(this.Id).dataset.scitoolwidth;
            styleWidth = document.getElementById(this.Id).style.width
            document.getElementById(this.Id).style.width = "auto";

            let anchoEnPixeles = Math.ceil(document.getElementById(this.Id).offsetWidth) + 1;

            // Restaurar visibilidad y ancho del nodo copiado.
            if (!visible) {
                document.getElementById(this.Id).style.setProperty("display", "none");
            }
            if (styleWidth !== "auto") {
                document.getElementById(this.Id).dataset.scitoolwidth = width;
                document.getElementById(this.Id).style.width = width + "px";
            } else {
                document.getElementById(this.Id).dataset.scitoolwidth = width;
                document.getElementById(this.Id).style.width = "auto";
            }

            return anchoEnPixeles;
        }

        public SetTypeWidth(typeWidth: string) {
            this.TypeWidth = typeWidth;

            if (typeWidth === Const.AutomaticWidth) {
                document.getElementById(this.Id).dataset.scitoolwidth = document.getElementById(this.Id).GetPixelsLength();
                document.getElementById(this.Id).style.width = String(document.getElementById(this.Id).GetPixelsLength()) + "px";
            }
        }

        public GetTypeWidth() {
            return this.TypeWidth;
        }

        public SetHeight(height: number) {
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        }

        public GetHeight() {
            return Number(document.getElementById(this.Id).dataset.scitoolheight);
        }

        public SetDimensions(width: number, height: number) {
            this.SetWidth(width);
            this.SetHeight(height);
        }

        public SetSize(size: string) {
            switch (size) {
                case Const.ExtraLargeButtonSize:
                    this.SetDimensions(Const.ExtraLargeButtonWidth, Const.ExtraLargeButtonHeight)
                    break

                case Const.LargeButtonSize:
                    this.SetDimensions(Const.LargeButtonWidth, Const.LargeButtonHeight)
                    break

                case Const.DefaultButtonSize:
                    this.SetDimensions(Const.DefaultButtonWidth, Const.DefaultButtonHeight)
                    break

                case Const.SmallButtonSize:
                    this.SetDimensions(Const.SmallButtonWidth, Const.SmallButtonHeight)
                    break

                case Const.ExtraSmallButtonSize:
                    this.SetDimensions(Const.ExtraSmallButtonWidth, Const.ExtraSmallButtonHeight)
                    break
            }
        }

        public GetInViewFinder() {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        }

        public SetCaption(caption: string) {
            this.Caption = caption;

            document.getElementById(this.Id).innerText = caption;

            if (this.TypeWidth === Const.AutomaticWidth) {
                document.getElementById(this.Id).style.width = "auto";

                let anchoEnPixeles: string = window[this.Id].GetPixelsLength();

                document.getElementById(this.Id).dataset.scitoolwidth = anchoEnPixeles;
                document.getElementById(this.Id).style.width = anchoEnPixeles + "px";
            }
        }

        public GetCaption() {
            return this.Caption;
        }

        public SetVisible(visible: boolean) {
            this.Visible = visible;

            if (visible === true) {
                document.getElementById(this.Id).style.visibility = 'visible';
            } else {
                document.getElementById(this.Id).style.visibility = 'hidden';
            }
        }

        public GetVisible() {
            return this.Visible;
        }

        public SetLink(valor: boolean) {
            this.Link = valor;

            if (!valor) {
                this.LinkTo = null;
            }
            this.RedrawObject();
        }

        public GetLink() {
            return this.Link;
        }

        public SetLinkTo(destination: string) {
            this.LinkTo = destination;
            this.Link = true;
            this.RedrawObject();
        }

        public GetLinkTo() {
            return this.LinkTo;
        }

        public RestoreLinkTo() {
            this.LinkTo = null;
            this.RedrawObject();
        }

        public SetColor(color: string) {
            this.Color = color;
            if (!this.Link) {
                document.getElementById(this.Id).style.color = color;
            }
        }

        public GetColor() {
            return this.Color;
        }

        public SetBackColor(backColor: string) {
            this.BackColor = backColor;
            document.getElementById(this.Id).style.backgroundColor = backColor;
        }

        public GetBackColor() {
            return this.BackColor;
        }

        public SetLinkColor(linkColor: string) {
            this.LinkColor = linkColor;

            if (this.Link && this.Enabled) {
                document.getElementById(this.Id).style.color = linkColor;
            }
        }

        public GetLinkColor() {
            return this.LinkColor;
        }

        public SetDisabledColor(color: string) {
            this.DisabledColor = color;

            if (this.Link && !this.Enabled) {
                document.getElementById(this.Id).style.color = color;
            }
        }

        public GetDisabledColor() {
            return this.DisabledColor;
        }

        public SetTabIndex(tabIndex: number) {
            this.TabIndex = tabIndex;

            document.getElementById(this.Id).tabIndex = tabIndex;
        }

        public GetTabIndex() {
            return this.TabIndex;
        }

        public RestoreTabIndex() {
            this.SetTabIndex(-1);
        }

        public SetZIndex(zIndex: string) {
            this.ZIndex = zIndex;
            document.getElementById(this.Id).style.zIndex = zIndex;
        }

        public GetZIndex() {
            return this.ZIndex;
        }

        public RestoreZIndex() {
            this.SetZIndex("auto");
        }

        public SetFor(forElement: string) {
            this.For = forElement;

            document.getElementById(this.Id).setAttribute("for", forElement);
        }

        public GetFor() {
            return this.For;
        }

        public RestoreFor() {
            this.For = null;
            document.getElementById(this.Id).removeAttribute("for");
        }

        public SetAccessKey(accesskey: string) {
            let expresionRegular = new RegExp("^([a-zA-Z]){1}$");
            let caracter: string = "";

            if (expresionRegular.test(accesskey)) {
                this.AccessKey = accesskey;

                document.getElementById(this.Id).accessKey = accesskey;

                if (this.Caption.indexOf(accesskey.toUpperCase()) >= 0 && this.Caption.indexOf(accesskey.toLowerCase()) >= 0) {
                    if (this.Caption.indexOf(accesskey.toUpperCase()) < this.Caption.indexOf(accesskey.toLowerCase())) {
                        caracter = accesskey.toUpperCase();
                    } else {
                        caracter = accesskey.toLowerCase();
                    }
                } else {
                    if (this.Caption.indexOf(accesskey.toUpperCase()) >= 0) {
                        caracter = accesskey.toUpperCase();
                    }
                    if (this.Caption.indexOf(accesskey.toLowerCase()) >= 0) {
                        caracter = accesskey.toLowerCase();
                    }
                }
                if (caracter != "") {
                    document.getElementById(this.Id).innerHTML = this.GetCaption().replace(caracter, "<span style='text-decoration: underline;'>"+caracter+"</span>");
                }
            }
        }

        public GetAccessKey() {
            return this.AccessKey;
        }

        public RestoreAccessKey() {
            this.AccessKey = null;
            document.getElementById(this.Id).removeAttribute("accessKey");
            this.SetCaption(this.GetCaption()); //Quitar caracter accessKey subrayado del Caption del label (SetCaption fija el caption con innerText en lugar de innerHTML del método SetAccessKey, donde se subraya el caracter accessKey).
        }

        public SetFontSize(fontSize: number) {
            this.FontSize = fontSize;
            document.getElementById(this.Id).style.fontSize = String(fontSize) + "px";

            this.SetHeight(fontSize + Label.topBottomMargin);

            if (this.TypeWidth === Const.AutomaticWidth && document.getElementById(this.Id).style.width !== "auto") { // Un Label es "auto" cuando se crea, antes de que SciTool le fije el ancho según su contenido cuando ya se agregó al DOM.
                this.SetWidth(this.GetPixelsLength());
            }
        }

        public GetFontSize() {
            return this.FontSize;
        }

        public SetFontFamily(fontFamily: string) {
            this.FontFamily = fontFamily;
            document.getElementById(this.Id).style.fontFamily = fontFamily;

            if (this.TypeWidth === Const.AutomaticWidth && document.getElementById(this.Id).style.width !== "auto") { // Un Label es "auto" cuando se crea, antes de que SciTool le fije el ancho según su contenido cuando ya se agregó al DOM.
                this.SetWidth(this.GetPixelsLength());
            }
        }

        public GetFontFamily() {
            return this.FontFamily;
        }

        public SetEnabled(enabled: boolean) {
            this.Enabled = enabled;
            if (this.Link) {
                if (enabled) {
                    document.getElementById(this.Id).removeAttribute("disabled");
                } else {
                    document.getElementById(this.Id).setAttribute("disabled", "disabled");
                }
            }
            this.RedrawObject();
        }

        public GetEnabled() {
            return this.Enabled;
        }

        public SetFocus() {
            document.getElementById(this.Id).focus();
        }

        public Talk(message: string, metaMessage: any = "") {
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    } catch(e) {}
                }
            }
            for (let idMetaobjeto of MetaObject.GetIdsStack()) {
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                } catch(e) {}
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
        }
    }

    export class TextBox {
        private Id: string;
        private Caption: string;
        private Visible: boolean;
        private Color: string;
        private BackColor: string;
        private DisabledColor: string;
        private TabIndex: number;
        private ZIndex: string;
        private Name: string;
        private Password: boolean;
        private ReadOnly: boolean;
        private Enabled: boolean;
        private InputType: string;
        private Lines: number;
        private Cols: number;
        private RegularExpression: string;
        private RegularExpressionModifiers: string;
        private Needed: boolean;
        private Ready: boolean;
        private MinLength: number;
        private MinNumber: number;
        private MinDate: string;
        private MinTime: string;
        private MaxLength: number;
        private MaxNumber: number;
        private MaxDate: string;
        private MaxTime: string;
        private FontSize: number;
        private FontFamily: string;
        private CrossZ: boolean;
        private MetaObject: string;

        public static NumberOfUnnamedObjects: number = 0;
        private static idsStack: string[] = [];

        constructor(metaObject: string, x: number = 0, y: number = 0, z: number = 0, caption: string = "", id: string) {
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
            } else {
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
            this.MinTime = null
            this.MinDate = null;
            this.MaxLength = null;
            this.MaxNumber = null;
            this.MaxDate = null;
            this.MaxTime = null;

            //Crear nodo.
            let nodoNuevo = document.createElement("INPUT");
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

            document.getElementById(this.Id).onclick = () => {
                ////////Activar eventual documento padre de este objeto.
                //Buscar metaobjeto de este objeto.
                let datosObjeto = MetaObject_private.GetObjectsMap().filter((objeto) => {
                    if (objeto["ObjectId"] === this.Id) {
                        return objeto;
                    }
                });

                //Verificar si el metaobjeto es un documento.
                let datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter((objeto) => {
                    if (objeto["ObjectId"] === datosObjeto[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                        return objeto;
                    }
                });
                if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();

                    try {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(this);
                    } catch(e) {}
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                }
                ////////

                try {
                    window[this.Id + "_OnClick"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnClick");
            }
            document.getElementById(this.Id).ondblclick = () => {
                try {
                    window[this.Id + "_OnDblClick"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnDblClick");
            }
            document.getElementById(this.Id).onfocus = () => {
                try {
                    window[this.Id + "_OnFocus"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnFocus");
            }
            document.getElementById(this.Id).onchange = () => {
                try {
                    window[this.Id + "_OnChange"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnChange");
            }
            document.getElementById(this.Id).onmouseover = () => {
                try {
                    window[this.Id + "_OnMouseOver"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseOver");
            }
            document.getElementById(this.Id).onmousemove = () => {
                try {
                    window[this.Id + "_OnMouseMove"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseMove");
            }
            document.getElementById(this.Id).onmousedown = () => {
                try {
                    window[this.Id + "_OnMouseDown"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseDown");
            }
            document.getElementById(this.Id).onmouseup = () => {
                try {
                    window[this.Id + "_OnMouseUp"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseUp");
            }
            document.getElementById(this.Id).onmouseout = () => {
                try {
                    window[this.Id + "_OnMouseOut"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseOut");
            }
            document.getElementById(this.Id).onkeydown = (evt) => {
                try {
                    window[this.Id + "_OnKeyDown"].call(this,evt);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnKeyDown");
            }
            document.getElementById(this.Id).onkeypress = (evt) => {
                try {
                    window[this.Id + "_OnKeyPress"].call(this,evt);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnKeyPress");
            }
            document.getElementById(this.Id).onkeyup = (evt) => {
                try {
                    window[this.Id + "_OnKeyUp"].call(this,evt);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnKeyUp");
            }
            document.getElementById(this.Id).onselect = () => {
                try {
                    window[this.Id + "_OnSelect"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnSelect");
            }
            document.getElementById(this.Id).onblur = () => {
                this.ValidarTextBox();

                try {
                    window[this.Id + "_OnBlur"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnBlur");
            }
        }

        private Display() {
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                document.getElementById(this.Id).style.removeProperty("display");
            } else {
                document.getElementById(this.Id).style.setProperty("display", "none");
            }
        }

        public static GetIdsStack() { //Retorna los id de todos los objetos TextBox creados.
            return TextBox.idsStack;
        }

        public GetId() {
            return this.Id;
        }

        public GetMetaObject() {
            return this.MetaObject;
        }

        private RedrawObject() {
            if (this.Enabled) {
                this.SetColor(this.GetColor());
                this.SetBackColor(this.GetBackColor());
                this.SetReady(this.GetReady());
            } else {
                this.SetDisabledColor(this.GetDisabledColor());
                this.SetBackColor(this.GetBackColor());
                this.SetReady(this.GetReady());
            }
        }

        public SetCrossZ(crossZ: boolean) {
            this.CrossZ = crossZ;
            let x: number = this.GetX();
            let y: number = this.GetY();
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,crossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetCrossZ() {
            return this.CrossZ;
        }

        public SetX(x: number) {
            let X: number = x;
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolx = String(x);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                x -= Table.GetViewFinderX();
                document.getElementById(this.Id).style.left = String(x) + "px";
            }

            this.Display();
        }

        public GetX() {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        }

        public SetY(y: number) {
            let Y: number = y;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitooly = String(y);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetY() {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        }

        public SetZ(z: number) {
            let Z: number = z;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolz = String(z);
            this.Display();
        }

        public GetZ() {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        }

        public SetXYZ(x: number, y: number, z: number) {
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById(this.Id).dataset.scitoolz = String(z);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(x,y,z,Width,Height,CrossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public SetWidth(width: number) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
        }

        public GetWidth() {
            return Number(document.getElementById(this.Id).dataset.scitoolwidth);
        }

        public SetHeight(height: number) {
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        }

        public GetHeight() {
            return Number(document.getElementById(this.Id).dataset.scitoolheight);
        }

        public SetDimensions(width: number, height: number) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        }

        public GetInViewFinder() {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        }

        public SetCaption(caption: string) {
            this.Caption = caption;

            document.getElementById(this.Id).setAttribute("placeholder", caption);
        }

        public GetCaption() {
            return this.Caption;
        }

        public SetFontSize(fontSize: number) {
            this.FontSize = fontSize;
            document.getElementById(this.Id).style.fontSize = String(fontSize) + "px";
        }

        public GetFontSize() {
            return this.FontSize;
        }

        public SetFontFamily(fontFamily: string) {
            this.FontFamily = fontFamily;
            document.getElementById(this.Id).style.fontFamily = fontFamily;
        }

        public GetFontFamily() {
            return this.FontFamily;
        }

        public SetVisible(visible: boolean) {
            this.Visible = visible;

            if (visible === true) {
                document.getElementById(this.Id).style.visibility = 'visible';
            } else {
                document.getElementById(this.Id).style.visibility = 'hidden';
            }
        }

        public GetVisible() {
            return this.Visible;
        }

        public SetColor(color: string) {
            this.Color = color;
            if (this.Enabled) {
                document.getElementById(this.Id).style.color = color;
            }
        }

        public GetColor() {
            return this.Color;
        }

        public SetBackColor(backColor: string) {
            this.BackColor = backColor;
            if (this.Enabled) {
                document.getElementById(this.Id).style.backgroundColor = backColor;
            }
        }

        public GetBackColor() {
            return this.BackColor;
        }

        public SetDisabledColor(color: string) {
            this.DisabledColor = color;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.color = color;
            }
        }

        public GetDisabledColor() {
            return this.DisabledColor;
        }

        public SetTabIndex(tabIndex: number) {
            this.TabIndex = tabIndex;

            document.getElementById(this.Id).tabIndex = tabIndex;
        }

        public GetTabIndex() {
            return this.TabIndex;
        }

        public RestoreTabIndex() {
            this.SetTabIndex(0);
        }

        public SetZIndex(zIndex: string) {
            this.ZIndex = zIndex;
            document.getElementById(this.Id).style.zIndex = zIndex;
        }

        public GetZIndex() {
            return this.ZIndex;
        }

        public RestoreZIndex() {
            this.SetZIndex("auto");
        }

        public SetValue(value: string) {
            (<HTMLInputElement>document.getElementById(this.Id)).value = value;
            this.ValidarTextBox();
        }

        public GetValue() {
            return (<HTMLInputElement>document.getElementById(this.Id)).value;
        }

        public SetName(name: string) {
            this.Name = name;
            document.getElementById(this.Id).setAttribute("name", name);
        }

        public GetName() {
            return this.Name;
        }

        public SetPassword(password: boolean) {
            this.Password = password;
            if (this.Lines == 1) { //Atributo "type" siguiente tiene efecto solo si el TextBox es equivalente a un Input HTML.
                if (password === true) {
                    document.getElementById(this.Id).setAttribute("type", "password");
                } else {
                    document.getElementById(this.Id).setAttribute("type", "text");
                }
            }
        }

        public GetPassword() {
            return this.Password;
        }

        public SetMaxLength(maxLength: number) {
            this.MaxLength = maxLength;
            document.getElementById(this.Id).setAttribute("maxlength", String(maxLength));
            this.ValidarTextBox();
        }

        public GetMaxLength() {
            return this.MaxLength;
        }

        public RestoreMaxLength() {
            this.MaxLength = null;
            document.getElementById(this.Id).removeAttribute("maxlength");
            this.ValidarTextBox();
        }

        public SetReadOnly(readOnly: boolean) {
            this.ReadOnly = readOnly;
            if (readOnly === true) {
                document.getElementById(this.Id).setAttribute("readOnly", "readonly");
            } else {
                document.getElementById(this.Id).removeAttribute("readOnly");
            }
        }

        public GetReadOnly() {
            return this.ReadOnly;
        }

        public SetEnabled(enabled: boolean) {
            this.Enabled = enabled;
            if (enabled) {
                document.getElementById(this.Id).removeAttribute("disabled");
            } else {
                document.getElementById(this.Id).setAttribute("disabled", "disabled");
            }
            this.RedrawObject();
        }

        public GetEnabled() {
            return this.Enabled;
        }

        public SetInputType(inputType: string) {
            //Este método define una expresión regular de caracteres y formato aceptado por el TextBox,
            //especificada por el valor del parámetro, que solo puede ser uno de los de la constante
            //InputType.
            //Las expresiones regulares se definen con límites de ocurrencias según el valor de
            // la propiedad MaxLenght, si es que estuviera definida.

            let listaInputType: string[] = [
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
        }

        public GetInputType() {
            return this.InputType;
        }

        public RestoreInputType() {
            this.InputType = null;
            this.RegularExpression = null;
            this.RegularExpressionModifiers = null;

            this.ValidarTextBox();
        }

        public SetLines(lines: number) {
            //Guardar algunos valores del Textbox antes que se elimine el nodo.
            let tempValue: string = this.GetValue();
            let tempX: number = this.GetX();
            let tempY: number = this.GetY();
            let tempZ: number = this.GetZ();
            let tempWidth: number = this.GetWidth();

            //Eliminar el nodo actual y crear nuevamente un nodo de tipo Input o TextArea, según si lines=1 o lines>1.
            let nodoActual = document.getElementById(this.Id);
            let nodoPadre = nodoActual.parentNode;
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

            document.getElementById(this.Id).onclick = () => {
                try {
                    window[this.Id + "_OnClick"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnClick");
            }
            document.getElementById(this.Id).ondblclick = () => {
                try {
                    window[this.Id + "_OnDblClick"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnDblClick");
            }
            document.getElementById(this.Id).onfocus = () => {
                try {
                    window[this.Id + "_OnFocus"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnFocus");
            }
            document.getElementById(this.Id).onchange = () => {
                try {
                    window[this.Id + "_OnChange"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnChange");
            }
            document.getElementById(this.Id).onmouseover = () => {
                try {
                    window[this.Id + "_OnMouseOver"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseOver");
            }
            document.getElementById(this.Id).onmousemove = () => {
                try {
                    window[this.Id + "_OnMouseMove"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseMove");
            }
            document.getElementById(this.Id).onmousedown = () => {
                try {
                    window[this.Id + "_OnMouseDown"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseDown");
            }
            document.getElementById(this.Id).onmouseup = () => {
                try {
                    window[this.Id + "_OnMouseUp"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseUp");
            }
            document.getElementById(this.Id).onmouseout = () => {
                try {
                    window[this.Id + "_OnMouseOut"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseOut");
            }
            document.getElementById(this.Id).onkeydown = (evt) => {
                try {
                    window[this.Id + "_OnKeyDown"].call(this,evt);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnKeyDown");
            }
            document.getElementById(this.Id).onkeypress = (evt) => {
                try {
                    window[this.Id + "_OnKeyPress"].call(this,evt);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnKeyPress");
            }
            document.getElementById(this.Id).onkeyup = (evt) => {
                try {
                    window[this.Id + "_OnKeyUp"].call(this,evt);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnKeyUp");
            }
            document.getElementById(this.Id).onselect = () => {
                try {
                    window[this.Id + "_OnSelect"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnSelect");
            }
            document.getElementById(this.Id).onblur = () => {
                this.ValidarTextBox();

                try {
                    window[this.Id + "_OnBlur"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnBlur");
            }
        }

        public GetLines() {
            return this.Lines;
        }

        public SetCols(cols: number) {
            this.Cols = cols;

            if (this.Lines > 1) { //Propiedad "cols" tiene efecto solo si el TextBox es equivalente a un Textarea HTML.
                document.getElementById(this.Id).setAttribute("cols", String(cols));
            }
        }

        public GetCols() {
            return this.Cols;
        }

        public SetRegularExpression(regularExpression: string, modifiers: string = "g") {
            this.RegularExpression = regularExpression;
            this.RegularExpressionModifiers = modifiers;
        }

        public GetRegularExpression() {
            return this.RegularExpression;
        }

        public GetRegularExpressionModifiers() {
            return this.RegularExpressionModifiers;
        }

        public SetNeeded(needed: boolean) {
            this.Needed = needed;
            this.ValidarTextBox();
        }

        public GetNeeded() {
            return this.Needed;
        }

        private SetReady(ready: boolean) {
            this.Ready = ready;

            if (this.Enabled) {
                if (this.Ready) {
                    document.getElementById(this.Id).style.borderColor = Skin.GetTextBoxReadyColor();
                } else {
                    document.getElementById(this.Id).style.borderColor = Skin.GetTextBoxNotReadyColor();
                }
            } else {
                document.getElementById(this.Id).style.borderColor = Skin.GetTextBoxDisabledFlagColor();
            }
        }

        public GetReady() {
            return this.Ready;
        }

        public SetMinLength(minLength: number) {
            this.MinLength = minLength;
            this.ValidarTextBox();
        }

        public GetMinLenght() {
            return this.MinLength;
        }

        public RestoreMinLength() {
            this.MinLength = null;
            this.ValidarTextBox();
        }

        public SetMinNumber(minNumber: number) {
            this.MinNumber = minNumber;
            this.ValidarTextBox();
        }

        public GetMinNumber() {
            return this.MinNumber;
        }

        public RestoreMinNumber() {
            this.MinNumber = null;
            this.ValidarTextBox();
        }

        public SetMinTime(minTime: string) {
            this.MinTime = minTime;
            this.ValidarTextBox();
        }

        public GetMinTime() {
            return this.MinTime;
        }

        public RestoreMinTime() {
            this.MinTime = null;
            this.ValidarTextBox();
        }

        public SetMinDate(minDate: string) {
            this.MinDate = minDate;
            if (minDate = "") {
                this.MinDate = null;
            }
            this.ValidarTextBox();
        }

        public GetMinDate() {
            return this.MinDate;
        }

        public RestoreMinDate() {
            this.MinDate = null;
            this.ValidarTextBox();
        }

        public SetMaxNumber(maxNumber: number) {
            this.MaxNumber = maxNumber;
            this.ValidarTextBox();
        }

        public GetMaxNumber() {
            return this.MaxNumber;
        }

        public RestoreMaxNumber() {
            this.MaxNumber = null;
            this.ValidarTextBox();
        }

        public SetMaxDate(maxDate: string) {
            this.MaxDate = maxDate;
            this.ValidarTextBox();
        }

        public GetMaxDate() {
            return this.MaxDate;
        }

        public RestoreMaxDate() {
            this.MaxDate = null;
            this.ValidarTextBox();
        }

        public SetMaxTime(maxTime: string) {
            this.MaxTime = maxTime;
            this.ValidarTextBox();
        }

        public GetMaxTime() {
            return this.MaxTime;
        }

        public RestoreMaxTime() {
            this.MaxTime = null;
            this.ValidarTextBox();
        }

        public SetFocus() {
            document.getElementById(this.Id).focus();
        }

        private ValidarTextBox() {
            if (this.GetValue().replace(/ /g, "") == "") {
                (<HTMLInputElement>document.getElementById(this.Id)).value = this.GetValue().replace(/ /g, ""); //Entradas que son solo espacios se inicializan a una cadena vacía.

                if (this.Needed) {
                    this.SetReady(false);
                } else {
                    this.SetReady(true);
                }
            } else {
                if ((this.MinLength != null && this.GetValue().length < this.MinLength) || (this.MaxLength != null && this.GetValue().length > this.MaxLength)) {
                    this.SetReady(false);
                } else {
                    if (this.InputType != null) {
                        let expresionRegular;
                        let limiteInferior: string = "1";
                        let limiteSuperior: string = "";
                        if (this.MinLength != null) {
                            limiteInferior = String(this.MinLength);
                        }
                        if (this.MaxLength != null) {
                            limiteSuperior = String(this.MaxLength);
                        }
                        switch (this.InputType) {
                            case Const.TaxIdCl:
                                expresionRegular = new RegExp("^([0-9]{1,2})[\.]{0,1}[0-9]{3}[\.]{0,1}[0-9]{3}[\-]{0,1}[0-9kK]{1}$");
                                break;
                            case Const.WordEs:
                                expresionRegular = new RegExp("^([a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]){" + limiteInferior + "," + limiteSuperior + "}$");
                                break;
                            case Const.WordsEs:
                                expresionRegular = new RegExp("^([a-zA-ZáéíóúüñÁÉÍÓÚÜÑ ]){" + limiteInferior + "," + limiteSuperior + "}$");
                                break;
                            case Const.WordEn:
                                expresionRegular = new RegExp("^([a-zA-Z]){" + limiteInferior + "," + limiteSuperior + "}$");
                                break;
                            case Const.WordsEn:
                                expresionRegular = new RegExp("^([a-zA-Z ]){" + limiteInferior + "," + limiteSuperior + "}$");
                                break;
                            case Const.Text:
                                expresionRegular = new RegExp('^([a-zA-ZáéíóúñÁÉÍÓÚÑ 0-9äëïöüÄËÏÖÜàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛ\\.\\s,:;@¿?¡!=ªº\\|"#·$%&/€^`+-¨´(){}çÇ_–\'\\*∞¬÷“”≠œæ®†¥øπå∫∂ƒ™¶≤Ω∑©√µß„…]){' + limiteInferior + ',' + limiteSuperior + '}$');
                                break;
                            case Const.Email:
                                expresionRegular = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
                                break;
                            case Const.DDMMYYYY:
                                expresionRegular = new RegExp("^((0[1-9])|(1[0-9])|(2[0-9])|(3[0-1]))[\\/\\-\\. ]((0[1-9])|(1[0-2]))[\\/\\-\\. ]([0-9]{4})$");
                                break;
                            case Const.Time:
                                expresionRegular = new RegExp("^([01]?[0-9]|2[0-3])[\\.:][0-5][0-9]$");
                                break;
                            case Const.YesNo:
                                expresionRegular = new RegExp("^(Yes|No|YES|NO|yes|no|y|n|Y|N)$");
                                break;
                            case Const.Boolean:
                                expresionRegular = new RegExp("^(True|False|TRUE|FALSE|true|false|t|f|T|F)$");
                                break;
                            case Const.WordNaturalEs:
                                expresionRegular = new RegExp("^([a-zA-ZáéíóúüñÁÉÍÓÚÜÑ0-9]){" + limiteInferior + "," + limiteSuperior + "}$");
                                break;
                            case Const.WordsNaturalEs:
                                expresionRegular = new RegExp("^([a-zA-ZáéíóúüñÁÉÍÓÚÜÑ0-9 ]){" + limiteInferior + "," + limiteSuperior + "}$");
                                break;
                            case Const.WordNaturalEn:
                                expresionRegular = new RegExp("^([a-zA-Z0-9]){" + limiteInferior + "," + limiteSuperior + "}$");
                                break;
                            case Const.WordsNaturalEn:
                                expresionRegular = new RegExp("^([a-zA-Z0-9 ]){" + limiteInferior + "," + limiteSuperior + "}$");
                                break;
                            case Const.ColorHex:
                                expresionRegular = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
                                break;
                            case Const.RegularExpression:
                                if (this.RegularExpression != null && this.RegularExpressionModifiers != null) {
                                    expresionRegular = new RegExp(this.RegularExpression, this.RegularExpressionModifiers);
                                }
                                break;
                        }

                        if (
                            this.InputType == Const.Text
                            || this.InputType == Const.WordEs
                            || this.InputType == Const.WordsEs
                            || this.InputType == Const.WordEn
                            || this.InputType == Const.WordsEn
                            || this.InputType == Const.Email
                            || this.InputType == Const.YesNo
                            || this.InputType == Const.Boolean
                            || this.InputType == Const.WordNaturalEs
                            || this.InputType == Const.WordsNaturalEs
                            || this.InputType == Const.WordNaturalEn
                            || this.InputType == Const.WordsNaturalEn
                            || this.InputType == Const.ColorHex
                            || (this.InputType == Const.RegularExpression && this.RegularExpression != null && this.RegularExpressionModifiers != null)
                        ) {
                            this.SetReady(expresionRegular.test(this.GetValue()));
                        } else {
                            if (this.InputType == Const.TaxIdCl) {
                                if (expresionRegular.test(this.GetValue())) {
                                    let taxIdCl: string = this.GetValue();

                                    taxIdCl = taxIdCl.replace(/\./g, "");
                                    taxIdCl = taxIdCl.replace(/-/g, "");
                                    taxIdCl = taxIdCl.replace(/k/g, "K");

                                    let numero: number = Number(taxIdCl.substr(0, taxIdCl.length - 1));
                                    let digitoVerificador: string = taxIdCl.substr(taxIdCl.length - 1, taxIdCl.length);

                                    //Calcular dígito verificador.
                                    let M=0,S=1;
                                    let digitoVerificadorCalculado: any;

                                    for (;numero;numero=Math.floor(numero/10))
                                       S=(S+numero%10*(9-M++%6))%11;

                                    digitoVerificadorCalculado = S?S-1:'K';

                                    if (digitoVerificador == digitoVerificadorCalculado) {
                                        this.SetReady(true);
                                    } else {
                                        this.SetReady(false);
                                    }
                                } else {
                                    this.SetReady(false);
                                }
                            }
                            if (this.InputType == Const.NaturalNumber) {
                                if (isNaN(Number(this.GetValue()))) {
                                    this.SetReady(false);
                                } else {
                                    if (Number(this.GetValue()) >= 0) {
                                        if (Number(this.GetValue()) % 1 == 0) {
                                            if (this.MinNumber == null && this.MaxNumber == null) {
                                                this.SetReady(true);
                                            } else {
                                                if (this.MinNumber != null && this.MaxNumber != null) {
                                                    if (Number(this.GetValue()) >= this.MinNumber
                                                        && Number(this.GetValue()) <= this.MaxNumber) {
                                                        this.SetReady(true);
                                                    } else {
                                                        this.SetReady(false);
                                                    }
                                                } else {
                                                    if (this.MinNumber != null) {
                                                        if (Number(this.GetValue()) >= this.MinNumber) {
                                                            this.SetReady(true);
                                                        } else {
                                                            this.SetReady(false);
                                                        }
                                                    }
                                                    if (this.MaxNumber != null) {
                                                        if (Number(this.GetValue()) <= this.MaxNumber) {
                                                            this.SetReady(true);
                                                        } else {
                                                            this.SetReady(false);
                                                        }
                                                    }
                                                }
                                            }
                                        } else {
                                            this.SetReady(false);
                                        }
                                    } else {
                                        this.SetReady(false);
                                    }
                                }
                            }
                            if (this.InputType == Const.IntegerNumber) {
                                if (isNaN(Number(this.GetValue()))) {
                                    this.SetReady(false);
                                } else {
                                    if (Number(this.GetValue()) % 1 == 0) {
                                        if (this.MinNumber == null && this.MaxNumber == null) {
                                            this.SetReady(true);
                                        } else {
                                            if (this.MinNumber != null && this.MaxNumber != null) {
                                                if (Number(this.GetValue()) >= this.MinNumber
                                                    && Number(this.GetValue()) <= this.MaxNumber) {
                                                    this.SetReady(true);
                                                } else {
                                                    this.SetReady(false);
                                                }
                                            } else {
                                                if (this.MinNumber != null) {
                                                    if (Number(this.GetValue()) >= this.MinNumber) {
                                                        this.SetReady(true);
                                                    } else {
                                                        this.SetReady(false);
                                                    }
                                                }
                                                if (this.MaxNumber != null) {
                                                    if (Number(this.GetValue()) <= this.MaxNumber) {
                                                        this.SetReady(true);
                                                    } else {
                                                        this.SetReady(false);
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        this.SetReady(false);
                                    }
                                }
                            }
                            if (this.InputType == Const.RealNumber) {
                                if (isNaN(Number(this.GetValue()))) {
                                    this.SetReady(false);
                                } else {
                                    if (this.MinNumber == null && this.MaxNumber == null) {
                                        this.SetReady(true);
                                    } else {
                                        if (this.MinNumber != null && this.MaxNumber != null) {
                                            if (Number(this.GetValue()) >= this.MinNumber
                                                && Number(this.GetValue()) <= this.MaxNumber) {
                                                this.SetReady(true);
                                            } else {
                                                this.SetReady(false);
                                            }
                                        } else {
                                            if (this.MinNumber != null) {
                                                if (Number(this.GetValue()) >= this.MinNumber) {
                                                    this.SetReady(true);
                                                } else {
                                                    this.SetReady(false);
                                                }
                                            }
                                            if (this.MaxNumber != null) {
                                                if (Number(this.GetValue()) <= this.MaxNumber) {
                                                    this.SetReady(true);
                                                } else {
                                                    this.SetReady(false);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (this.InputType == Const.DDMMYYYY) {
                                if (expresionRegular.test(this.GetValue())) {
                                    let dia: number = Number(this.GetValue().substr(0,2));
                                    let mes: number = Number(this.GetValue().substr(3,2)) - 1;
                                    let ano: number = Number(this.GetValue().substr(6,4));
                                    let fecha;
                                    let fechaMinDate;
                                    let fechaMaxDate;

                                    fecha = new Date(ano, mes, dia);
                                    if (this.MinDate != null) {
                                        let diaMinDate: number = Number(this.GetMinDate().substr(0,2));
                                        let mesMinDate: number = Number(this.GetMinDate().substr(3,2)) - 1;
                                        let anoMinDate: number = Number(this.GetMinDate().substr(6,4));

                                        fechaMinDate = new Date(anoMinDate, mesMinDate, diaMinDate);
                                    }
                                    if (this.MaxDate != null) {
                                        let diaMaxDate: number = Number(this.GetMaxDate().substr(0,2));
                                        let mesMaxDate: number = Number(this.GetMaxDate().substr(3,2)) - 1;
                                        let anoMaxDate: number = Number(this.GetMaxDate().substr(6,4));

                                        fechaMaxDate = new Date(anoMaxDate, mesMaxDate, diaMaxDate);
                                    }
                                    if (dia == fecha.getDate() && mes == fecha.getMonth() && ano == fecha.getFullYear()) {
                                        if (this.MinDate == null && this.MaxDate == null) {
                                                this.SetReady(true);
                                        } else {
                                            if (this.MinDate != null && this.MaxDate != null) {
                                                if (fecha.getTime() >= fechaMinDate.getTime()
                                                    && fecha.getTime() <= fechaMaxDate.getTime()) {
                                                    this.SetReady(true);
                                                } else {
                                                    this.SetReady(false);
                                                }
                                            } else {
                                                if (this.MinDate != null) {
                                                    if (fecha.getTime() >= fechaMinDate.getTime()) {
                                                        this.SetReady(true);
                                                    } else {
                                                        this.SetReady(false);
                                                    }
                                                }
                                                if (this.MaxDate != null) {
                                                    if (fecha.getTime() <= fechaMaxDate.getTime()) {
                                                        this.SetReady(true);
                                                    } else {
                                                        this.SetReady(false);
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        this.SetReady(false);
                                    }
                                } else {
                                    this.SetReady(false);
                                }
                            }
                            if (this.InputType == Const.Time) {
                                if (expresionRegular.test(this.GetValue())) {
                                    if (this.MinTime == null && this.MaxTime == null) {
                                            this.SetReady(true);
                                    } else {
                                        let minutos: number;
                                        let minutosMinTime: number;
                                        let minutosMaxTime: number;

                                        if (this.GetValue().indexOf(":") >= 0) {
                                            minutos = Number(this.GetValue().substr(0, this.GetValue().indexOf(":"))) * 60;
                                            minutos += Number(this.GetValue().substr(this.GetValue().indexOf(":") + 1, 2));
                                        } else {
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
                                            } else {
                                                this.SetReady(false);
                                            }
                                        } else {
                                            if (this.MinTime != null) {
                                                if (minutos >= minutosMinTime) {
                                                    this.SetReady(true);
                                                } else {
                                                    this.SetReady(false);
                                                }
                                            }
                                            if (this.MaxTime != null) {
                                                if (minutos <= minutosMaxTime) {
                                                    this.SetReady(true);
                                                } else {
                                                    this.SetReady(false);
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    this.SetReady(false);
                                }
                            }
                        }
                    } else {
                        this.SetReady(true);
                    }
                }
            }

            //Formatear entradas.
            if (this.InputType == Const.TaxIdCl && this.Ready && this.GetValue().replace(/ /g, "").length > 0) {
                let taxIdCl: string = this.GetValue();

                taxIdCl = taxIdCl.replace(/\./g, "");
                taxIdCl = taxIdCl.replace(/-/g, "");
                taxIdCl = taxIdCl.replace(/k/g, "K");
                let taxIdClFormateado: string = taxIdCl.substr(0, taxIdCl.length - 1);

                taxIdClFormateado = taxIdClFormateado.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
                taxIdClFormateado = taxIdClFormateado.split('').reverse().join('').replace(/^[\.]/,'');

                (<HTMLInputElement>document.getElementById(this.Id)).value = taxIdClFormateado + "-" + taxIdCl.substr(taxIdCl.length - 1, taxIdCl.length);
            }
            if (this.InputType == Const.DDMMYYYY && this.Ready && this.GetValue().replace(/ /g, "").length > 0) {
                let fecha: string = this.GetValue();

                fecha = fecha.replace(/ /g, "-");
                fecha = fecha.replace(/\./g, "-");
                fecha = fecha.replace(/\//g, "-");

                (<HTMLInputElement>document.getElementById(this.Id)).value = fecha;
            }
            if (this.InputType == Const.Time && this.Ready && this.GetValue().replace(/ /g, "").length > 0) {
                let time: string = this.GetValue().replace(/\./g, ":");

                if (time.indexOf(":") == 1) {
                    time = "0" + time;
                }

                (<HTMLInputElement>document.getElementById(this.Id)).value = time;
            }
            if (this.InputType == Const.NaturalNumber && this.Ready && this.GetValue().replace(/ /g, "").length > 0) {
                (<HTMLInputElement>document.getElementById(this.Id)).value = this.GetValue().replace(/ /g, "");
                if (this.GetValue().indexOf(",") >= 0) {
                    (<HTMLInputElement>document.getElementById(this.Id)).value = this.GetValue().substring(0, this.GetValue().indexOf(","));
                }
                if (this.GetValue().indexOf(".") >= 0) {
                    (<HTMLInputElement>document.getElementById(this.Id)).value = this.GetValue().substring(0, this.GetValue().indexOf("."));
                }
            }
            if (this.InputType == Const.IntegerNumber && this.Ready && this.GetValue().replace(/ /g, "").length > 0) {
                (<HTMLInputElement>document.getElementById(this.Id)).value = this.GetValue().replace(/ /g, "");
                if (this.GetValue().indexOf(",") >= 0) {
                    (<HTMLInputElement>document.getElementById(this.Id)).value = this.GetValue().substring(0, this.GetValue().indexOf(","));
                }
                if (this.GetValue().indexOf(".") >= 0) {
                    (<HTMLInputElement>document.getElementById(this.Id)).value = this.GetValue().substring(0, this.GetValue().indexOf("."));
                }
            }
            if (this.InputType == Const.RealNumber && this.Ready && this.GetValue().replace(/ /g, "").length > 0) {
                (<HTMLInputElement>document.getElementById(this.Id)).value = this.GetValue().replace(/ /g, "");
            }
            if (this.InputType == Const.YesNo && this.Ready && this.GetValue().replace(/ /g, "").length > 0) {
                if (this.GetValue().toLowerCase().indexOf("y") >= 0) {
                    (<HTMLInputElement>document.getElementById(this.Id)).value = "y";
                } else {
                    (<HTMLInputElement>document.getElementById(this.Id)).value = "n";
                }
            }
            if (this.InputType == Const.Boolean && this.Ready && this.GetValue().replace(/ /g, "").length > 0) {
                if (this.GetValue().toLowerCase().indexOf("t") >= 0) {
                    (<HTMLInputElement>document.getElementById(this.Id)).value = "t";
                } else {
                    (<HTMLInputElement>document.getElementById(this.Id)).value = "f";
                }
            }
        }

        public Talk(message: string, metaMessage: any = "") {
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    } catch(e) {}
                }
            }
            for (let idMetaobjeto of MetaObject.GetIdsStack()) {
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                } catch(e) {}
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
        }
    }

    export class Button {
        private Id: string;
        private Caption: string;
        private Visible: boolean;
        private Color: string;
        private FromBackColor: string;
        private ToBackColor: string;
        private ColorOnMouseOver: string;
        private FromBackColorOnMouseOver: string;
        private ToBackColorOnMouseOver: string;
        private BorderTopColor: string;
        private BorderRightColor: string;
        private BorderBottomColor: string;
        private BorderLeftColor: string;
        private DisabledColor: string;
        private DisabledFromBackColor: string;
        private DisabledToBackColor: string;
        private TopLeftRadius: number;
        private TopRightRadius: number;
        private BottomLeftRadius: number;
        private BottomRightRadius: number
        private TopBorderWidth: number;
        private RightBorderWidth: number;
        private BottomBorderWidth: number;
        private LeftBorderWidth: number;
        private TabIndex: number;
        private ZIndex: string;
        private Name: string;
        private Enabled: boolean;
        private AccessKey: string;
        private FontSize: number;
        private FontFamily: string;
        private CrossZ: boolean;
        private MetaObject: string;
        private Raised: boolean;
        private Toggle: boolean;
        private Toggled: boolean;

        public static NumberOfUnnamedObjects: number = 0;
        private static idsStack: string[] = [];
        private TempBorderTopColor: string;
        private TempBorderRightColor: string;
        private TempBorderBottomColor: string;
        private TempBorderLeftColor: string;
        private TempBackColor: string;
        private TempColor: string;
        private TempDisabledBackColor: string;

        constructor(metaObject: string, x: number = 0, y: number = 0, z: number = 0, caption: string = "", id: string) {
            this.Id = id;
            Button.idsStack.push(this.Id);
            this.MetaObject = metaObject;
            MetaObject_private.AddDataObject(this.MetaObject, this.Id, ObjectType.Button);
            this.CrossZ = false;
            if (caption.replace(/ /g, "") == "") {
                this.Caption = this.Id;
            } else {
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
            } else {
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
            let nodoNuevo = document.createElement("BUTTON");
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

            document.getElementById(this.Id).onclick = () => {
                ////////Activar eventual documento padre de este objeto.
                //Buscar metaobjeto de este objeto.
                let datosObjeto = MetaObject_private.GetObjectsMap().filter((objeto) => {
                    if (objeto["ObjectId"] === this.Id) {
                        return objeto;
                    }
                });

                //Verificar si el metaobjeto es un documento.
                let datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter((objeto) => {
                    if (objeto["ObjectId"] === datosObjeto[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                        return objeto;
                    }
                });
                if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();

                    try {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(this);
                    } catch(e) {}
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                }
                ////////

                //Verificar si el botón es de tipo Toggle.
                if (this.Toggle) {
                    this.Toggled = !this.Toggled;

                    if (this.Toggled) {
                        this.TempBorderTopColor = this.BorderTopColor;
                        this.TempBorderRightColor = this.BorderRightColor;
                        this.TempBorderBottomColor = this.BorderBottomColor;
                        this.TempBorderLeftColor = this.BorderLeftColor;
                        this.TempBackColor = this.FromBackColor;
                        this.TempColor = this.Color;
                        this.TempDisabledBackColor = this.DisabledFromBackColor;

                        this.SetBorderTopColor('black');
                        this.SetBorderLeftColor('black');
                        this.SetBorderRightColor('rgb(235,235,235)');
                        this.SetBorderBottomColor('rgb(235,235,235)');
                        this.SetBackColor(this.FromBackColorOnMouseOver);
                        this.SetColor(this.ColorOnMouseOver);
                        this.SetDisabledBackColor(this.FromBackColorOnMouseOver);
                    } else {
                        this.SetBorderTopColor(this.TempBorderTopColor);
                        this.SetBorderLeftColor(this.TempBorderLeftColor);
                        this.SetBorderRightColor(this.TempBorderRightColor);
                        this.SetBorderBottomColor(this.TempBorderBottomColor);
                        this.SetBackColor(this.TempBackColor);
                        this.SetColor(this.TempColor);
                        this.SetDisabledBackColor(this.TempDisabledBackColor);
                    }
                }

                try {
                    window[this.Id + "_OnClick"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnClick");
            }
            document.getElementById(this.Id).ondblclick = () => {
                try {
                    window[this.Id + "_OnDblClick"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnDblClick");
            }
            document.getElementById(this.Id).onfocus = () => {
                try {
                    window[this.Id + "_OnFocus"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnFocus");
            }
            document.getElementById(this.Id).onmouseover = () => {
                if (this.Enabled) {
                    document.getElementById(this.Id).style.color = this.GetColorOnMouseOver();
                    document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.GetFromBackColorOnMouseOver() + "), to(" + this.GetToBackColorOnMouseOver() + "))";
                }
                try {
                    window[this.Id + "_OnMouseOver"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseOver");
            }
            document.getElementById(this.Id).onmousemove = () => {
                try {
                    window[this.Id + "_OnMouseMove"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseMove");
            }
            document.getElementById(this.Id).onmousedown = () => {
                try {
                    window[this.Id + "_OnMouseDown"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseDown");
            }
            document.getElementById(this.Id).onmouseup = () => {
                try {
                    window[this.Id + "_OnMouseUp"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseUp");
            }
            document.getElementById(this.Id).onmouseout = () => {
                if (this.Enabled) {
                    document.getElementById(this.Id).style.color = this.GetColor();
                    document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.GetFromBackColor() + "), to(" + this.GetToBackColor() + "))";
                }
                try {
                    window[this.Id + "_OnMouseOut"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseOut");
            }
            document.getElementById(this.Id).onkeydown = (evt) => {
                try {
                    window[this.Id + "_OnKeyDown"].call(this,evt);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnKeyDown");
            }
            document.getElementById(this.Id).onkeypress = (evt) => {
                try {
                    window[this.Id + "_OnKeyPress"].call(this,evt);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnKeyPress");
            }
            document.getElementById(this.Id).onkeyup = (evt) => {
                try {
                    window[this.Id + "_OnKeyUp"].call(this,evt);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnKeyUp");
            }
            document.getElementById(this.Id).onblur = () => {
                try {
                    window[this.Id + "_OnBlur"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnBlur");
            }
        }

        private Display() {
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                document.getElementById(this.Id).style.removeProperty("display");
            } else {
                document.getElementById(this.Id).style.setProperty("display", "none");
            }
        }

        public static GetIdsStack() { //Retorna los id de todos los objetos Button creados.
            return Button.idsStack;
        }

        public GetId() {
            return this.Id;
        }

        public GetMetaObject() {
            return this.MetaObject;
        }

        private RedrawObject() {
            if (this.Enabled) {
                this.SetColor(this.GetColor());
                this.SetFromBackColor(this.GetFromBackColor());
                this.SetToBackColor(this.GetToBackColor());
            } else {
                this.SetDisabledColor(this.GetDisabledColor());
                this.SetDisabledFromBackColor(this.GetDisabledFromBackColor());
                this.SetDisabledToBackColor(this.GetDisabledToBackColor());
            }
        }

        public SetCrossZ(crossZ: boolean) {
            this.CrossZ = crossZ;
            let x: number = this.GetX();
            let y: number = this.GetY();
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,crossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetCrossZ() {
            return this.CrossZ;
        }

        public Raise() {
            this.Raised = true;

            document.getElementById(this.Id).style.setProperty("position", "fixed");
        }

        public Unraise() {
            this.Raised = false;

            document.getElementById(this.Id).style.setProperty("position", "absolute");
        }

        public GetRaised() {
            return this.Raised;
        }

        public SetToggle(value: boolean) { //Se fija el tipo, pero sea Toggle o no, se fija además como no pulsado (toggled = false).
            this.Toggle = value;
            this.Toggled = false;

            this.SetBorderTopColor(this.TempBorderTopColor);
            this.SetBorderLeftColor(this.TempBorderLeftColor);
            this.SetBorderRightColor(this.TempBorderRightColor);
            this.SetBorderBottomColor(this.TempBorderBottomColor);
            this.SetBackColor(this.TempBackColor);
            this.SetColor(this.TempColor);
            this.SetDisabledBackColor(this.TempDisabledBackColor);
        }

        public GetToggle() {
            return this.Toggle;
        }

        public SetToggled(value: boolean) { //Se ejecuta solo si el botón es de tipo Toggle.
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
                } else {
                    this.SetBorderTopColor(this.TempBorderTopColor);
                    this.SetBorderLeftColor(this.TempBorderLeftColor);
                    this.SetBorderRightColor(this.TempBorderRightColor);
                    this.SetBorderBottomColor(this.TempBorderBottomColor);
                    this.SetBackColor(this.TempBackColor);
                    this.SetColor(this.TempColor);
                    this.SetDisabledBackColor(this.TempDisabledBackColor);
                }
            }
        }

        public GetToggled() {
            return this.Toggled;
        }

        public SetX(x: number) {
            let X: number = x;
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolx = String(x);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                x -= Table.GetViewFinderX();
                document.getElementById(this.Id).style.left = String(x) + "px";
            }

            this.Display();
        }

        public GetX() {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        }

        public SetY(y: number) {
            let Y: number = y;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitooly = String(y);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetY() {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        }

        public SetZ(z: number) {
            let Z: number = z;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolz = String(z);
            this.Display();
        }

        public GetZ() {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        }

        public SetXYZ(x: number, y: number, z: number) {
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById(this.Id).dataset.scitoolz = String(z);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(x,y,z,Width,Height,CrossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public SetWidth(width: number) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
        }

        public GetWidth() {
            return Number(document.getElementById(this.Id).dataset.scitoolwidth);
        }

        public SetHeight(height: number) {
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        }

        public GetHeight() {
            return Number(document.getElementById(this.Id).dataset.scitoolheight);
        }

        public SetDimensions(width: number, height: number) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        }

        public GetInViewFinder() {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        }

        public SetCaption(caption: string) {
            this.Caption = caption;
            document.getElementById(this.Id).innerText = caption;
        }

        public GetCaption() {
            return this.Caption;
        }

        public SetVisible(visible: boolean) {
            this.Visible = visible;

            if (visible === true) {
                document.getElementById(this.Id).style.visibility = 'visible';
            } else {
                document.getElementById(this.Id).style.visibility = 'hidden';
            }
        }

        public GetVisible() {
            return this.Visible;
        }

        public SetColor(color: string) {
            this.Color = color;
            if (this.Enabled) {
                document.getElementById(this.Id).style.color = color;
            }
        }

        public GetColor() {
            return this.Color;
        }

        public SetFromBackColor(backColor: string) {
            this.FromBackColor = backColor;
            if (this.Enabled) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.FromBackColor + "), to(" + this.ToBackColor + "))";
            }
        }

        public GetFromBackColor() {
            return this.FromBackColor;
        }

        public SetToBackColor(backColor: string) {
            this.ToBackColor = backColor;
            if (this.Enabled) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.FromBackColor + "), to(" + this.ToBackColor + "))";
            }
        }

        public GetToBackColor() {
            return this.ToBackColor;
        }

        public SetBackColor(value: string) {
            this.FromBackColor = value;
            this.ToBackColor = value;
            if (this.Enabled) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.FromBackColor + "), to(" + this.ToBackColor + "))";
            }
        }

        public GetBackColor() {
            return this.FromBackColor;
        }

        public SetDisabledColor(color: string) {
            this.DisabledColor = color;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.color = color;
            }
        }

        public GetDisabledColor() {
            return this.DisabledColor;
        }

        public SetDisabledFromBackColor(fromBackColor: string) {
            this.DisabledFromBackColor = fromBackColor;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.DisabledFromBackColor + "), to(" + this.DisabledToBackColor + "))";
            }
        }

        public GetDisabledFromBackColor() {
            return this.DisabledFromBackColor;
        }

        public SetDisabledToBackColor(toBackColor: string) {
            this.DisabledToBackColor = toBackColor;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.DisabledFromBackColor + "), to(" + this.DisabledToBackColor + "))";
            }
        }

        public GetDisabledToBackColor() {
            return this.DisabledToBackColor;
        }

        public SetDisabledBackColor(value: string) {
            this.DisabledFromBackColor = value;
            this.DisabledToBackColor = value;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.DisabledFromBackColor + "), to(" + this.DisabledToBackColor + "))";
            }
        }

        public GetDisabledBackColor() {
            return this.DisabledFromBackColor;
        }

        public SetColorOnMouseOver(color: string) {
            this.ColorOnMouseOver = color;
        }

        public GetColorOnMouseOver() {
            return this.ColorOnMouseOver;
        }

        public SetFromBackColorOnMouseOver(color: string) {
            this.FromBackColorOnMouseOver = color;
        }

        public GetFromBackColorOnMouseOver() {
            return this.FromBackColorOnMouseOver;
        }

        public SetToBackColorOnMouseOver(color: string) {
            this.ToBackColorOnMouseOver = color;
        }

        public GetToBackColorOnMouseOver() {
            return this.ToBackColorOnMouseOver;
        }

        public SetBackColorOnMouseOver(value: string) {
            this.FromBackColorOnMouseOver = value;
            this.ToBackColorOnMouseOver = value;
        }

        public GetBackColorOnMouseOver() {
            return this.FromBackColorOnMouseOver;
        }

        public SetBorderTopColor(color: string) {
            this.BorderTopColor = color;
            document.getElementById(this.Id).style.borderTopColor = this.BorderTopColor;
        }

        public GetBorderTopColor() {
            return this.BorderTopColor;
        }

        public SetBorderRightColor(color: string) {
            this.BorderRightColor = color;
            document.getElementById(this.Id).style.borderRightColor = this.BorderRightColor;
        }

        public GetBorderRightColor() {
            return this.BorderRightColor;
        }

        public SetBorderBottomColor(color: string) {
            this.BorderBottomColor = color;
            document.getElementById(this.Id).style.borderBottomColor = this.BorderBottomColor;
        }

        public GetBorderBottomColor() {
            return this.BorderBottomColor;
        }

        public SetBorderLeftColor(color: string) {
            this.BorderLeftColor = color;
            document.getElementById(this.Id).style.borderLeftColor = this.BorderLeftColor;
        }

        public GetBorderLeftColor() {
            return this.BorderLeftColor;
        }

        public SetBorderColor(color: string) {
            this.SetBorderTopColor(color);
            this.SetBorderRightColor(color);
            this.SetBorderBottomColor(color);
            this.SetBorderLeftColor(color);
        }

        public SetTopLeftRadius(radius: number) {
            this.TopLeftRadius = radius;
            document.getElementById(this.Id).style.borderTopLeftRadius = this.TopLeftRadius + "px";
        }

        public GetTopLeftRadius() {
            return this.TopLeftRadius;
        }

        public SetTopRightRadius(radius: number) {
            this.TopRightRadius = radius;
            document.getElementById(this.Id).style.borderTopRightRadius = this.TopRightRadius + "px";
        }

        public GetTopRightRadius() {
            return this.TopRightRadius;
        }

        public SetBottomLeftRadius(radius: number) {
            this.BottomLeftRadius = radius;
            document.getElementById(this.Id).style.borderBottomLeftRadius = this.BottomLeftRadius + "px";
        }

        public GetBottomLeftRadius() {
            return this.BottomLeftRadius;
        }

        public SetBottomRightRadius(radius: number) {
            this.BottomRightRadius = radius;
            document.getElementById(this.Id).style.borderBottomRightRadius = this.BottomRightRadius + "px";
        }

        public GetBottomRightRadius() {
            return this.BottomRightRadius;
        }

        public SetRadius(radius: number) {
            this.SetTopLeftRadius(radius);
            this.SetTopRightRadius(radius);
            this.SetBottomLeftRadius(radius);
            this.SetBottomRightRadius(radius);
        }

        public SetTopBorderWidth(width: number) {
            this.TopBorderWidth = width;
            document.getElementById(this.Id).style.borderTopWidth = width + "px";
        }

        public GetTopBorderWidth() {
            return this.TopBorderWidth;
        }

        public SetRightBorderWidth(width: number) {
            this.RightBorderWidth = width;
            document.getElementById(this.Id).style.borderRightWidth = width + "px";
        }

        public GetRightBorderWidth() {
            return this.RightBorderWidth;
        }

        public SetBottomBorderWidth(width: number) {
            this.BottomBorderWidth = width;
            document.getElementById(this.Id).style.borderBottomWidth = width + "px";
        }

        public GetBottomBorderWidth() {
            return this.BottomBorderWidth;
        }

        public SetLeftBorderWidth(width: number) {
            this.LeftBorderWidth = width;
            document.getElementById(this.Id).style.borderLeftWidth = width + "px";
        }

        public GetLeftBorderWidth() {
            return this.LeftBorderWidth;
        }

        public SetBorderWidth(width: number) {
            this.SetTopBorderWidth(width);
            this.SetRightBorderWidth(width);
            this.SetBottomBorderWidth(width);
            this.SetLeftBorderWidth(width);
        }

        public GetBorderWidth() { //Si los anchos de los 4 bordes no son iguales, se devuelve false.
            if (this.GetTopBorderWidth() == this.GetRightBorderWidth() && this.GetTopBorderWidth() == this.GetBottomBorderWidth() && this.GetTopBorderWidth() == this.GetLeftBorderWidth()) {
                return this.TopBorderWidth;
            } else {
                return false;
            }
        }

        public SetTabIndex(tabIndex: number) {
            this.TabIndex = tabIndex;
            document.getElementById(this.Id).tabIndex = tabIndex;
        }

        public GetTabIndex() {
            return this.TabIndex;
        }

        public RestoreTabIndex() {
            this.SetTabIndex(0);
        }

        public SetZIndex(zIndex: string) {
            this.ZIndex = zIndex;
            document.getElementById(this.Id).style.zIndex = zIndex;
        }

        public GetZIndex() {
            return this.ZIndex;
        }

        public RestoreZIndex() {
            this.SetZIndex("auto");
        }

        public SetName(name: string) {
            this.Name = name;
            document.getElementById(this.Id).setAttribute("name", name);
        }

        public GetName() {
            return this.Name;
        }

        public SetEnabled(enabled: boolean) {
            this.Enabled = enabled;
            if (enabled) {
                document.getElementById(this.Id).removeAttribute("disabled");
            } else {
                document.getElementById(this.Id).setAttribute("disabled", "disabled");
            }
            this.RedrawObject();
        }

        public GetEnabled() {
            return this.Enabled;
        }

        public SetAccessKey(accesskey: string) {
            let expresionRegular = new RegExp("^([a-zA-Z]){1}$");
            let caracter: string = "";

            if (expresionRegular.test(accesskey)) {
                this.AccessKey = accesskey;

                document.getElementById(this.Id).accessKey = accesskey;

                if (this.Caption.indexOf(accesskey.toUpperCase()) >= 0 && this.Caption.indexOf(accesskey.toLowerCase()) >= 0) {
                    if (this.Caption.indexOf(accesskey.toUpperCase()) < this.Caption.indexOf(accesskey.toLowerCase())) {
                        caracter = accesskey.toUpperCase();
                    } else {
                        caracter = accesskey.toLowerCase();
                    }
                } else {
                    if (this.Caption.indexOf(accesskey.toUpperCase()) >= 0) {
                        caracter = accesskey.toUpperCase();
                    }
                    if (this.Caption.indexOf(accesskey.toLowerCase()) >= 0) {
                        caracter = accesskey.toLowerCase();
                    }
                }
                if (caracter != "") {
                    document.getElementById(this.Id).innerHTML = this.GetCaption().replace(caracter, "<span style='text-decoration: underline;'>"+caracter+"</span>");
                }
            }
        }

        public GetAccessKey() {
            return this.AccessKey;
        }

        public RestoreAccessKey() {
            this.AccessKey = null;
            document.getElementById(this.Id).removeAttribute("accessKey");
            this.SetCaption(this.GetCaption()); //Quitar caracter accessKey subrayado del Caption del botón (SetCaption fija el caption con innerText en lugar de innerHTML del método SetAccessKey, donde se subraya el caracter accessKey).
        }

        public SetFontSize(fontSize: number) {
            this.FontSize = fontSize;
            document.getElementById(this.Id).style.fontSize = String(fontSize) + "px";
        }

        public GetFontSize() {
            return this.FontSize;
        }

        public SetFontFamily(fontFamily: string) {
            this.FontFamily = fontFamily;
            document.getElementById(this.Id).style.fontFamily = fontFamily;
        }

        public GetFontFamily() {
            return this.FontFamily;
        }

        public SetFocus() {
            document.getElementById(this.Id).focus();
        }

        public Talk(message: string, metaMessage: any = "") {
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    } catch(e) {}
                }
            }
            for (let idMetaobjeto of MetaObject.GetIdsStack()) {
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                } catch(e) {}
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
        }
    }

    export class Image {
        private Id: string;
        private ImageFile: string;
        private Caption: string;
        private Visible: boolean;
        private Color: string;
        private BackColor: string;
        private TabIndex: number;
        private ZIndex: string;
        private CrossZ: boolean;
        private MetaObject: string;
        private Enabled: boolean;
        private Link: boolean;
        private LinkTo: string;
        private Raised: boolean;

        public static NumberOfUnnamedObjects: number = 0;
        private static idsStack: string[] = [];

        constructor(metaObject: string, x: number = 0, y: number = 0, z: number = 0, width: number = 0, height: number = 0, imageFile: string = "", caption: string = "", id: string) {
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
            } else {
                this.ZIndex = "auto";
            }
            this.Enabled = true;
            this.Link = false;
            this.LinkTo = null;
            this.Raised = false;

            //Crear nodo.
            let nodoNuevo = document.createElement("IMG");
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

            document.getElementById(this.Id).onclick = () => {
                if (this.Enabled) {
                    ////////Activar eventual documento padre de este objeto.
                    //Buscar metaobjeto de este objeto.
                    let datosObjeto = MetaObject_private.GetObjectsMap().filter((objeto) => {
                        if (objeto["ObjectId"] === this.Id) {
                            return objeto;
                        }
                    });

                    //Verificar si el metaobjeto es un documento.
                    let datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter((objeto) => {
                        if (objeto["ObjectId"] === datosObjeto[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                            return objeto;
                        }
                    });
                    if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();

                        try {
                            window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(this);
                        } catch(e) {}
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                    }
                    ////////

                    try {
                        window[this.Id + "_OnClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnClick");

                    if (this.LinkTo !== null) {
                        location.href = this.LinkTo;
                    }
                }
            }
            document.getElementById(this.Id).ondblclick = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnDblClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnDblClick");
                }
            }
            document.getElementById(this.Id).onfocus = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnFocus"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnFocus");
                }
            }
            document.getElementById(this.Id).onmouseover = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseOver"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseOver");
                }
            }
            document.getElementById(this.Id).onmousemove = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseMove"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseMove");
                }
            }
            document.getElementById(this.Id).onmousedown = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseDown"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseDown");
                }
            }
            document.getElementById(this.Id).onmouseup = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseUp"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseUp");
                }
            }
            document.getElementById(this.Id).onmouseout = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseOut"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseOut");
                }
            }
            document.getElementById(this.Id).onkeydown = (evt) => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnKeyDown"].call(this,evt);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnKeyDown");
                }
            }
            document.getElementById(this.Id).onkeypress = (evt) => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnKeyPress"].call(this,evt);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnKeyPress");
                }
            }
            document.getElementById(this.Id).onkeyup = (evt) => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnKeyUp"].call(this,evt);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnKeyUp");
                }
            }
            document.getElementById(this.Id).onblur = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnBlur"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnBlur");
                }
            }
        }

        private Display() {
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                document.getElementById(this.Id).style.removeProperty("display");
            } else {
                document.getElementById(this.Id).style.setProperty("display", "none");
            }
        }

        public static GetIdsStack() { //Retorna los id de todos los objetos Image creados.
            return Image.idsStack;
        }

        public GetId() {
            return this.Id;
        }

        public GetMetaObject() {
            return this.MetaObject;
        }

        private RedrawObject() {
            this.SetColor(this.GetColor());
            this.SetBackColor(this.GetBackColor());
            if (this.Link) {
                if (this.Enabled) {
                    document.getElementById(this.Id).style.cursor = "pointer";
                    document.getElementById(this.Id).style.filter = "grayscale(0%)";
                } else {
                    document.getElementById(this.Id).style.cursor = "default";
                    document.getElementById(this.Id).style.filter = "grayscale(100%)";
                }
            } else {
                document.getElementById(this.Id).style.cursor = "default";
                document.getElementById(this.Id).style.filter = "grayscale(0%)";
            }
        }

        public SetCrossZ(crossZ: boolean) {
            this.CrossZ = crossZ;
            let x: number = this.GetX();
            let y: number = this.GetY();
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,crossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetCrossZ() {
            return this.CrossZ;
        }

        public Raise() {
            this.Raised = true;

            document.getElementById(this.Id).style.setProperty("position", "fixed");
        }

        public Unraise() {
            this.Raised = false;

            document.getElementById(this.Id).style.setProperty("position", "absolute");
        }

        public GetRaised() {
            return this.Raised;
        }

        public SetX(x: number) {
            let X: number = x;
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolx = String(x);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                x -= Table.GetViewFinderX();
                document.getElementById(this.Id).style.left = String(x) + "px";
            }

            this.Display();
        }

        public GetX() {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        }

        public SetY(y: number) {
            let Y: number = y;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitooly = String(y);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetY() {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        }

        public SetZ(z: number) {
            let Z: number = z;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolz = String(z);
            this.Display();
        }

        public GetZ() {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        }

        public SetXYZ(x: number, y: number, z: number) {
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById(this.Id).dataset.scitoolz = String(z);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(x,y,z,Width,Height,CrossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public SetWidth(width: number) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
        }

        public GetWidth() {
            return Number(document.getElementById(this.Id).dataset.scitoolwidth);
        }

        public SetHeight(height: number) {
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        }

        public GetHeight() {
            return Number(document.getElementById(this.Id).dataset.scitoolheight);
        }

        public SetDimensions(width: number, height: number) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        }

        public GetInViewFinder() {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        }

        public SetImageFile(imageFile: string) {
            this.ImageFile = imageFile;
            document.getElementById(this.Id).setAttribute("src", imageFile);
        }

        public GetImageFile() {
            return this.ImageFile;
        }

        public SetCaption(caption: string) {
            this.Caption = caption;

            document.getElementById(this.Id).setAttribute("alt", caption);
        }

        public GetCaption() {
            return this.Caption;
        }

        public SetVisible(visible: boolean) {
            this.Visible = visible;

            if (visible === true) {
                document.getElementById(this.Id).style.visibility = 'visible';
            } else {
                document.getElementById(this.Id).style.visibility = 'hidden';
            }
        }

        public GetVisible() {
            return this.Visible;
        }

        public SetColor(color: string) {
            this.Color = color;
            document.getElementById(this.Id).style.color = color;
        }

        public GetColor() {
            return this.Color;
        }

        public SetBackColor(backColor: string) {
            this.BackColor = backColor;
            document.getElementById(this.Id).style.backgroundColor = backColor;
        }

        public GetBackColor() {
            return this.BackColor;
        }

        public SetTabIndex(tabIndex: number) {
            this.TabIndex = tabIndex;

            document.getElementById(this.Id).tabIndex = tabIndex;
        }

        public GetTabIndex() {
            return this.TabIndex;
        }

        public RestoreTabIndex() {
            this.SetTabIndex(0);
        }

        public SetZIndex(zIndex: string) {
            this.ZIndex = zIndex;
            document.getElementById(this.Id).style.zIndex = zIndex;
        }

        public GetZIndex() {
            return this.ZIndex;
        }

        public RestoreZIndex() {
            this.SetZIndex("auto");
        }

        public SetEnabled(enabled: boolean) {
            this.Enabled = enabled;
            if (this.Link) {
                if (enabled) {
                    document.getElementById(this.Id).removeAttribute("disabled");
                } else {
                    document.getElementById(this.Id).setAttribute("disabled", "disabled");
                }
            }
            this.RedrawObject();
        }

        public GetEnabled() {
            return this.Enabled;
        }

        public SetLink(valor: boolean) {
            this.Link = valor;

            if (!valor) {
                this.LinkTo = null;
            }
            this.RedrawObject();
        }

        public GetLink() {
            return this.Link;
        }

        public SetLinkTo(destination: string) {
            this.LinkTo = destination;
            this.Link = true;
            this.RedrawObject();
        }

        public GetLinkTo() {
            return this.LinkTo;
        }

        public RestoreLinkTo() {
            this.LinkTo = null;
            document.getElementById(this.Id).style.cursor = "default";
            this.RedrawObject();
        }

        public SetFocus() {
            document.getElementById(this.Id).focus();
        }

        public Talk(message: string, metaMessage: any = "") {
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    } catch(e) {}
                }
            }
            for (let idMetaobjeto of MetaObject.GetIdsStack()) {
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                } catch(e) {}
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
        }
    }

    export class Video {
        private Id: string;
        private VideoFile: string;
        private Visible: boolean;
        private TabIndex: number;
        private ZIndex: string;
        private CrossZ: boolean;
        private MetaObject: string;
        private Enabled: boolean;
        private Link: boolean;
        private LinkTo: string;
        private Controls: boolean;
        private Loop: boolean;
        private Muted: boolean;

        public static NumberOfUnnamedObjects: number = 0;
        private static idsStack: string[] = [];

        constructor(metaObject: string, x: number = 0, y: number = 0, z: number = 0, width: number = 0, height: number = 0, videoFile: string = "", autoPlay: boolean = false, id: string) {
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
            } else {
                this.ZIndex = "auto";
            }
            this.Enabled = true;
            this.Link = false;
            this.LinkTo = null;
            this.Controls = false;
            this.Loop = false;
            this.Muted = false;

            //Crear nodo.
            let nodoNuevo = document.createElement("VIDEO");
            nodoNuevo.setAttribute("id", this.Id);
            if (autoPlay) nodoNuevo.setAttribute("autoplay", "autoplay");
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

            document.getElementById(this.Id).onclick = () => {
                if (this.Enabled) {
                    ////////Activar eventual documento padre de este objeto.
                    //Buscar metaobjeto de este objeto.
                    let datosObjeto = MetaObject_private.GetObjectsMap().filter((objeto) => {
                        if (objeto["ObjectId"] === this.Id) {
                            return objeto;
                        }
                    });

                    //Verificar si el metaobjeto es un documento.
                    let datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter((objeto) => {
                        if (objeto["ObjectId"] === datosObjeto[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                            return objeto;
                        }
                    });
                    if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();

                        try {
                            window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(this);
                        } catch(e) {}
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                    }
                    ////////

                    try {
                        window[this.Id + "_OnClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnClick");

                    if (this.LinkTo !== null) {
                        location.href = this.LinkTo;
                    }
                }
            }
            document.getElementById(this.Id).ondblclick = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnDblClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnDblClick");
                }
            }
            document.getElementById(this.Id).onfocus = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnFocus"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnFocus");
                }
            }
            document.getElementById(this.Id).onmouseover = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseOver"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseOver");
                }
            }
            document.getElementById(this.Id).onmousemove = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseMove"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseMove");
                }
            }
            document.getElementById(this.Id).onmousedown = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseDown"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseDown");
                }
            }
            document.getElementById(this.Id).onmouseup = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseUp"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseUp");
                }
            }
            document.getElementById(this.Id).onmouseout = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseOut"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseOut");
                }
            }
            document.getElementById(this.Id).onkeydown = (evt) => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnKeyDown"].call(this,evt);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnKeyDown");
                }
            }
            document.getElementById(this.Id).onkeypress = (evt) => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnKeyPress"].call(this,evt);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnKeyPress");
                }
            }
            document.getElementById(this.Id).onkeyup = (evt) => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnKeyUp"].call(this,evt);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnKeyUp");
                }
            }
            document.getElementById(this.Id).onblur = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnBlur"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnBlur");
                }
            }
        }

        private Display() {
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                document.getElementById(this.Id).style.removeProperty("display");
            } else {
                document.getElementById(this.Id).style.setProperty("display", "none");
            }
        }

        public static GetIdsStack() { //Retorna los id de todos los objetos Video creados.
            return Video.idsStack;
        }

        public GetId() {
            return this.Id;
        }

        public GetMetaObject() {
            return this.MetaObject;
        }

        private RedrawObject() {
            if (this.Link) {
                if (this.Enabled) {
                    document.getElementById(this.Id).style.cursor = "pointer";
                    document.getElementById(this.Id).style.filter = "grayscale(0%)";
                } else {
                    document.getElementById(this.Id).style.cursor = "default";
                    document.getElementById(this.Id).style.filter = "grayscale(100%)";
                }
            } else {
                document.getElementById(this.Id).style.cursor = "default";
                document.getElementById(this.Id).style.filter = "grayscale(0%)";
            }
        }

        public Play() {
            document.getElementById(this.Id).play();
        }

        public Pause() {
            document.getElementById(this.Id).pause();
        }

        public Skip(value: number) {
            document.getElementById(this.Id).currentTime += value;
        }

        public Restart() {
            document.getElementById(this.Id).currentTime = 0;
        }

        public SetMuted(value: boolean) {
            this.Muted = value;

            if (value) {
                document.getElementById(this.Id).setAttribute("muted", "muted");
            } else {
                document.getElementById(this.Id).removeAttribute("muted");
            }
        }

        public SetLoop(value: boolean) {
            this.Loop = value;

            let nodo = document.getElementById(this.Id);

            if (value) {
                nodo.setAttribute("loop", "loop");
            } else {
                nodo.removeAttribute("loop");
            }
        }

        public GetLoop() {
            return this.Loop;
        }

        public SetControls(value: boolean) {
            this.Controls = value;

            let nodo = document.getElementById(this.Id);

            if (value) {
                nodo.setAttribute("Controls", "Controls");
            } else {
                nodo.removeAttribute("Controls");
            }
        }

        public GetControls() {
            return this.Controls;
        }

        public SetCrossZ(crossZ: boolean) {
            this.CrossZ = crossZ;
            let x: number = this.GetX();
            let y: number = this.GetY();
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,crossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetCrossZ() {
            return this.CrossZ;
        }

        public SetX(x: number) {
            let X: number = x;
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolx = String(x);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                x -= Table.GetViewFinderX();
                document.getElementById(this.Id).style.left = String(x) + "px";
            }

            this.Display();
        }

        public GetX() {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        }

        public SetY(y: number) {
            let Y: number = y;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitooly = String(y);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetY() {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        }

        public SetZ(z: number) {
            let Z: number = z;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolz = String(z);
            this.Display();
        }

        public GetZ() {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        }

        public SetXYZ(x: number, y: number, z: number) {
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById(this.Id).dataset.scitoolz = String(z);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(x,y,z,Width,Height,CrossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public SetWidth(width: number) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
        }

        public GetWidth() {
            return Number(document.getElementById(this.Id).dataset.scitoolwidth);
        }

        public SetHeight(height: number) {
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        }

        public GetHeight() {
            return Number(document.getElementById(this.Id).dataset.scitoolheight);
        }

        public SetDimensions(width: number, height: number) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        }

        public GetInViewFinder() {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        }

        public SetVideoFile(videoFile: string) {
            this.VideoFile = videoFile;
            document.getElementById(this.Id).setAttribute("src", videoFile);
        }

        public GetVideoFile() {
            return this.VideoFile;
        }

        public SetVisible(visible: boolean) {
            this.Visible = visible;

            if (visible === true) {
                document.getElementById(this.Id).style.visibility = 'visible';
            } else {
                document.getElementById(this.Id).style.visibility = 'hidden';
            }
        }

        public GetVisible() {
            return this.Visible;
        }

        public SetTabIndex(tabIndex: number) {
            this.TabIndex = tabIndex;

            document.getElementById(this.Id).tabIndex = tabIndex;
        }

        public GetTabIndex() {
            return this.TabIndex;
        }

        public RestoreTabIndex() {
            this.SetTabIndex(0);
        }

        public SetZIndex(zIndex: string) {
            this.ZIndex = zIndex;
            document.getElementById(this.Id).style.zIndex = zIndex;
        }

        public GetZIndex() {
            return this.ZIndex;
        }

        public RestoreZIndex() {
            this.SetZIndex("auto");
        }

        public SetEnabled(enabled: boolean) {
            this.Enabled = enabled;
            if (this.Link) {
                if (enabled) {
                    document.getElementById(this.Id).removeAttribute("disabled");
                } else {
                    document.getElementById(this.Id).setAttribute("disabled", "disabled");
                }
            }
            this.RedrawObject();
        }

        public GetEnabled() {
            return this.Enabled;
        }

        public SetLink(valor: boolean) {
            this.Link = valor;

            if (!valor) {
                this.LinkTo = null;
            }
            this.RedrawObject();
        }

        public GetLink() {
            return this.Link;
        }

        public SetLinkTo(destination: string) {
            this.LinkTo = destination;
            this.Link = true;
            this.RedrawObject();
        }

        public GetLinkTo() {
            return this.LinkTo;
        }

        public RestoreLinkTo() {
            this.LinkTo = null;
            document.getElementById(this.Id).style.cursor = "default";
            this.RedrawObject();
        }

        public SetFocus() {
            document.getElementById(this.Id).focus();
        }

        public Talk(message: string, metaMessage: any = "") {
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    } catch(e) {}
                }
            }
            for (let idMetaobjeto of MetaObject.GetIdsStack()) {
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                } catch(e) {}
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
        }
    }

    export class CheckBox {
        private Id: string;
        private Name: string;
        private Caption: string;
        private Visible: boolean;
        private Color: string;
        private BackColor: string;
        private DisabledColor: string;
        private TabIndex: number;
        private ZIndex: string;
        private AccessKey: string;
        private CrossZ: boolean;
        private FontFamily: string;
        private MetaObject: string;
        private Enabled: boolean;

        public static NumberOfUnnamedObjects: number = 0;
        private static idsStack: string[] = []; //Guarda solo los Ids de los CheckBox, sin considerar los Labels asociados.
        private static labelIdsStack: string[] = []; //Guarda los Ids de los Labels asociados a los CheckBox.
        private static squareCheckBoxWidth: number = 24; // Ancho reservado para el checkbox que antecede al texto.
        private static squareCheckBoxHeight: number = 16; // Alto reservado para el checkbox que antecede al texto.

        constructor(metaObject: string, x: number = 0, y: number = 0, z: number = 0, caption: string = "", id: string) {
            this.Id = id;
            let labelId: string;
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
            } else {
                this.Caption = caption;
            }
            this.Visible = true;
            this.Color = Skin.GetCheckBoxColor();
            this.BackColor = Skin.GetCheckBoxBackColor();
            this.DisabledColor = Skin.GetCheckBoxDisabledColor();
            this.TabIndex = 0;
            if (scitool.GetParentDocumentId(this.Id) !== false) {
                this.ZIndex = String(Number(window[scitool.GetParentDocumentId(this.Id)].GetZIndex()) + scitool.GetMetaObjectObjectsNumber(scitool.GetParentDocumentId(this.Id)));
            } else {
                this.ZIndex = "auto";
            }
            this.AccessKey = null;
            this.Enabled = true;

            //Crear nodo.
            let nodoNuevo = document.createElement("INPUT");
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
            let nodoAsociado = document.createElement("LABEL");
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

            document.getElementById(this.Id).onclick = () => {
                ////////Activar eventual documento padre de este objeto.
                //Buscar metaobjeto de este objeto.
                let datosObjeto = MetaObject_private.GetObjectsMap().filter((objeto) => {
                    if (objeto["ObjectId"] === this.Id) {
                        return objeto;
                    }
                });

                //Verificar si el metaobjeto es un documento.
                let datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter((objeto) => {
                    if (objeto["ObjectId"] === datosObjeto[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                        return objeto;
                    }
                });
                if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();

                    try {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(this);
                    } catch(e) {}
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                }
                ////////

                try {
                    window[this.Id + "_OnClick"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnClick");
            }
            document.getElementById(this.Id).ondblclick = () => {
                try {
                    window[this.Id + "_OnDblClick"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnDblClick");
            }
            document.getElementById(labelId).ondblclick = () => { //Forzar a lanzar el evento también al operar sobre el Label asociado.
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnDblClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnDblClick");
                }
            }
            document.getElementById(this.Id).onchange = () => {
                try {
                    window[this.Id + "_OnChange"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnChange");
            }
            document.getElementById(this.Id).onfocus = () => {
                try {
                    window[this.Id + "_OnFocus"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnFocus");
            }
            document.getElementById(this.Id).onmouseover = () => {
                try {
                    window[this.Id + "_OnMouseOver"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseOver");
            }
            document.getElementById(labelId).onmouseover = () => { //Forzar a lanzar el evento también al operar sobre el Label asociado.
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseOver"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseOver");
                }
            }
            document.getElementById(this.Id).onmousemove = () => {
                try {
                    window[this.Id + "_OnMouseMove"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseMove");
            }
            document.getElementById(labelId).onmousemove = () => { //Forzar a lanzar el evento también al operar sobre el Label asociado.
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseMove"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseMove");
                }
            }
            document.getElementById(this.Id).onmousedown = () => {
                try {
                    window[this.Id + "_OnMouseDown"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseDown");
            }
            document.getElementById(labelId).onmousedown = () => { //Forzar a lanzar el evento también al operar sobre el Label asociado.
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseDown"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseDown");
                }
            }
            document.getElementById(this.Id).onmouseup = () => {
                try {
                    window[this.Id + "_OnMouseUp"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseUp");
            }
            document.getElementById(labelId).onmouseup = () => { //Forzar a lanzar el evento también al operar sobre el Label asociado.
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseUp"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseUp");
                }
            }
            document.getElementById(this.Id).onmouseout = () => {
                try {
                    window[this.Id + "_OnMouseOut"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseOut");
            }
            document.getElementById(labelId).onmouseout = () => { //Forzar a lanzar el evento también al operar sobre el Label asociado.
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseOut"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseOut");
                }
            }
            document.getElementById(this.Id).onkeydown = (evt) => {
                try {
                    window[this.Id + "_OnKeyDown"].call(this,evt);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnKeyDown");
            }
            document.getElementById(this.Id).onkeypress = (evt) => {
                try {
                    window[this.Id + "_OnKeyPress"].call(this,evt);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnKeyPress");
            }
            document.getElementById(this.Id).onkeyup = (evt) => {
                try {
                    window[this.Id + "_OnKeyUp"].call(this,evt);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnKeyUp");
            }
        }

        private Display() {
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                document.getElementById(this.Id).style.removeProperty("display");
                document.getElementById('lblChk' + this.Id).style.removeProperty("display");
            } else {
                document.getElementById(this.Id).style.setProperty("display", "none");
                document.getElementById('lblChk' + this.Id).style.setProperty("display", "none");
            }
        }

        public static GetIdsStack() {
            return CheckBox.idsStack;
        }

        public static GetLabelIdsStack() {
            return CheckBox.labelIdsStack;
        }

        public GetId() {
            return this.Id;
        }

        public GetMetaObject() {
            return this.MetaObject;
        }

        private RedrawObject() {
            if (this.Enabled) {
                this.SetColor(this.GetColor());
                this.SetBackColor(this.GetBackColor());
            } else {
                this.SetDisabledColor(this.GetDisabledColor());
                this.SetBackColor(this.GetBackColor());
            }
        }

        public SetCrossZ(crossZ: boolean) {
            this.CrossZ = crossZ;
            let x: number = this.GetX();
            let y: number = this.GetY();
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);
            document.getElementById("lblChk" + this.Id).dataset.scitoolcrossz = String(crossZ);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,crossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
                document.getElementById("lblChk" + this.Id).style.left = String(x + CheckBox.squareCheckBoxWidth) + "px";
                document.getElementById("lblChk" + this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetCrossZ() {
            return this.CrossZ;
        }

        public SetX(x: number) {
            let X: number = x;
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth) + Number(document.getElementById("lblChk" + this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById("lblChk" + this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById("lblChk" + this.Id).dataset.scitoolx = String(x + CheckBox.squareCheckBoxWidth);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                x -= Table.GetViewFinderX();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById("lblChk" + this.Id).style.left = String(x + CheckBox.squareCheckBoxWidth) + "px";
            }

            this.Display();
        }

        public GetX() {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        }

        public SetY(y: number) {
            let Y: number = y;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth) + Number(document.getElementById("lblChk" + this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById("lblChk" + this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById("lblChk" + this.Id).dataset.scitooly = String(y);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.top = String(y) + "px";
                document.getElementById("lblChk" + this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetY() {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        }

        public SetZ(z: number) {
            let Z: number = z;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth) + Number(document.getElementById("lblChk" + this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById("lblChk" + this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolz = String(z);
            document.getElementById("lblChk" + this.Id).dataset.scitoolz = String(z);
            this.Display();
        }

        public GetZ() {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        }

        public SetXYZ(x: number, y: number, z: number) {
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth) + Number(document.getElementById("lblChk" + this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById("lblChk" + this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById("lblChk" + this.Id).dataset.scitoolx = String(x + CheckBox.squareCheckBoxWidth);
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById("lblChk" + this.Id).dataset.scitooly = String(y);
            document.getElementById(this.Id).dataset.scitoolz = String(z);
            document.getElementById("lblChk" + this.Id).dataset.scitoolz = String(z);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(x,y,z,Width,Height,CrossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById("lblChk" + this.Id).style.left = String(x + CheckBox.squareCheckBoxWidth) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
                document.getElementById("lblChk" + this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public SetWidth(width: number) {
            document.getElementById("lblChk" + this.Id).dataset.scitoolwidth = String(width - CheckBox.squareCheckBoxWidth);
            document.getElementById("lblChk" + this.Id).style.width = String(width - CheckBox.squareCheckBoxWidth) + "px";
        }

        public GetWidth() {
            return Number(document.getElementById(this.Id).dataset.scitoolwidth);
        }

        public SetHeight(height: number) {
            document.getElementById("lblChk" + this.Id).dataset.scitoolheight = String(height);
            document.getElementById("lblChk" + this.Id).style.height = String(height) + "px";
        }

        public GetHeight() {
            return Number(document.getElementById(this.Id).dataset.scitoolheight);
        }

        public SetDimensions(width: number, height: number) {
            document.getElementById("lblChk" + this.Id).dataset.scitoolwidth = String(width - CheckBox.squareCheckBoxWidth);
            document.getElementById("lblChk" + this.Id).style.width = String(width - CheckBox.squareCheckBoxWidth) + "px";
            document.getElementById("lblChk" + this.Id).dataset.scitoolheight = String(height);
            document.getElementById("lblChk" + this.Id).style.height = String(height) + "px";
        }

        public GetInViewFinder() {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        }

        public SetCaption(caption: string) {
            this.Caption = caption;

            document.getElementById("lblChk" + this.Id).innerText = caption;
        }

        public GetCaption() {
            return this.Caption;
        }

        public SetVisible(visible: boolean) {
            this.Visible = visible;
            if (visible === true) {
                document.getElementById(this.Id).style.visibility = 'visible';
                document.getElementById("lblChk" + this.Id).style.visibility = 'visible';
            } else {
                document.getElementById(this.Id).style.visibility = 'hidden';
                document.getElementById("lblChk" + this.Id).style.visibility = 'hidden';
            }
        }

        public GetVisible() {
            return this.Visible;
        }

        public SetColor(color: string) {
            this.Color = color;
            if (this.Enabled) {
                document.getElementById("lblChk" + this.Id).style.color = color;
            }
        }

        public GetColor() {
            return this.Color;
        }

        public SetBackColor(backColor: string) {
            this.BackColor = backColor;
            if (this.Enabled) {
                document.getElementById("lblChk" + this.Id).style.backgroundColor = backColor;
            }
        }

        public GetBackColor() {
            return this.BackColor;
        }

        public SetDisabledColor(color: string) {
            this.DisabledColor = color;
            if (!this.Enabled) {
                document.getElementById('lblChk' + this.Id).style.color = color;
            }
        }

        public GetDisabledColor() {
            return this.DisabledColor;
        }

        public SetTabIndex(tabIndex: number) {
            this.TabIndex = tabIndex;
            document.getElementById(this.Id).tabIndex = tabIndex;
        }

        public GetTabIndex() {
            return this.TabIndex;
        }

        public RestoreTabIndex() {
            this.SetTabIndex(0);
        }

        public SetZIndex(zIndex: string) {
            this.ZIndex = zIndex;
            document.getElementById(this.Id).style.zIndex = zIndex;
            if (!isNaN(Number(zIndex))) {
                zIndex = String(Number(zIndex) + 1);
            }
            document.getElementById('lblChk' + this.Id).style.zIndex = zIndex;
        }

        public GetZIndex() {
            return this.ZIndex;
        }

        public RestoreZIndex() {
            this.SetZIndex("auto");
        }

        public SetAccessKey(accesskey: string) {
            let expresionRegular = new RegExp("^([a-zA-Z]){1}$");
            let caracter: string = "";

            if (expresionRegular.test(accesskey)) {
                this.AccessKey = accesskey;

                document.getElementById("lblChk" + this.Id).accessKey = accesskey;

                if (this.Caption.indexOf(accesskey.toUpperCase()) >= 0 && this.Caption.indexOf(accesskey.toLowerCase()) >= 0) {
                    if (this.Caption.indexOf(accesskey.toUpperCase()) < this.Caption.indexOf(accesskey.toLowerCase())) {
                        caracter = accesskey.toUpperCase();
                    } else {
                        caracter = accesskey.toLowerCase();
                    }
                } else {
                    if (this.Caption.indexOf(accesskey.toUpperCase()) >= 0) {
                        caracter = accesskey.toUpperCase();
                    }
                    if (this.Caption.indexOf(accesskey.toLowerCase()) >= 0) {
                        caracter = accesskey.toLowerCase();
                    }
                }
                if (caracter != "") {
                    document.getElementById("lblChk" + this.Id).innerHTML = this.GetCaption().replace(caracter, "<span style='text-decoration: underline;'>"+caracter+"</span>");
                }
            }
        }

        public GetAccessKey() {
            return this.AccessKey;
        }

        public RestoreAccessKey() {
            this.AccessKey = null;
            document.getElementById("lblChk" + this.Id).removeAttribute("accessKey");
            this.SetCaption(this.GetCaption()); //Quitar caracter accessKey subrayado del Caption del label (SetCaption fija el caption con innerText en lugar de innerHTML del método SetAccessKey, donde se subraya el caracter accessKey).
        }

        public GetFontSize() {
            return Skin.GetCheckBoxFontSize();
        }

        public SetFontFamily(fontFamily: string) {
            this.FontFamily = fontFamily;
            document.getElementById("lblChk" + this.Id).style.fontFamily = fontFamily;
        }

        public GetFontFamily() {
            return this.FontFamily;
        }

        public SetSelected(selected: boolean) {
            (<HTMLInputElement>document.getElementById(this.Id)).checked = selected;
        }

        public GetSelected() {
            return (<HTMLInputElement>document.getElementById(this.Id)).checked;
        }

        public SetEnabled(enabled: boolean) {
            this.Enabled = enabled;
            if (enabled) {
                document.getElementById(this.Id).removeAttribute("disabled");
            } else {
                document.getElementById(this.Id).setAttribute("disabled", "disabled");
            }
            this.RedrawObject();
        }

        public GetEnabled() {
            return this.Enabled;
        }

        public SetFocus() {
            document.getElementById(this.Id).focus();
        }

        public Talk(message: string, metaMessage: any = "") {
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    } catch(e) {}
                }
            }
            for (let idMetaobjeto of MetaObject.GetIdsStack()) {
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                } catch(e) {}
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
        }
    }

    export class ComboBox {
        private Id: string;
        private Name: string;
        private X: number;
        private Y: number;
        private Z: number;
        private Visible: boolean;
        private Color: string;
        private FromBackColor: string;
        private ToBackColor: string;
        private ListBoxColor: string;
        private ListBoxBackColor: string;
        private DisabledColor: string;
        private DisabledFromBackColor: string;
        private DisabledToBackColor: string;
        private DisabledListBoxFromBackColor: string;
        private DisabledListBoxToBackColor: string;
        private TabIndex: number;
        private ZIndex: string;
        private FontSize: number;
        private FontFamily: string;
        private Length: number;
        private Lines: number;
        private Multiple: boolean;
        private CrossZ: boolean;
        private Enabled: boolean;
        private MetaObject: string;
        private Raised: boolean;

        public static NumberOfUnnamedObjects: number = 0;
        private static idsStack: string[] = [];
        private comboBoxElementsId: string[] = []; //Lista que guarda los Ids de los elementos.

        constructor(metaObject: string, x: number = 0, y: number = 0, z: number = 0, id: string) {
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
            } else {
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
            let nodoNuevo = document.createElement("SELECT");
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

            document.getElementById(this.Id).onclick = () => { //Para los elementos, el evento ocurre en ComboBox o ListBox no Múltiples.
                ////////Activar eventual documento padre de este objeto.
                //Buscar metaobjeto de este objeto.
                let datosObjeto = MetaObject_private.GetObjectsMap().filter((objeto) => {
                    if (objeto["ObjectId"] === this.Id) {
                        return objeto;
                    }
                });

                //Verificar si el metaobjeto es un documento.
                let datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter((objeto) => {
                    if (objeto["ObjectId"] === datosObjeto[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                        return objeto;
                    }
                });
                if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();

                    try {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(this);
                    } catch(e) {}
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                }
                ////////

                try {
                    window[this.Id + "_OnClick"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnClick");

                if (!this.GetMultiple() && this.GetSelected() != false) {
                    try {
                        window[this.GetSelected() + "_OnClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.GetSelected() + "_OnClick");
                }
            }
            document.getElementById(this.Id).ondblclick = () => { //Evento solo se da para ListBox, no ComboBox. Y para los elementos, el evento ocurre solo si el ListBox no es Múltiple.
                if (this.GetMultiple() || this.GetLines() > 1) {
                    try {
                        window[this.Id + "_OnDblClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnDblClick");

                    if (!this.GetMultiple() && this.GetSelected() != false) {
                        try {
                            window[this.GetSelected() + "_OnDblClick"].apply(this);
                        } catch(e) {}
                        window[this.Id].Talk(this.GetSelected() + "_OnDblClick");
                    }
                }
            }
            document.getElementById(this.Id).onchange = () => {
                try {
                    window[this.Id + "_OnChange"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnChange");

                if (!this.GetMultiple() && this.GetSelected() != false) {
                    try {
                        window[this.GetSelected() + "_OnClick"].apply(this); // El OnChange de un combobox gatilla un OnClick del elemento seleccionado.
                    } catch(e) {}
                    window[this.Id].Talk(this.GetSelected() + "_OnClick");
                }
            }
            document.getElementById(this.Id).onfocus = () => {
                try {
                    window[this.Id + "_OnFocus"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnFocus");
            }
            document.getElementById(this.Id).onmouseover = () => {
                try {
                    window[this.Id + "_OnMouseOver"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseOver");
            }
            document.getElementById(this.Id).onmousemove = () => {
                try {
                    window[this.Id + "_OnMouseMove"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseMove");
            }
            document.getElementById(this.Id).onmousedown = () => {
                try {
                    window[this.Id + "_OnMouseDown"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseDown");
            }
            document.getElementById(this.Id).onmouseup = () => {
                try {
                    window[this.Id + "_OnMouseUp"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseUp");
            }
            document.getElementById(this.Id).onmouseout = () => {
                try {
                    window[this.Id + "_OnMouseOut"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseOut");
            }
            document.getElementById(this.Id).onkeydown = (evt) => {
                try {
                    window[this.Id + "_OnKeyDown"].call(this,evt);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnKeyDown");
            }
            document.getElementById(this.Id).onkeypress = (evt) => {
                try {
                    window[this.Id + "_OnKeyPress"].call(this,evt);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnKeyPress");
            }
            document.getElementById(this.Id).onkeyup = (evt) => {
                try {
                    window[this.Id + "_OnKeyUp"].call(this,evt);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnKeyUp");
            }
            document.getElementById(this.Id).onblur = () => {
                try {
                    window[this.Id + "_OnBlur"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnBlur");
            }
        }

        private Display() {
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                document.getElementById(this.Id).style.removeProperty("display");
            } else {
                document.getElementById(this.Id).style.setProperty("display", "none");
            }
        }

        public static GetIdsStack() { //Retorna los id de todos los objetos ComboBox creados.
            return ComboBox.idsStack;
        }

        public GetId() {
            return this.Id;
        }

        public GetMetaObject() {
            return this.MetaObject;
        }

        private RedrawObject() {
            if (this.Enabled) {
                if (this.Lines === 1) {
                    this.SetColor(this.GetColor());
                    this.SetFromBackColor(this.GetFromBackColor());
                    this.SetToBackColor(this.GetToBackColor());
                } else {
                    this.SetListBoxColor(this.GetListBoxColor());
                    this.SetListBoxBackColor(this.GetListBoxBackColor());
                }
            } else {
                if (this.Lines === 1) {
                    this.SetDisabledColor(this.GetDisabledColor());
                    this.SetDisabledFromBackColor(this.GetDisabledFromBackColor());
                    this.SetDisabledToBackColor(this.GetDisabledToBackColor());
                } else {
                    this.SetDisabledListBoxBackColor(this.GetDisabledListBoxBackColor());
                }
            }
        }

        public SetCrossZ(crossZ: boolean) {
            this.CrossZ = crossZ;
            let x: number = this.GetX();
            let y: number = this.GetY();
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,crossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetCrossZ() {
            return this.CrossZ;
        }

        public Raise() {
            this.Raised = true;

            document.getElementById(this.Id).style.setProperty("position", "fixed");
        }

        public Unraise() {
            this.Raised = false;

            document.getElementById(this.Id).style.setProperty("position", "absolute");
        }

        public GetRaised() {
            return this.Raised;
        }

        public Add(caption: string, id: string = "") {
            this.Length++;
            let elementId: string;

            if (id.replace(/ /g, "") == "") {
                elementId = this.Id + String(this.Length);
            } else {
                elementId = id;
            }

            this.comboBoxElementsId.push(elementId);

            //Crear nodo.
            let nodoNuevo = document.createElement("option");
            nodoNuevo.setAttribute("id", elementId);
            nodoNuevo.setAttribute("name", elementId);
            nodoNuevo.setAttribute("value", elementId);
            nodoNuevo.text = caption;
            let nodoPadre = document.getElementById(this.Id);
            nodoPadre.appendChild(nodoNuevo);
        }

        public AddList(lista: string) {
            let elementos = lista.split(",");
            for (let elemento of elementos) {
                this.Add(elemento);
            }
        }

        public GetLength() { //Devuelve el número de elementos.
            return this.Length;
        }

        public SetX(x: number) {
            let X: number = x;
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolx = String(x);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                x -= Table.GetViewFinderX();
                document.getElementById(this.Id).style.left = String(x) + "px";
            }

            this.Display();
        }

        public GetX() {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        }

        public SetY(y: number) {
            let Y: number = y;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitooly = String(y);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetY() {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        }

        public SetZ(z: number) {
            let Z: number = z;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolz = String(z);
            this.Display();
        }

        public GetZ() {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        }

        public SetXYZ(x: number, y: number, z: number) {
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById(this.Id).dataset.scitoolz = String(z);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(x,y,z,Width,Height,CrossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public SetWidth(width: number) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
        }

        public GetWidth() {
            return Number(document.getElementById(this.Id).dataset.scitoolwidth);
        }

        public SetHeight(height: number) {
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        }

        public GetHeight() {
            return Number(document.getElementById(this.Id).dataset.scitoolheight);
        }

        public SetDimensions(width: number, height: number) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        }

        public SetLines(lines: number) {
            this.Lines = lines;
            document.getElementById(this.Id).setAttribute("size", String(this.Lines));
            if (lines === 1) {
                this.SetHeight(Skin.GetComboBoxHeight());
            } else {
                this.SetHeight((Skin.GetComboBoxFontSize() + 4) * lines + 10);
            }
            this.RedrawObject();
        }

        public GetLines() {
            return this.Lines;
        }

        public SetMultiple(multiple: boolean) {
            this.Multiple = multiple;
            if (multiple) {
                if (this.Lines > 1) {
                    document.getElementById(this.Id).setAttribute("multiple", "multiple");
                }
            } else {
                document.getElementById(this.Id).removeAttribute("multiple");
            }
            this.RedrawObject();
        }

        public GetMultiple() {
            return this.Multiple;
        }

        public GetInViewFinder() {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        }

        public SetFontSize(fontSize: number) {
            this.FontSize = fontSize;
            document.getElementById(this.Id).style.fontSize = String(fontSize) + "px";
        }

        public GetFontSize() {
            return this.FontSize;
        }

        public SetFontFamily(fontFamily: string) {
            this.FontFamily = fontFamily;
            document.getElementById(this.Id).style.fontFamily = fontFamily;
        }

        public GetFontFamily() {
            return this.FontFamily;
        }

        public SetVisible(visible: boolean) {
            this.Visible = visible;

            if (visible === true) {
                document.getElementById(this.Id).style.visibility = 'visible';
            } else {
                document.getElementById(this.Id).style.visibility = 'hidden';
            }
        }

        public GetVisible() {
            return this.Visible;
        }

        public SetColor(color: string) {
            this.Color = color;
            if (this.Enabled && this.Lines === 1) {
                document.getElementById(this.Id).style.color = color;
            }
        }

        public GetColor() {
            return this.Color;
        }

        public SetFromBackColor(backColor: string) {
            this.FromBackColor = backColor;
            if (this.Enabled && this.Lines === 1) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.FromBackColor + "), to(" + this.ToBackColor + "))";
            }
        }

        public GetFromBackColor() {
            return this.FromBackColor;
        }

        public SetToBackColor(backColor: string) {
            this.ToBackColor = backColor;
            if (this.Enabled && this.Lines === 1) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.FromBackColor + "), to(" + this.ToBackColor + "))";
            }
        }

        public GetToBackColor() {
            return this.ToBackColor;
        }

        public SetBackColor(value: string) {
            this.FromBackColor = value;
            this.ToBackColor = value;
            if (this.Enabled && this.Lines === 1) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.FromBackColor + "), to(" + this.ToBackColor + "))";
            }
        }

        public SetListBoxColor(color: string) {
            this.ListBoxColor = color;
            if (this.Enabled && this.Lines > 1) {
                document.getElementById(this.Id).style.color = color;
            }
        }

        public GetListBoxColor() {
            return this.ListBoxColor;
        }

        public SetListBoxBackColor(backColor: string) {
            this.ListBoxBackColor = backColor;
            if (this.Enabled && this.Lines > 1) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.ListBoxBackColor + "), to(" + this.ListBoxBackColor + "))";
            }
        }

        public GetListBoxBackColor() {
            return this.ListBoxBackColor;
        }

        public GetBackColor() {
            return this.FromBackColor;
        }

        public SetDisabledColor(color: string) {
            this.DisabledColor = color;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.color = this.DisabledColor;
            }
        }

        public GetDisabledColor() {
            return this.DisabledColor;
        }

        public SetDisabledFromBackColor(fromBackColor: string) {
            this.DisabledFromBackColor = fromBackColor;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.DisabledFromBackColor + "), to(" + this.DisabledToBackColor + "))";
            }
        }

        public GetDisabledFromBackColor() {
            return this.DisabledFromBackColor;
        }

        public SetDisabledToBackColor(toBackColor: string) {
            this.DisabledToBackColor = toBackColor;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.DisabledFromBackColor + "), to(" + this.DisabledToBackColor + "))";
            }
        }

        public GetDisabledToBackColor() {
            return this.DisabledToBackColor;
        }

        public SetDisabledBackColor(value: string) {
            this.DisabledFromBackColor = value;
            this.DisabledToBackColor = value;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.DisabledFromBackColor + "), to(" + this.DisabledToBackColor + "))";
            }
        }

        public GetDisabledBackColor() {
            return this.DisabledFromBackColor;
        }

        public SetDisabledListBoxFromBackColor(fromBackColor: string) {
            this.DisabledListBoxFromBackColor = fromBackColor;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.DisabledListBoxFromBackColor + "), to(" + this.DisabledListBoxToBackColor + "))";
            }
        }

        public GetDisabledListBoxFromBackColor() {
            return this.DisabledListBoxFromBackColor;
        }

        public SetDisabledListBoxToBackColor(toBackColor: string) {
            this.DisabledListBoxToBackColor = toBackColor;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.DisabledListBoxFromBackColor + "), to(" + this.DisabledListBoxToBackColor + "))";
            }
        }

        public GetDisabledListBoxToBackColor() {
            return this.DisabledListBoxToBackColor;
        }

        public SetDisabledListBoxBackColor(value: string) {
            this.DisabledListBoxFromBackColor = value;
            this.DisabledListBoxToBackColor = value;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.backgroundImage = "-webkit-gradient(linear, left top,left bottom, from(" + this.DisabledListBoxFromBackColor + "), to(" + this.DisabledListBoxToBackColor + "))";
            }
        }

        public GetDisabledListBoxBackColor() {
            return this.DisabledListBoxFromBackColor;
        }

        public SetTabIndex(tabIndex: number) {
            this.TabIndex = tabIndex;

            document.getElementById(this.Id).tabIndex = tabIndex;
        }

        public GetTabIndex() {
            return this.TabIndex;
        }

        public RestoreTabIndex() {
            this.SetTabIndex(0);
        }

        public SetZIndex(zIndex: string) {
            this.ZIndex = zIndex;
            document.getElementById(this.Id).style.zIndex = zIndex;
        }

        public GetZIndex() {
            return this.ZIndex;
        }

        public RestoreZIndex() {
            this.SetZIndex("auto");
        }

        public SetName(name: string) {
            this.Name = name;

            document.getElementById(this.Id).setAttribute("name", name);
        }

        public GetName() {
            return this.Name;
        }

        public SetSelected(id: any) { //Acepta listas, valor simple, números y cadena.
            if (this.Multiple === false) { //ComboBox simple.
                if (typeof id === 'number') {
                    (<HTMLInputElement>document.getElementById(this.Id)).value = this.comboBoxElementsId[id - 1];
                } else {
                    (<HTMLInputElement>document.getElementById(this.Id)).value = id;
                }
            } else { //ComboBox múltiple.
                this.Clear();
                if (typeof id === 'number') { //No es una lista, sino solo un valor numérico.
                    (<HTMLDataListElement>document.getElementById(this.Id)).options[id - 1].selected = true;
                } else {
                    let elementos = id.split(",");
                    let elementPosition: number;
                    for (let elemento of elementos) {
                        if (!isNaN(parseInt(elemento))) { //Elemento es un número de posición.
                            elementPosition = elemento;
                        } else { //Elemento es un id.
                            for (let i = 0; i < this.comboBoxElementsId.length; i++) {
                                if (elemento === this.comboBoxElementsId[i]) {
                                    elementPosition = i + 1;
                                    break;
                                }
                            }
                        }
                        (<HTMLDataListElement>document.getElementById(this.Id)).options[elementPosition - 1].selected = true;
                    }
                }
            }
        }

        public AddSelected(id: any) { //Método para ComboBox Múltiples. Acepta listas, valor simple, números y cadena.
            if (this.Multiple === true) {
                if (typeof id === 'number') { //No es una lista, sino solo un valor numérico.
                    (<HTMLDataListElement>document.getElementById(this.Id)).options[id - 1].selected = true;
                } else {
                    let elementos = id.split(",");
                    let elementPosition: number;
                    for (let elemento of elementos) {
                        if (!isNaN(parseInt(elemento))) { //Elemento es un número de posición.
                            elementPosition = elemento;
                        } else { //Elemento es un id.
                            for (let i = 0; i < this.comboBoxElementsId.length; i++) {
                                if (elemento === this.comboBoxElementsId[i]) {
                                    elementPosition = i + 1;
                                    break;
                                }
                            }
                        }
                        (<HTMLDataListElement>document.getElementById(this.Id)).options[elementPosition - 1].selected = true;
                    }
                }
            }
        }

        public Clear() { //En ComboBox múltiples, se eliminan todas las selecciones; para ComboBox simples, se selecciona el primer elemento.
            if (this.Multiple === true) {
                let numElementos: number = (<HTMLDataListElement>document.getElementById(this.Id)).options.length;
                for (let i = 0; i < numElementos; i++) {
                    (<HTMLDataListElement>document.getElementById(this.Id)).options[i].selected = false;
                }
            } else {
                (<HTMLInputElement>document.getElementById(this.Id)).value = this.comboBoxElementsId[0];
            }
        }

        public GetSelected() { //Para ListBox, si ningún elemento está seleccionado, se devuelve False.
            if (this.Lines === 1) {
                return (<HTMLInputElement>document.getElementById(this.Id)).value;
            } else {
                let selectedItems: string[] = [];
                let numElementos: number = (<HTMLDataListElement>document.getElementById(this.Id)).options.length;
                for (let i = 0; i < numElementos; i++) {
                    if ((<HTMLDataListElement>document.getElementById(this.Id)).options[i].selected) {
                        selectedItems.push((<HTMLDataListElement>document.getElementById(this.Id)).options[i].value);
                    }
                }
                if (selectedItems.length > 0) {
                    return selectedItems;
                } else {
                    return false;
                }
            }
        }

        public GetSelectedNumber() { //Para ListBox, si ningún elemento está seleccionado, se devuelve False.
            if (this.Lines === 1) {
                let i: number = 1;
                for (let elemento of this.comboBoxElementsId) {
                    if (elemento === (<HTMLInputElement>document.getElementById(this.Id)).value) {
                        return i;
                    }
                    i++;
                }
            } else {
                let selectedItems: number[] = [];
                let numElementos: number = (<HTMLDataListElement>document.getElementById(this.Id)).options.length;
                for (let i = 0; i < numElementos; i++) {
                    if ((<HTMLDataListElement>document.getElementById(this.Id)).options[i].selected) {
                        selectedItems.push(i+1);
                    }
                }
                if (selectedItems.length > 0) {
                    return selectedItems;
                } else {
                    return false;
                }
            }
        }

        public GetSelectedCaption() { //Para ListBox, si ningún elemento está seleccionado, se devuelve False.
            if (this.Lines === 1) {
                let numElementos: number = (<HTMLDataListElement>document.getElementById(this.Id)).options.length;
                for (let i = 0; i < numElementos; i++) {
                    if ((<HTMLDataListElement>document.getElementById(this.Id)).options[i].selected) {
                        return (<HTMLDataListElement>document.getElementById(this.Id)).options[i].text;
                    }
                }
                return false;
            } else {
                let selectedItems: string[] = [];
                let numElementos: number = (<HTMLDataListElement>document.getElementById(this.Id)).options.length;
                for (let i = 0; i < numElementos; i++) {
                    if ((<HTMLDataListElement>document.getElementById(this.Id)).options[i].selected) {
                        selectedItems.push((<HTMLDataListElement>document.getElementById(this.Id)).options[i].text);
                    }
                }
                if (selectedItems.length > 0) {
                    return selectedItems;
                } else {
                    return false;
                }
            }
        }

        public Empty() {
            let numElementos: number = (<HTMLDataListElement>document.getElementById(this.Id)).options.length;
            let elemento;
            for (let i = 0; i < numElementos; i++) {
                elemento = (<HTMLDataListElement>document.getElementById(this.Id));
                elemento.remove(elemento.options[i]);
            }

            this.comboBoxElementsId = [];
            this.Length = 0;
        }

        public Remove(id: any) { //Acepta número de posición o cadena de id.
            let elemento;
            if (typeof id === 'number') {
                elemento = (<HTMLDataListElement>document.getElementById(this.Id)).options[id - 1];
                elemento.remove(elemento.selectedIndex);
                this.Length--;
            } else {
                for (let i = 0; i < this.comboBoxElementsId.length; i++) {
                    if (id === this.comboBoxElementsId[i]) {
                        elemento = (<HTMLDataListElement>document.getElementById(this.Id)).options[i];
                        elemento.remove(elemento.selectedIndex);
                        this.Length--;
                        break;
                    }
                }
            }
        }

        public SetEnabled(enabled: boolean) {
            this.Enabled = enabled;
            if (enabled) {
                document.getElementById(this.Id).removeAttribute("disabled");
            } else {
                document.getElementById(this.Id).setAttribute("disabled", "disabled");
            }
            this.RedrawObject();
        }

        public GetEnabled() {
            return this.Enabled;
        }

        public SetFocus() {
            document.getElementById(this.Id).focus();
        }

        public Talk(message: string, metaMessage: any = "") {
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    } catch(e) {}
                }
            }
            for (let idMetaobjeto of MetaObject.GetIdsStack()) {
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                } catch(e) {}
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
        }
    }

    export class RadioButtonGroup {
        private Id: string;
        private Name: string;
        private X: number;
        private Y: number;
        private Z: number;
        private Width: number;
        private Height: number;
        private Visible: boolean;
        private Color: string;
        private BackColor: string;
        private DisabledColor: string;
        private Direction: string;
        private TabIndex: number;
        private ZIndex: string;
        private FontSize: number;
        private FontFamily: string;
        private Length: number;
        private CrossZ: boolean;
        private MetaObject: string;

        public static NumberOfUnnamedObjects: number = 0;
        private static idsStack: string[] = [];
        private static optIdsStack: string[] = []; //Lista que guarda los Ids solo de los Option Buttons, sin considerar los Labels asociados.
        private static lblIdsStack: string[] = []; //Lista que guarda los Ids de los Labels asociados a los Option Button.
        private static circleRadioButtonWidth: number = 22; // Ancho reservado para el círculo del RadioButton que antecede al texto.
        private static circleRadioButtonHeight: number = 15; // Alto reservado para el círculo del RadioButton que antecede al texto.
        private elements: object[] = [];

        constructor(metaObject: string, x: number = 0, y: number = 0, z: number = 0, id: string) {
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
            } else {
                this.ZIndex = "auto";
            }
            this.FontSize = Skin.GetRadioButtonFontSize();
            this.FontFamily = Skin.GetRadioButtonFontFamily();
            this.Direction = Const.Vertical;
            this.Length = 0;
        }

        public static GetIdsStack() {
            return RadioButtonGroup.idsStack;
        }

        public static GetOptIdsStack() {
            return RadioButtonGroup.optIdsStack;
        }

        public static GetLabelIdsStack() {
            return RadioButtonGroup.lblIdsStack;
        }

        public GetId() {
            return this.Id;
        }

        public GetMetaObject() {
            return this.MetaObject;
        }

        public Add(caption: string, id: string = "") {
            this.Length++;
            let elementId: string;
            let elementLabelId: string;
            if (id.replace(/ /g, "") == "") {
                elementId = this.Id + String(this.Length);
                elementLabelId = this.Id + "Lbl" + String(this.Length);
            } else {
                elementId = id;
                elementLabelId = "lblOpt" + id;
            }

            let elementData = {
                'Caption': caption,
                'Id': elementId,
                'LabelId': elementLabelId
            }
            this.elements.push(elementData);
            RadioButtonGroup.optIdsStack.push(elementId);
            RadioButtonGroup.lblIdsStack.push(elementLabelId);
            MetaObject_private.AddDataObject(this.MetaObject, elementId, ObjectType.RadioButton);
            MetaObject_private.AddDataObject(this.MetaObject, elementLabelId, ObjectType.AssociatedControl); //Label asociado al Option Button.

            //Crear nodo.
            let X: number;
            let Y: number;
            let Z: number = this.Z;
            let Width: number = this.Width;
            let Height: number = this.Height;

            if (this.Direction == Const.Vertical) {
                X = this.X;
                Y = this.Y + (this.Length - 1) * this.Height;
            } else {
                X = this.X + (this.Length - 1) * this.Width;
                Y = this.Y;
            }
            let nodoNuevo = document.createElement("INPUT");
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
            let nodoAsociado = document.createElement("LABEL");
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
            } else {
                document.getElementById(elementId).style.setProperty("display", "none");
                document.getElementById(elementLabelId).style.setProperty("display", "none");
            }

            document.getElementById(elementId).onclick = () => {
                ////////Activar eventual documento padre de este objeto.
                //Buscar metaobjeto de este objeto.
                let datosObjeto = MetaObject_private.GetObjectsMap().filter((objeto) => {
                    if (objeto["ObjectId"] === this.Id) {
                        return objeto;
                    }
                });

                //Verificar si el metaobjeto es un documento.
                let datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter((objeto) => {
                    if (objeto["ObjectId"] === datosObjeto[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                        return objeto;
                    }
                });
                if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();

                    try {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(this);
                    } catch(e) {}
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                }
                ////////

                try {
                    window[elementId + "_OnClick"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(elementId + "_OnClick");

                try {
                    window[this.Id + "_OnClick"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnClick");
            }
            document.getElementById(elementId).ondblclick = () => {
                try {
                    window[elementId + "_OnDblClick"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(elementId + "_OnDblClick");

                try {
                    window[this.Id + "_OnDblClick"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnDblClick");
            }
            document.getElementById(elementLabelId).ondblclick = () => { // Forzar a lanzar el evento también al operar sobre el Label asociado.
                if (this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnDblClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(elementId + "_OnDblClick");

                    try {
                        window[this.Id + "_OnDblClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnDblClick");
                }
            }
            document.getElementById(elementId).onchange = () => {
                try {
                    window[elementId + "_OnChange"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(elementId + "_OnChange");

                try {
                    window[this.Id + "_OnChange"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnChange");
            }
            document.getElementById(elementId).onfocus = () => {
                try {
                    window[elementId + "_OnFocus"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(elementId + "_OnFocus");

                try {
                    window[this.Id + "_OnFocus"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnFocus");
            }
            document.getElementById(elementId).onmouseover = () => {
                try {
                    window[elementId + "_OnMouseOver"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(elementId + "_OnMouseOver");

                try {
                    window[this.Id + "_OnMouseOver"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseOver");
            }
            document.getElementById(elementLabelId).onmouseover = () => { //Forzar a lanzar el evento también al operar sobre el Label asociado.
                if (this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnMouseOver"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(elementId + "_OnMouseOver");

                    try {
                        window[this.Id + "_OnMouseOver"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseOver");
                }
            }
            document.getElementById(elementId).onmousemove = () => {
                try {
                    window[elementId + "_OnMouseMove"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(elementId + "_OnMouseMove");

                try {
                    window[this.Id + "_OnMouseMove"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseMove");
            }
            document.getElementById(elementLabelId).onmousemove = () => { //Forzar a lanzar el evento también al operar sobre el Label asociado.
                if (this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnMouseMove"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(elementId + "_OnMouseMove");

                    try {
                        window[this.Id + "_OnMouseMove"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseMove");
                }
            }
            document.getElementById(elementId).onmousedown = () => {
                try {
                    window[elementId + "_OnMouseDown"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(elementId + "_OnMouseDown");

                try {
                    window[this.Id + "_OnMouseDown"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseDown");
            }
            document.getElementById(elementLabelId).onmousedown = () => { //Forzar a lanzar el evento también al operar sobre el Label asociado.
                if (this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnMouseDown"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(elementId + "_OnMouseDown");

                    try {
                        window[this.Id + "_OnMouseDown"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseDown");
                }
            }
            document.getElementById(elementId).onmouseup = () => {
                try {
                    window[elementId + "_OnMouseUp"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(elementId + "_OnMouseUp");

                try {
                    window[this.Id + "_OnMouseUp"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseUp");
            }
            document.getElementById(elementLabelId).onmouseup = () => { //Forzar a lanzar el evento también al operar sobre el Label asociado.
                if (this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnMouseUp"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(elementId + "_OnMouseUp");

                    try {
                        window[this.Id + "_OnMouseUp"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseUp");
                }
            }
            document.getElementById(elementId).onmouseout = () => {
                try {
                    window[elementId + "_OnMouseOut"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(elementId + "_OnMouseOut");

                try {
                    window[this.Id + "_OnMouseOut"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseOut");
            }
            document.getElementById(elementLabelId).onmouseout = () => { //Forzar a lanzar el evento también al operar sobre el Label asociado.
                if (this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnMouseOut"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(elementId + "_OnMouseOut");

                    try {
                        window[this.Id + "_OnMouseOut"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseOut");
                }
            }
            document.getElementById(elementId).onkeydown = (evt) => {
                try {
                    window[elementId + "_OnKeyDown"].call(this,evt);
                } catch(e) {}
                window[this.Id].Talk(elementId + "_OnKeyDown");

                try {
                    window[this.Id + "_OnKeyDown"].call(this,evt);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnKeyDown");
            }
            document.getElementById(elementId).onkeypress = (evt) => {
                try {
                    window[elementId + "_OnKeyPress"].call(this,evt);
                } catch(e) {}
                window[this.Id].Talk(elementId + "_OnKeyPress");

                try {
                    window[this.Id + "_OnKeyPress"].call(this,evt);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnKeyPress");
            }
            document.getElementById(elementId).onkeyup = (evt) => {
                try {
                    window[elementId + "_OnKeyUp"].call(this,evt);
                } catch(e) {}
                window[this.Id].Talk(elementId + "_OnKeyUp");

                try {
                    window[this.Id + "_OnKeyUp"].call(this,evt);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnKeyUp");
            }
        }

        public AddList(lista: string) {
            let elementos = lista.split(",");
            for (let elemento of elementos) {
                this.Add(elemento);
            }
        }

        public Clear() {
            for (let elementData of this.elements) {
                (<HTMLInputElement>document.getElementById(elementData["Id"])).checked = false;
            }
        }

        public GetLength() { //Devuelve el número de elementos.
            return this.Length;
        }

        public GetElements() {
            return this.elements;
        }

        public SetDirection(direction: string) {
            if (direction === Const.Horizontal || direction === Const.Vertical) {
                this.Direction = direction;

                let X: number;
                let Y: number;
                let incrementoX: number;
                let incrementoY: number;
                if (this.Direction == Const.Vertical) {
                    incrementoX = 0;
                    incrementoY = this.Height;
                } else {
                    incrementoX = this.Width;
                    incrementoY = 0;
                }
                let i: number = 0;
                for (let elementData of this.elements) {
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
        }

        public GetDirection() {
            return this.Direction;
        }

        public SetCrossZ(crossZ: boolean) {
            this.CrossZ = crossZ;

            let i: number = 0;
            for (let elementData of this.elements) {
                document.getElementById(elementData["Id"]).dataset.scitoolcrossz = String(crossZ);
                document.getElementById(elementData["LabelId"]).dataset.scitoolcrossz = String(crossZ);
                i++;
            }
            this.RedrawRadioButtonGroup();
        }

        public GetCrossZ() {
            return this.CrossZ;
        }

        public SetX(x: number) {
            this.X = x;
            let X: number;
            let Y: number;
            let incrementoX: number;
            let incrementoY: number;
            if (this.Direction == Const.Vertical) {
                incrementoX = 0;
                incrementoY = this.Height;
            } else {
                incrementoX = this.Width;
                incrementoY = 0;
            }

            let i: number = 0;
            for (let elementData of this.elements) {
                X = this.X + i * incrementoX;
                Y = this.Y + i * incrementoY;
                document.getElementById(elementData["Id"]).dataset.scitoolx = String(X);
                document.getElementById(elementData["LabelId"]).dataset.scitoolx = String(X + RadioButtonGroup.circleRadioButtonWidth);
                i++;
            }
            this.RedrawRadioButtonGroup();
        }

        public GetX() {
            return this.X;
        }

        public SetY(y: number) {
            this.Y = y;
            let X: number;
            let Y: number;
            let incrementoX: number;
            let incrementoY: number;
            if (this.Direction == Const.Vertical) {
                incrementoX = 0;
                incrementoY = this.Height;
            } else {
                incrementoX = this.Width;
                incrementoY = 0;
            }

            let i: number = 0;
            for (let elementData of this.elements) {
                X = this.X + i * incrementoX;
                Y = this.Y + i * incrementoY;
                document.getElementById(elementData["Id"]).dataset.scitooly = String(Y);
                document.getElementById(elementData["LabelId"]).dataset.scitooly = String(Y);
                i++;
            }
            this.RedrawRadioButtonGroup();
        }

        public GetY() {
            return this.Y;
        }

        public SetZ(z: number) {
            this.Z = z;
            for (let elementData of this.elements) {
                document.getElementById(elementData["Id"]).dataset.scitoolz = String(this.Z);
                document.getElementById(elementData["LabelId"]).dataset.scitoolz = String(this.Z);
            }
            this.RedrawRadioButtonGroup();
        }

        public GetZ() {
            return this.Z;
        }

        public SetXYZ(x: number, y: number, z: number) {
            this.X = x;
            this.Y = y;
            this.Z = z;
            let X: number;
            let Y: number;
            let incrementoX: number;
            let incrementoY: number;
            if (this.Direction == Const.Vertical) {
                incrementoX = 0;
                incrementoY = this.Height;
            } else {
                incrementoX = this.Width;
                incrementoY = 0;
            }

            let i: number = 0;
            for (let elementData of this.elements) {
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
        }

        private RedrawRadioButtonGroup() {
            let X: number;
            let Y: number;
            let Z: number = this.Z;
            let incrementoX: number;
            let incrementoY: number;

            if (this.Direction == Const.Vertical) {
                incrementoX = 0;
                incrementoY = this.Height;
            } else {
                incrementoX = this.Width;
                incrementoY = 0;
            }

            let i: number = 0;
            for (let elementData of this.elements) {
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
                } else {
                    document.getElementById(elementData["Id"]).style.setProperty("display", "none");
                    document.getElementById(elementData["LabelId"]).style.setProperty("display", "none");
                }
                i++;
            }
        }

        public SetWidth(width: number) {
            this.Width = width;

            for (let elementData of this.elements) {
                document.getElementById(elementData["LabelId"]).dataset.scitoolwidth = String(this.Width - RadioButtonGroup.circleRadioButtonWidth);
                document.getElementById(elementData["LabelId"]).style.width = String(this.Width - RadioButtonGroup.circleRadioButtonWidth) + "px";
            }

            this.RedrawRadioButtonGroup();
        }

        public GetWidth() {
            return this.Width;
        }

        public SetHeight(height: number) {
            this.Height = height;

            for (let elementData of this.elements) {
                document.getElementById(elementData["LabelId"]).dataset.scitoolheight = String(this.Height);
                document.getElementById(elementData["LabelId"]).style.height = String(this.Height) + "px";
            }

            this.RedrawRadioButtonGroup();
        }

        public GetHeight() {
            return this.Height;
        }

        public SetDimensions(width: number, height: number) {
            this.Width = width;
            this.Height = height;

            for (let elementData of this.elements) {
                document.getElementById(elementData["LabelId"]).dataset.scitoolwidth = String(this.Width - RadioButtonGroup.circleRadioButtonWidth);
                document.getElementById(elementData["LabelId"]).style.width = String(this.Width - RadioButtonGroup.circleRadioButtonWidth) + "px";
                document.getElementById(elementData["LabelId"]).dataset.scitoolheight = String(this.Height);
                document.getElementById(elementData["LabelId"]).style.height = String(this.Height) + "px";
            }

            this.RedrawRadioButtonGroup();
        }

        public GetInViewFinder() { //Si al menos un elemento está en InViewFinder, entonces el grupo está InViewFinder y se devuelve true.
            let X: number;
            let Y: number;
            let Z: number = this.Z;
            let incrementoX: number;
            let incrementoY: number;

            if (this.Direction == Const.Vertical) {
                incrementoX = 0;
                incrementoY = this.Height;
            } else {
                incrementoX = this.Width;
                incrementoY = 0;
            }

            let i: number = 0;
            for (let elementData of this.elements) {
                X = this.X + i * incrementoX;
                Y = this.Y + i * incrementoY;
                if (Table.InViewFinder(X, Y, Z, this.Width, this.Height, this.CrossZ)) {
                    return true;
                }
                i++;
            }
            return false;
        }

        public SetVisible(visible: boolean) {
            this.Visible = visible;

            let visibilidad: string;

            if (visible === true) {
                visibilidad = 'visible';
            } else {
                visibilidad = 'hidden';
            }

            for (let elementData of this.elements) {
                document.getElementById(elementData["Id"]).style.visibility = visibilidad;
                document.getElementById(elementData["LabelId"]).style.visibility = visibilidad;
            }
        }

        public GetVisible() {
            return this.Visible;
        }

        public SetColor(color: string) {
            this.Color = color;

            for (let elementData of this.elements) {
                if (this.GetEnabled(elementData["Id"])) {
                    document.getElementById(elementData["LabelId"]).style.color = color;
                }
            }
        }

        public GetColor() {
            return this.Color;
        }

        public SetBackColor(backColor: string) {
            this.BackColor = backColor;

            for (let elementData of this.elements) {
                if (this.GetEnabled(elementData["Id"])) {
                    document.getElementById(elementData["LabelId"]).style.backgroundColor = backColor;
                }
            }
        }

        public GetBackColor() {
            return this.BackColor;
        }

        public SetTabIndex(tabIndex: number) {
            if (this.Length >= 1) {
                this.TabIndex = tabIndex;
                document.getElementById(this.elements[0]["Id"]).tabIndex = tabIndex;
            }
        }

        public GetTabIndex() {
            return this.TabIndex;
        }

        public RestoreTabIndex() {
            this.SetTabIndex(0);
        }

        public SetZIndex(zIndex: string) {
            this.ZIndex = zIndex;
            for (let elementData of this.elements) {
                document.getElementById(elementData["Id"]).style.zIndex = zIndex;
                if (!isNaN(Number(zIndex))) {
                    zIndex = String(Number(zIndex) + 1);
                }
                document.getElementById(elementData["LabelId"]).style.zIndex = zIndex;
                if (!isNaN(Number(zIndex))) {
                    zIndex = String(Number(zIndex) + 1);
                }
            }
        }

        public GetZIndex() {
            return this.ZIndex;
        }

        public RestoreZIndex() {
            this.SetZIndex("auto");
        }

        public GetFontSize() {
            return this.FontSize;
        }

        public SetFontFamily(fontFamily: string) {
            this.FontFamily = fontFamily;

            for (let elementData of this.elements) {
                document.getElementById(elementData["LabelId"]).style.fontFamily = fontFamily;
            }
        }

        public GetFontFamily() {
            return this.FontFamily;
        }

        public SetSelected(id: any, selected: boolean) { //El id puede ser un Number o un String, según si se da el número de elemento o su Id.
            if (typeof id === 'number') {
                (<HTMLInputElement>document.getElementById(this.elements[id - 1]["Id"])).checked = selected;
            } else {
                (<HTMLInputElement>document.getElementById(id)).checked = selected;
            }
        }

        public GetSelected() {
            for (let elementData of this.elements) {
                if ((<HTMLInputElement>document.getElementById(elementData["Id"])).checked === true) {
                    return (<HTMLInputElement>document.getElementById(elementData["Id"])).value;
                }
            }
            return false;
        }

        public GetSelectedNumber() {
            let i: number = 1;
            for (let elementData of this.elements) {
                if ((<HTMLInputElement>document.getElementById(elementData["Id"])).checked === true) {
                    return i;
                }
                i++;
            }
            return false;
        }

        public SetEnabled(id: any = "", enabled: boolean) { //El id puede ser un Number o un String, según si se da el número de elemento o su Id.
            //TRUCO para hacer al parámetro id opcional: si solo se recibe un único parámetro booleano, entonces ese valor viene en el parámetro id y enabled viene undefined,
            //entonces, se hace enabled = id y se aplica el valor true o false guardado en enabled a todos los elementos del grupo.
            if (enabled !== undefined) {
                if (enabled) {
                    if (typeof id === 'number') {
                        document.getElementById(this.elements[id - 1]["Id"]).removeAttribute("disabled");
                    } else {
                        document.getElementById(id).removeAttribute("disabled");
                    }
                    this.SetColor(this.GetColor());
                    this.SetBackColor(this.GetBackColor());
                } else {
                    if (typeof id === 'number') {
                        document.getElementById(this.elements[id - 1]["Id"]).setAttribute("disabled", "disabled");
                    } else {
                        document.getElementById(id).setAttribute("disabled", "disabled");
                    }
                    this.SetDisabledColor(this.GetDisabledColor());
                    this.SetBackColor(this.GetBackColor());
                }
            } else {
                enabled = id; //Solo vino un parámetro: el booleano, para enabled, pero vino, por tanto, en el parámetro id.
                if (enabled) {
                    for (let elementData of this.elements) {
                        document.getElementById(elementData["Id"]).removeAttribute("disabled");
                        document.getElementById(elementData["LabelId"]).style.color = this.GetColor();
                        document.getElementById(elementData["LabelId"]).style.backgroundColor = this.GetBackColor();
                    }
                } else {
                    for (let elementData of this.elements) {
                        document.getElementById(elementData["Id"]).setAttribute("disabled", "disabled");
                        document.getElementById(elementData["LabelId"]).style.color = this.GetDisabledColor();
                        document.getElementById(elementData["LabelId"]).style.backgroundColor = this.GetBackColor();
                    }
                }
            }
        }

        public GetEnabled(id: any) { //El id puede ser un Number o un String, según si se da el número de elemento o su Id.
            if (typeof id === 'number') {
                if (document.getElementById(this.elements[id - 1]["Id"]).getAttribute("disabled") === null) {
                    return true;
                } else {
                    return false;
                }
            } else {
                if (document.getElementById(id).getAttribute("disabled") === null) {
                    return true;
                } else {
                    return false;
                }
            }
        }

        public SetDisabledColor(color: string) {
            this.DisabledColor = color;

            let i: number = 0;
            for (let elementData of this.elements) {
                if (!this.GetEnabled(elementData["Id"])) {
                    document.getElementById(elementData["LabelId"]).style.color = color;
                }
                i++;
            }
        }

        public GetDisabledColor() {
            return this.DisabledColor;
        }

        public SetFocus() {
            document.getElementById(this.elements[0]["Id"]).focus();
        }

        public Talk(message: string, metaMessage: any = "") {
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    } catch(e) {}
                }
            }
            for (let idMetaobjeto of MetaObject.GetIdsStack()) {
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                } catch(e) {}
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
        }
    }

    export class File {
        private Id: string;
        private Visible: boolean;
        private Color: string;
        private BackColor: string;
        private DisabledColor: string;
        private DisabledBackColor: string;
        private TabIndex: number;
        private ZIndex: string;
        private Name: string;
        private Enabled: boolean;
        private FontSize: number;
        private FontFamily: string;
        private CrossZ: boolean;
        private MetaObject: string;

        public static NumberOfUnnamedObjects: number = 0;
        private static idsStack: string[] = [];

        constructor(metaObject: string, x: number = 0, y: number = 0, z: number = 0, id: string) {
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
            } else {
                this.ZIndex = "auto";
            }
            this.Name = this.Id;
            this.Enabled = true;

            //Crear nodo formulario al cual pertenecerá el control file.
            let nodoFormNuevo = document.createElement("FORM");
            nodoFormNuevo.setAttribute("id", "form" + this.Id);
            nodoFormNuevo.setAttribute("name", "form" + this.Name);
            nodoFormNuevo.setAttribute("enctype", "multipart/form-data");
            document.body.appendChild(nodoFormNuevo);

            //Crear nodo del control file y añadirlo al form.
            let nodoNuevo = document.createElement("INPUT");
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

            document.getElementById(this.Id).onclick = () => {
                ////////Activar eventual documento padre de este objeto.
                //Buscar metaobjeto de este objeto.
                let datosObjeto = MetaObject_private.GetObjectsMap().filter((objeto) => {
                    if (objeto["ObjectId"] === this.Id) {
                        return objeto;
                    }
                });

                //Verificar si el metaobjeto es un documento.
                let datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter((objeto) => {
                    if (objeto["ObjectId"] === datosObjeto[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                        return objeto;
                    }
                });
                if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();

                    try {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(this);
                    } catch(e) {}
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                }
                ////////

                try {
                    window[this.Id + "_OnClick"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnClick");
            }
            document.getElementById(this.Id).ondblclick = () => {
                try {
                    window[this.Id + "_OnDblClick"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnDblClick");
            }
            document.getElementById(this.Id).onfocus = () => {
                try {
                    window[this.Id + "_OnFocus"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnFocus");
            }
            document.getElementById(this.Id).onmouseover = () => {
                try {
                    window[this.Id + "_OnMouseOver"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseOver");
            }
            document.getElementById(this.Id).onmousemove = () => {
                try {
                    window[this.Id + "_OnMouseMove"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseMove");
            }
            document.getElementById(this.Id).onmousedown = () => {
                try {
                    window[this.Id + "_OnMouseDown"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseDown");
            }
            document.getElementById(this.Id).onmouseup = () => {
                try {
                    window[this.Id + "_OnMouseUp"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseUp");
            }
            document.getElementById(this.Id).onmouseout = () => {
                try {
                    window[this.Id + "_OnMouseOut"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnMouseOut");
            }
            document.getElementById(this.Id).onkeydown = (evt) => {
                try {
                    window[this.Id + "_OnKeyDown"].call(this,evt);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnKeyDown");
            }
            document.getElementById(this.Id).onkeypress = (evt) => {
                try {
                    window[this.Id + "_OnKeyPress"].call(this,evt);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnKeyPress");
            }
            document.getElementById(this.Id).onkeyup = (evt) => {
                try {
                    window[this.Id + "_OnKeyUp"].call(this,evt);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnKeyUp");
            }
            document.getElementById(this.Id).onblur = () => {
                try {
                    window[this.Id + "_OnBlur"].apply(this);
                } catch(e) {}
                window[this.Id].Talk(this.Id + "_OnBlur");
            }
        }

        private Display() {
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                document.getElementById(this.Id).style.removeProperty("display");
            } else {
                document.getElementById(this.Id).style.setProperty("display", "none");
            }
        }

        public static GetIdsStack() { //Retorna los id de todos los objetos File creados.
            return File.idsStack;
        }

        public GetId() {
            return this.Id;
        }

        public GetMetaObject() {
            return this.MetaObject;
        }

        private RedrawObject() {
            if (this.Enabled) {
                this.SetColor(this.GetColor());
                this.SetBackColor(this.GetBackColor());
            } else {
                this.SetDisabledColor(this.GetDisabledColor());
                this.SetDisabledBackColor(this.GetDisabledBackColor());
            }
        }

        public GetFile() { // Devuelve el archivo seleccionado por el usuario.
            let input = <HTMLInputElement>document.getElementById(this.Id)

            if (input.files && input.files[0]) {
                return input.files[0]
            } else {
                return false
            }
        }

        public GetFileName() { // Devuelve el nombre del archivo seleccionado por el usuario.
            let input = <HTMLInputElement>document.getElementById(this.Id)

            if (input.files && input.files[0]) {
                return input.files[0].name
            } else {
                return false
            }
        }

        public GetFileType() { // Devuelve el tipo MIME del archivo seleccionado por el usuario.
            let input = <HTMLInputElement>document.getElementById(this.Id)

            if (input.files && input.files[0]) {
                return input.files[0].type
            } else {
                return false
            }
        }

        public SetCrossZ(crossZ: boolean) {
            this.CrossZ = crossZ;
            let x: number = this.GetX();
            let y: number = this.GetY();
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,crossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetCrossZ() {
            return this.CrossZ;
        }

        public SetX(x: number) {
            let X: number = x;
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolx = String(x);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                x -= Table.GetViewFinderX();
                document.getElementById(this.Id).style.left = String(x) + "px";
            }

            this.Display();
        }

        public GetX() {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        }

        public SetY(y: number) {
            let Y: number = y;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitooly = String(y);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetY() {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        }

        public SetZ(z: number) {
            let Z: number = z;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolz = String(z);
            this.Display();
        }

        public GetZ() {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        }

        public SetXYZ(x: number, y: number, z: number) {
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById(this.Id).dataset.scitoolz = String(z);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(x,y,z,Width,Height,CrossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public SetWidth(width: number) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
        }

        public GetWidth() {
            return Number(document.getElementById(this.Id).dataset.scitoolwidth);
        }

        public SetHeight(height: number) {
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        }

        public GetHeight() {
            return Number(document.getElementById(this.Id).dataset.scitoolheight);
        }

        public SetDimensions(width: number, height: number) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width);
            document.getElementById(this.Id).style.width = String(width) + "px";
            document.getElementById(this.Id).dataset.scitoolheight = String(height);
            document.getElementById(this.Id).style.height = String(height) + "px";
        }

        public GetInViewFinder() {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        }

        public SetVisible(visible: boolean) {
            this.Visible = visible;

            if (visible === true) {
                document.getElementById(this.Id).style.visibility = 'visible';
            } else {
                document.getElementById(this.Id).style.visibility = 'hidden';
            }
        }

        public GetVisible() {
            return this.Visible;
        }

        public SetColor(color: string) {
            this.Color = color;
            if (this.Enabled) {
                document.getElementById(this.Id).style.color = color;
            }
        }

        public GetColor() {
            return this.Color;
        }

        public SetBackColor(backcolor: string) {
            this.BackColor = backcolor;
            if (this.Enabled) {
                document.getElementById(this.Id).style.backgroundColor = this.BackColor;
            }
        }

        public GetBackColor() {
            return this.BackColor;
        }

        public SetDisabledColor(color: string) {
            this.DisabledColor = color;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.color = color;
            }
        }

        public GetDisabledColor() {
            return this.DisabledColor;
        }

        public SetDisabledBackColor(backColor: string) {
            this.DisabledBackColor = backColor;
            if (!this.Enabled) {
                document.getElementById(this.Id).style.backgroundColor = this.DisabledBackColor;
            }
        }

        public GetDisabledBackColor() {
            return this.DisabledBackColor;
        }

        public SetTabIndex(tabIndex: number) {
            this.TabIndex = tabIndex;
            document.getElementById(this.Id).tabIndex = tabIndex;
        }

        public GetTabIndex() {
            return this.TabIndex;
        }

        public RestoreTabIndex() {
            this.SetTabIndex(0);
        }

        public SetZIndex(zIndex: string) {
            this.ZIndex = zIndex;
            document.getElementById(this.Id).style.zIndex = zIndex;
        }

        public GetZIndex() {
            return this.ZIndex;
        }

        public RestoreZIndex() {
            this.SetZIndex("auto");
        }

        public SetName(name: string) {
            this.Name = name;
            document.getElementById(this.Id).setAttribute("name", name);
        }

        public GetName() {
            return this.Name;
        }

        public SetEnabled(enabled: boolean) {
            this.Enabled = enabled;
            if (enabled) {
                document.getElementById(this.Id).removeAttribute("disabled");
            } else {
                document.getElementById(this.Id).setAttribute("disabled", "disabled");
            }
            this.RedrawObject();
        }

        public GetEnabled() {
            return this.Enabled;
        }

        public SetFontSize(fontSize: number) {
            this.FontSize = fontSize;
            document.getElementById(this.Id).style.fontSize = String(fontSize) + "px";
        }

        public GetFontSize() {
            return this.FontSize;
        }

        public SetFontFamily(fontFamily: string) {
            this.FontFamily = fontFamily;
            document.getElementById(this.Id).style.fontFamily = fontFamily;
        }

        public GetFontFamily() {
            return this.FontFamily;
        }

        public SetFocus() {
            document.getElementById(this.Id).focus();
        }

        public Clear() {
            let formulario = <HTMLFormElement>document.getElementById("form" + this.Id);
            formulario.reset();
        }

        public Talk(message: string, metaMessage: any = "") {
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    } catch(e) {}
                }
            }
            for (let idMetaobjeto of MetaObject.GetIdsStack()) {
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                } catch(e) {}
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
        }
    }

    export class Canvas {
        private Id: string;
        private Visible: boolean;
        private Width: number;
        private Height: number;
        private TabIndex: number;
        private CrossZ: boolean;
        private ZIndex: string;
        private MetaObject: string;
        private Enabled: boolean;

        public static NumberOfUnnamedObjects: number = 0;
        private static idsStack: string[] = [];

        constructor(metaObject: string, x: number = 0, y: number = 0, z: number = 0, width: number = 0, height: number = 0, id: string) {
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
            } else {
                this.ZIndex = "auto";
            }
            this.Enabled = true;

            //Crear nodo Canvas.
            let nodoNuevo = document.createElement("CANVAS");
            nodoNuevo.setAttribute("id", this.Id);
            nodoNuevo.dataset.scitoolx = String(x);
            nodoNuevo.dataset.scitooly = String(y);
            nodoNuevo.dataset.scitoolz = String(z);
            nodoNuevo.dataset.scitoolwidth = String(width);
            nodoNuevo.dataset.scitoolheight = String(height);
            nodoNuevo.setAttribute("width",String(width)+"px");
            nodoNuevo.setAttribute("height",String(height)+"px");
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

            document.getElementById(this.Id).onclick = () => {
                if (this.Enabled) {
                    ////////Activar eventual documento padre de este objeto.
                    //Buscar metaobjeto de este objeto.
                    let datosObjeto = MetaObject_private.GetObjectsMap().filter((objeto) => {
                        if (objeto["ObjectId"] === this.Id) {
                            return objeto;
                        }
                    });

                    //Verificar si el metaobjeto es un documento.
                    let datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter((objeto) => {
                        if (objeto["ObjectId"] === datosObjeto[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                            return objeto;
                        }
                    });
                    if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();

                        try {
                            window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(this);
                        } catch(e) {}
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                    }
                    ////////

                    try {
                        window[this.Id + "_OnClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnClick");
                }
            }
            document.getElementById(this.Id).ondblclick = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnDblClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnDblClick");
                }
            }
            document.getElementById(this.Id).onfocus = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnFocus"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnFocus");
                }
            }
            document.getElementById(this.Id).onmouseover = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseOver"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseOver");
                }
            }
            document.getElementById(this.Id).onmousemove = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseMove"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseMove");
                }
            }
            document.getElementById(this.Id).onmousedown = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseDown"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseDown");
                }
            }
            document.getElementById(this.Id).onmouseup = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseUp"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseUp");
                }
            }
            document.getElementById(this.Id).onmouseout = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseOut"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseOut");
                }
            }
            document.getElementById(this.Id).onkeydown = (evt) => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnKeyDown"].call(this,evt);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnKeyDown");
                }
            }
            document.getElementById(this.Id).onkeypress = (evt) => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnKeyPress"].call(this,evt);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnKeyPress");
                }
            }
            document.getElementById(this.Id).onkeyup = (evt) => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnKeyUp"].call(this,evt);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnKeyUp");
                }
            }
            document.getElementById(this.Id).onblur = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnBlur"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnBlur");
                }
            }
        }

        private Display() {
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                document.getElementById(this.Id).style.removeProperty("display");
            } else {
                document.getElementById(this.Id).style.setProperty("display", "none");
            }
        }

        public static GetIdsStack() { //Retorna los id de todos los objetos Canvas creados.
            return Canvas.idsStack;
        }

        public GetId() {
            return this.Id;
        }

        public GetMetaObject() {
            return this.MetaObject;
        }

        public GetWidth() {
            return this.Width;
        }

        public GetHeight() {
            return this.Height;
        }

        public Erase() {
            let canvas = document.getElementById(this.Id);
            let figura = (<HTMLCanvasElement>canvas).getContext('2d');
            figura.clearRect(0, 0, this.Width, this.Height);
        }

        public SetCrossZ(crossZ: boolean) {
            this.CrossZ = crossZ;
            let x: number = this.GetX();
            let y: number = this.GetY();
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,crossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetCrossZ() {
            return this.CrossZ;
        }

        public SetX(x: number) {
            let X: number = x;
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolx = String(x);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                x -= Table.GetViewFinderX();
                document.getElementById(this.Id).style.left = String(x) + "px";
            }

            this.Display();
        }

        public GetX() {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        }

        public SetY(y: number) {
            let Y: number = y;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitooly = String(y);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetY() {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        }

        public SetZ(z: number) {
            let Z: number = z;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolz = String(z);
            this.Display();
        }

        public GetZ() {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        }

        public SetXYZ(x: number, y: number, z: number) {
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById(this.Id).dataset.scitoolz = String(z);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(x,y,z,Width,Height,CrossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetInViewFinder() {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        }

        public SetVisible(visible: boolean) {
            this.Visible = visible;

            if (visible === true) {
                document.getElementById(this.Id).style.visibility = 'visible';
            } else {
                document.getElementById(this.Id).style.visibility = 'hidden';
            }
        }

        public GetVisible() {
            return this.Visible;
        }

        public SetTabIndex(tabIndex: number) {
            this.TabIndex = tabIndex;

            document.getElementById(this.Id).tabIndex = tabIndex;
        }

        public GetTabIndex() {
            return this.TabIndex;
        }

        public RestoreTabIndex() {
            this.SetTabIndex(-1);
        }

        public SetZIndex(zIndex: string) {
            this.ZIndex = zIndex;
            document.getElementById(this.Id).style.zIndex = zIndex;
        }

        public GetZIndex() {
            return this.ZIndex;
        }

        public RestoreZIndex() {
            this.SetZIndex("auto");
        }

        public SetEnabled(enabled: boolean) {
            this.Enabled = enabled;

            if (enabled) {
                document.getElementById(this.Id).removeAttribute("disabled");
            } else {
                document.getElementById(this.Id).setAttribute("disabled", "disabled");
            }
        }

        public GetEnabled() {
            return this.Enabled;
        }

        public SetFocus() {
            document.getElementById(this.Id).focus();
        }

        public Talk(message: string, metaMessage: any = "") {
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    } catch(e) {}
                }
            }
            for (let idMetaobjeto of MetaObject.GetIdsStack()) {
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                } catch(e) {}
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
        }
    }

    export class Box {
        private Id: string;
        private Visible: boolean;
        private BorderColor: string;
        private FillColor: string;
        private Width: number;
        private Height: number;
        private BorderWidth: number;
        private TabIndex: number;
        private CrossZ: boolean;
        private ZIndex: string;
        private MetaObject: string;
        private Enabled: boolean;
        private Raised: boolean;

        public static NumberOfUnnamedObjects: number = 0;
        private static idsStack: string[] = [];

        constructor(metaObject: string, x: number = 0, y: number = 0, z: number = 0, width: number = 0, height: number = 0, borderWidth: number = Skin.GetBoxBorderWidth(), borderColor: string = Skin.GetBoxBorderColor(), fillColor: string = Skin.GetBoxFillColor(), id: string) {
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
            } else {
                this.ZIndex = "auto";
            }
            this.Enabled = true;
            this.Raised = false;

            //Crear nodo Canvas.
            let nodoNuevo = document.createElement("CANVAS");
            nodoNuevo.setAttribute("id", this.Id);
            nodoNuevo.dataset.scitoolx = String(x);
            nodoNuevo.dataset.scitooly = String(y);
            nodoNuevo.dataset.scitoolz = String(z);
            nodoNuevo.dataset.scitoolwidth = String(width);
            nodoNuevo.dataset.scitoolheight = String(height);
            nodoNuevo.setAttribute("width",String(width)+"px");
            nodoNuevo.setAttribute("height",String(height)+"px");
            nodoNuevo.style.setProperty("position", "absolute");
            nodoNuevo.style.setProperty("display", "none");
            nodoNuevo.style.outline = "0";
            document.body.appendChild(nodoNuevo);

            //Crear nodo para la figura.
            if ((<HTMLCanvasElement>nodoNuevo).getContext) {
                let figura = (<HTMLCanvasElement>nodoNuevo).getContext('2d');
                figura.fillStyle = borderColor;
                figura.fillRect(0,0,width,height);
                figura.fillStyle = fillColor;
                figura.fillRect(borderWidth,borderWidth,width-2*borderWidth,height-2*borderWidth);
            }

            //Implementar en el DOM las otras propiedades en el nodo.
            this.SetX(this.GetX());
            this.SetY(this.GetY());
            this.SetZ(this.GetZ());
            this.SetVisible(this.GetVisible());
            this.SetTabIndex(this.GetTabIndex());
            this.SetZIndex(this.GetZIndex());
            this.SetCrossZ(this.GetCrossZ());

            document.getElementById(this.Id).onclick = () => {
                if (this.Enabled) {
                    ////////Activar eventual documento padre de este objeto.
                    //Buscar metaobjeto de este objeto.
                    let datosObjeto = MetaObject_private.GetObjectsMap().filter((objeto) => {
                        if (objeto["ObjectId"] === this.Id) {
                            return objeto;
                        }
                    });

                    //Verificar si el metaobjeto es un documento.
                    let datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter((objeto) => {
                        if (objeto["ObjectId"] === datosObjeto[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                            return objeto;
                        }
                    });
                    if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();

                        try {
                            window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(this);
                        } catch(e) {}
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                    }
                    ////////

                    try {
                        window[this.Id + "_OnClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnClick");
                }
            }
            document.getElementById(this.Id).ondblclick = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnDblClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnDblClick");
                }
            }
            document.getElementById(this.Id).onfocus = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnFocus"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnFocus");
                }
            }
            document.getElementById(this.Id).onmouseover = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseOver"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseOver");
                }
            }
            document.getElementById(this.Id).onmousemove = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseMove"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseMove");
                }
            }
            document.getElementById(this.Id).onmousedown = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseDown"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseDown");
                }
            }
            document.getElementById(this.Id).onmouseup = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseUp"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseUp");
                }
            }
            document.getElementById(this.Id).onmouseout = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseOut"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseOut");
                }
            }
            document.getElementById(this.Id).onkeydown = (evt) => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnKeyDown"].call(this,evt);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnKeyDown");
                }
            }
            document.getElementById(this.Id).onkeypress = (evt) => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnKeyPress"].call(this,evt);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnKeyPress");
                }
            }
            document.getElementById(this.Id).onkeyup = (evt) => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnKeyUp"].call(this,evt);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnKeyUp");
                }
            }
            document.getElementById(this.Id).onblur = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnBlur"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnBlur");
                }
            }
        }

        private Display() {
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                document.getElementById(this.Id).style.removeProperty("display");
            } else {
                document.getElementById(this.Id).style.setProperty("display", "none");
            }
        }

        public static GetIdsStack() { //Retorna los id de todos los objetos Box creados.
            return Box.idsStack;
        }

        public GetId() {
            return this.Id;
        }

        public GetMetaObject() {
            return this.MetaObject;
        }

        private RedrawObject() {
            let canvas = document.getElementById(this.Id);

            //Borrar contenido del canvas.
            let figura = (<HTMLCanvasElement>canvas).getContext('2d');
            figura.clearRect(0, 0, this.Width, this.Height);

            //Redibujar figura.
            figura.fillStyle = this.BorderColor;
            figura.fillRect(0,0,this.Width,this.Height);
            figura.fillStyle = this.FillColor;
            figura.fillRect(this.BorderWidth,this.BorderWidth,this.Width-2*this.BorderWidth,this.Height-2*this.BorderWidth);
        }

        public SetCrossZ(crossZ: boolean) {
            this.CrossZ = crossZ;
            let x: number = this.GetX();
            let y: number = this.GetY();
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,crossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetCrossZ() {
            return this.CrossZ;
        }

        public SetX(x: number) {
            let X: number = x;
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolx = String(x);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                x -= Table.GetViewFinderX();
                document.getElementById(this.Id).style.left = String(x) + "px";
            }

            this.Display();
        }

        public GetX() {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        }

        public SetY(y: number) {
            let Y: number = y;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitooly = String(y);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetY() {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        }

        public SetZ(z: number) {
            let Z: number = z;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolz = String(z);
            this.Display();
        }

        public GetZ() {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        }

        public SetXYZ(x: number, y: number, z: number) {
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById(this.Id).dataset.scitoolz = String(z);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(x,y,z,Width,Height,CrossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public SetWidth(width: number) {
            this.Width = width;

            //Fijar Width del canvas.
            let canvas = document.getElementById(this.Id);
            canvas.dataset.scitoolwidth = String(width);
            canvas.setAttribute("width",String(width) + "px");

            this.RedrawObject();
        }

        public GetWidth() {
            return Number(document.getElementById(this.Id).dataset.scitoolwidth);
        }

        public SetHeight(height: number) {
            this.Height = height;

            //Fijar Height del canvas.
            let canvas = document.getElementById(this.Id);
            canvas.dataset.scitoolheight = String(height);
            canvas.setAttribute("height",String(height) + "px");

            this.RedrawObject();
        }

        public GetHeight() {
            return Number(document.getElementById(this.Id).dataset.scitoolheight);
        }

        public SetDimensions(width: number, height: number) {
            this.SetWidth(width);
            this.SetHeight(height);
        }

        public Raise() {
            this.Raised = true;

            document.getElementById(this.Id).style.setProperty("position", "fixed");
        }

        public Unraise() {
            this.Raised = false;

            document.getElementById(this.Id).style.setProperty("position", "absolute");
        }

        public GetRaised() {
            return this.Raised;
        }

        public GetInViewFinder() {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        }

        public SetVisible(visible: boolean) {
            this.Visible = visible;

            if (visible === true) {
                document.getElementById(this.Id).style.visibility = 'visible';
            } else {
                document.getElementById(this.Id).style.visibility = 'hidden';
            }
        }

        public GetVisible() {
            return this.Visible;
        }

        public SetBorderColor(color: string) {
            this.BorderColor = color;
            this.RedrawObject();
        }

        public GetBorderColor() {
            return this.BorderColor;
        }

        public SetBorderWidth(width: number) {
            this.BorderWidth = width;
            this.RedrawObject();
        }

        public GetBorderWidth() {
            return this.BorderWidth;
        }

        public SetFillColor(fillColor: string) {
            this.FillColor = fillColor;
            this.RedrawObject();
        }

        public GetFillColor() {
            return this.FillColor;
        }

        public SetTabIndex(tabIndex: number) {
            this.TabIndex = tabIndex;

            document.getElementById(this.Id).tabIndex = tabIndex;
        }

        public GetTabIndex() {
            return this.TabIndex;
        }

        public RestoreTabIndex() {
            this.SetTabIndex(-1);
        }

        public SetZIndex(zIndex: string) {
            this.ZIndex = zIndex;
            document.getElementById(this.Id).style.zIndex = zIndex;
        }

        public GetZIndex() {
            return this.ZIndex;
        }

        public RestoreZIndex() {
            this.SetZIndex("auto");
        }

        public SetEnabled(enabled: boolean) {
            this.Enabled = enabled;

            if (enabled) {
                document.getElementById(this.Id).removeAttribute("disabled");
            } else {
                document.getElementById(this.Id).setAttribute("disabled", "disabled");
            }
        }

        public GetEnabled() {
            return this.Enabled;
        }

        public SetFocus() {
            document.getElementById(this.Id).focus();
        }

        public Talk(message: string, metaMessage: any = "") {
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    } catch(e) {}
                }
            }
            for (let idMetaobjeto of MetaObject.GetIdsStack()) {
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                } catch(e) {}
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
        }
    }

    export class Ellipse {
        private Id: string;
        private Visible: boolean;
        private BorderColor: string;
        private FillColor: string;
        private Width: number;
        private Height: number;
        private BorderWidth: number;
        private TabIndex: number;
        private CrossZ: boolean;
        private ZIndex: string;
        private MetaObject: string;
        private Enabled: boolean;

        public static NumberOfUnnamedObjects: number = 0;
        private static idsStack: string[] = [];

        constructor(metaObject: string, x: number = 0, y: number = 0, z: number = 0, width: number = 0, height: number = 0, borderWidth: number = Skin.GetEllipseBorderWidth(), borderColor: string = Skin.GetEllipseBorderColor(), fillColor: string = Skin.GetEllipseFillColor(), id: string) {
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
            } else {
                this.ZIndex = "auto";
            }
            this.Enabled = true;

            //Crear nodo Canvas.
            let nodoNuevo = document.createElement("CANVAS");
            nodoNuevo.setAttribute("id", this.Id);
            nodoNuevo.dataset.scitoolx = String(x);
            nodoNuevo.dataset.scitooly = String(y);
            nodoNuevo.dataset.scitoolz = String(z);
            nodoNuevo.dataset.scitoolwidth = String(width);
            nodoNuevo.dataset.scitoolheight = String(height);
            nodoNuevo.setAttribute("width",String(width)+"px");
            nodoNuevo.setAttribute("height",String(height)+"px");
            nodoNuevo.style.setProperty("position", "absolute");
            nodoNuevo.style.setProperty("display", "none");
            nodoNuevo.style.outline = "0";
            document.body.appendChild(nodoNuevo);

            //Crear nodo para la figura.
    		if ((<HTMLCanvasElement>nodoNuevo).getContext) {
                if ((<HTMLCanvasElement>nodoNuevo) && (<HTMLCanvasElement>nodoNuevo).getContext) {
                    let figura = (<HTMLCanvasElement>nodoNuevo).getContext("2d");
                    if (figura) {
                        let kappa=0.5522847498;
                        let ellipseWidth= width;
                        let ellipseHeight = height;
                        let offsetX = (ellipseWidth / 2) * kappa;
                        let offsetY = (ellipseHeight / 2) * kappa;
                        let endX = ellipseWidth;
                        let endY = ellipseHeight;
                        let halfX = ellipseWidth / 2;
                        let halfY = ellipseHeight / 2;

                        this.dibujarElipse(figura,0,0,ellipseWidth,ellipseHeight,borderColor);
                        this.dibujarElipse(figura,borderWidth,borderWidth,ellipseWidth-2*borderWidth,ellipseHeight-2*borderWidth,fillColor);
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

            document.getElementById(this.Id).onclick = () => {
                if (this.Enabled) {
                    ////////Activar eventual documento padre de este objeto.
                    //Buscar metaobjeto de este objeto.
                    let datosObjeto = MetaObject_private.GetObjectsMap().filter((objeto) => {
                        if (objeto["ObjectId"] === this.Id) {
                            return objeto;
                        }
                    });

                    //Verificar si el metaobjeto es un documento.
                    let datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter((objeto) => {
                        if (objeto["ObjectId"] === datosObjeto[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                            return objeto;
                        }
                    });
                    if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();

                        try {
                            window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(this);
                        } catch(e) {}
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                    }
                    ////////

                    try {
                        window[this.Id + "_OnClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnClick");
                }
            }
            document.getElementById(this.Id).ondblclick = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnDblClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnDblClick");
                }
            }
            document.getElementById(this.Id).onfocus = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnFocus"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnFocus");
                }
            }
            document.getElementById(this.Id).onmouseover = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseOver"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseOver");
                }
            }
            document.getElementById(this.Id).onmousemove = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseMove"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseMove");
                }
            }
            document.getElementById(this.Id).onmousedown = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseDown"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseDown");
                }
            }
            document.getElementById(this.Id).onmouseup = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseUp"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseUp");
                }
            }
            document.getElementById(this.Id).onmouseout = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseOut"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseOut");
                }
            }
            document.getElementById(this.Id).onkeydown = (evt) => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnKeyDown"].call(this,evt);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnKeyDown");
                }
            }
            document.getElementById(this.Id).onkeypress = (evt) => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnKeyPress"].call(this,evt);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnKeyPress");
                }
            }
            document.getElementById(this.Id).onkeyup = (evt) => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnKeyUp"].call(this,evt);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnKeyUp");
                }
            }
            document.getElementById(this.Id).onblur = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnBlur"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnBlur");
                }
            }
        }

        private Display() {
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                document.getElementById(this.Id).style.removeProperty("display");
            } else {
                document.getElementById(this.Id).style.setProperty("display", "none");
            }
        }

        private dibujarElipse(figura, x, y, width, height, color) {
            var kappa=0.5522847498;
            var offsetX = (width / 2) * kappa;
            var offsetY = (height / 2) * kappa;
            var endX = x + width;
            var endY = y + height;
            var halfX = x + width / 2;
            var halfY = y + height / 2;

            figura.beginPath();

            figura.moveTo( x, halfY );
            figura.bezierCurveTo( x, halfY - offsetY, halfX - offsetX, y, halfX, y );
            figura.bezierCurveTo( halfX + offsetX, y, endX, halfY - offsetY, endX, halfY );
            figura.bezierCurveTo( endX, halfY + offsetY, halfX + offsetX, endY, halfX, endY );
            figura.bezierCurveTo( halfX - offsetX, endY, x, halfY + offsetY, x, halfY );
            figura.closePath();
            figura.fillStyle = color;
            figura.fill();
        }

        public static GetIdsStack() { //Retorna los id de todos los objetos Ellipse creados.
            return Ellipse.idsStack;
        }

        public GetId() {
            return this.Id;
        }

        public GetMetaObject() {
            return this.MetaObject;
        }

        private RedrawObject() {
            let canvas = document.getElementById(this.Id);

            //Borrar contenido del canvas.
            let figura = (<HTMLCanvasElement>canvas).getContext('2d');
            figura.clearRect(0, 0, this.Width, this.Height);

            //Redibujar figura.
            if (figura) {
                let kappa=0.5522847498;
                let ellipseWidth= this.Width;
                let ellipseHeight = this.Height;
                let offsetX = (ellipseWidth / 2) * kappa;
                let offsetY = (ellipseHeight / 2) * kappa;
                let endX = ellipseWidth;
                let endY = ellipseHeight;
                let halfX = ellipseWidth / 2;
                let halfY = ellipseHeight / 2;

                this.dibujarElipse(figura,0,0,ellipseWidth,ellipseHeight,this.BorderColor);
                this.dibujarElipse(figura,this.BorderWidth,this.BorderWidth,ellipseWidth-2*this.BorderWidth,ellipseHeight-2*this.BorderWidth,this.FillColor);
            }
        }

        public SetCrossZ(crossZ: boolean) {
            this.CrossZ = crossZ;
            let x: number = this.GetX();
            let y: number = this.GetY();
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,crossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetCrossZ() {
            return this.CrossZ;
        }

        public SetX(x: number) {
            let X: number = x;
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolx = String(x);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                x -= Table.GetViewFinderX();
                document.getElementById(this.Id).style.left = String(x) + "px";
            }

            this.Display();
        }

        public GetX() {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        }

        public SetY(y: number) {
            let Y: number = y;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitooly = String(y);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetY() {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        }

        public SetZ(z: number) {
            let Z: number = z;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolz = String(z);
            this.Display();
        }

        public GetZ() {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        }

        public SetXYZ(x: number, y: number, z: number) {
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById(this.Id).dataset.scitoolz = String(z);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(x,y,z,Width,Height,CrossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public SetWidth(width: number) {
            this.Width = width;

            //Fijar Width del canvas.
            let canvas = document.getElementById(this.Id);
            canvas.dataset.scitoolwidth = String(width);
            canvas.setAttribute("width",String(width) + "px");

            this.RedrawObject();
        }

        public GetWidth() {
            return Number(document.getElementById(this.Id).dataset.scitoolwidth);
        }

        public SetHeight(height: number) {
            this.Height = height;

            //Fijar Height del canvas.
            let canvas = document.getElementById(this.Id);
            canvas.dataset.scitoolheight = String(height);
            canvas.setAttribute("height",String(height) + "px");

            this.RedrawObject();
        }

        public GetHeight() {
            return Number(document.getElementById(this.Id).dataset.scitoolheight);
        }

        public SetDimensions(width: number, height: number) {
            this.SetWidth(width);
            this.SetHeight(height);
        }

        public GetInViewFinder() {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        }

        public SetVisible(visible: boolean) {
            this.Visible = visible;

            if (visible === true) {
                document.getElementById(this.Id).style.visibility = 'visible';
            } else {
                document.getElementById(this.Id).style.visibility = 'hidden';
            }
        }

        public GetVisible() {
            return this.Visible;
        }

        public SetBorderColor(color: string) {
            this.BorderColor = color;
            this.RedrawObject();
        }

        public GetBorderColor() {
            return this.BorderColor;
        }

        public SetBorderWidth(width: number) {
            this.BorderWidth = width;
            this.RedrawObject();
        }

        public GetBorderWidth() {
            return this.BorderWidth;
        }

        public SetFillColor(fillColor: string) {
            this.FillColor = fillColor;
            this.RedrawObject();
        }

        public GetFillColor() {
            return this.FillColor;
        }

        public SetTabIndex(tabIndex: number) {
            this.TabIndex = tabIndex;

            document.getElementById(this.Id).tabIndex = tabIndex;
        }

        public GetTabIndex() {
            return this.TabIndex;
        }

        public RestoreTabIndex() {
            this.SetTabIndex(-1);
        }

        public SetZIndex(zIndex: string) {
            this.ZIndex = zIndex;
            document.getElementById(this.Id).style.zIndex = zIndex;
        }

        public GetZIndex() {
            return this.ZIndex;
        }

        public RestoreZIndex() {
            this.SetZIndex("auto");
        }

        public SetEnabled(enabled: boolean) {
            this.Enabled = enabled;

            if (enabled) {
                document.getElementById(this.Id).removeAttribute("disabled");
            } else {
                document.getElementById(this.Id).setAttribute("disabled", "disabled");
            }
        }

        public GetEnabled() {
            return this.Enabled;
        }

        public SetFocus() {
            document.getElementById(this.Id).focus();
        }

        public Talk(message: string, metaMessage: any = "") {
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    } catch(e) {}
                }
            }
            for (let idMetaobjeto of MetaObject.GetIdsStack()) {
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                } catch(e) {}
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
        }
    }

    export class Requester {
        private Id: string;
        private EndPoint: string;
        private Param: string;
        private Query: string;
        private FormName: string;
        private ControlFileNameToUpload: string;
        private MimeTypes: string;
        private ResponseType: XMLHttpRequestResponseType;
        private Response: any;
        private ResponseText: string;
        private ResponseXML: Document;
        private ResponseJSON: any;
        private ResponseURL: string;
        private Verb: string;
        private Status: number;

        public static NumberOfUnnamedObjects: number = 0;
        private static idsStack: string[] = [];

        constructor(id: string) {
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
            this.Verb = Const.Get;
            this.Status = null;
            this.MimeTypes = null;
        }

        public GetIdsStack() {
            return Requester.idsStack;
        }

        public GetId() {
            return this.Id;
        }

        public SetVerb(verb: string) {
            this.Verb = verb;
        }

        public GetVerb() {
            return this.Verb;
        }

        public SetEndPoint(endPoint: string) {
            this.EndPoint = endPoint;
        }

        public GetEndPoint() {
            return this.EndPoint;
        }

        public SetParam(key: string, value: string) {
            this.Param = key + "=" + value;
        }

        public GetParam() {
            return this.Param;
        }

        public RestoreParam() {
            this.Param = null;
        }

        public SetQuery(key: string, value: string) {
            this.Query = key + "=" + value;
        }

        public AddToQuery(key: string, value: string) {
            if (this.Query == null) {
                this.Query = key + "=" + value;
            } else {
                this.Query += "&" + key + "=" + value;
            }
        }

        public GetQuery() {
            return this.Query;
        }

        public RestoreQuery() {
            this.Query = null;
        }

        public SetMimeTypes(mimeTypes: string) {
            this.MimeTypes = mimeTypes;

            // Actualizar los tipos MIME en el formulario.
            let formulario = <HTMLFormElement>document.getElementById("form" + this.ControlFileNameToUpload);
            formulario.setAttribute('accept',mimeTypes);
        }

        public GetMimeTypes() {
            return this.MimeTypes;
        }

        public RestoreMimeTypes() {
            this.MimeTypes = null;

            // Actualizar los tipos MIME en el formulario.
            let formulario = <HTMLFormElement>document.getElementById("form" + this.ControlFileNameToUpload);
            formulario.removeAttribute('accept');
        }

        public SetControlFileNameToUpload(controlFileName: string) {
            this.ControlFileNameToUpload = controlFileName;
        }

        public GetControlFileNameToUpload() {
            return this.ControlFileNameToUpload;
        }

        public RestoreControlFileNameToUpload() {
            this.ControlFileNameToUpload = null;
        }

        public SendRequest() {
            let xhr = new XMLHttpRequest();
            let endPoint: string = "";

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    this.ResponseType = xhr.responseType;
                    this.Response = xhr.response;
                    this.ResponseText = xhr.responseText;
                    this.ResponseXML = xhr.responseXML;
                    try {
                        this.ResponseJSON = JSON.parse(xhr.response);
                    } catch(e) {
                        this.ResponseJSON = null;
                    }
                    this.ResponseURL = xhr.responseURL;
                    this.Status = xhr.status;

                    if (xhr.status == 200) {
                        // Incluir eventual mensaje en evento OnOk siempre y cuando la operación no sea un Get, pues podría ser muy grande.
                        let mensaje: string = ''
                        if (this.Verb !== Const.Get) {
                            try {
                                mensaje = xhr.response;
                            } catch(e) {}
                        }

                        try {
                            window[this.Id + "_OnOk"].call(this, mensaje);
                        } catch(e) {}
                        window[this.Id].Talk(this.Id + "_OnOk", mensaje);
                    } else {
                        try {
                            window[this.Id + "_OnError"].call(this, xhr.response, xhr.status);
                        } catch(e) {}
                        window[this.Id].Talk(this.Id + "_OnError", xhr.response);
                    }
                }
            }

            endPoint = this.EndPoint;
            if (this.Param !== null) {
                endPoint += '/' + this.Param;
            }
            if (this.Query !== null) {
                endPoint += '?' + this.Query;
            }

            xhr.open(this.Verb, endPoint, true);

            if (this.ControlFileNameToUpload !== null) { // Se envía un formulario con un control de tipo File. El formulario se crea automáticamente cuando el programador crea un control de tipo File.
                let formulario = new FormData(<HTMLFormElement>document.getElementById("form" + this.ControlFileNameToUpload));

                xhr.send(formulario);
            } else {
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr.send(null);
            }
        }

        public SendRequestTo(endPoint: string) {
            let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    this.ResponseType = xhr.responseType;
                    this.Response = xhr.response;
                    this.ResponseText = xhr.responseText;
                    this.ResponseXML = xhr.responseXML;
                    try {
                        this.ResponseJSON = JSON.parse(xhr.response);
                    } catch(e) {
                        this.ResponseJSON = null;
                    }
                    this.ResponseURL = xhr.responseURL;
                    this.Status = xhr.status;

                    if (xhr.status == 200) {
                        // Incluir eventual mensaje en evento OnOk siempre y cuando la operación no sea un Get, pues podría ser muy grande.
                        let mensaje: string = ''
                        if (this.Verb !== Const.Get) {
                            try {
                                mensaje = xhr.response;
                            } catch(e) {}
                        }

                        try {
                            window[this.Id + "_OnOk"].call(this, mensaje);
                        } catch(e) {}
                        window[this.Id].Talk(this.Id + "_OnOk", mensaje);
                    } else {
                        try {
                            window[this.Id + "_OnError"].call(this, xhr.response, xhr.status);
                        } catch(e) {}
                        window[this.Id].Talk(this.Id + "_OnError", xhr.response);
                    }
                }
            }

            if (this.Param !== null) {
                endPoint += '/' + this.Param;
            }
            if (this.Query !== null) {
                endPoint += '?' + this.Query;
            }

            xhr.open(this.Verb, endPoint, true);

            if (this.ControlFileNameToUpload !== null) { // Se envía un formulario con un control de tipo File. El formulario se crea automáticamente cuando el programador crea un control de tipo File.
                let formulario = new FormData(<HTMLFormElement>document.getElementById("form" + this.ControlFileNameToUpload));

                xhr.send(formulario);
            } else {
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr.send(null);
            }
        }

        public GetResponseType() {
            return this.ResponseType;
        }

        public GetResponse() {
            return this.Response;
        }

        public GetResponseText() {
            return this.ResponseText;
        }

        public GetResponseXML() {
            return this.ResponseXML;
        }

        public GetResponseJSON() {
            return this.ResponseJSON;
        }

        public GetResponseURL() {
            return this.ResponseURL;
        }

        public GetStatus() {
            return this.Status;
        }

        public Talk(message: string, metaMessage: any = "") {
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    } catch(e) {}
                }
            }
            for (let idMetaobjeto of MetaObject.GetIdsStack()) {
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                } catch(e) {}
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
        }
    }

    export class Chronometer {
        private Id: string;
        private Centiseconds: number;
        private Seconds: number;
        private Minutes: number;
        private Hours: number;
        private Running: boolean;
        private Started: boolean;

        private cronometro: number;
        private centisecondsPerHour: number;
        private centisecondsPerMinute: number;
        private centisecondsPerSecond: number;
        public static NumberOfUnnamedObjects: number = 0;
        private static idsStack: string[] = [];

        constructor(id: string) {
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

        public GetIdsStack() { //Retorna los id de todos los objetos Chronometer creados.
            return Chronometer.idsStack;
        }

        public GetId() {
            return this.Id;
        }

        public GetHours() {
            return this.Hours;
        }

        public GetMinutes() {
            return this.Minutes;
        }

        public GetSeconds() {
            return this.Seconds;
        }

        public GetCentiseconds() {
            return this.Centiseconds;
        }

        public GetLapse() {
            //Devuelve la medida cronometrada en centisegundos.
            return this.Hours * 360000 + this.Minutes * 6000 + this.Seconds * 100 + this.Centiseconds;
        }

        public GetDisplay() {
            let horas, minutos, segundos, centisegundos: string;

            if (this.Hours < 10) {
                horas = "0" + String(this.Hours);
            } else {
                horas = String(this.Hours);
            }
            if (this.Minutes < 10) {
                minutos = "0" + String(this.Minutes);
            } else {
                minutos = String(this.Minutes);
            }
            if (this.Seconds < 10) {
                segundos = "0" + String(this.Seconds);
            } else {
                segundos = String(this.Seconds);
            }
            if (this.Centiseconds < 10) {
                centisegundos = "0" + String(this.Centiseconds);
            } else {
                centisegundos = String(this.Centiseconds);
            }

            return horas + ":" + minutos + ":" + segundos + " " + centisegundos;
        }

        public GetRunning() {
            return this.Running;
        }

        public GetStarted() {
            return this.Started;
        }

        public StartStopButton(){
            if (this.Running) {
                //Stop.
                clearInterval(this.cronometro);
                this.Running = false;
            } else {
                //Start.
                this.cronometro = setInterval(() => {
                    if (this.Started) {
                        this.centisecondsPerHour++;
                        this.centisecondsPerMinute++;
                        this.centisecondsPerSecond++;

                        if (this.Centiseconds <= 99) {
                                this.Centiseconds++;
                        }
                        if (this.Centiseconds == 100) {
                                this.Centiseconds = 0;
                        }
                        if (this.Centiseconds == 0) {
                                this.Seconds++;
                        }
                        if (this.Seconds == 60) {
                                this.Seconds = 0;
                        }
                        if (this.Centiseconds == 0 && this.Seconds == 0) {
                                this.Minutes++;
                        }
                        if (this.Minutes == 60) {
                                this.Minutes = 0;
                        }
                        if (this.Centiseconds == 0 && this.Seconds == 0 && this.Minutes == 0) {
                                this.Hours++;
                        }
                    }
                    if (!this.Started) {
                        this.Started = true;
                    }

                    try {
                        window[this.Id + "_OnEachCentisecond"].apply(this); // Esto es muy rápido para hacer un "Talk".
                    } catch(e) {}
                    if (this.centisecondsPerSecond == 100) {
                        this.centisecondsPerSecond = 0;
                        try {
                            window[this.Id + "_OnEachSecond"].apply(this); // Esto es muy rápido para hacer un "Talk".
                        } catch(e) {}
                    }
                    if (this.centisecondsPerMinute == 6000) {
                        this.centisecondsPerMinute = 0;
                        try {
                            window[this.Id + "_OnEachMinute"].apply(this);
                        } catch(e) {}
                        window[this.Id].Talk(this.Id + "_OnEachMinute");
                    }
                    if (this.centisecondsPerHour == 360000) {
                        this.centisecondsPerHour = 0;
                        try {
                            window[this.Id + "_OnEachHour"].apply(this);
                        } catch(e) {}
                        window[this.Id].Talk(this.Id + "_OnEachHour");
                    }
                }, 10);

                this.Running = true;
            }
        }

        public ResetButton() {
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
        }

        public Talk(message: string, metaMessage: any = "") {
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    } catch(e) {}
                }
            }
            for (let idMetaobjeto of MetaObject.GetIdsStack()) {
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                } catch(e) {}
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
        }
    }

    export class Timer {
        private Id: string;
        private Ciclyc: boolean;
        private Centiseconds: number;
        private Seconds: number;
        private Minutes: number;
        private Hours: number;
        private Running: boolean;
        private Started: boolean;
        private InitialHours: number;
        private InitialMinutes: number;
        private InitialSeconds: number;
        private InitialCentiseconds: number;
        private Lapse: number;

        private timer: number;
        private centisecondsPerHour: number;
        private centisecondsPerMinute: number;
        private centisecondsPerSecond: number;
        public static NumberOfUnnamedObjects: number = 0;
        private static idsStack: string[] = [];

        constructor(hours: number = 0, minutes: number = 0, seconds: number = 0, centiseconds: number = 0, id: string) {
            this.Id = id;
            Timer.idsStack.push(this.Id);
            this.Ciclyc = false;

            //Dejar solo números positivos.
            if (hours < 0) hours = -hours;
            if (minutes < 0) minutes = -minutes;
            if (seconds < 0) seconds = -seconds;
            if (centiseconds < 0) centiseconds = -centiseconds;

            //Dejar solo enteros.
            hours = Math.floor(hours);
            minutes = Math.floor(minutes);
            seconds = Math.floor(seconds);
            centiseconds = Math.floor(centiseconds);

            if (centiseconds <= 99) {
                this.InitialCentiseconds = centiseconds;
            } else {
                seconds += Math.floor(centiseconds / 100);
                this.InitialCentiseconds = centiseconds - Math.floor(centiseconds / 100) * 100;
            }
            if (seconds <= 59) {
                this.InitialSeconds = seconds;
            } else {
                minutes += Math.floor(seconds / 60);
                this.InitialSeconds = seconds - Math.floor(seconds / 60) * 60;
            }
            if (minutes <= 59) {
                this.InitialMinutes = minutes;
            } else {
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

        public GetIdsStack() { //Retorna los id de todos los objetos Timer creados.
            return Timer.idsStack;
        }

        public GetId() {
            return this.Id;
        }

        public SetCiclyc(ciclyc: boolean) {
            this.Ciclyc = ciclyc;
        }

        public GetCiclyc() {
            return this.Ciclyc;
        }

        public GetInitialLapse() {
            return this.InitialHours * 360000 + this.InitialMinutes * 6000 + this.InitialSeconds * 100 + this.InitialCentiseconds;
        }

        public SetInitialTimer(hours: number = 0, minutes: number = 0, seconds: number = 0, centiseconds: number = 0) {
            //Dejar solo números positivos.
            if (hours < 0) hours = -hours;
            if (minutes < 0) minutes = -minutes;
            if (seconds < 0) seconds = -seconds;
            if (centiseconds < 0) centiseconds = -centiseconds;

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
            } else {
                seconds += Math.floor(centiseconds / 100);
                this.InitialCentiseconds = centiseconds - Math.floor(centiseconds / 100) * 100;
            }
            if (seconds <= 59) {
                this.InitialSeconds = seconds;
            } else {
                minutes += Math.floor(seconds / 60);
                this.InitialSeconds = seconds - Math.floor(seconds / 60) * 60;
            }
            if (minutes <= 59) {
                this.InitialMinutes = minutes;
            } else {
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

        public GetInitialHours() {
            return this.InitialHours;
        }

        public GetInitialMinutes() {
            return this.InitialMinutes;
        }

        public GetInitialSeconds() {
            return this.InitialSeconds;
        }

        public GetInitialCentiseconds() {
            return this.InitialCentiseconds;
        }

        public GetInitialDisplay() {
            let horas, minutos, segundos, centisegundos: string;

            if (this.InitialHours < 10) {
                horas = "0" + String(this.InitialHours);
            } else {
                horas = String(this.InitialHours);
            }
            if (this.InitialMinutes < 10) {
                minutos = "0" + String(this.InitialMinutes);
            } else {
                minutos = String(this.InitialMinutes);
            }
            if (this.InitialSeconds < 10) {
                segundos = "0" + String(this.InitialSeconds);
            } else {
                segundos = String(this.InitialSeconds);
            }
            if (this.InitialCentiseconds < 10) {
                centisegundos = "0" + String(this.InitialCentiseconds);
            } else {
                centisegundos = String(this.InitialCentiseconds);
            }

            return horas + ":" + minutos + ":" + segundos + " " + centisegundos;
        }

        public GetLapse() {
            //Devuelve la medida restante en centisegundos.
            return (this.InitialHours * 360000 + this.InitialMinutes * 6000 + this.InitialSeconds * 100 + this.InitialCentiseconds) - this.Lapse;
        }

        public GetHours() {
            return this.Hours;
        }

        public GetMinutes() {
            return this.Minutes;
        }

        public GetSeconds() {
            return this.Seconds;
        }

        public GetCentiseconds() {
            return this.Centiseconds;
        }

        public GetDisplay() {
            let horas, minutos, segundos, centisegundos: string;

            if (this.Hours < 10) {
                horas = "0" + String(this.Hours);
            } else {
                horas = String(this.Hours);
            }
            if (this.Minutes < 10) {
                minutos = "0" + String(this.Minutes);
            } else {
                minutos = String(this.Minutes);
            }
            if (this.Seconds < 10) {
                segundos = "0" + String(this.Seconds);
            } else {
                segundos = String(this.Seconds);
            }
            if (this.Centiseconds < 10) {
                centisegundos = "0" + String(this.Centiseconds);
            } else {
                centisegundos = String(this.Centiseconds);
            }

            return horas + ":" + minutos + ":" + segundos + " " + centisegundos;
        }

        public GetElapsedLapse() {
            //Devuelve la medida en centisegundos transcurridos hasta el momento.
            return this.Lapse;
        }

        public GetElapsedHours() {
            let horas: number;
            let centisegundosRestantes: number = this.Lapse;

            horas = Math.floor(centisegundosRestantes / 360000);

            return horas;
        }

        public GetElapsedMinutes() {
            let horas: number;
            let minutos: number;
            let centisegundosRestantes: number = this.Lapse;

            horas = Math.floor(centisegundosRestantes / 360000);
            centisegundosRestantes = centisegundosRestantes - horas * 360000;

            minutos = Math.floor(centisegundosRestantes / 6000);

            return minutos;
        }

        public GetElapsedSeconds() {
            let horas: number;
            let minutos: number;
            let segundos: number;
            let centisegundosRestantes: number = this.Lapse;

            horas = Math.floor(centisegundosRestantes / 360000);
            centisegundosRestantes = centisegundosRestantes - horas * 360000;

            minutos = Math.floor(centisegundosRestantes / 6000);
            centisegundosRestantes = centisegundosRestantes - minutos * 6000;

            segundos = Math.floor(centisegundosRestantes / 100);

            return segundos;
        }

        public GetElapsedCentiseconds() {
            let horas: number;
            let minutos: number;
            let segundos: number;
            let centisegundos: number;
            let centisegundosRestantes: number = this.Lapse;

            horas = Math.floor(centisegundosRestantes / 360000);
            centisegundosRestantes = centisegundosRestantes - horas * 360000;

            minutos = Math.floor(centisegundosRestantes / 6000);
            centisegundosRestantes = centisegundosRestantes - minutos * 6000;

            segundos = Math.floor(centisegundosRestantes / 100);
            centisegundos = centisegundosRestantes - segundos * 100;

            return centisegundos;
        }

        public GetElapsedDisplay() {
            let horas, minutos, segundos, centisegundos: string;
            let horasTranscurridas: number = 0;
            let minutosTranscurridos: number = 0;
            let segundosTranscurridos: number = 0;
            let centisegundosTranscurridos: number = 0;
            let centisegundosRestantes: number = this.Lapse;

            horasTranscurridas = Math.floor(centisegundosRestantes / 360000);
            centisegundosRestantes = centisegundosRestantes - horasTranscurridas * 360000;

            minutosTranscurridos = Math.floor(centisegundosRestantes / 6000);
            centisegundosRestantes = centisegundosRestantes - minutosTranscurridos * 6000;

            segundosTranscurridos = Math.floor(centisegundosRestantes / 100);
            centisegundosTranscurridos = centisegundosRestantes - segundosTranscurridos * 100;

            if (horasTranscurridas < 10) {
                horas = "0" + String(horasTranscurridas);
            } else {
                horas = String(horasTranscurridas);
            }
            if (minutosTranscurridos < 10) {
                minutos = "0" + String(minutosTranscurridos);
            } else {
                minutos = String(minutosTranscurridos);
            }
            if (segundosTranscurridos < 10) {
                segundos = "0" + String(segundosTranscurridos);
            } else {
                segundos = String(segundosTranscurridos);
            }
            if (centisegundosTranscurridos < 10) {
                centisegundos = "0" + String(centisegundosTranscurridos);
            } else {
                centisegundos = String(centisegundosTranscurridos);
            }

            return horas + ":" + minutos + ":" + segundos + " " + centisegundos;
        }

        public GetRunning() {
            return this.Running;
        }

        public GetStarted() {
            return this.Started;
        }

        public StartStopButton() {
            if (this.Running) {
                //Stop.
                clearInterval(this.timer);
                this.Running = false;
            } else {
                //Start.
                let lapsoInicial: number = this.InitialHours * 360000 + this.InitialMinutes * 6000 + this.InitialSeconds * 100 + this.InitialCentiseconds;

                if (this.Lapse < lapsoInicial) {
                    this.timer = setInterval(() => {
                        if (this.Started) {
                            this.Lapse++;
                            this.centisecondsPerHour++;
                            this.centisecondsPerMinute++;
                            this.centisecondsPerSecond++;

                            if (this.Centiseconds >= 0) {
                                    this.Centiseconds--;
                            }
                            if (this.Centiseconds == -1) {
                                    this.Centiseconds = 99;
                            }
                            if (this.Centiseconds == 99) {
                                    this.Seconds--;
                            }
                            if (this.Seconds == -1) {
                                    this.Seconds = 59;
                            }
                            if (this.Centiseconds == 99 && this.Seconds == 59) {
                                    this.Minutes--;
                            }
                            if (this.Minutes == -1) {
                                    this.Minutes = 59;
                            }
                            if (this.Centiseconds == 99 && this.Seconds == 59 && this.Minutes == 59) {
                                    this.Hours--;
                            }
                        }
                        if (!this.Started) {
                            this.Started = true;
                        }

                        try {
                            window[this.Id + "_OnEachCentisecond"].apply(this); // Esto es muy rápido para hacer un "Talk"
                        } catch(e) {}
                        if (this.centisecondsPerSecond == 100) {
                            this.centisecondsPerSecond = 0;
                            try {
                                window[this.Id + "_OnEachSecond"].apply(this); // Esto es muy rápido para hacer un "Talk"
                            } catch(e) {}
                        }
                        if (this.centisecondsPerMinute == 6000) {
                            this.centisecondsPerMinute = 0;
                            try {
                                window[this.Id + "_OnEachMinute"].apply(this);
                            } catch(e) {}
                            window[this.Id].Talk(this.Id + "_OnEachMinute");
                        }
                        if (this.centisecondsPerHour == 360000) {
                            this.centisecondsPerHour = 0;
                            try {
                                window[this.Id + "_OnEachHour"].apply(this);
                            } catch(e) {}
                            window[this.Id].Talk(this.Id + "_OnEachHour");
                        }

                        if (this.Lapse === lapsoInicial && !this.Ciclyc) {
                            clearInterval(this.timer);
                            this.Running = false;
                            try {
                                window[this.Id + "_OnFinish"].apply(this);
                            } catch(e) {}
                            window[this.Id].Talk(this.Id + "_OnFinish");
                        }
                        if (this.Lapse === lapsoInicial && this.Ciclyc) {
                            try {
                                window[this.Id + "_OnFinish"].apply(this);
                            } catch(e) {}
                            window[this.Id].Talk(this.Id + "_OnFinish");

                            this.Hours = this.InitialHours;
                            this.Minutes = this.InitialMinutes;
                            this.Seconds = this.InitialSeconds;
                            this.Centiseconds = this.InitialCentiseconds;
                            this.Lapse = 0;
                            this.centisecondsPerHour = 0;
                            this.centisecondsPerMinute = 0;
                            this.centisecondsPerSecond = 0;
                        }
                    }, 10);

                    this.Running = true;
                }
            }
        }

        public ResetButton() {
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
        }

        public Talk(message: string, metaMessage: any = "") {
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    } catch(e) {}
                }
            }
            for (let idMetaobjeto of MetaObject.GetIdsStack()) {
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                } catch(e) {}
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
        }
    }

    export class Div {
        private Id: string;
        private Visible: boolean;
        private BorderColor: string;
        private FillColor: string;
        private BorderWidth: number;
        private CrossZ: boolean;
        private TabIndex: number;
        private ZIndex: string;
        private MetaObject: string;
        private Enabled: boolean;

        public static NumberOfUnnamedObjects: number = 0;
        private static idsStack: string[] = [];

        constructor(metaObject: string, x: number = 0, y: number = 0, z: number = 0, width: number = 0, height: number = 0, borderWidth: number = Skin.GetDivBorderWidth(), borderColor: string = Skin.GetDivBorderColor(), fillColor: string = Skin.GetDivFillColor(), id: string) {
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
            } else {
                this.ZIndex = "auto";
            }
            this.Enabled = true;

            //Crear nodo DIV.
            let nodoNuevo = document.createElement("DIV");
            nodoNuevo.setAttribute("id", this.Id);
            nodoNuevo.dataset.scitoolx = String(x);
            nodoNuevo.dataset.scitooly = String(y);
            nodoNuevo.dataset.scitoolz = String(z);
            nodoNuevo.dataset.scitoolwidth = String(width - 2 * borderWidth);
            nodoNuevo.dataset.scitoolheight = String(height - 2 * borderWidth);
            nodoNuevo.style.setProperty("position", "absolute");
            nodoNuevo.style.setProperty("display", "none");
            nodoNuevo.style.backgroundColor = fillColor;
            nodoNuevo.style.width = String(width - 2 * borderWidth)+"px";
            nodoNuevo.style.height = String(height - 2 * borderWidth)+"px";
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

            document.getElementById(this.Id).onclick = () => {
                if (this.Enabled) {
                    ////////Activar eventual documento padre de este objeto.
                    //Buscar metaobjeto de este objeto.
                    let datosObjeto = MetaObject_private.GetObjectsMap().filter((objeto) => {
                        if (objeto["ObjectId"] === this.Id) {
                            return objeto;
                        }
                    });

                    //Verificar si el metaobjeto es un documento.
                    let datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter((objeto) => {
                        if (objeto["ObjectId"] === datosObjeto[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                            return objeto;
                        }
                    });
                    if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();

                        try {
                            window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(this);
                        } catch(e) {}
                        window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                    }
                    ////////

                    try {
                        window[this.Id + "_OnClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnClick");
                }
            }
            document.getElementById(this.Id).ondblclick = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnDblClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnDblClick");
                }
            }
            document.getElementById(this.Id).onfocus = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnFocus"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnFocus");
                }
            }
            document.getElementById(this.Id).onmouseover = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseOver"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseOver");
                }
            }
            document.getElementById(this.Id).onmousemove = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseMove"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseMove");
                }
            }
            document.getElementById(this.Id).onmousedown = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseDown"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseDown");
                }
            }
            document.getElementById(this.Id).onmouseup = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseUp"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseUp");
                }
            }
            document.getElementById(this.Id).onmouseout = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnMouseOut"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseOut");
                }
            }
            document.getElementById(this.Id).onkeydown = (evt) => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnKeyDown"].call(this,evt);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnKeyDown");
                }
            }
            document.getElementById(this.Id).onkeypress = (evt) => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnKeyPress"].call(this,evt);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnKeyPress");
                }
            }
            document.getElementById(this.Id).onkeyup = (evt) => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnKeyUp"].call(this,evt);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnKeyUp");
                }
            }
            document.getElementById(this.Id).onblur = () => {
                if (this.Enabled) {
                    try {
                        window[this.Id + "_OnBlur"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnBlur");
                }
            }
        }

        private Display() {
            if (Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ())) {
                document.getElementById(this.Id).style.removeProperty("display");
            } else {
                document.getElementById(this.Id).style.setProperty("display", "none");
            }
        }

        public static GetIdsStack() { //Retorna los id de todos los objetos Div creados.
            return Div.idsStack;
        }

        public GetId() {
            return this.Id;
        }

        public GetMetaObject() {
            return this.MetaObject;
        }

        public SetCrossZ(crossZ: boolean) {
            this.CrossZ = crossZ;
            let x: number = this.GetX();
            let y: number = this.GetY();
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            document.getElementById(this.Id).dataset.scitoolcrossz = String(crossZ);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,crossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetCrossZ() {
            return this.CrossZ;
        }

        public SetX(x: number) {
            let X: number = x;
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolx = String(x);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                x -= Table.GetViewFinderX();
                document.getElementById(this.Id).style.left = String(x) + "px";
            }

            this.Display();
        }

        public GetX() {
            return Number(document.getElementById(this.Id).dataset.scitoolx);
        }

        public SetY(y: number) {
            let Y: number = y;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Z: number = Number(document.getElementById(this.Id).dataset.scitoolz);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitooly = String(y);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(X,Y,Z,Width,Height,CrossZ)) {
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public GetY() {
            return Number(document.getElementById(this.Id).dataset.scitooly);
        }

        public SetZ(z: number) {
            let Z: number = z;
            let X: number = Number(document.getElementById(this.Id).dataset.scitoolx);
            let Y: number = Number(document.getElementById(this.Id).dataset.scitooly);
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolz = String(z);
            this.Display();
        }

        public GetZ() {
            return Number(document.getElementById(this.Id).dataset.scitoolz);
        }

        public SetXYZ(x: number, y: number, z: number) {
            let Width: number = Number(document.getElementById(this.Id).dataset.scitoolwidth);
            let Height: number = Number(document.getElementById(this.Id).dataset.scitoolheight);
            let CrossZ: boolean = document.getElementById(this.Id).dataset.scitoolcrossz === "true";

            document.getElementById(this.Id).dataset.scitoolx = String(x);
            document.getElementById(this.Id).dataset.scitooly = String(y);
            document.getElementById(this.Id).dataset.scitoolz = String(z);

            //Posicionar objeto relativamente al plano.
            if (Table.InViewFinder(x,y,z,Width,Height,CrossZ)) {
                x -= Table.GetViewFinderX();
                y -= Table.GetViewFinderY();
                document.getElementById(this.Id).style.left = String(x) + "px";
                document.getElementById(this.Id).style.top = String(y) + "px";
            }

            this.Display();
        }

        public SetWidth(width: number) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width - 2 * this.GetBorderWidth());
            document.getElementById(this.Id).style.width = String(width) + "px";
        }

        public GetWidth() {
            return Number(document.getElementById(this.Id).dataset.scitoolwidth) + 2 * this.GetBorderWidth();
        }

        public SetHeight(height: number) {
            document.getElementById(this.Id).dataset.scitoolheight = String(height - 2 * this.GetBorderWidth());
            document.getElementById(this.Id).style.height = String(height) + "px";
        }

        public GetHeight() {
            return Number(document.getElementById(this.Id).dataset.scitoolheight) + 2 * this.GetBorderWidth();
        }

        public SetDimensions(width: number, height: number) {
            document.getElementById(this.Id).dataset.scitoolwidth = String(width - 2 * this.GetBorderWidth());
            document.getElementById(this.Id).style.width = String(width - 2 * this.GetBorderWidth()) + "px";
            document.getElementById(this.Id).dataset.scitoolheight = String(height - 2 * this.GetBorderWidth());
            document.getElementById(this.Id).style.height = String(height - 2 * this.GetBorderWidth()) + "px";
        }

        public GetInViewFinder() {
            return Table.InViewFinder(this.GetX(), this.GetY(), this.GetZ(), this.GetWidth(), this.GetHeight(), this.GetCrossZ());
        }

        public SetVisible(visible: boolean) {
            this.Visible = visible;

            if (visible === true) {
                document.getElementById(this.Id).style.visibility = 'visible';
            } else {
                document.getElementById(this.Id).style.visibility = 'hidden';
            }
        }

        public GetVisible() {
            return this.Visible;
        }

        public SetBorderColor(color: string) {
            this.BorderColor = color;
            document.getElementById(this.Id).style.borderColor = color;
        }

        public GetBorderColor() {
            return this.BorderColor;
        }

        public SetBorderWidth(width: number) {
            this.SetWidth(this.GetWidth() - 2 * width);
            this.SetHeight(this.GetHeight() - 2 * width);
            this.BorderWidth = width;
            document.getElementById(this.Id).style.borderWidth = String(width);
        }

        public GetBorderWidth() {
            return this.BorderWidth;
        }

        public SetFillColor(fillColor: string) {
            this.FillColor = fillColor;
            document.getElementById(this.Id).style.backgroundColor = fillColor;
        }

        public GetFillColor() {
            return this.FillColor;
        }

        public SetTabIndex(tabIndex: number) {
            this.TabIndex = tabIndex;
            document.getElementById(this.Id).tabIndex = tabIndex;
        }

        public GetTabIndex() {
            return this.TabIndex;
        }

        public RestoreTabIndex() {
            this.SetTabIndex(0);
        }

        public SetZIndex(zIndex: string) {
            this.ZIndex = zIndex;
            document.getElementById(this.Id).style.zIndex = zIndex;
        }

        public GetZIndex() {
            return this.ZIndex;
        }

        public RestoreZIndex() {
            this.SetZIndex("auto");
        }

        public SetEnabled(enabled: boolean) {
            this.Enabled = enabled;

            if (enabled) {
                document.getElementById(this.Id).removeAttribute("disabled");
            } else {
                document.getElementById(this.Id).setAttribute("disabled", "disabled");
            }
        }

        public GetEnabled() {
            return this.Enabled;
        }

        public Talk(message: string, metaMessage: any = "") {
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    } catch(e) {}
                }
            }
            for (let idMetaobjeto of MetaObject.GetIdsStack()) {
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                } catch(e) {}
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
        }
    }

    export class Menu {
        private Id: string;
        private X: number;
        private Y: number;
        private Z: number;
        private Height: number;
        private Visible: boolean;
        private Color: string;
        private BackColor: string;
        private ColorOnMouseOver: string;
        private BackColorOnMouseOver: string;
        private DisabledColor: string;
        private MenuType: string;
        private TabIndex: number;
        private ZIndex: string;
        private FontSize: number;
        private FontFamily: string;
        private Length: number;
        private CrossZ: boolean;
        private MetaObject: string;
        private Enabled: boolean;

        public static NumberOfUnnamedObjects: number = 0;
        private static idsStack: string[] = [];
        private elements: object[] = [];
        public static openMenus: boolean = false; //Indica si se hizo click en alguna opción de un menú raíz, activando/desactivando el despliegue automático de los submenús.
        private ultimaOpcionDeMenuSeleccionada: string = '';
        private SeparationBetweenOptions = 21;

        constructor(metaObject: string, x: number = 0, y: number = 0, z: number = 0, menuType: string, id: string) {
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
            } else {
                this.ZIndex = "auto";
            }
            this.FontSize = Skin.GetMenuFontSize();
            this.FontFamily = Skin.GetMenuFontFamily();
            this.MenuType = menuType;
            this.Length = 0;
            this.Enabled = true;
        }

        public static GetIdsStack() {
            return Menu.idsStack;
        }

        public GetId() {
            return this.Id;
        }

        public GetMetaObject() {
            return this.MetaObject;
        }

        //Si se especifica un Id de una opción, devuelve su longitud en pixeles. Si no se especifica, devuelve la longitud completa si el menú es de barra, o de la opción más larga si el menú es pulldown.
        public GetPixelsLength(MenuBarOption: string = "") {
            if (MenuBarOption === "") {
                for (let elementData of this.elements) {
                    let anchoEnPixeles: number = 0;
                    let ancho: number = 0;

                    let nodoNuevo = document.getElementById(elementData["Id"]).cloneNode(true);
                    nodoNuevo.setAttribute("id", "elementoTemporalParaCalcularAnchoEnPixeles");
                    nodoNuevo.style.visibility = "hidden";
                    document.body.appendChild(nodoNuevo);

                    if (anchoEnPixeles == 0) {
                        ancho = nodoNuevo.offsetWidth + 1;
                    } else {
                        if (this.MenuType === ObjectType.PulldownMenu) {
                            ancho = nodoNuevo.offsetWidth + 1;
                        } else {
                            ancho = this.GetSeparationBetweenOptions() + nodoNuevo.offsetWidth + 1;
                        }
                    }

                    if (this.MenuType === ObjectType.PulldownMenu) {
                        if (ancho > anchoEnPixeles) {
                            anchoEnPixeles = ancho;
                        }
                    } else {
                        anchoEnPixeles += ancho;
                    }

                    //ELiminar elemento temporal.
                    let nodoActual = document.getElementById("elementoTemporalParaCalcularAnchoEnPixeles");
                    let nodoPadre = nodoActual.parentNode;
                    nodoPadre.removeChild(nodoActual);
                }

                return anchoEnPixeles;
            } else {
                for (let elementData of this.elements) {
                    if (MenuBarOption === elementData["Id"]) {
                        let visible: boolean;
                        let width: string;
                        let styleWidth: string;

                        // Hacer visible temporalmente al nodo a copiar si es que está oculto.
                        if (document.getElementById(elementData["Id"]).style.display === "none") {
                            visible = false;
                            document.getElementById(elementData["Id"]).style.removeProperty("display");
                        } else {
                            visible = true;
                        }

                        width = document.getElementById(elementData["Id"]).dataset.scitoolwidth;
                        styleWidth = document.getElementById(elementData["Id"]).style.width
                        document.getElementById(elementData["Id"]).style.width = "auto";

                        let anchoEnPixeles = Math.ceil(document.getElementById(elementData["Id"]).offsetWidth) + 1;

                        // Restaurar visibilidad y ancho del nodo copiado.
                        if (!visible) {
                            document.getElementById(elementData["Id"]).style.setProperty("display", "none");
                        }
                        if (styleWidth !== "auto") {
                            document.getElementById(elementData["Id"]).dataset.scitoolwidth = width;
                            document.getElementById(elementData["Id"]).style.width = width + "px";
                        } else {
                            document.getElementById(elementData["Id"]).dataset.scitoolwidth = width;
                            document.getElementById(elementData["Id"]).style.width = "auto";
                        }

                        break;
                    }
                }

                return anchoEnPixeles;
            }
        }

        //Si se especifica un Id de una opción, devuelve su altura en pixeles. Si no se especifica, devuelve la altura completa si el menú es pulldown, o de la primera opción si el menú es de barra (ahí todas las opciones tienen igual altura).
        public GetPixelsTextHeight(MenuBarOption: string = "") {
            if (MenuBarOption === "") {
                for (let elementData of this.elements) {
                    let altoEnPixeles: number = 0;

                    let nodoNuevo = document.getElementById(elementData["Id"]).cloneNode(true);
                    document.body.appendChild(nodoNuevo);
                    nodoNuevo.setAttribute("id", "elementoTemporalParaCalcularaltoEnPixeles");
                    nodoNuevo.style.visibility = "hidden";

                    altoEnPixeles += nodoNuevo.offsetHeight + 1;

                    //ELiminar elemento temporal.
                    let nodoActual = document.getElementById("elementoTemporalParaCalcularaltoEnPixeles");
                    let nodoPadre = nodoActual.parentNode;
                    nodoPadre.removeChild(nodoActual);

                    if (this.MenuType === ObjectType.MenuBar) {
                        break;
                    }
                }

                return altoEnPixeles;
            } else {
                for (let elementData of this.elements) {
                    if (MenuBarOption === elementData["Id"]) {
                        let visible: boolean;

                        // Hacer visible temporalmente al nodo a copiar si es que está oculto.
                        if (document.getElementById(elementData["Id"]).style.display === "none") {
                            visible = false;
                            document.getElementById(elementData["Id"]).style.removeProperty("display");
                        } else {
                            visible = true;
                        }

                        let altoEnPixeles = Math.ceil(document.getElementById(elementData["Id"]).offsetHeight) + 1;

                        // Restaurar visibilidad y alto del nodo copiado.
                        if (!visible) {
                            document.getElementById(elementData["Id"]).style.setProperty("display", "none");
                        }

                        break;
                    }
                }

                return altoEnPixeles;
            }
        }

        public GetSeparationBetweenOptions() {
            return this.SeparationBetweenOptions;
        }

        public Raise() {
            this.Raised = true;

            for (let elementData of this.elements) {
                document.getElementById(elementData["Id"]).style.setProperty("position", "fixed");
            }
        }

        public Unraise() {
            this.Raised = false;

            for (let elementData of this.elements) {
                document.getElementById(elementData["Id"]).style.setProperty("position", "absolute");
            }
        }

        public GetRaised() {
            return this.Raised;
        }

        public Add(caption: string, id: string = "") {
            let datosMetaObjetoPadre;

            this.Length++;
            let elementId: string;
            if (id.replace(/ /g, "") == "") {
                elementId = this.Id + String(this.Length);
            } else {
                elementId = id;
            }

            //Crear nodo.
            let X: number;
            let Y: number;
            let Z: number = this.Z;

            X = this.X;
            Y = this.Y;

            let nodoNuevo = document.createElement("LABEL");
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

            let elementData = {
                'Caption': caption,
                'Id': elementId,
                'MenuId': ''
            }
            this.elements.push(elementData);
            if (this.MenuType === ObjectType.MenuBar) {
                MetaObject_private.AddDataObject(this.MetaObject, elementId, ObjectType.MenuBarOption);
            } else {
                MetaObject_private.AddDataObject(this.MetaObject, elementId, ObjectType.PulldownMenuOption);
            }

            document.getElementById(elementId).onclick = () => {
                ////////Activar eventual documento padre de este objeto.
                //Buscar metaobjeto de este objeto.
                let datosObjeto = MetaObject_private.GetObjectsMap().filter((objeto) => {
                    if (objeto["ObjectId"] === this.Id) {
                        return objeto;
                    }
                });

                //Verificar si el metaobjeto es un documento.
                datosMetaObjetoPadre = MetaObject_private.GetObjectsMap().filter((objeto) => {
                    if (objeto["ObjectId"] === datosObjeto[0]["MetaObjectId"] && objeto["ObjectType"] === ObjectType.Document) {
                        return objeto;
                    }
                });
                if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) {
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Bring();

                    try {
                        window[datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick"].apply(this);
                    } catch(e) {}
                    window[datosMetaObjetoPadre[0]["MetaObjectId"]].Talk(datosMetaObjetoPadre[0]["MetaObjectId"] + "_OnClick");
                }
                ////////

                if (this.GetEnabled(elementId)) {
                    //Activar/desactivar despliegue automático de menús.
                    Menu.openMenus = !Menu.openMenus;

                    this.ultimaOpcionDeMenuSeleccionada = elementId;

                    //Abrir/Cerrar menús.
                    if (Menu.openMenus) {
                        let menuPulldownAsociado: boolean = false;

                        //Abrir eventual menú asociado.
                        let i: number = 0;
                        for (let elementData of this.elements) {
                            if (elementData['Id'] === id && elementData['MenuId'] !== '') {
                                let anchoEnPixeles: number = 0;
                                let ancho: number = 0;

                                menuPulldownAsociado = true;

                                //Fijar el width para todas las opciones del menú igual al ancho mayor.
                                let opciones = window[elementData['MenuId']].GetElements();
                                for (opcion of opciones) {
                                    ancho = Number(window[elementData['MenuId']].GetPixelsLength(opcion["Id"]));

                                    if (ancho > anchoEnPixeles) {
                                        anchoEnPixeles = ancho;
                                    }
                                }
                                window[elementData['MenuId']].SetWidth(anchoEnPixeles);

                                //Fijar raise o unraise al menú pulldown según menú padre.
                                if (this.GetRaised()) {
                                    window[elementData['MenuId']].Raise();
                                } else {
                                    window[elementData['MenuId']].Unraise();
                                }

                                // Calcular posición x,y en donde mostrar el pulldown menu, según si está asociado a un MenuBar o a otro PulldownMenu.
                                if (this.MenuType === ObjectType.MenuBar) {
                                    window[elementData['MenuId']].SetX(Number(document.getElementById(elementId).dataset.scitoolx));
                                    window[elementData['MenuId']].SetY(this.Y + this.Height);
                                } else {
                                    window[elementData['MenuId']].SetX(document.getElementById(elementId).dataset.scitoolx);
                                    window[elementData['MenuId']].SetY(this.Y + this.Height);
                                }

                                window[elementData['MenuId']].SetZ(Table.GetViewFinderZ());

                                if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) { //Pulldown pertenece a un documento.
                                    window[elementData['MenuId']].SetZIndex(window[datosMetaObjetoPadre[0]["MetaObjectId"]].GetZIndex() + ZIndexDocumentSeparation - ZIndexPulldownMenuMarginFromTheTopOfTheDocumentBack);
                                } else { //Pulldown pertenece al escritorio.
                                    window[elementData['MenuId']].SetZIndex(ZIndexSciToolPulldownMenu);
                                }

                                break;
                            }

                            i++;
                        }

                        if (!menuPulldownAsociado) {
                            Menu.openMenus = false;
                        }
                    } else {
                        //Cerrar menús.
                        for (let menu of Menu.idsStack) {
                            for (let elementData of window[menu].elements) {
                                if (elementData['MenuId'] !== '') {
                                    window[elementData['MenuId']].SetZ(Limbo);
                                }
                            }
                        }
                    }

                    try {
                        window[elementId + "_OnClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(elementId + "_OnClick");

                    try {
                        window[this.Id + "_OnClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnClick");
                }
            }

            document.getElementById(elementId).onmouseover = () => {
                if (this.GetEnabled(elementId)) {
                    document.getElementById(elementId).style.color = this.GetColorOnMouseOver();
                    document.getElementById(elementId).style.backgroundColor = this.GetBackColorOnMouseOver();

                    //Determinar si se cambió de opción y esta pertenece a una barra de menú.
                    if (elementId !== this.ultimaOpcionDeMenuSeleccionada && this.GetMenuType() === ObjectType.MenuBar) {
                        this.ultimaOpcionDeMenuSeleccionada = elementId;

                        //Cerrar todos los menús pulldown.
                        for (let menu of Menu.idsStack) {
                            // if (window[menu].GetMenuType() === ObjectType.PulldownMenu) {
                            //     window[menu].SetZ(Limbo);
                            // }
                            for (let elementData of window[menu].elements) {
                                if (elementData['MenuId'] !== '') {
                                    window[elementData['MenuId']].SetZ(Limbo);
                                }
                            }
                        }
                    }

                    //Determinar si se cambió de opción y esta pertenece a un menú pulldown.
                    if (elementId !== this.ultimaOpcionDeMenuSeleccionada && this.GetMenuType() === ObjectType.PulldownMenu) {
                        this.ultimaOpcionDeMenuSeleccionada = elementId;

                        //Cerrar los menús hacia adelante del menú actual.
                        for (let elementData of this.elements) {
                            if (elementData['MenuId'] !== '') {
                                window[elementData['MenuId']].SetZ(Limbo);
                            }
                        }
                    }

                    //Abrir eventual menú asociado.
                    if (Menu.openMenus) { //Está activado el despliegue automático de menús.
                        let i: number = 0;
                        for (let elementData of this.elements) {
                            if (elementData['Id'] === id && elementData['MenuId'] !== '') {
                                let anchoEnPixeles: number = 0;
                                let ancho: number = 0;

                                //Fijar el width para todas las opciones del menú igual al ancho mayor.
                                let opciones = window[elementData['MenuId']].GetElements();
                                for (opcion of opciones) {
                                    ancho = Number(window[elementData['MenuId']].GetPixelsLength(opcion["Id"]));

                                    if (ancho > anchoEnPixeles) {
                                        anchoEnPixeles = ancho;
                                    }
                                }
                                window[elementData['MenuId']].SetWidth(anchoEnPixeles);

                                //Fijar raise o unraise al menú pulldown según menú padre.
                                if (this.GetRaised()) {
                                    window[elementData['MenuId']].Raise();
                                } else {
                                    window[elementData['MenuId']].Unraise();
                                }

                                // Calcular posición x,y en donde mostrar el pulldown menu, según si está asociado a un MenuBar o a otro PulldownMenu.
                                if (this.MenuType === ObjectType.MenuBar) {
                                    window[elementData['MenuId']].SetX(Number(document.getElementById(elementId).dataset.scitoolx));
                                    window[elementData['MenuId']].SetY(this.Y + this.Height);
                                } else {
                                    window[elementData['MenuId']].SetX(document.getElementById(elementId).dataset.scitoolx);
                                    window[elementData['MenuId']].SetY(this.Y + this.Height);
                                }

                                window[elementData['MenuId']].SetZ(Table.GetViewFinderZ());

                                if (datosMetaObjetoPadre != undefined && datosMetaObjetoPadre.length > 0) { //Pulldown pertenece a un documento.
                                    window[elementData['MenuId']].SetZIndex(window[datosMetaObjetoPadre[0]["MetaObjectId"]].GetZIndex() + ZIndexDocumentSeparation - ZIndexPulldownMenuMarginFromTheTopOfTheDocumentBack);
                                } else { //Pulldown pertenece al escritorio.
                                    window[elementData['MenuId']].SetZIndex(ZIndexSciToolPulldownMenu);
                                }
                            }

                            i++;
                        }
                    }

                    try {
                        window[elementId + "_OnMouseOver"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(elementId + "_OnMouseOver");

                    try {
                        window[this.Id + "_OnMouseOver"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseOver");
                }
            }
            document.getElementById(elementId).ondblclick = () => {
                if (this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnDblClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(elementId + "_OnDblClick");

                    try {
                        window[this.Id + "_OnDblClick"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnDblClick");
                }
            }
            document.getElementById(elementId).onfocus = () => {
                if (this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnFocus"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(elementId + "_OnFocus");

                    try {
                        window[this.Id + "_OnFocus"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnFocus");
                }
            }
            document.getElementById(elementId).onmousemove = () => {
                if (this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnMouseMove"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(elementId + "_OnMouseMove");

                    try {
                        window[this.Id + "_OnMouseMove"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseMove");
                }
            }
            document.getElementById(elementId).onmousedown = () => {
                if (this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnMouseDown"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(elementId + "_OnMouseDown");

                    try {
                        window[this.Id + "_OnMouseDown"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseDown");
                }
            }
            document.getElementById(elementId).onmouseup = () => {
                if (this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnMouseUp"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(elementId + "_OnMouseUp");

                    try {
                        window[this.Id + "_OnMouseUp"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseUp");
                }
            }
            document.getElementById(elementId).onmouseout = () => {
                if (this.GetEnabled(elementId)) {
                    document.getElementById(elementId).style.color = this.GetColor();
                    document.getElementById(elementId).style.backgroundColor = this.GetBackColor();

                    try {
                        window[elementId + "_OnMouseOut"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(elementId + "_OnMouseOut");

                    try {
                        window[this.Id + "_OnMouseOut"].apply(this);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnMouseOut");
                }
            }
            document.getElementById(elementId).onkeydown = (evt) => {
                if (this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnKeyDown"].call(this,evt);
                    } catch(e) {}
                    window[this.Id].Talk(elementId + "_OnKeyDown");

                    try {
                        window[this.Id + "_OnKeyDown"].call(this,evt);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnKeyDown");
                }
            }
            document.getElementById(elementId).onkeypress = (evt) => {
                if (this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnKeyPress"].call(this,evt);
                    } catch(e) {}
                    window[this.Id].Talk(elementId + "_OnKeyPress");

                    try {
                        window[this.Id + "_OnKeyPress"].call(this,evt);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnKeyPress");
                }
            }
            document.getElementById(elementId).onkeyup = (evt) => {
                if (this.GetEnabled(elementId)) {
                    try {
                        window[elementId + "_OnKeyUp"].call(this,evt);
                    } catch(e) {}
                    window[this.Id].Talk(elementId + "_OnKeyUp");

                    try {
                        window[this.Id + "_OnKeyUp"].call(this,evt);
                    } catch(e) {}
                    window[this.Id].Talk(this.Id + "_OnKeyUp");
                }
            }
            this.RedrawMenu();
        }

        public AddList(lista: string) {
            let elementos = lista.split(",");
            for (let elemento of elementos) {
                this.Add(elemento);
            }
        }

        public Clear() {
            for (let elementData of this.elements) {
                (<HTMLInputElement>document.getElementById(elementData["Id"])).checked = false;
            }
        }

        public GetLength() { //Devuelve el número de elementos.
            return this.Length;
        }

        public GetElements() {
            return this.elements;
        }

        public GetMenuType() {
            return this.MenuType;
        }

        public SetCrossZ(crossZ: boolean) {
            this.CrossZ = crossZ;

            let i: number = 0;
            for (let elementData of this.elements) {
                document.getElementById(elementData["Id"]).dataset.scitoolcrossz = String(crossZ);
                i++;
            }
            this.RedrawMenu();
        }

        public GetCrossZ() {
            return this.CrossZ;
        }

        public LinkMenu(elementId: string, menuId:string) {
            for (let elementData of this.elements) {
                if (elementData["Id"] === elementId) {
                    elementData["MenuId"] = menuId;
                    break;
                }
            }
        }

        public SetX(x: number) {
            this.X = x;

            let X: number = x;

            if (this.MenuType == ObjectType.PulldownMenu) {
                for (let elementData of this.elements) {
                    document.getElementById(elementData["Id"]).dataset.scitoolx = String(X);
                }
            } else {
                for (let elementData of this.elements) {
                    document.getElementById(elementData["Id"]).dataset.scitoolx = String(X);
                    X += this.GetPixelsLength(elementData["Id"]) + this.GetSeparationBetweenOptions();
                }
            }

            this.RedrawMenu();
        }

        public GetX() {
            return this.X;
        }

        public SetY(y: number) {
            this.Y = y;

            let Y: number = y;

            if (this.MenuType == ObjectType.PulldownMenu) {
                for (let elementData of this.elements) {
                    document.getElementById(elementData["Id"]).dataset.scitooly = String(Y);
                    Y += this.Height;
                }
            } else {
                for (let elementData of this.elements) {
                    document.getElementById(elementData["Id"]).dataset.scitooly = String(Y);
                }
            }

            this.RedrawMenu();
        }

        public GetY() {
            return this.Y;
        }

        public SetZ(z: number) {
            this.Z = z;

            let i: number = 1;
            for (let elementData of this.elements) {
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
        }

        public GetZ() {
            return this.Z;
        }

        public SetXYZ(x: number, y: number, z: number) {
            this.X = x;
            this.Y = y;
            this.Z = z;
            let X: number;
            let Y: number;
            let incrementoX: number;
            let incrementoY: number;
            if (this.MenuType == ObjectType.PulldownMenu) {
                incrementoX = 0;
                incrementoY = this.Height;
            } else {
                incrementoX = this.Width;
                incrementoY = 0;
            }

            let i: number = 0;
            for (let elementData of this.elements) {
                X = this.X + i * incrementoX;
                Y = this.Y + i * incrementoY;
                document.getElementById(elementData["Id"]).dataset.scitoolx = String(X);
                document.getElementById(elementData["Id"]).dataset.scitooly = String(Y);
                document.getElementById(elementData["Id"]).dataset.scitoolz = String(this.Z);
                i++;
            }
            this.RedrawMenu();
        }

        public RedrawMenu() {
            let x: number;
            let y: number;
            let z: number;
            let width: number;
            let xRelativo: number = Table.GetViewFinderX();
            let yRelativo: number = Table.GetViewFinderY();
            let xDocument, yDocument, xDocumentOrigin, yDocumentOrigin: number;
            let widthDocument, heightDocument, heightDocumentTitleBar: number;
            let documentParentId: any;
            let objectData: object;
            let anchoEnPixeles: string;

            if (this.MenuType === Const.PulldownMenu) {
                for (let elementData of this.elements) {
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
                        } else {
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
                        for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
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
                            window[elementData['Id']].style.top =  String(yRelativo) + "px";
                            window[elementData['Id']].style.removeProperty("display");
                        } else {
                            document.getElementById(elementData['Id']).style.left = String(xRelativo) + "px";
                            document.getElementById(elementData['Id']).style.top = String(yRelativo) + "px";
                            document.getElementById(elementData['Id']).style.removeProperty("display");
                        }
                    } else {
                        document.getElementById(elementData['Id']).style.setProperty("display", "none");
                    }
                }
            }

            Table_private.RedrawViewFinderContent();
        }

        public SetWidth(width: number) {
            this.Width = width;

            for (let elementData of this.elements) {
                document.getElementById(elementData["Id"]).dataset.scitoolwidth = String(this.Width);
                document.getElementById(elementData["Id"]).style.width = String(this.Width) + "px";
            }

            this.RedrawMenu();
        }

        public GetWidth() {
            return this.Width;
        }

        public SetHeight(height: number) {
            this.Height = height;

            for (let elementData of this.elements) {
                document.getElementById(elementData["Id"]).dataset.scitoolheight = String(this.Height);
                document.getElementById(elementData["Id"]).style.height = String(this.Height) + "px";
            }

            this.RedrawMenu();
        }

        public GetHeight() {
            return this.Height;
        }

        public SetDimensions(width: number, height: number) {
            this.Width = width;
            this.Height = height;

            for (let elementData of this.elements) {
                document.getElementById(elementData["Id"]).dataset.scitoolwidth = String(this.Width);
                document.getElementById(elementData["Id"]).style.width = String(this.Width) + "px";
                document.getElementById(elementData["Id"]).dataset.scitoolheight = String(this.Height);
                document.getElementById(elementData["Id"]).style.height = String(this.Height) + "px";
            }

            this.RedrawMenu();
        }

        public GetInViewFinder() { //Si al menos un elemento está en InViewFinder, entonces el menú está InViewFinder y se devuelve true.
            let X: number;
            let Y: number;
            let Z: number = this.Z;
            let Width: number;
            let Height: number;
            let incrementoX: number;
            let incrementoY: number;

            if (this.MenuType == ObjectType.PulldownMenu) {
                incrementoX = 0;
                incrementoY = this.Height;

                let i: number = 0;
                for (let elementData of this.elements) {
                    X = this.X + i * incrementoX;
                    Y = this.Y + i * incrementoY;
                    if (Table.InViewFinder(X, Y, Z, this.Width, this.Height, this.CrossZ)) {
                        return true;
                    }
                    i++;
                }
            } else {
                for (let elementData of this.elements) {
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
        }

        public SetVisible(visible: boolean) {
            this.Visible = visible;

            let visibilidad: string;

            if (visible === true) {
                visibilidad = 'visible';
            } else {
                visibilidad = 'hidden';
            }

            for (let elementData of this.elements) {
                document.getElementById(elementData["Id"]).style.visibility = visibilidad;
            }
        }

        public GetVisible() {
            return this.Visible;
        }

        public SetColor(color: string) {
            this.Color = color;

            for (let elementData of this.elements) {
                if (this.GetEnabled(elementData["Id"])) {
                    document.getElementById(elementData["Id"]).style.color = color;
                }
            }
        }

        public GetColor() {
            return this.Color;
        }

        public SetBackColor(backColor: string) {
            this.BackColor = backColor;

            for (let elementData of this.elements) {
                if (this.GetEnabled(elementData["Id"])) {
                    document.getElementById(elementData["Id"]).style.backgroundColor = backColor;
                }
            }
        }

        public GetBackColor() {
            return this.BackColor;
        }

        public SetColorOnMouseOver(color: string) {
            this.ColorOnMouseOver = color;
        }

        public GetColorOnMouseOver() {
            return this.ColorOnMouseOver;
        }

        public SetBackColorOnMouseOver(color: string) {
            this.BackColorOnMouseOver = color;
        }

        public GetBackColorOnMouseOver() {
            return this.BackColorOnMouseOver;
        }

        public SetTabIndex(tabIndex: number) {
            if (this.Length >= 1) {
                this.TabIndex = tabIndex;
                for (let elementData of this.elements) {
                    if (this.GetEnabled(elementData["Id"])) {
                        document.getElementById(elementData["Id"]).tabIndex = tabIndex;
                    }
                    tabIndex++;
                }
            }
        }

        public GetTabIndex() {
            return this.TabIndex;
        }

        public RestoreTabIndex() {
            this.SetTabIndex(0);
        }

        public SetZIndex(zIndex: string) {
            this.ZIndex = zIndex;

            for (let elementData of this.elements) {
                document.getElementById(elementData["Id"]).style.zIndex = zIndex;
                if (!isNaN(Number(zIndex))) {
                    zIndex = String(Number(zIndex) + 1);
                }
            }
        }

        public GetZIndex() {
            return this.ZIndex;
        }

        public RestoreZIndex() {
            this.SetZIndex("auto");
        }

        public SetFontSize(fontSize: number) {
            this.FontSize = fontSize;

            for (let elementData of this.elements) {
                document.getElementById(elementData["Id"]).style.fontSize = String(fontSize);
            }
        }

        public GetFontSize() {
            return this.FontSize;
        }

        public SetFontFamily(fontFamily: string) {
            this.FontFamily = fontFamily;

            for (let elementData of this.elements) {
                document.getElementById(elementData["Id"]).style.fontFamily = fontFamily;
            }
        }

        public GetFontFamily() {
            return this.FontFamily;
        }

        public SetEnabled(id: any = "", enabled: boolean) { //El id puede ser un Number o un String, según si se da el número de elemento o su Id.
            //TRUCO para hacer al parámetro id opcional: si solo se recibe un único parámetro booleano, entonces ese valor viene en el parámetro id y enabled viene undefined,
            //entonces, se hace enabled = id y se aplica el valor true o false guardado en enabled a todos los elementos del grupo.
            if (enabled !== undefined) {
                if (enabled) {
                    if (typeof id === 'number') {
                        document.getElementById(this.elements[id - 1]["Id"]).removeAttribute("disabled");
                    } else {
                        document.getElementById(id).removeAttribute("disabled");
                    }
                    this.SetColor(this.GetColor());
                    this.SetBackColor(this.GetBackColor());
                } else {
                    if (typeof id === 'number') {
                        document.getElementById(this.elements[id - 1]["Id"]).setAttribute("disabled", "disabled");
                    } else {
                        document.getElementById(id).setAttribute("disabled", "disabled");
                    }
                    this.SetDisabledColor(this.GetDisabledColor());
                    this.SetBackColor(this.GetBackColor());
                }
            } else {
                enabled = id; //Solo vino un parámetro: el booleano, para enabled, pero vino, por tanto, en el parámetro id.
                if (enabled) {
                    for (let elementData of this.elements) {
                        document.getElementById(elementData["Id"]).removeAttribute("disabled");
                        document.getElementById(elementData["Id"]).style.color = this.GetColor();
                        document.getElementById(elementData["Id"]).style.backgroundColor = this.GetBackColor();
                    }
                } else {
                    for (let elementData of this.elements) {
                        document.getElementById(elementData["Id"]).setAttribute("disabled", "disabled");
                        document.getElementById(elementData["Id"]).style.color = this.GetDisabledColor();
                        document.getElementById(elementData["Id"]).style.backgroundColor = this.GetBackColor();
                    }
                }
            }
        }

        public GetEnabled(id: any) { //El id puede ser un Number o un String, según si se da el número de elemento o su Id.
            if (typeof id === 'number') {
                if (document.getElementById(this.elements[id - 1]["Id"]).getAttribute("disabled") === null) {
                    return true;
                } else {
                    return false;
                }
            } else {
                if (document.getElementById(id).getAttribute("disabled") === null) {
                    return true;
                } else {
                    return false;
                }
            }
        }

        public SetDisabledColor(color: string) {
            this.DisabledColor = color;

            let i: number = 0;
            for (let elementData of this.elements) {
                if (!this.GetEnabled(elementData["Id"])) {
                    document.getElementById(elementData["Id"]).style.color = color;
                }
                i++;
            }
        }

        public GetDisabledColor() {
            return this.DisabledColor;
        }

        public SetFocus() {
            document.getElementById(this.elements[0]["Id"]).focus();
        }

        public Talk(message: string, metaMessage: any = "") {
            // Lanzar evento de reacciones a la acción Talk en todos los objetos existentes.
            for (let i:number = 0; i < MetaObject_private.objects.length; i++) {
                if (MetaObject_private.objects[i]["ObjectType"] !== ObjectType.AssociatedControl && MetaObject_private.objects[i]["ObjectType"] !== ObjectType.DocumentAssociatedControl) {
                    try {
                        window[MetaObject_private.objects[i]["ObjectId"] + "_Listen"].call(this, this.Id, message, metaMessage);
                    } catch(e) {}
                }
            }
            for (let idMetaobjeto of MetaObject.GetIdsStack()) {
                try {
                    window[idMetaobjeto + "_Listen"].call(this, this.Id, message, metaMessage);
                } catch(e) {}
            }
            try {
                window["scitool_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["Desk_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
            try {
                window["StatusBar_Listen"].call(this, this.Id, message, metaMessage);
            } catch(e) {}
        }
    }


    //Funciones para ahorrar escritura al programador, pues son éstas quienes llaman a los métodos de la clase "scitool"
    //(evitándole al programador escribir "sci.scitool.método", donde "sci" corresponde al módulo y "scitool" corresponde a la clase).
    export function LoadComponent(componentFile: string) {
        scitool.LoadComponent(componentFile);
    }

    export function GetStackObjectsToLoad() {
        return scitool.GetStackObjectsToLoad();
    }

    export function GetLoadedObjectsData() {
        return scitool.GetLoadedObjectsData();
    }

    export function GetObjectDataById(id: string) {
        return scitool.GetObjectDataById(id);
    }

    export function GetObjectDataByFileName(fileName: string) {
        return scitool.GetObjectDataByFileName(fileName);
    }

    export function GetLoadedObjectStateById(id: string) {
        return scitool.GetLoadedObjectStateById(id);
    }

    export function GetLoadedObjectStateByFileName(fileName: string) {
        return scitool.GetLoadedObjectStateByFileName(fileName);
    }

    export function LoadingObjects() {
        return scitool.LoadingObjects();
    }

    export function LoadedObjectById(id: string) {
        return scitool.LoadedObjectById(id);
    }

    export function LoadedObjectByFileName(fileName: string) {
        return scitool.LoadedObjectByFileName(fileName);
    }

    export function GetObjectsMap() {
        return scitool.GetObjectsMap();
    }

    export function GetParentDocumentId(idObjeto) {
        return scitool.GetParentDocumentId(idObjeto);
    }

    export function GetParentMetaObjectId(idObjeto) {
        return scitool.GetParentMetaObjectId(idObjeto);
    }

    export function GetMetaObjectObjectsNumber(idMetaobjeto) {
        return scitool.GetMetaObjectObjectsNumber(idMetaobjeto);
    }

    //Funciones para ahorrar escritura al programador, pues son éstas quienes crean las variables de objetos de las clases
    //(evitándole al programador escribir "let variable = new ...").
    export function AddMetaObject(id: string = 'MetaObject' + (MetaObject.NumberOfUnnamedObjects++)) {
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new MetaObject(id);
            return true;
        } else {
            return false;
        }
    }

    // Los documentos se crean por defecto en el Limbo, por tanto no requieren un Z, y de este modo,
    // se fuerza a que todos los documentos deban ejecutar el método Bring(), y además, al pasar del Limbo a un Z cualquiera con Bring(),
    // entonces todos los documentos llamarán al menos una vez al evento OnOpen().
    export function AddDocument(x: number = 0, y: number = 0, width: number = 0, height: number = 0, caption: string = "", id: string = 'Document' + (Document.NumberOfUnnamedObjects++)) {
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Document(x,y,Limbo,width,height,caption,id);
            return true;
        } else {
            return false;
        }
    }

    export function AddCanvas(x: number = 0, y: number = 0, z: number = 0, width: number = 0, height: number = 0, id: string = 'Canvas' + (Canvas.NumberOfUnnamedObjects++)) {
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Canvas("scitool",x,y,z,width,height,id);
            return true;
        } else {
            return false;
        }
    }

    export function AddBox(x: number = 0, y: number = 0, z: number = 0, width: number = 0, height: number = 0, borderWidth: number = Skin.GetBoxBorderWidth(), borderColor: string = Skin.GetBoxBorderColor(), fillColor: string = Skin.GetBoxFillColor(), id: string = 'Box' + (Box.NumberOfUnnamedObjects++)) {
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Box("scitool",x,y,z,width,height,borderWidth,borderColor,fillColor,id);
            return true;
        } else {
            return false;
        }
    }

    export function AddEllipse(x: number = 0, y: number = 0, z: number = 0, width: number = 0, height: number = 0, borderWidth: number = Skin.GetEllipseBorderWidth(), borderColor: string = Skin.GetEllipseBorderColor(), fillColor: string = Skin.GetEllipseFillColor(), id: string = 'Ellipse' + (Ellipse.NumberOfUnnamedObjects++)) {
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Ellipse("scitool",x,y,z,width,height,borderWidth,borderColor,fillColor,id);
            return true;
        } else {
            return false;
        }
    }

    export function AddLabel(x: number = 0, y: number = 0, z: number = 0, caption: string = "", id: string = 'Label' + (Label.NumberOfUnnamedObjects++)) {
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Label("scitool",x,y,z,caption,id);
            return true;
        } else {
            return false;
        }
    }

    export function AddTextBox(x: number = 0, y: number = 0, z: number = 0, caption: string = "", id: string = 'TextBox' + (TextBox.NumberOfUnnamedObjects++)) {
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new TextBox("scitool",x,y,z,caption,id);
            return true;
        } else {
            return false;
        }
    }

    export function AddButton(x: number = 0, y: number = 0, z: number = 0, caption: string = "", id: string = 'Button' + (Button.NumberOfUnnamedObjects++)) {
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Button("scitool",x,y,z,caption,id);
            return true;
        } else {
            return false;
        }
    }

    export function AddImage(x: number = 0, y: number = 0, z: number = 0, width: number = 0, height: number = 0, imageFile: string = "", caption: string = "", id: string = 'Image' + (Image.NumberOfUnnamedObjects++)) {
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Image("scitool",x,y,z,width,height,imageFile,caption,id);
            return true;
        } else {
            return false;
        }
    }

    export function AddVideo(x: number = 0, y: number = 0, z: number = 0, width: number = 0, height: number = 0, videoFile: string = "", autoPlay: boolean = false, id: string = 'Video' + (Video.NumberOfUnnamedObjects++)) {
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Video("scitool",x,y,z,width,height,videoFile,autoPlay,id);
            return true;
        } else {
            return false;
        }
    }

    export function AddCheckBox(x: number = 0, y: number = 0, z: number = 0, caption: string = "", id: string = 'CheckBox' + (CheckBox.NumberOfUnnamedObjects++)) {
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new CheckBox("scitool",x,y,z,caption,id);
            return true;
        } else {
            return false;
        }
    }

    export function AddRadioButtonGroup(x: number = 0, y: number = 0, z: number = 0, id: string = 'RadioButtonGroup' + (RadioButtonGroup.NumberOfUnnamedObjects++)) {
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new RadioButtonGroup("scitool",x,y,z,id);
            return true;
        } else {
            return false;
        }
    }

    export function AddComboBox(x: number = 0, y: number = 0, z: number = 0, id: string = 'ComboBox' + (ComboBox.NumberOfUnnamedObjects++)) {
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new ComboBox("scitool",x,y,z,id);
            return true;
        } else {
            return false;
        }
    }

    export function AddFile(x: number = 0, y: number = 0, z: number = 0, id: string = 'File' + (File.NumberOfUnnamedObjects++)) {
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new File("scitool",x,y,z,id);
            return true;
        } else {
            return false;
        }
    }

    export function AddRequester(id: string = 'Requester' + (Requester.NumberOfUnnamedObjects++)) {
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Requester(id);
            return true;
        } else {
            return false;
        }
    }

    export function AddChronometer(id: string = 'Chronometer' + (Chronometer.NumberOfUnnamedObjects++)) {
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Chronometer(id);
            return true;
        } else {
            return false;
        }
    }

    export function AddTimer(hours: number = 0, minutes: number = 0, seconds: number = 0, centiseconds: number = 0, id: string = 'Timer' + (Timer.NumberOfUnnamedObjects++)) {
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Timer(hours,minutes,seconds,centiseconds,id);
            return true;
        } else {
            return false;
        }
    }

    export function AddDiv(x: number = 0, y: number = 0, z: number = 0, width: number = 0, height: number = 0, borderWidth: number = Skin.GetDivBorderWidth(), borderColor: string = Skin.GetDivBorderColor(), fillColor: string = Skin.GetDivFillColor(), id: string = 'Div' + (Div.NumberOfUnnamedObjects++)) {
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Div("scitool",x,y,z,width,height,borderWidth,borderColor,fillColor,id);
            return true;
        } else {
            return false;
        }
    }

    export function AddMenuBar(x: number = 0, y: number = 0, z: number = 0, id: string = 'Menu' + (Menu.NumberOfUnnamedObjects++)) {
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Menu("scitool",x,y,z,ObjectType.MenuBar,id);
            return true;
        } else {
            return false;
        }
    }

    //Los Menú Pulldown siempre se crean en las coordenadas (0,0,Limbo).
    export function AddPulldownMenu(id: string = 'Menu' + (Menu.NumberOfUnnamedObjects++)) {
        if (!scitool.ObjectIdExists(id)) {
            window[id] = new Menu("scitool",0,0,Limbo,ObjectType.PulldownMenu,id);
            return true;
        } else {
            return false;
        }
    }
}
