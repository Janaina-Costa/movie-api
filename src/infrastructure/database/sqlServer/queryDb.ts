const query = {
  create:
    "INSERT INTO tb_movie (id, name, image, genre, linkUrl, watchedDate, userOpinion, review, isFirstTimeWatching, quantityViews) VALUES (@id, @name, @image, @genre, @linkUrl, @watchedDate, @userOpinion, @review, @isFirstTimeWatching, @quantityViews);",
};

export default query;
