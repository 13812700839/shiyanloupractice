package lambda;

import java.util.List;
import java.util.ArrayList;

public class LambdaTest1{
    public static void main(String[] args){
        List<String> names=new ArrayList<>();

        names.add("Peter");
        names.add("Linda");
        names.add("Smith");
        names.add("Zack");
        names.add("Bob");

        //通过System.out::println引用了输出的方法
        names.forEach(System.out::println);
    }
}