import React from 'react';
import Header from '../Component/Header';
import { Button, Grid } from '@material-ui/core';
import ShowInfo from './ShowInfo';

export default function TopPage() {
    const [query, setPageQuery] = React.useState(null);

    // get query
    const getUrlQueries = () => {
		const queryStr = window.location.search.slice(1); // 文頭?を除外
		let queries = {};

		// クエリがない場合は空のオブジェクトを返す
		if (!queryStr) {
			return queries;
		}

		// クエリ文字列を & で分割して処理
		queryStr.split('&').forEach(function(queryStr) {
			// = で分割してkey,valueをオブジェクトに格納
			var queryArr = queryStr.split('=');
			queries[queryArr[0]] = queryArr[1];
		});

		return queries;
    }

    const transitionLink = (url) => {
		window.location.href = url;
	};

    
  return (
    <div>
        {/* ヘッダコンポーネント */}
        <Header />
        {/* ボタンによってルーティング変える */}
        {!Object.keys(getUrlQueries()).length ? (
            <div>
                <Grid container spacing={3}>
                    {/* ここにGoogleMap */}
                    <Grid item xs={12}>
                        <Button variant="contained" style={{ color: "#ffffff", backgroundColor: "#c20005", width: "100%", padding: "30px", marginTop: "100px" }} onClick={()=>transitionLink('/?page=share')}>投稿する</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" style={{ color: "#ffffff", backgroundColor: "#c20005", width: "100%", padding: "30px" }} onClick={()=>transitionLink('/?page=show')}>探す</Button>
                    </Grid>
                </Grid>
            </div>
        ): getUrlQueries().page === 'share' ? (
            <ShowInfo />
        ): getUrlQueries().page === 'show' ? (
            <ShowInfo />
        ): null}
    </div>
  );
}
