export const GalaxyBackGround = () => {
	return (
		<div className="absolute inset-0 overflow-hidden">
			{/* 小さな星 */}
			{[...Array(100)].map((_, i) => (
				<div
					key={`star-${
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						i
					}`}
					className="absolute rounded-full bg-white"
					style={{
						width: `${Math.random() * 2 + 1}px`,
						height: `${Math.random() * 2 + 1}px`,
						top: `${Math.random() * 100}%`,
						left: `${Math.random() * 100}%`,
						opacity: 0.4 + Math.random() * 0.6,
						animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite`,
						animationDelay: `${Math.random() * 5}s`,
					}}
				/>
			))}

			{/* 中型の星 */}
			{[...Array(50)].map((_, i) => (
				<div
					key={`mid-star-${
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						i
					}`}
					className="absolute rounded-full bg-white"
					style={{
						width: `${Math.random() * 3 + 2}px`,
						height: `${Math.random() * 3 + 2}px`,
						top: `${Math.random() * 100}%`,
						left: `${Math.random() * 100}%`,
						opacity: 0.5 + Math.random() * 0.5,
						animation: `twinkle ${Math.random() * 6 + 4}s ease-in-out infinite`,
						animationDelay: `${Math.random() * 5}s`,
					}}
				/>
			))}

			{/* 星雲/銀河効果 */}
			{[...Array(8)].map((_, i) => (
				<div
					key={`nebula-${
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						i
					}`}
					className="absolute rounded-full blur-3xl"
					style={{
						background:
							i % 3 === 0
								? "radial-gradient(circle, rgba(79, 70, 229, 0.2) 0%, rgba(79, 70, 229, 0) 70%)"
								: i % 3 === 1
									? "radial-gradient(circle, rgba(219, 39, 119, 0.15) 0%, rgba(219, 39, 119, 0) 70%)"
									: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0) 70%)",
						width: `${Math.random() * 600 + 300}px`,
						height: `${Math.random() * 600 + 300}px`,
						top: `${Math.random() * 120 - 10}%`,
						left: `${Math.random() * 120 - 10}%`,
						transform: `rotate(${Math.random() * 360}deg) translateY(${scrollY * (Math.random() * 0.05)}px)`,
						opacity: 0.4,
					}}
				/>
			))}

			{/* 流れ星効果 */}
			{[...Array(3)].map((_, i) => (
				<div
					key={`shooting-star-${
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						i
					}`}
					className="absolute bg-white rounded-full"
					style={{
						width: "2px",
						height: "80px",
						top: `${Math.random() * 50}%`,
						left: `${Math.random() * 100}%`,
						opacity: 0,
						transform: "rotate(45deg)",
						boxShadow: "0 0 20px 2px rgba(255, 255, 255, 0.5)",
						animation: `shootingStar ${Math.random() * 10 + 10}s linear infinite`,
						animationDelay: `${Math.random() * 15}s`,
					}}
				/>
			))}
		</div>
	);
};
