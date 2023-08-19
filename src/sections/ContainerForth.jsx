import SectionTitle from "@/components/SectionTitle";

function ContainerForth({className, headline}) {
	return (
		<>
			<section className={className}>
				<SectionTitle headline={headline} />
				<ol>
					<li>1.Tailwind CSS 설치 및 구성(with 플러그인) 실습을 진행하였습니다.</li>
					<li>2.데이터 유형(number, string, boolean, array, object) 별 React 상태 관리 방법을 실습하였습니다.</li>
					<li>3.용도에 따라 폼 입력 필드의 value, defaultValue, readOnly, onChange 설정 방법을 다뤘습니다.</li>
					<li>4.상태(state)와 파생된 상태(derived state)를 사용해 사용자 인터페이스를 구성하고 사용자와 상호작용합니다.</li>
					<li>5.쌍(pair)으로 관리될 필요가 있는 상태는 그룹(group)으로 관리하는 것이 좋습니다.</li>
					<li>6.복잡한 데이터인 객체 또는 배열을 상태로서 관리할 때는 합성 방식을 사용해야 합니다.</li>
					<li>7.배열 데이터를 관리할 때 배열(집합)과 선택된 상태(단수) 2가지 상태로 UI를 구현할 수 있습니다.</li>
				</ol>
			</section>
		</>
	)
}

export default ContainerForth