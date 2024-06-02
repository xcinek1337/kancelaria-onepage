"use client";
import { Wrapper } from "@/ui/atoms/Wrapper";
import { formFields } from "@/data/data";
export const Contact = () => {
	const picture = "form1.jpg";

	

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	};

	return (
		<section className="text-center">
			<div
				className="h-[700px] w-full bg-cover bg-fixed bg-top bg-no-repeat md:h-[600px]"
				style={{ backgroundImage: `url(${picture})` }}
			>
				<div className="h-full w-full bg-amber-300/15 px-3 pt-10 backdrop-brightness-50">
					<Wrapper>
						<h2 className="font-playfair text-4xl text-white  md:text-5xl lg:mt-8 lg:text-6xl">
							Umów się na bezpłatną konsultację
						</h2>
						<p className="mt-6 text-sm text-white">
							Proszę wpisać swoje dane kontaktowe, a my skontaktujemy się z Państwem w ciągu 1-2 dni
							roboczych, aby omówić Państwa sprawę.
						</p>

						<form onSubmit={handleSubmit} className="mx-auto mt-12 w-full max-w-[800px] px-8 ">
							<div className="mb-4 flex flex-col justify-center gap-3 md:flex-row">
								{formFields.map((field, i) => {
									return (
										<div key={i}>
											<input
												placeholder={field.placeholder}
												className='input-form'
												type={field.type}
											/>
										</div>
									);
								})}
							</div>
							<div className="mb-4">
								<textarea
									placeholder="Wiadomość..."
									className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
									rows={6}
								></textarea>
							</div>
							<button
								type="submit"
								className="w-full  rounded border-2  border-amber-500 p-2 font-semibold hover:text-gray-200 text-amber-500 transition duration-300 hover:bg-amber-500/50"
							>
								Wyślij
							</button>
						</form>
					</Wrapper>
				</div>
			</div>
		</section>
	);
};
