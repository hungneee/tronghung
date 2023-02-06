
const MyInput = ({ register, errors, labe, name, ...props }) => {
	return (
			<div className="form-control mb-[14px] ">
				<input
					type="text"
					name={labe}
					{...props}
					className="px-[10px] outline-none py-[8px] w-[100%] bg-[#ffff] "
					{...register(labe)}
				/>
				{errors && (
					<div className="text-black pl-[5px] text-[14px] pt-[3px] w-full py-[4px] bg-[#fff6f6] border-[1px] font-light border-red-500 border-t-red-500 rounded-[3px] mt-[10px] ">
						{errors}
					</div>
				)}
			</div>
	);
};
export default MyInput;
