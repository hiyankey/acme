export async function GET() {
	try {
		return Response.json(await []);
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
