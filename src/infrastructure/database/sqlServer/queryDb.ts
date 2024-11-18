const query = {
  create: `INSERT INTO tb_movie (id, name, image, genre, linkUrl, watchedDate, userOpinion, review, isFirstTimeWatching, quantityViews, created_at)
            VALUES (@id, @name, @image, @genre, @linkUrl, @watchedDate, @userOpinion, @review, @isFirstTimeWatching, @quantityViews, @created_at);`,

  insertMovieWatchedDates: `INSERT INTO tb_MovieWatchDates (watchedId, movieId, watchedDates)
                        VALUES(@watchedId, @movieId, @watchedDates);`,

  findAll: `SELECT * FROM tb_movie;`,

  findByIdWatchedDates: `SELECT * FROM tb_MovieWatchDates WHERE movieId = @movieId ORDER BY watchedDates ASC;`,

  findOne: "SELECT * FROM tb_movie WHERE name LIKE '%' + @name + '%';",

  findById: "SELECT * FROM tb_movie WHERE id = @id;",

  update: `UPDATE tb_movie
  SET name=@name, image=@image, genre=@genre, linkUrl=@linkUrl, watchedDate=@watchedDate, userOpinion=@userOpinion, review=@review, isFirstTimeWatching=@isFirstTimeWatching, quantityViews=@quantityViews, updated_at=@updated_at
  WHERE id = @id;
  `,

  deleteMovie: `DELETE tb_movie WHERE id=@id;`,

  deleteWatchedDates: `DELETE tb_MovieWatchDates WHERE movieId=@movieId;`,

  count: `SELECT COUNT(*) FROM tb_movie;`,

  countWatchedDates: `SELECT COUNT(*) FROM tb_MovieWatchDates WHERE movieId = @movieId;`,
};

export default query;
