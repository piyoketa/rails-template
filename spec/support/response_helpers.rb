module ResponseHelpers
  shared_context 'success' do
    it 'returns 200(ok) response' do
      expect(response.status).to eq(200)
    end
  end
end
