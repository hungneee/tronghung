import React, { memo } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function Register() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isValid  },
	} = useForm({
		resolver: yupResolver(
			Yup.object({
				firstName: Yup.string()
					.required("Vui lòng nhập Họ của bạn!")
					.trim()
					.max(20, "Vui lòng nhập dưới 20 kí tự !"),
				lastName: Yup.string()
					.required("Vui lòng nhập Tên của bạn!")
					.trim()
					.max(20, "Vui lòng nhập dưới 20 kí tự !"),
				Email: Yup.string().email("Email của bạn không hợp lệ !").required("Vui lòng nhập email của bạn!"),
				Password: Yup.string()
					.trim()
					.required(" Vui lòng nhập password của bạn !")
					.min(6, "Vui lòng nhập trên 5 kí tự")
					.max(15, "Vui lòng nhập dưới 15 kí tự"),
				Number: Yup.number()
					.typeError("Số điện thoại của bạn không hợp lệ !")
					.required("error")
					.max(10, "Yêu cầu nhập 10 kí tự !")
					.integer("Số điện thoại của bạn không hợp lệ")
					
			})
		),
	});

	const onSubmit = (values) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve();
			}, 1000);
		});
	};
	return (
		<section className="login py-[50px] bg-[#f8f8f8 ]">
			<div className="container flex justify-center">
				<form action="" className="w-[404px]" onSubmit={handleSubmit(onSubmit)}>
					<h3 className="text-[24px] text-center mb-[13px]">Tạo Tài Khoản</h3>
					<div className="form-control mb-[14px] ">
						<input
							type="text"
							placeholder="Họ"
							name="firstName"
							className="px-[10px] py-[8px] w-[100%] outline-none bg-[#ffff]"
							{...register("firstName")}
						/>
						{errors.firstName && errors.firstName.message && (
							<div className="text-black pl-[5px] text-[14px] pt-[3px] w-full py-[4px] border-[1px] font-light bg-[#fff6f6] border-red-500 border-t-red-500 rounded-[3px] mt-[10px] ">
								{errors.firstName?.message}
							</div>
						)}
					</div>
					<div className="form-control mb-[14px] ">
						<input
							type="text"
							placeholder="Tên"
							name="lastName"
							className="px-[10px] py-[8px] w-[100%] outline-none bg-[#ffff]"
							{...register("lastName")}
						/>

						{errors.lastName && errors.lastName.message && (
							<div className="text-black pl-[5px] text-[14px] pt-[3px] w-full py-[4px] border-[1px] font-light bg-[#fff6f6] border-red-500 border-t-red-500 rounded-[3px] mt-[10px] ">
								{errors.lastName?.message}
							</div>
						)}
					</div>

					<div className="form-control mb-[14px] ">
						<input
							type="text"
							placeholder="Email"
							name="Email"
							className="px-[10px] py-[8px] w-[100%] outline-none bg-[#ffff]"
							{...register("Email")}
						/>
						{errors.Email && errors.Email.message && (
							<div className="text-black pl-[5px] text-[14px] pt-[3px] w-full py-[4px] border-[1px] font-light bg-[#fff6f6] border-red-500 border-t-red-500 rounded-[3px] mt-[10px] ">
								{errors.Email?.message}
							</div>
						)}
					</div>
					<div className="form-control mb-[14px] ">
						<input
							type="text"
							placeholder="số điện thoại"
							name="Number"
							className="px-[10px] py-[8px] w-[100%] outline-none bg-[#ffff]"
							{...register("Number")}
						/>
						{errors.Number && errors.Number.message && (
							<div className="text-black pl-[5px] text-[14px] pt-[3px] w-full py-[4px] border-[1px] font-light bg-[#fff6f6] border-red-500 border-t-red-500 rounded-[3px] mt-[10px] ">
								{errors.Number?.message}
							</div>
						)}
					</div>
					<div className="form-control">
						<input
							type="password"
							name="Password"
							placeholder="Mật khẩu"
							className="px-[10px] outline-none py-[8px] w-[100%] bg-[#ffff] "
							{...register("Password")}
						/>
						{errors.Password && errors.Password.message && (
							<div className="text-black pl-[5px] text-[14px] pt-[3px] w-full py-[4px] bg-[#fff6f6] border-[1px] font-light border-red-500 border-t-red-500 rounded-[3px] mt-[10px] ">
								{errors.Password?.message}
							</div>
						)}
					</div>
					<div className=" mx-auto text-center mt-[10px]">
						<button className="w-[126px]">
							{isSubmitting && isValid ? (
								<div className="w-5 h-5 mx-auto border-2 border-white rounded-full border-t-transparent animate-spin"></div>
							) : ("Đăng ký")}
						</button>
					</div>

					<div className="pt-1 text-center more">
						<span>
							Quên mật khẩu?
							<br />
							hoặc
						</span>
					</div>
				</form>
			</div>
		</section>
	);
}

export default memo(Register);
