using Domain.Interfaces.Repositories;
using Infra.Data.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Infra.Data.Repositories
{
    public class RepositoryBase<TEntity> : IDisposable, IRepositoryBase<TEntity> where TEntity : class
    {
        protected SOVARRBContext _context;
        protected DbSet<TEntity> _dbSet;

        public RepositoryBase(SOVARRBContext context)
        {
            this._context = context;
            this._dbSet = context.Set<TEntity>();
        }

        public virtual void Add(TEntity obj)
        {
            _dbSet.Add(obj);
        }

        public virtual TEntity GetById(int id)
        {
            var result = _dbSet.Find(id);

            if (result != null)
                _context.Entry(result).Reload();

            return result;
        }

        public virtual IEnumerable<TEntity> GetAll()
        {
            return _dbSet.ToList();
        }

        public virtual void Update(TEntity obj)
        {
            _context.Entry(obj).State = EntityState.Modified;
        }

        public virtual void Remove(TEntity obj)
        {
            if (_context.Entry(obj).State == EntityState.Detached)
            {
                _dbSet.Attach(obj);
            }
            _dbSet.Remove(obj);
        }

        public virtual void RemoveById(int id)
        {
            var obj = _dbSet.Find(id);
            if (obj == null) return;

            if (_context.Entry(obj).State == EntityState.Detached)
            {
                _dbSet.Attach(obj);
            }
            _dbSet.Remove(obj);
        }

        public void Dispose()
        {
            _context.Dispose();
            GC.SuppressFinalize(this);
        }
    }
}
