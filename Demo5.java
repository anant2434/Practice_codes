package interface1;

interface M
{
void show();

}
public class Demo5 
{

	public static void main(String[] args)
	{
		M obj=()->System.out.println("in show");
		obj.show();
	}

}
