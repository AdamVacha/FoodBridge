import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ locals }) => {
	// Assuming session contains user info after OAuth login
	const session = await locals.getSession();
	const user = session?.user;

	if (!user || !user?.email) {
		// Handle the case where there is no user in the session
		return {};
	}

	const userRow = await prisma.user.findUnique({
		where: {
			email: user.email
		}
	});

	if (userRow) {
		// Redirect to profile if user exists
		throw redirect(302, '/pages/donor-profile/dashboard');
	} else {
		// Redirect to registration page if user does not exist
		throw redirect(302, '/pages/register');
	}
}) satisfies PageServerLoad;
