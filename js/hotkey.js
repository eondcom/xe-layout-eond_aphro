function checkHotkey(){
  if ( (event.srcElement.tagName != 'INPUT') && (event.srcElement.tagName != 'TEXTAREA') ){
    if ( (event.keyCode=='48') || (event.keyCode=='101') ) location.replace('/eond'); /* e, 0 */
	if ( (event.keyCode=='49') || (event.keyCode=='119') )location.replace('/web'); /* w, 1 */
	if (event.keyCode=='50' || event.keyCode=='100') location.replace('/webmal'); /* d, 2 */
	if (event.keyCode=='51' || event.keyCode=='99') location.replace('/community'); /* c, 3 */
	if (event.keyCode=='52' || event.keyCode=='108') location.replace('/look'); /* l, 4 */
	if ( (event.keyCode=='53') || (event.keyCode=='114') ) location.replace('/rosso'); /* r, 5 */
	if ( (event.keyCode=='54') || (event.keyCode=='115') ) location.replace('/is'); /* s, 6 */
	if (event.keyCode=='55' || event.keyCode=='110') location.replace('/mynote'); /* n, 7 */
	if (event.keyCode=='56' || event.keyCode=='102') location.replace('/likefirst'); /* f, 8 */
	if (event.keyCode=='57' || event.keyCode=='104') location.replace('/hera'); /* h, 9 */
	if (event.keyCode=='121') location.replace('/yncare'); /* y */
  }
}
document.onkeypress=checkHotkey;