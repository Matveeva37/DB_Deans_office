/**
 * 
 * @author Аня
 * @name gSearch
 */
var self = this;
function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
    // TODO Добавьте свой код:
    //ПКМ на форме, события - окно активировано
    self.surname = "%%";
    self.qTeacherSearch.requery();
}//GEN-LAST:event_formWindowOpened

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
    // TODO Добавьте свой код:
    self.surname = "%" + self.textField.text + "%";
    self.qTeacherSearch.requery();
}//GEN-LAST:event_buttonActionPerformed

function editTeacher(){
    var thr = new gEditUser();
    //создали экземпляр нового окна
    thr.teacherID = qTeacherSearch.TEACHER_ID;
    //в новое окно в параметр модели передаем ID текущего
    thr.showModal(callback);
    //показываем окошко
}

function callback(param){
    Logger.info(param);
    self.surname = "%%";
    self.qTeacherSearch.requery();
}

function modelGridMouseClicked(evt) {//GEN-FIRST:event_modelGridMouseClicked
    // TODO Добавьте свой код:
    if (evt.clickCount > 1) {
        //Придумали сами
        editTeacher();
    }
}//GEN-LAST:event_modelGridMouseClicked
