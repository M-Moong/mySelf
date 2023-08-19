import SectionTitle from "@/components/SectionTitle";

function ContainerSecond({className, headline}) {
	return (
		<>
			<section className={className}>
				<SectionTitle headline={headline} />
				<h3>CSS 모듈 요약</h3>
				<ol>
					<li>1. CSS 클래스 코드를 모듈 객체로 받아와 고유한 이름을 사용할 수 있습니다.</li>
					<li>2. 다른 사람이 작성한 클래스 이름과 절대로 충돌할 일이 없다.</li>
					<li>3. 컴포넌트 스타일을 보호할 수 있다.</li>
					<li>4. 사용자 정의 클래스 모듈 이름을 설정할 수 있다. </li>
				</ol>
				<h3></h3>
				<ol>
					<li>1. 리액트 컴포넌트에 이벤트 연결하기 (onclick ❌, onClick ✅)</li>
					<li>2. 모든 props를 예측해서 컴포넌트에 적용하기란 쉽지 않다. (그래서 restProps를 활용)</li>
					<li>3. 이벤트 핸들러(리스너) 로직 구성 (DOM 스크립팅 → 사이드 이펙트, 불순 함수 허용)</li>
					<li>4. 사이드 이펙트란? React 렌더링 과정과 관련 없는 것들(부수적인 것)을 말합니다.</li>
				</ol>
			</section>
		</>
	)
}

export default ContainerSecond