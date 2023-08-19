import SectionTitle from "@/components/SectionTitle";

function ContainerFirst({className, headline}) {

	return (
		<>
			<section className={className}>
				<SectionTitle headline={headline} />
				<h3>리스트 렌더링 요약</h3>
				<ol>
					<li>1. 배열 순환 리스트 렌더링</li>
					<li>2. 배열 역순으로 정렬한 다음 리스트 렌더링 (원본 배열을 변경하면 안됨, 배열 복사 또는 새로운 배열 반환 메서드)</li>
					<li>3. 객체 순환 리스트 렌더링 (객체 → 배열 객체로 변경 → map 메서드로 순환)</li>
					<li>4. &lt;dl&gt; 내부에 &lt;div&gt;를 사용하는 것이 적절한 지 고민한 후 적절하지 않으면 &lt;&gt;&lt;/&gt;를 사용</li>
					<li>5. &lt;&gt;&lt;/&gt;의 경우 리스트 렌더링 시 key prop을 설정할 수 없음. 그러므로 &lt;React.Fragment key={`{}`} &gt; 활용해야 함</li>
				</ol>
			</section>
		</>
	)
}

export default ContainerFirst