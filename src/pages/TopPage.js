import React from 'react';
import Header from '../Component/Header';
import { Button, Grid } from '@material-ui/core';
import ShowInfo from './ShowInfo';
import ShowList from './ShowList';
import ShareInfo from './ShareInfo'
import SvgRogoTop from '../svgr/RogoTop';
import Typography from '@material-ui/core/Typography';

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
        console.log(queries)
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
                <SvgRogoTop style={{marginTop: "80px"}} />
                <div style={{marginTop: "50px"}}>
                <Typography>長崎県民からの「ここどがん？」な提案と</Typography>
                <Typography>県外在住者の「ここどがん？」な質問とを</Typography>
                <Typography style={{color: "#c20005"}}>つなぎ合わせる</Typography>
                <Typography>Webサービスです</Typography>
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Button variant="contained" style={{ color: "#ffffff", backgroundColor: "#c20005", width: "100%", padding: "30px", marginTop: "100px" }} onClick={()=>transitionLink('/?page=share')}>投稿する</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" style={{ color: "#ffffff", backgroundColor: "#c20005", width: "100%", padding: "30px" }} onClick={()=>transitionLink('/?page=show')}>探す</Button>
                    </Grid>
                </Grid>
                <Typography style={{marginTop: "200px"}}>
                    @Aジサイ All right Reserved.
                </Typography>
            </div>
        ): getUrlQueries().page === 'share' ? (
            <ShareInfo />
        ): getUrlQueries().page === 'show' && getUrlQueries().id !== undefined ? (
            <ShowInfo />
        ): getUrlQueries().page === 'show' && getUrlQueries().id === undefined ? (
            <ShowList />
        ) : null}
    </div>
  );
}
