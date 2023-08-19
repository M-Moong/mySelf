import SectionTitle from "@/components/SectionTitle";

function ContainerFifth({className, headline}) {
	return (
		<>
			<section className={className}>
				<SectionTitle headline={headline} />
				<ol>
					<li>1. 사이드 이펙트를 관리하는 이벤트 핸들러 및 useEffect 훅의 콜백 함수를 실습하고 요약 정리합니다.</li>
					<ul>
						<li>이펙트 콜백 함수 (effect callback function)</li>
						<li>이펙트 콜백 함수 실행 조건 설정 (dependencies)</li>
						<li>이펙트 클린업 함수 (cleanup)</li>
					</ul>
					<li>2. 서버 데이터 요청/응답</li>
					<ul>
						<li>데이터 가져오기(fetch Data)</li>
						<li>Fetch API 활용</li>
						<li>useEffect 훅을 사용해 데이터 가져오기 상태 설정</li>
						<li>대기(pending) / 로딩(loading) / 성공(success) / 실패(error)</li>
					</ul>
					<li>3. PocketBase 백엔드 데이터베이스 솔루션</li>
					<ul>
						<li>다운로드 및 서버 구동</li>
						<li>콜렉션, 레코드, 필드 개념 이해</li>
						<li>콜렉션 생성, 필드 추가</li>
						<li>API 규칙 설정 (접근 권한)</li>
					</ul>
				</ol>
			</section>
		</>
	)
}

export default ContainerFifth