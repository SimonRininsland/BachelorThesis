//------------CATCH TERMINAL ENTER-----
$("#terminal").bind('keypress', function(e)
{
	if(e.keyCode == 13)
	{
		//console.log($(this).val()+" Enter_pressed");
		terminalActions($(this).val());
	}
});
//------------TERMINAL ACTIONS ----------
function terminalActions(commit){
	simple_commit(commit);
}