/**
 * 
 * @author Аня
 * @name gEditUser
 */
var self=this;
function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	// TODO Добавьте свой код:
        self.model.save();
}//GEN-LAST:event_buttonActionPerformed

function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
	// TODO Добавьте свой код:
        self.qConcreteUser.requery();
}//GEN-LAST:event_formWindowOpened

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
	// TODO Добавьте свой код:
        self.close("from edit user");
}//GEN-LAST:event_button1ActionPerformed
