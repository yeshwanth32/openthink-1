from sqlalchemy.sql import func
from db_models import *


def child_rel_query(post_id, page=0, sort_by='top'):
    if sort_by == 'top':
        counts = db.session.query(Vote.rel_id, func.sum(Vote.value)\
                           .label('votecount'))\
                           .group_by(Vote.rel_id).subquery()

        rels_count = db.session.query(Relation, counts.c.votecount)\
                               .filter(Relation.parent_id==post_id)\
                               .outerjoin(counts, Relation.id==counts.c.rel_id)\
                               .order_by(func.coalesce(counts.c.votecount, 0).desc())\
                               .slice(page*8, (page+1) * 8)
        rels = [rel_count[0] for rel_count in rels_count]
    else:
        rels = db.session.query(Relation)\
                         .order_by(Relation.time_linked.desc())\
                         .filter(Relation.parent_id==post_id)\
                         .slice(page*8, (page+1) * 8).all()
    return rels