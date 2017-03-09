(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define('cultures/ja-JP', ['jquery'], factory);
    factory();
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function () {

  if (!Locale) {
    return;
  }

  //Get Latest from http://www.unicode.org/Public/cldr/25/
  Locale.addCulture('ja-JP', {
    //layout/language
    language: 'ja',
    englishName: 'Japanese (Japan)',
    nativeName: '日本語 (日本)',
    //layout/orientation/@characters
    direction: 'left-to-right',
    //ca-gregorian
    calendars: [{
      name: 'gregorian',
      //ca-gregorian/main/dates/calendars/gregorian/dateFormats/
      dateFormat: {'separator': '/', //Infered
                   'timeSeparator': ':',
                   'short': 'yyyy/MM/dd', //use four digit year
                   'medium': 'yyyy/MM/dd',
                   'long': 'yyyy年M月d日',
                   'full': 'yyyy年M月d日EEEE',
                   'month': 'M月d日EEEE',
                   'year': 'yyyy年M月',
                   'timestamp': 'H:mm:ss',
                   'datetime': 'yyyy/MM/dd H:mm'}, //Infered short + short gregorian/dateTimeFormats
      //ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
      days: {
         wide: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
         abbreviated: ['日','月','火','水','木','金','土'],
         narrow: ['日','月','火','水','木','金','土']
      },
      //ca-gregorian/main/dates/calendars/gregorian/months/format/wide
      months: {
        wide: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
        abbreviated: ['1','2','3','4','5','6','7','8','9','10','11','12']
      },
      //ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
      timeFormat: 'H:mm',
      //ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
      dayPeriods: ['正午', '午後']
    }],
    //numbers/currencyFormats-numberSystem-latn/standard (Replace Sign http://www.currencysymbols.in ?)
    currencySign: '¥', //(Replace Sign http://www.currencysymbols.in ?)
    currencyFormat: '¤#,##0.00',
    //numbers/symbols-numberSystem-latn
    numbers: {
      percentSign: '%',
      percentFormat: '#,##0 %',
      minusSign: '-',
      decimal: '.',
      group: ','
    },
    //Resx - Approved By Translation Team
    messages: {
      'AboutText': {id: 'AboutText', value: 'Copyright &copy; {0} Infor. All rights reserved. ここに示す文字標章及び図形標章は、Infor及び/またはその関連会社ならびに子会社の商標または登録商標、あるいはその両方です。無断複製・転載を禁ず。本書に記載されるその他すべての商標名は各所有者の所有物です。'},
      'Actions': {id: 'Actions', value: 'アクション', comment: 'Tooltip text for the action button with additional in context actions'},
      'Add': {id: 'Add', value: '追加', comment: 'Add'},
      'AddNewTab': {id: 'AddNewTab', value: 'タブの新規追加', comment: 'Attached to a button that adds new tabs'},
      'AdvancedFilter': {id: 'AdvancedFilter', value: 'フィルターオプションの設定の作成', comment: 'In a data grid active an advanced filtering feature'},
      'Alert': {id: 'Alert', value: 'アラート', comment: 'Alert'},
      'AllResults': {id: 'AllResults', value: 'すべての結果', comment: 'Search Results Text'},
      'AligntoBottom': {id: 'AligntoBottom', value: '下揃え', comment: 'Align to Bottom tooltip'},
      'AlignCenterHorizontally': {id: 'AlignCenterHorizontally', value: '左右中央揃え', comment: 'Align Center Horizontally tooltip'},
      'Amber': {id: 'Amber', value: 'アンバー', comment: 'Color in our color pallette'},
      'Amethyst': {id: 'Amethyst', value: 'アメジスト', comment: 'Color in our color pallette'},
      'Apply': {id: 'Apply', value: '適用', comment: 'Text in a button to apply an action'},
      'Attach': {id: 'Attach', value: '添付', comment: 'Attach'},
      'Azure': {id: 'Azure', value: '空色', comment: 'Color in our color pallette'},
      'Between': {id: 'Between', value: '次の値の間', comment: 'Between in icons for filtering'},
      'Blockquote': {id: 'Blockquote', value: 'ブロック引用', comment: 'insert a block quote in the editor'},
      'Bold': {id: 'Bold', value: '太字', comment: 'Make text Bold'},
      'Bookmarked': {id: 'Bookmarked', value: 'ブックマーク付', comment: 'Bookmark filled - Element is already bookmarked'},
      'BookmarkThis': {id: 'BookmarkThis', value: 'これをブックマーク', comment: 'Bookmark an element'},
      'Breadcrumb': {id: 'Breadcrumb', value: '階層リンク', comment: 'Text describing the Breadcrumb'},
      'BulletedList': {id: 'BulletedList', value: '箇条書き', comment: 'Bulleted List tooltip'},
      'Calendar': {id: 'Calendar', value: 'カレンダー', comment: 'Inline Text for the title of the Calendar control'},
      'Camera': {id: 'Camera', value: 'カメラ', comment: 'Camera tooltip'},
      'Cancel': {id: 'Cancel', value: 'キャンセル', comment: 'Cancel tooltip'},
      'CapsLockOn': {id: 'CapsLockOn', value: 'CapsLock キーがオン', comment: 'Caps Lock On message'},
      'Cart': {id: 'Cart', value: 'カート', comment: 'Cart tooltip'},
      'CenterText': {id: 'CenterText', value: '中央', comment: 'An Icon Tooltip'},
      'CharactersLeft': {id: 'CharactersLeft', value: '残り文字数 {0}', comment: 'indicator showing how many more characters you can type.'},
      'CharactersMax': {id: 'CharactersMax', value: '最大文字数 ', comment: 'indicator showing how many max characters you can type.'},
      'ChangeSelection': {id: 'ChangeSelection', value: '. 選択項目を変更するには矢印キーを使用します。', comment: 'Audible Text for drop down list help'},
      'Checkbox': {id: 'Checkbox', value: 'チェックボックス', comment: 'Checkbox tooltip'},
      'Checked': {id: 'Checked', value: 'チェック済', comment: 'Checked tooltip'},
      'Clear': {id: 'Clear', value: 'クリア', comment: 'Tooltip for a Clear Action'},
      'ClearFilter': {id: 'ClearFilter', value: 'フィルターのクリア', comment: 'Clear the current filter criteria'},
      'Clock': {id: 'Clock', value: '時計', comment: 'Clock tooltip'},
      'Close': {id: 'Close', value: '閉じる', comment: 'Tooltip for a Close Button Action'},
      'Copy': {id: 'Copy', value: 'コピー', comment: 'Copy tooltip'},
      'Collapse': {id: 'Collapse', value: '折りたたみ', comment: 'Collapse / close a tree/submenu'},
      'CollapseAppTray': {id: 'CollapseAppTray', value: 'アプリトレイを折りたたむ', comment: 'Collapse App Tray tooltip'},
      'Columns': {id: 'Columns', value: '列', comment: 'Columns tooltip'},
      'Component': {id: 'Component', value: 'コンポーネント', comment: 'As in a UI component - building block.'},
      'Compose': {id: 'Compose', value: '作成', comment: 'Compose tooltip'},
      'Completed': {id: 'Completed', value: '完了', comment: 'Text For a Completed Status'},
      'Confirm': {id: 'Confirm', value: '確認', comment: 'Confirm tooltip'},
      'Contains': {id: 'Contains', value: '次の値を含む', comment: 'Contains in icons for filtering'},
      'Cut': {id: 'Cut', value: '切り取り', comment: 'Cut tooltip'},
      'Date': {id: 'Date', value: '日付', comment: 'Describes filtering by a date data type'},
      'Delete': {id: 'Delete', value: '削除', comment: 'Delete Toolbar Action Tooltip'},
      'DistributeHoriz': {id: 'DistributeHoriz', value: '左右に整列', comment: 'Icon button tooltip for action that distributes elements across Horizontally'},
      'Document': {id: 'Document', value: 'ドキュメント', comment: 'Document tooltip'},
      'Dirty': {id: 'Dirty', value: '行は変更されました', comment: 'Record is dirty / modified'},
      'Drilldown': {id: 'Drilldown', value: 'ドリルダウン', comment: 'Drill by moving page flow into a record'},
      'Drillup': {id: 'Drillup', value: 'ドリルアップ', comment: 'Opposite of Drilldown, move back up to a larger set of records'},
      'Dropdown': {id: 'Dropdown', value: 'ドロップダウン', comment: 'Dropdown'},
      'DoesNotContain': {id: 'DoesNotContain', value: '次の値を含まない', comment: 'Does Not Contain in icons for filtering'},
      'DoesNotEndWith': {id: 'DoesNotEndWith', value: '次の値で終わらない', comment: 'For condition filtering'},
      'DoesNotEqual': {id: 'DoesNotEqual', value: '次の値に等しくない', comment: 'Does Not Equal in icons for filtering'},
      'DoesNotStartWith': {id: 'DoesNotStartWith', value: '次の値で始まらない', comment: 'For condition filtering'},
      'Down': {id: 'Down', value: '下へ', comment: 'Down tooltip'},
      'Download': {id: 'Download', value: 'ダウンロード', comment: 'Download tooltip'},
      'Duplicate': {id: 'Duplicate', value: '複製', comment: 'Duplicate tooltip'},
      'EitherSelectedOrNotSelected': {id: 'EitherSelectedOrNotSelected', value: '選択済か未選択', comment: 'Either Selected Or NotSelected in icons for filtering'},
      'EndsWith': {id: 'EndsWith', value: '次の値で終わる', comment: 'for condition filtering'},
      'EnterComments': {id: 'EnterComments', value: 'ここにコメントを入力します...', comment: 'Placeholder text for a text input (comments)'},
      'Error': {id: 'Error', value: 'エラー', comment: 'Title, Spoken Text describing fact an error has occured'},
      'ErrorAllowedTypes': {id: 'ErrorAllowedTypes', value: 'ファイルタイプは許可されません。', comment: 'Error string for file-upload'},
      'ErrorMaxFileSize': {id: 'ErrorMaxFileSize', value: 'ファイルサイズの制限を超過しました', comment: 'Error string for file-upload'},
      'ErrorMaxFilesInProcess': {id: 'ErrorMaxFilesInProcess', value: '最大ファイルサイズを超過しました', comment: 'Error string for file-upload'},
      'EmailValidation': {id: 'EmailValidation', value: '電子メールアドレスが無効です', comment: 'This the rule for email validation'},
      'Emerald': {id: 'Emerald', value: 'エメラルド', comment: 'Color in our color pallette'},
      'Expand': {id: 'Expand', value: '展開', comment: 'Expand open a tree/submenu'},
      'ExpandAppTray': {id: 'ExpandAppTray', value: 'アプリトレイを展開', comment: 'ExpandAppTray tooltip'},
      'ExpandCollapse': {id: 'ExpandCollapse', value: '展開/折りたたみ', comment: 'Text to toggle a button in a container.'},
      'ExportAsSpreadsheet': {id: 'ExportAsSpreadsheet', value: 'スプレッドシートにエクスポート', comment: 'Export as Spreadsheet tooltip'},
      'Edit': {id: 'Edit', value: '編集', comment: 'Edit tooltip'},
      'Equals': {id: 'Equals', value: '次の値に等しい', comment: 'Equals in icons for filtering'},
      'ExitFullView': {id: 'ExitFullView', value: '全画面表示の終了', comment: 'Exit Full View tooltip'},
      'Export': {id: 'Export', value: 'エクスポート', comment: 'Export tooltip'},
      'ExportToExcel': {id: 'ExportToExcel', value: 'Excel にエクスポート', comment: 'Export To Excel menu option in datagrid'},
      'Favorite': {id: 'Favorite', value: 'お気に入り', comment: 'A favorite item'},
      'FileUpload': {id: 'FileUpload', value: 'ファイルのアップロード。Enter キーを押してファイルを参照します', comment: 'Screen Reader instructions'},
      'Filter': {id: 'Filter', value: 'フィルター', comment: 'Filter tooltip'},
      'FirstPage': {id: 'FirstPage', value: '最初のページ', comment: 'First Page tooltip'},
      'Folder': {id: 'Folder', value: 'フォルダー', comment: 'Folder tooltip'},
      'FullView': {id: 'FullView', value: '全画面表示', comment: 'Full View tooltip'},
      'GoForward': {id: 'GoForward', value: '次に進む', comment: 'Move Page / object this direction'},
      'GoBack': {id: 'GoBack', value: '前に戻る', comment: 'Move Page / object this directionp'},
      'GoDown': {id: 'GoDown', value: '下に移動', comment: 'Move Page / object this directionp'},
      'GoUp': {id: 'GoUp', value: '上に移動', comment: 'Move Page / object this direction'},
      'Graphite': {id: 'Graphite', value: 'グラファイト', comment: 'Color in our color pallette'},
      'GreaterOrEquals': {id: 'GreaterOrEquals', value: 'より大か等しい', comment: 'Greater Than Or Equals in icons for filtering'},
      'GreaterThan': {id: 'GreaterThan', value: 'より大きい', comment: 'Greater Than in icons for filtering'},
      'Grid': {id: 'Grid', value: 'グリッド', comment: 'Grid tooltip'},
      'Hours': {id: 'Hours', value: '時', comment: 'the hour portion of a time'},
      'HeadingThree': {id: 'HeadingThree', value: '見出し 3', comment: 'Heading Three tooltip'},
      'HeadingFour': {id: 'HeadingFour', value: '見出し 4', comment: 'Heading Four tooltip'},
      'Highest': {id: 'Highest', value: '最高', comment: 'Highest Four tooltip'},
      'Home': {id: 'Home', value: 'ホーム', comment: 'Home tooltip'},
      'HtmlView': {id: 'HtmlView', value: 'HTML 表示', comment: 'Html View tooltip'},
      'Image': {id: 'Image', value: 'イメージ', comment: 'Image of something'},
      'Import': {id: 'Import', value: 'インポート', comment: 'Import tooltip'},
      'Info': {id: 'Info', value: '情報', comment: 'Info tooltip'},
      'InProgress': {id: 'In Progress', value: '処理中', comment: 'Info tooltip that an action is in progress'},
      'InsertAnchor': {id: 'InsertAnchor', value: 'アンカーの挿入', comment: 'Insert Acnhor (link) in an editor'},
      'InsertImage': {id: 'InsertImage', value: '画像の挿入', comment: 'Insert Image in an editor'},
      'Italic': {id: 'Italic', value: '斜体', comment: 'Make Text Italic'},
      'InvalidDate': {id: 'InvalidDate', value: '日付が無効', comment: 'validation message for wrong date format (short)'},
      'InvalidTime': {id: 'InvalidTime', value: '無効な時間', comment: 'validation message for wrong time format'},
      'Inventory': {id: 'Inventory', value: '在庫', comment: 'Icon button tooltop for Inventory Action'},
      'IsEmpty': {id: 'IsEmpty', value: '空', comment: 'Is Empty in icons for filtering'},
      'IsNotEmpty': {id: 'IsNotEmpty', value: '空でない', comment: 'Is Not Empty in icons for filtering'},
      'ItemsSelected': {id: 'ItemsSelected', value: '項目選択済', comment: 'Num of Items selected for swaplist'},
      'JustifyCenter': {id: 'JustifyCenter', value: '中央', comment: 'justify text to center in the editor'},
      'JustifyLeft': {id: 'JustifyLeft', value: '左揃え', comment: 'justify text to left in the editor'},
      'JustifyRight': {id: 'JustifyRight', value: '右揃え', comment: 'justify text to right in the editor'},
      'Keyword': {id: 'Keyword', value: 'キーワード', comment: 'Describes filtering by a keyword search'},
      'Launch': {id: 'Launch', value: '起動', comment: 'Launch'},
      'LastPage': {id: 'LastPage', value: '最後のページ', comment: 'Last Page tooltip'},
      'Left': {id: 'Left', value: '左', comment: 'Left tooltip'},
      'LessOrEquals': {id: 'LessOrEquals', value: 'より小か等しい', comment: 'Less Than Or Equals in icons for filtering'},
      'LessThan': {id: 'LessThan', value: 'より小さい', comment: 'Less Than in icons for filtering'},
      'Link': {id: 'Link', value: 'リンク', comment: 'Link - as in hyperlink - icon tooltop'},
      'Load': {id: 'Load', value: 'ロード', comment: 'Load icon tooltip'},
      'Loading': {id: 'Loading', value: 'ロードしています', comment: 'Text below spinning indicator to indicate loading'},
      'Locked': {id: 'Locked', value: 'ロック済', comment: 'Locked tooltip'},
      'Logout': {id: 'Logout', value: 'ログアウト', comment: 'Log out of the application'},
      'Lookup': {id: 'Lookup', value: 'ルックアップ', comment: 'Lookup - As in looking up a record or value'},
      'Lowest': {id: 'Lowest', value: '最低', comment: 'Lowest - As in Lowest value'},
      'Mail': {id: 'Mail', value: 'メール', comment: 'Mail tooltip'},
      'MapPin': {id: 'MapPin', value: 'ピン', comment: 'Map Pin tooltip'},
      'Maximize': {id: 'Maximize', value: '最大化', comment: 'Maximize a screen or dialog in the UI'},
      'Median': {id: 'Median', value: '中央', comment: 'Median in Mathematics'},
      'Medium': {id: 'Medium', value: '中', comment: 'Describes a Medium sized Row Height in a grid/list'},
      'Menu': {id: 'Menu', value: 'メニュー', comment: 'Menu tooltip'},
      'MingleShare': {id: 'MingleShare', value: 'Ming.le で共有', comment: 'Share the contextual object/action in the mingle system'},
      'Minutes': {id: 'Minutes', value: '分', comment: 'the minutes portion of a time'},
      'Minimize': {id: 'Minimize', value: '最小化', comment: 'Minimize tooltip'},
      'Minus': {id: 'Minus', value: 'マイナス', comment: 'Minus tooltip'},
      'Mobile': {id: 'Mobile', value: '携帯電話', comment: 'Indicates a mobile device (phone tablet ect)'},
      'More': {id: 'More', value: 'その他...', comment: 'Text Indicating More Buttons or form content'},
      'MoreActions': {id: 'MoreActions', value: 'その他のアクション', comment: 'Text on the More Actions button indictating hidden functions'},
      'MsgDirty': {id: 'MsgDirty', value: '、修正', comment: 'for modified form fields'},
      'NewDocument': {id: 'NewDocument', value: '新規ドキュメント', comment: 'New Document tooltip'},
      'Next': {id: 'Next', value: '次へ', comment: 'Next in icons tooltip'},
      'NextPage': {id: 'NextPage', value: '次のページ', comment: 'Next on Pager'},
      'NextMonth': {id: 'NextMonth', value: '来月', comment: 'the label for the button that moves calendar to next/prev'},
      'No': {id: 'No', value: 'いいえ', comment: 'On a dialog button'},
      'NoResults': {id: 'NoResults', value: '結果なし', comment: 'Search Results Text'},
      'Normal': {id: 'Normal', value: '標準', comment: 'Normal row height'},
      'Notes': {id: 'Notes', value: '注記', comment: 'Notes icon tooltip'},
      'NotSelected': {id: 'NotSelected', value: '未選択', comment: 'Not Selected in icons for filtering'},
      'NumberList': {id: 'NumberList', value: '番号付きリスト', comment: 'Number List tooltip'},
      'OpenBackClose': {id: 'OpenBackClose', value: '開く / 戻る / 閉じる', comment: 'Open / Back / Close tooltip'},
      'OpenClose': {id: 'OpenClose', value: '開く / 閉じる', comment: 'Open / Close tooltip'},
      'OrderedList': {id: 'OrderedList', value: '番号付きリストの挿入/削除', comment: 'Insert an Ordered list in the editor'},
      'Page': {id: 'Page', value: 'ページ ', comment: 'Text on the pager links'},
      'PageOf': {id: 'PageOf', value: 'ページ {0} / {1}', comment: 'Pager Text Showing current and number of pages'},
      'PageOn': {id: 'PageOn', value: '現在表示中のページ ', comment: 'Text on the pager links'},
      'Paste': {id: 'Paste', value: '貼り付け', comment: 'Paste icon tooltip'},
      'PasswordValidation': {id: 'PasswordValidation', value: '<strong>>パスワードは次の要件を満たす必要があります。</strong><brl>長さは 10 文字以上にする<br>大文字を最低 1 字含む<br>小文字を最低 1 字を含む<br>特殊文字を 1 字を含む<br>自分のユーザー名を含まない<br>以前に使用したパスワードでない<br>', comment: 'Password validation requirements'},
      'PasswordConfirmValidation': {id: 'PasswordConfirmValidation', value: 'パスワードは一致する必要があります', comment: 'Password Confirm validation'},
      'Peak': {id: 'Peak', value: 'ピーク', comment: 'the max or peak value in a chart'},
      'PersonalizeColumns': {id: 'PersonalizeColumns', value: '列の個人用設定', comment: 'Customize Columns in a Grid'},
      'Period': {id: 'Period', value: '期間', comment: 'the am/pm portion of a time'},
      'PressDown': {id: 'PressDown', value: '下矢印キーを押して日付を選択します', comment: 'the audible label for Tooltip about how to operate the date picker'},
      'PressShiftF10': {id: 'PressShiftF10', value: 'Shift+F10 キーを押してコンテキストメニューを開きます', comment: 'the audible infor for screen readers on how to use a field with a popup menu'},
      'Previous': {id: 'Previous', value: '前へ', comment: 'Previous icon tooltip - moved to previous record'},
      'PreviousMonth': {id: 'PreviousMonth', value: '前月', comment: 'the label for the button that moves calendar to next/prev'},
      'PreviousPage': {id: 'PreviousPage', value: '前のページ', comment: 'Previous Page tooltip'},
      'Print': {id: 'Print', value: '印刷', comment: 'Print tooltip'},
      'Range': {id: 'Range', value: '範囲', comment: 'Range for tooltip'},
      'RecordsPerPage': {id: 'RecordsPerPage', value: '1 ページのレコード数 {0}', comment: 'Dropd own allows the user to select how many visible records {} shows select value.'},
      'Redo': {id: 'Redo', value: 'やり直し', comment: 'Redo tooltip'},
      'Refresh': {id: 'Refresh', value: 'リフレッシュ', comment: 'Refresh tooltip'},
      'Required': {id: 'Required', value: '必須', comment: 'indicates a form field is manditory'},
      'Reset': {id: 'Reset', value: 'リセット', comment: 'Reset tooltip'},
      'Results': {id: 'Results', value: '結果', comment: 'As in showing N Results in a List'},
      'RightAlign': {id: 'RightAlign', value: '右揃え', comment: 'Right Align tooltip'},
      'RightAlignText': {id: 'RightAlignText', value: '右揃え', comment: 'Right Align Text tooltip'},
      'Right': {id: 'Right', value: '右', comment: 'Right'},
      'Roles': {id: 'Roles', value: 'ロール', comment: 'Roles tooltip'},
      'RowHeight': {id: 'RowHeight', value: '行の高さ', comment: 'Describes the Height for Rows in a Data Grid'},
      'Ruby': {id: 'Ruby', value: 'ルビー', comment: 'Color in our color pallette'},
      'RunFilter': {id: 'RunFilter', value: 'フィルターの実行', comment: 'Execute the current filter criteria'},
      'Save': {id: 'Save', value: '保存', comment: 'Save tooltip'},
      'SaveCurrentView': {id: 'SaveCurrentView', value: '現在のビューを保存', comment: 'Datagrids contain view sets. This menu option saves them'},
      'SavedViews': {id: 'SavedViews', value: '保存したビュー', comment: 'Label for a list of Views'},
      'Search': {id: 'Search', value: '検索', comment: 'Search tooltip'},
      'SearchColumnName': {id: 'SearchColumnName', value: '列名の検索', comment: 'Search for a datagrid column by name'},
      'SearchFolder': {id: 'SearchFolder', value: 'フォルダーで検索', comment: 'Search Folder tooltip'},
      'SearchList': {id: 'SearchList', value: 'リストの検索', comment: 'Search List tooltip'},
      'Select': {id: 'Select', value: '選択', comment: 'text describing a select action'},
      'Selected': {id: 'Selected', value: '選択済', comment: 'text describing a selected object'},
      'Send': {id: 'Send', value: '送信', comment: 'Send tooltip'},
      'SetTime': {id: 'SetTime', value: '時間の設定', comment: 'button text that inserts time when clicked'},
      'Settings': {id: 'Settings', value: '設定', comment: 'Settings tooltip'},
      'Short': {id: 'Short', value: '短', comment: 'Describes a Shorted Row Height in a grid/list'},
      'ShowFilterRow': {id: 'ShowFilterRow', value: 'フィルター行の表示', comment: 'Toggle a row with filer info above a list'},
      'ShowLess': {id: 'ShowLess', value: '簡易表示', comment: 'Show less form content'},
      'ShowMore': {id: 'ShowMore', value: '詳細表示', comment: 'Show more form content'},
      'Slate': {id: 'Slate', value: 'ブルーグレー', comment: 'Color in our color pallette'},
      'SliderHandle': {id: 'SliderHandle', value: 'ハンドル -', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control'},
      'SliderMaximumHandle': {id: 'SliderMaximumHandle', value: '最大範囲のハンドル -', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control'},
      'SliderMinimumHandle': {id: 'SliderMinimumHandle', value: '最小範囲のハンドル -', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control'},
      'SkipToMain': {id: 'SkipToMain', value: 'スキップしてメインコンテンツへ移動', comment: 'Skip link in header, jumps when clicked on to main area'},
      'StartsWith': {id: 'StartsWith', value: '次の値で始まる', comment: 'for condition filtering'},
      'StrikeThrough': {id: 'StrikeThrough', value: '取り消し線', comment: 'turn on and off strike through text in text editor (like word)'},
      'SortAtoZ': {id: 'SortAtoZ', value: '昇順に並べ替え', comment: 'Sort A to Z in icons for filtering'},
      'SortZtoA': {id: 'SortZtoA', value: '降順に並べ替え', comment: 'Sort Z to A in icons for filtering'},
      'SortDown': {id: 'SortDown', value: '下に並べ替え', comment: 'Sort Down tooltip'},
      'SortUp': {id: 'SortUp', value: '上に並べ替え', comment: 'Sort Up tooltip'},
      'Subscript': {id: 'Subscript', value: '下付き', comment: 'Turn on and off Subscript text in text editor (like word)'},
      'Superscript': {id: 'Superscript', value: '上付き', comment: 'Turn on and off Superscript text in text editor (like word)'},
      'Tabs': {id: 'Tabs', value: 'タブ...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu'},
      'Tack': {id: 'Tack', value: 'ピン', comment: 'Pin an object'},
      'Tall': {id: 'Tall', value: '高', comment: 'Describes a Taller Row Height in a grid/list'},
      'Timer': {id: 'Timer', value: 'タイマー', comment: 'Timer tooltip'},
      'Today': {id: 'Today', value: '今日', comment: 'refering to today on a calendar'},
      'ToggleBold': {id: 'ToggleBold', value: '太字の切り替え', comment: 'turn on and off bold in text editor (like word)'},
      'ToggleH3': {id: 'ToggleH3', value: '見出し 3 の切り替え', comment: 'turn on and off heading 3 text'},
      'ToggleH4': {id: 'ToggleH4', value: '見出し 4 の切り替え', comment: 'turn on and off heading 4 text'},
      'ToggleItalic': {id: 'ToggleItalic', value: '斜体の切り替え', comment: 'turn on and off Italic in text editor (like word)'},
      'ToggleUnderline': {id: 'ToggleUnderline', value: '下線の切り替え', comment: 'turn on and off Underline in text editor (like word)'},
      'Toolbar': {id: 'Toolbar', value: 'ツールバー', comment: 'describing the toolbar component'},
      'TopAlign': {id: 'TopAlign', value: '上揃え', comment: 'Top Align tooltip'},
      'Total': {id: 'Total', value: '合計', comment: 'Mathematic total of a calculation'},
      'TreeCollapse': {id: 'TreeCollapse', value: 'ツリーの折りたたみ', comment: 'Tree Collapse tooltip'},
      'TreeExpand': {id: 'TreeExpand', value: 'ツリーの展開', comment: 'Tree Expand tooltip'},
      'Turquoise': {id: 'Turquoise', value: '水色', comment: 'Color in our color pallette'},
      'Up': {id: 'Up', value: '上へ', comment: 'Up tooltip'},
      'Upload': {id: 'Upload', value: 'アップロード', comment: 'Upload tooltip'},
      'UnavailableDate': {id: 'UnavailableDate', value: '使用不可日付', comment: 'Unavailable Date Text'},
      'Underline': {id: 'Underline', value: '下線', comment: 'Make text Underlined'},
      'Undo': {id: 'Undo', value: '元に戻す', comment: 'Undo tooltip'},
      'Unlocked': {id: 'Unlocked', value: 'ロック解除', comment: 'Unlocked tooltip'},
      'UnorderedList': {id: 'UnorderedList', value: '箇条書きの挿入/削除', comment: 'Insert an Unordered list in the editor'},
      'Unsupported': {id: 'Unsupported', value: 'お使いのブラウザーのバージョンではサポートされていない機能を使用するため、このコンテンツは利用できません。', comment: 'Suggesting browser upgrade for missing features.'},
      'Url': {id: 'Url', value: 'URL', comment: 'Url tooltip'},
      'UseArrow': {id: 'UseArrow', value: '. 矢印キーで選択', comment: 'Instructional comments for screen readers'},
      'UseEnter': {id: 'UseEnter', value: '. Enter か下矢印でルックアップ', comment: 'Instructional comments for screen readers'},
      'User': {id: 'User', value: 'ユーザー', comment: 'User tooltip'},
      'UserProfile': {id: 'UserProfile', value: 'ユーザープロファイル', comment: 'User Profile tooltip'},
      'VerticalMiddleAlign': {id: 'VerticalMiddleAlign', value: '上下中央揃え', comment: 'Vertical Align tooltip'},
      'ViewSource': {id: 'ViewSource', value: 'ソースの表示', comment: 'Toggle the source view in the editor'},
      'ViewVisual': {id: 'ViewVisual', value: 'ビジュアルの表示', comment: 'Toggle the visual view in the editor'},
      'Yes': {id: 'Yes', value: 'はい', comment: 'On a dialog button'}
    }
  });
}));
