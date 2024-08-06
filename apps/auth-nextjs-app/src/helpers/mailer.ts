import nodemailer from 'nodemailer';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';

export const sendEmail = async ({ email, emailType, userId }: any) => {
	try {
		const hashedToken = await bcryptjs.hash(userId.toString(), 10);

		if (emailType === 'VERIFY') {
			await User.findByIdAndUpdate(userId, {
				verifyToken: hashedToken,
				verifyTokenExpiry: Date.now() + 36_00_000,
			});
		} else if (emailType === 'RESET') {
			await User.findByIdAndUpdate(userId, {
				forgotPasswordToken: hashedToken,
				forgotPasswordTokenExpiry: Date.now() + 36_00_000,
			});
		}

		const transporter = nodemailer.createTransport({
			host: 'sandbox.smtp.mailtrap.io',
			port: 2525,
			auth: {
				user: process.env.MAILTRAP_USER,
				pass: process.env.MAILTRAP_PASS,
			},
		});

		const mailOptions = {
			from: 'yswarkare@gmail.com',
			to: email,
			subject: emailType === 'VERIFY' ? 'Verify email' : 'Reset your password',
			html: `<p>Click <a href="${process.env.domain}/verifyemail?token=${hashedToken}">here</a> to ${
				emailType === 'VERIFY' ? 'verify your email' : 'reset your password'
			}</p>`,
		};

		const mailResponse = await transporter.sendMail(mailOptions);
		return mailResponse;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
