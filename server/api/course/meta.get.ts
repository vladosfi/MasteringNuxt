import { Course, Chapter } from '~/types/course';
import course from '~/server/courseData';

course as Course;

type OutlineBase = {
    title: string;
    slug: string;
    number: number;
}

type OutlineLesson = {
    path: string;
}

type OutlineChapter = OutlineBase & {
    lessons: OutlineLesson[];
}

type CourseMeta = {
    title: string;
    chapters: OutlineChapter[];
}

export default defineEventHandler((event): CourseMeta => {
    const outline: OutlineChapter[] = course.chapters.reduce(
        (prev: OutlineChapter[], next: Chapter) => {
            const lessons: OutlineLesson[] = next.lessons.map(
                (lesson) => ({
                    title: lesson.title,
                    slug: lesson.slug,
                    number: lesson.number,
                    path: `/course/chapter/${next.slug}/lesson/${lesson.slug}`,
                })
            );

            const chapter: OutlineChapter = {
                title: next.title,
                slug: next.slug,
                number: next.number,
                lessons,
            };

            return [...prev, chapter];
        },
        []
    );

    return {
        title: course.title,
        chapters: outline,
    };
});