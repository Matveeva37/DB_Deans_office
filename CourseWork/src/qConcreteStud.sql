/**
 *
 * @author Аня
 * @name qConcreteStud
 * @manual 
 */ 
Select * 
From STUDENTS t1
 Inner Join GROUPS t on t1.GROUPS_ID = t.GROUPS_ID
 Where :Students_ID = t1.STUDENTS_ID