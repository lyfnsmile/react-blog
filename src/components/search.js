import React from 'react';

class Search extends React.Component{
	render(){
		return(
			<div className="widget">
                <form action="//www.baidu.com/baidu" method="get" acceptCharset="utf-8" target="_blank" className="search-form">
                    <input type="search" name="word" maxLength="20" placeholder="Search" />
                    <input type="hidden" name="si" value="http://fnpyud.com" />
                    <input name="tn" type="hidden" value="bds" />
                    <input name="cl" type="hidden" value="3" />
                    <input name="ct" type="hidden" value="2097152" />
                    <input name="s" type="hidden" value="on" />
                </form>
            </div>
		)
	}
}

export default Search;