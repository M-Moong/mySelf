import SectionTitle from "@/components/SectionTitle";

function ContainerThird({ className, headline }) {
	return (
		<>
			<section className={className}>
				<SectionTitle headline={headline} />
			
			<h3>컴포넌트 상태 관리 요약</h3>
			<ol>
				<li>1. JavaScript 로컬 변수를 사용하면 React 컴포넌트 상태 관리가 가능하지 않습니다.</li>
				<li>2. React가 제공하는 useState 훅을 사용해야 상태 관리가 가능합니다.</li>
				<li>3. useState 훅은 배열을 반환하는데 첫번째 항목은 상태, 두번째 항목은 상태 업데이트 함수입니다.</li>
				<li>4. useState 훅이 반환한 상태 업데이트 함수가 실행되면 React에게 렌더 트리거(render trigger) 합니다.</li>
				<li>5. 렌더 트리거는 컴포넌트를 다시 실행시킵니다. (리-렌더링 발생)</li>
				<li>6. 일반 로컬 변수는 함수 재실행 과정에서 초기화되지만, useState에서 추출된 상태는 이전의 값을 기억합니다.</li>
				<li>7. 컴포넌트 내부에서 상태를 관리하는 것이 가능합니다. useState 훅을 사용해 여러 상태를 관리할 수 있습니다.</li>
				<li>8. 상태 업데이트 함수는 사용법이 2가지인데 하나는 다음 상태(nextState) 값을 직접 전달하는 것이고, 다른 하나는 set 함수를 사용하는 것입니다.</li>
				<li>9. set 함수를 사용한 업데이트는 이전 상태 값을 토대로 계산된 다음 상태 값을 반환해야 합니다.</li>
			</ol>
			<h3>사이드 이펙트 요약</h3>
			<ol>
				<li>1. 렌더링 단계(렌더 트리거 → 컴포넌트 렌더링 → DOM 커밋) 중 DOM 커밋 시점에 실행(콜백)되는 로직에서는 사이드 이펙트 처리 가능</li>
				<li>2. 사이드 이펙트는 DOM 커밋 이후에 실행되어야 한다. (접근성, 요소의 스타일 변경, 모든 명령형 프로그래밍 코드)</li>
				<li>3. 사이드 이펙트 로직을 허용하는 영역은 2가지 (이벤트 핸들러, useEffect 훅의 이펙트 콜백 함수)</li>
			</ol>
			<h3>컴포넌트 순수성 유지 요약</h3>
			<ol>
				<li>1. 컴포넌트 렌더링 단계에 영향을 미치지 않도록 순수함을 유지해야 합니다.</li>
				<li>2. 사이드 이펙트(부수 효과)를 유발하는 코드를 함수 몸체(body) 안에 작성해서는 안됩니다.</li>
				<li>3. 동일 입력, 동일 출력을 지켜야 합니다. (props(읽기 전용) → JSX 반환)</li>
				<li>4. StrictMode 컴포넌트의 역할은 계산이 순수한지 확인하는 것입니다. (2번씩 렌더링)</li>
				<li>5. StrictMode는 배포(production) 모드에서 제거되므로 성능에 영향을 주지 않습니다.</li>
				<li>6. 로컬 뮤테이션은 컴포넌트 함수 내부에서 이뤄져도 문제가 되지 않습니다.</li>
			</ol>
			</section>
		</>
	);
}

export default ContainerThird;