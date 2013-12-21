/**
 * 
 * @author Аня
 * @name gSearchstudent
 */
var self = this
function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
self.Surname = "%" + self.textField.text + "%";
    self.gStudSearch.requery();	// TODO Добавьте свой код:
}//GEN-LAST:event_buttonActionPerformed

function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
self.Surname = "%%";

    self.gStudSearch.requery();	// TODO Добавьте свой код:
}//GEN-LAST:event_formWindowOpened

function textFieldActionPerformed(evt) {//GEN-FIRST:event_textFieldActionPerformed
	// TODO Добавьте свой код:
}//GEN-LAST:event_textFieldActionPerformed

function editStud(){
    var thr = new gEditStud();
    //создали экземпляр нового окна
    Logger.info(gStudSearch.STUDENTS_ID);
    thr.Students_ID = gStudSearch.STUDENTS_ID;
    
    //в новое окно в параметр модели передаем ID текущего
    thr.showModal(callback);
    //показываем окошко
}
function modelGridMouseClicked(evt) {//GEN-FIRST:event_modelGridMouseClicked
	// TODO Добавьте свой код
    if (evt.clickCount > 1) {
        //Придумали сами
        editStud();
    }   
 
}//GEN-LAST:event_modelGridMouseClicked
   function callback(param){
    Logger.info(param);
    self.surname = "%%";
    self.gStudSearch.requery();
}