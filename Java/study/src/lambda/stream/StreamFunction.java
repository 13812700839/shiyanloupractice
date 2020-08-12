package lambda.stream;

import java.util.Random;
import java.util.List;
import java.util.Arrays;
import java.util.stream.Collectors;
import java.util.IntSummaryStatistics;

public class StreamFunction{
    public static void main(String[] args){
        //输出10个随机数
        Random random=new Random();
        random.ints()
            //限制个数
            .limit(10)
            //有序的
            .sorted()
            .forEach(System.out::println);
        
        //输出某个数的平方
        List<Integer> numbers=Arrays.asList(2, 3, 3, 2, 5, 2, 7);
        //get list of unique squares
        List<Integer> squaresList=
            //连续流
            numbers.stream()
            //map进行运算
            .map(i->i*i)
            //去重
            .distinct()
            .collect(Collectors.toList());
        System.out.println(squaresList);

        //过滤空字符串数量
        List<String> strings=Arrays.asList("efg","","abc","bc","ghij","","lmn");
        //get count of empty string
        /*
        long count=strings.stream()
            //过滤
            .filter(string -> string.isEmpty()).count();
        */
        long count=strings.parallelStream()
            //过滤
            .filter(string -> string.isEmpty()).count();
        System.out.println("空字符串数："+count);
        List<String> filtered=strings.stream()
            //去除空字符串
            .filter(string -> !string.isEmpty())
            .collect(Collectors.toList());
        System.out.println("Filtered List: "+filtered);
        
        String mergedString=strings.stream()
            //去除空字符串
            .filter(string -> !string.isEmpty())
            //每个字符串用", "分隔
            .collect(Collectors.joining(", "));
        System.out.println("Merged String: "+mergedString);

        //统计工具
        IntSummaryStatistics stats=numbers.stream()
            .mapToInt((x)->x)
            .summaryStatistics();
        
        System.out.println("Highest number in List: "+stats.getMax());
        System.out.println("Lowest number in List: "+stats.getMin());
        System.out.println("Sum of all numbers: "+stats.getSum());
        System.out.println("Average of all numbers: "+stats.getAverage());
    }
}