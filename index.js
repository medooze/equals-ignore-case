module.exports = function(locale)
{
	const intl = new Intl.Collator(locale, {sensitivity: "base"});
	return (a,b) => intl.compare(a,b) == 0;
}