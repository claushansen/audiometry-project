function doClick(e) {
    alert($.label.text);
}
function TestOpen() {  
    var w = Alloy.createController('test_1_info').getView();
    w.open();    
}

$.index.open();