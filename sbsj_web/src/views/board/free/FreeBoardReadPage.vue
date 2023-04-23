          <div style="display:flex; justify-content:space-between; width:70%; margin-top:5%;">
            <div>
              <router-link :to="{ name: 'FreeBoardModifyPage', params: { freeBoardId } }">
                <button class="btn btn-outline-dark me-2">게시물 수정</button>
                <button @click="onDelete" class="btn btn-outline-dark me-2">삭제</button>
              </router-link>
            </div>
